import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="my-12 md:my-20 animate-fade-in">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground p-8 md:p-16 lg:p-20">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[hsl(var(--brand-accent)/0.25)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[hsl(var(--brand-accent)/0.15)] blur-3xl" />

        <div className="relative grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3 space-y-5">
            <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase text-[hsl(var(--brand-accent))]">
              Become a Farmer
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Build the food system{" "}
              <em className="italic font-light text-[hsl(var(--brand-accent))]">your city</em>{" "}
              deserves.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
              Join the FarmBox network — a precision-agriculture franchise designed for community-rooted entrepreneurs.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
            <a href="/farmbox" className="w-full sm:w-auto md:w-full">
              <Button className="group w-full bg-[hsl(var(--brand-accent))] hover:bg-[hsl(var(--brand-accent)/0.9)] text-white rounded-full px-8 py-6 text-base font-medium transition-all hover:scale-[1.02]">
                Start My FarmBox
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:rotate-45" />
              </Button>
            </a>
            <a href="/contact" className="w-full sm:w-auto md:w-full">
              <Button variant="outline" className="w-full bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground rounded-full px-8 py-6 text-base font-medium">
                Talk to us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default CTASection;
