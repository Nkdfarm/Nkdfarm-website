import Header from "@/components/Header";

const FarmBoxModules = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-20 lg:py-28">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-6">
          // FarmBox · Modular system
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
          FarmBox <span className="text-accent">modules</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          A standalone catalog of FarmBox hardware and software modules — the
          building blocks that compose a working urban farm. Content for this
          page is coming soon.
        </p>

        <div className="mt-16 border-t border-border pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Page placeholder
          </p>
        </div>
      </main>
    </div>
  );
};

export default FarmBoxModules;
