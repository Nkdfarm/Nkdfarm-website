import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-microgreens.jpg";
import housesImage from "@/assets/nkd-farm-houses.png";

const accentLines = [
  "Return to origins",
  "Grow close to cities",
  "Maximize yield, minimize waste",
  "Profitability redefined",
];

const HeroSection = () => {
  return (
    <section className="my-6 md:my-12 animate-fade-in flex items-center justify-center">
      <div className="max-w-6xl w-full bg-muted rounded-[2.5rem] overflow-hidden border border-border/40 shadow-2xl">
        <div className="flex flex-col">
          {/* Row 1: Panoramic greenhouse image */}
          <div className="relative w-full h-[220px] md:h-[300px] lg:h-[340px] overflow-hidden animate-scale-in">
            <img
              src={heroImage}
              alt="Naked Farms — high-tech transparent greenhouse with leafy greens"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-muted/60 via-transparent to-transparent" />

            {/* Live badge */}
            <div className="absolute top-6 left-6 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-xl border border-border/40 text-foreground/90 text-[10px] font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--brand-accent))] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--brand-accent))]" />
                </span>
                Live · Urban Agritech
              </div>
            </div>

            {/* Stat overlay */}
            <div className="absolute bottom-6 right-6 z-10 px-5 py-3 rounded-2xl bg-background/70 backdrop-blur-xl border border-border/40 shadow-sm">
              <div className="text-2xl font-serif font-bold leading-none">
                4,000<span className="text-[hsl(var(--brand-accent))] text-base"> m²</span>
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                per FarmBox unit
              </div>
            </div>
          </div>

          {/* Row 2: Centered text content */}
          <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col items-center text-center">
            <div className="max-w-2xl space-y-7 md:space-y-8">
              <div className="flex items-center justify-center gap-3 animate-slide-down">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[hsl(var(--brand-accent))]/10 border border-[hsl(var(--brand-accent))]/30">
                  <Sparkles className="w-3 h-3 text-[hsl(var(--brand-accent))]" />
                </div>
                <span className="text-[hsl(var(--brand-accent))] text-[10px] font-bold tracking-[0.3em] uppercase">
                  Urban Food Sovereignty
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[0.95] tracking-tight animate-slide-down">
                It is time<br />
                to <em className="italic font-light text-[hsl(var(--brand-accent))]">change</em>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light animate-slide-up stagger-1 max-w-xl mx-auto">
                Food globe-trotting has no place in this dystopian age. We build the infrastructure
                for the high-density cities of tomorrow.
              </p>

              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-2 animate-slide-up stagger-2">
                {accentLines.map((line, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <span className="h-px w-6 bg-[hsl(var(--brand-accent))] transition-all duration-300 group-hover:w-10" />
                    <span className="text-foreground/85 text-sm md:text-base font-medium tracking-wide">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 animate-slide-up stagger-3">
                <a href="/farmbox" className="inline-block">
                  <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full pl-8 pr-6 py-6 text-base font-medium transition-all hover:scale-105 shadow-lg shadow-primary/20">
                    Start My FarmBox
                    <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:rotate-45" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Row 3: Houses panoramic image */}
          <div className="relative w-full h-[220px] md:h-[300px] lg:h-[340px] overflow-hidden animate-scale-in">
            <img
              src={housesImage}
              alt="Naked Farms — nkd.farm delivery boxes on a residential street"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
