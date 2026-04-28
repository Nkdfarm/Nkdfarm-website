import { useState } from "react";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function useChatMessages() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isWaiting, setIsWaiting] = useState(false);

  const sendMessage = (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isWaiting) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setIsWaiting(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "I'm thinking...",
        },
      ]);
      setIsWaiting(false);
    }, 1500);
  };

  return { messages, isWaiting, sendMessage };
}