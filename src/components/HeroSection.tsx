import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-microgreens.jpg";

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
        <div className="flex flex-col lg:flex-row min-h-[640px]">
          {/* Left: Visual */}
          <div className="lg:w-1/2 relative min-h-[440px] lg:min-h-full p-6 md:p-10 animate-scale-in">
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt="Naked Farms — urban indoor microgreens under teal lighting"
                width={1024}
                height={1280}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-muted via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-muted/20" />
            </div>

            {/* Live badge */}
            <div className="relative z-10">
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

          {/* Right: Content */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md space-y-7 md:space-y-8">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 animate-slide-down">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[hsl(var(--brand-accent))]/10 border border-[hsl(var(--brand-accent))]/30">
                  <Sparkles className="w-3 h-3 text-[hsl(var(--brand-accent))]" />
                </div>
                <span className="text-[hsl(var(--brand-accent))] text-[10px] font-bold tracking-[0.3em] uppercase">
                  Urban Food Sovereignty
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[0.95] tracking-tight animate-slide-down">
                It is time<br />
                to <em className="italic font-light text-[hsl(var(--brand-accent))]">change</em>
              </h1>

              {/* Description */}
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light animate-slide-up stagger-1">
                Food globe-trotting has no place in this dystopian age. We build the infrastructure
                for the high-density cities of tomorrow.
              </p>

              {/* Manifesto */}
              <ul className="space-y-3.5 pt-2 animate-slide-up stagger-2">
                {accentLines.map((line, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <span className="h-px w-8 bg-[hsl(var(--brand-accent))] transition-all duration-300 group-hover:w-12" />
                    <span className="text-foreground/85 text-sm md:text-base font-medium tracking-wide">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
