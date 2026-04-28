import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";
import { useAuth } from "@/hooks/useAuth";
import { useChatMessages } from "@/hooks/useChatMessages";

const Markdown = ReactMarkdown as unknown as React.ComponentType<{ className?: string; children: string }>;

const LoginScreen = ({ error, onSignIn }: { error: boolean; onSignIn: (username: string, password: string) => boolean }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const didSignIn = onSignIn(username, password);
    if (!didSignIn) setPassword("");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main className="px-4 pb-10 pt-8 sm:pt-14">
        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm rounded-[2rem] border border-border/70 bg-[hsl(var(--surface-elevated))] p-8 shadow-[0_24px_70px_hsl(var(--shadow-soft)/0.14)]">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-[hsl(var(--brand-accent))] text-2xl font-bold text-accent-foreground">
          N
        </div>
        <div className="mb-8 text-center">
          <h1 className="font-sans text-2xl font-semibold tracking-normal">Notion AI Assistant</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to continue</p>
        </div>
        <div className="space-y-3">
          <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/10" />
          <input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" type="password" className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/10" />
          <button type="submit" className="h-12 w-full rounded-xl bg-primary text-sm font-medium text-primary-foreground transition hover:bg-primary/90">Sign in</button>
          {error && <p className="text-center text-sm font-medium text-destructive">Invalid credentials</p>}
        </div>
        </form>
      </main>
    </div>
  );
};

const TypingIndicator = () => (
  <div className="flex w-fit items-center gap-1 rounded-2xl border border-border bg-muted px-4 py-3">
    {[0, 1, 2].map((dot) => <span key={dot} className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: `${dot * 120}ms` }} />)}
  </div>
);

const ChatInterface = ({ onSignOut }: { onSignOut: () => void }) => {
  const [draft, setDraft] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const { messages, isWaiting, sendMessage, eraseConversation } = useChatMessages();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isWaiting]);

  const submitMessage = () => {
    if (!draft.trim() || isWaiting) return;
    sendMessage(draft);
    setDraft("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") submitMessage();
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main className="px-3 pb-8 pt-4 sm:px-6 sm:pt-8">
        <section className="mx-auto flex h-[calc(100vh-8rem)] min-h-[560px] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-border/70 bg-[hsl(var(--surface-elevated))] shadow-[0_24px_70px_hsl(var(--shadow-soft)/0.14)]">
          <div className="flex items-center justify-between border-b border-border/70 px-5 py-4 sm:px-6">
            <div>
              <h1 className="font-sans text-base font-semibold tracking-normal">Notion AI Assistant</h1>
              <p className="text-xs text-muted-foreground">Workspace chat</p>
            </div>
            <button onClick={onSignOut} className="text-sm text-muted-foreground transition hover:text-foreground">Sign out</button>
          </div>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5 sm:px-6">
          {messages.length === 0 && !isWaiting ? <div className="flex flex-1 items-center justify-center text-center text-muted-foreground">Ask anything about your Notion workspace</div> : messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[82%] overflow-hidden break-words rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[70%] ${message.role === "user" ? "bg-primary text-primary-foreground" : "border border-border bg-muted text-foreground"}`}>
                {message.role === "assistant" ? (
                  <Markdown className="prose prose-sm max-w-none overflow-hidden break-words prose-p:my-0 prose-pre:overflow-x-auto prose-pre:whitespace-pre-wrap prose-code:break-words">
                    {message.content}
                  </Markdown>
                ) : (
                  message.content
                )}
              </div>
            </div>
          ))}
          {isWaiting && <TypingIndicator />}
          <div ref={bottomRef} />
          </div>
          <div className="border-t border-border/70 bg-background/60 px-4 py-4 backdrop-blur sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={handleKeyDown} disabled={isWaiting} placeholder="Message Notion AI Assistant" className="h-12 min-w-0 flex-1 rounded-xl border border-input bg-card px-4 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/10 disabled:cursor-not-allowed disabled:opacity-60" />
          <div className="flex gap-3">
            <button onClick={submitMessage} disabled={isWaiting || !draft.trim()} className="h-12 flex-1 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none">Send</button>
            <button onClick={eraseConversation} disabled={isWaiting || messages.length === 0} className="h-12 flex-1 rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none">Erase conversation</button>
          </div>
        </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const AIAssistant = () => {
  const { isAuthenticated, error, signIn, signOut } = useAuth();
  if (!isAuthenticated) return <LoginScreen error={error} onSignIn={signIn} />;
  return <ChatInterface onSignOut={signOut} />;
};

export default AIAssistant;