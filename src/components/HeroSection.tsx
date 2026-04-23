import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sprout } from "lucide-react";

const accentLines = [
"Return to origins",
"Grow close to cities",
"Maximize yield, minimize waste",
"Profitability redefined"];


const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-6 md:my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            alt="Naked Farms — urban smart greenhouse"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            src="/lovable-uploads/f69dd2f0-bf72-4901-a316-05dc81956ab1.png" />

          {/* Floating badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full bg-background/85 backdrop-blur-md border border-border/50 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--brand-accent))] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--brand-accent))]" />
            </span>
            <span className="text-xs font-medium tracking-wide">Live · Urban Agritech</span>
          </div>

          {/* Stat overlay */}
          <div className="absolute bottom-5 right-5 px-5 py-3 rounded-2xl bg-background/85 backdrop-blur-md border border-border/50 shadow-sm">
            <div className="text-2xl font-serif font-bold leading-none">4,000<span className="text-[hsl(var(--brand-accent))] text-base"> m²</span></div>
            <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">per FarmBox unit</div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-background/70 border border-border/60">
            <Sprout className="w-3.5 h-3.5 text-[hsl(var(--brand-accent))]" />
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-muted-foreground">Urban Food Sovereignty</span>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-slide-down">
              It is time<br />to <em className="italic font-light text-[hsl(var(--brand-accent))]">change</em>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              Food globe-trotting has no place in this dystopian age.
            </p>

            {/* Manifesto list */}
            <ul className="space-y-2 pt-2 animate-slide-up stagger-2">
              {accentLines.map((line, i) =>
              <li key={i} className="flex items-center gap-3 text-base md:text-lg">
                  <span className="h-px w-6 bg-[hsl(var(--brand-accent))]" />
                  <span className="text-foreground/85">{line}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 pt-2 animate-slide-up stagger-3">
            <a href="/farmbox" className="w-full sm:w-auto">
              <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full pl-8 pr-6 py-4 md:py-6 text-base font-medium transition-all hover:scale-105 w-full sm:w-auto">
                Start My FarmBox
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:rotate-45" />
              </Button>
            </a>
            <a href="#articles" className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 transition-colors">
              Explore the model →
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
