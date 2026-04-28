import { corsHeaders } from "npm:@supabase/supabase-js/cors";

const NOTION_API_VERSION = "2022-06-28";
const NOTION_API_BASE = "https://api.notion.com/v1";
const ANTHROPIC_API_BASE = "https://api.anthropic.com/v1/messages";
const MAX_NOTION_DEPTH = 10;
const MAX_CONTEXT_CHARS = 120_000;

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const extractRichText = (richText: Array<{ plain_text?: string }> | undefined) =>
  richText?.map((text) => text.plain_text ?? "").join("") ?? "";

const extractBlockText = (block: Record<string, any>) => {
  const type = block.type as string | undefined;
  if (!type) return "";

  if (type === "child_page") return block.child_page?.title ?? "";
  if (type === "child_database") return block.child_database?.title ?? "";

  const value = block[type];
  if (!value) return "";

  const parts = [
    extractRichText(value.rich_text),
    extractRichText(value.caption),
    extractRichText(value.title),
  ].filter(Boolean);

  return parts.join("\n");
};

const fetchNotionChildren = async (blockId: string, token: string, depth = 1): Promise<string[]> => {
  if (depth > MAX_NOTION_DEPTH) return [];

  const texts: string[] = [];
  let startCursor: string | undefined;

  do {
    const url = new URL(`${NOTION_API_BASE}/blocks/${blockId}/children`);
    url.searchParams.set("page_size", "100");
    if (startCursor) url.searchParams.set("start_cursor", startCursor);

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_API_VERSION,
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Notion API error", response.status, errorBody);
      throw new Error("NOTION_FETCH_FAILED");
    }

    const data = await response.json();
    const blocks = Array.isArray(data.results) ? data.results : [];

    for (const block of blocks) {
      const text = extractBlockText(block);
      if (text) texts.push(text);

      if (block.type === "child_page" && depth < MAX_NOTION_DEPTH) {
        texts.push(...(await fetchNotionChildren(block.id, token, depth + 1)));
      }
    }

    startCursor = data.has_more ? data.next_cursor : undefined;
  } while (startCursor);

  return texts;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  let question = "";
  try {
    const body = await req.json();
    question = typeof body.question === "string" ? body.question.trim() : "";
  } catch (_error) {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  if (!question) {
    return jsonResponse({ error: "Question is required" }, 400);
  }

  const notionToken = Deno.env.get("NOTION_TOKEN");
  const notionPageId = Deno.env.get("NOTION_PAGE_ID");
  const anthropicApiKey = Deno.env.get("ANTHROPIC_API_KEY");

  if (!notionToken || !notionPageId || !anthropicApiKey) {
    console.error("Missing required environment variables");
    return jsonResponse({ error: "Server is not configured" }, 500);
  }

  let context = "";
  try {
    const texts = await fetchNotionChildren(notionPageId, notionToken);
    context = texts.join("\n\n").slice(0, MAX_CONTEXT_CHARS);
  } catch (error) {
    console.error("Failed to fetch Notion content", error);
    return jsonResponse({ error: "Failed to fetch Notion content" }, 500);
  }

  try {
    const response = await fetch(ANTHROPIC_API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": anthropicApiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        system:
          "You are a helpful assistant. Answer questions based only on the Notion content provided. If the answer is not in the content, say you don't have that information.",
        messages: [
          {
            role: "user",
            content: `Notion content:\n${context}\n\nQuestion: ${question}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Anthropic API error", response.status, errorBody);
      return jsonResponse({ error: "Failed to generate answer" }, 500);
    }

    const data = await response.json();
    const answer =
      data.content
        ?.filter((item: { type?: string; text?: string }) => item.type === "text" && item.text)
        .map((item: { text: string }) => item.text)
        .join("\n")
        .trim() || "I don't have that information.";

    return jsonResponse({ answer });
  } catch (error) {
    console.error("Failed to generate answer", error);
    return jsonResponse({ error: "Failed to generate answer" }, 500);
  }
});
