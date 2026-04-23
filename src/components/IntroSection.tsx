const stats = [
{ value: "95%", label: "Less water vs. field agriculture" },
{ value: "1,000", label: "Families served per unit" },
{ value: "84¢", label: "Food dollar retained locally" },
{ value: "7 yr", label: "Path to full ownership" }];


const IntroSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase text-[hsl(var(--brand-accent))] animate-slide-up">
          The Naked Farms Model
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight animate-slide-up stagger-1">
          <span className="text-[hsl(var(--brand-accent))]">Naked</span> Farms pioneers agritech franchising for{" "}
          <em className="italic font-light">city food system revival</em>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-2">
          Powering a new generation of farmers with technology and services for sustainable food — produced where it's eaten.
        </p>
      </div>

      {/* Stats strip */}
      <div className="max-w-6xl mx-auto mt-12 md:mt-16 animate-slide-up stagger-3">
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-[2rem] overflow-hidden border border-border bg-card/40 backdrop-blur-sm">
          {stats.map((s, i) =>
          <div
            key={i}
            className={`p-6 md:p-8 text-center ${
            i < stats.length - 1 ? "md:border-r" : ""} ${
            i < 2 ? "border-b md:border-b-0" : ""} ${
            i === 0 || i === 2 ? "border-r md:border-r" : ""} border-border`
            }>

              <div className="text-3xl md:text-5xl font-serif font-light tracking-tight text-foreground">
                {s.value}
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2 leading-snug">
                {s.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default IntroSection;
