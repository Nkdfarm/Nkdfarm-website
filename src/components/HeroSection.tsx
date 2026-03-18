import { Button } from "@/components/ui/button";

const heroLines = [
  "Food globe-trotting has no place in this dystopian age",
  "",
  "Return to roots",
  "Grow close to cities",
  "Maximize yield, minimize waste Profitability redefined",
  "",
  "We have a solution",
  "",
];

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            alt="Hero"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            src="/lovable-uploads/f69dd2f0-bf72-4901-a316-05dc81956ab1.png"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              It is time to change
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              <span>
                {heroLines.map((line, i) =>
                  line === "" ? (
                    <span key={i} className="block h-4" />
                  ) : (
                    <span key={i} className={`block ${(line === "Return to roots" || line === "Grow close to cities") ? "text-[hsl(var(--brand-accent))]" : ""}`}>{line}</span>
                  )
                )}
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105 w-full sm:w-auto">
              Discover it now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
