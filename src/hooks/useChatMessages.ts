import { useState } from "react";

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

  const sendMessage = (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isWaiting) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    updateMessages((current) => [...current, userMessage]);
    setIsWaiting(true);

    window.setTimeout(() => {
      updateMessages((current) => [
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

  const eraseConversation = () => {
    sessionStorage.removeItem(CHAT_SESSION_KEY);
    setMessages([]);
    setIsWaiting(false);
  };

  return { messages, isWaiting, sendMessage, eraseConversation };
}