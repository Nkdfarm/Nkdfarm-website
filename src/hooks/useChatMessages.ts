import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const CHAT_SESSION_KEY = "notion_ai_chat_messages";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function useChatMessages() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const savedMessages = sessionStorage.getItem(CHAT_SESSION_KEY);
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [isWaiting, setIsWaiting] = useState(false);

  const updateMessages = (updater: (current: ChatMessage[]) => ChatMessage[]) => {
    setMessages((current) => {
      const nextMessages = updater(current);
      sessionStorage.setItem(CHAT_SESSION_KEY, JSON.stringify(nextMessages));
      return nextMessages;
    });
  };

  const sendMessage = async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isWaiting) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    updateMessages((current) => [...current, userMessage]);
    setIsWaiting(true);

    try {
      const { data, error } = await supabase.functions.invoke("ask-notion", {
        body: { question: trimmed },
      });

      if (error) throw error;

      updateMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data?.answer || "I don't have that information.",
        },
      ]);
    } catch (error) {
      console.error("Failed to ask Notion assistant", error);
      updateMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsWaiting(false);
    }
  };

  const eraseConversation = () => {
    sessionStorage.removeItem(CHAT_SESSION_KEY);
    setMessages([]);
    setIsWaiting(false);
  };

  return { messages, isWaiting, sendMessage, eraseConversation };
}