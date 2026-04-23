import { Cpu, Truck, Users } from "lucide-react";

const pillars = [
{
  num: "01",
  icon: Cpu,
  title: "AI-driven production",
  body: "Each 4,000 m² greenhouse runs under 24/7 AI monitoring — climate, nutrients, and crop cycles managed with precision."
},
{
  num: "02",
  icon: Truck,
  title: "Hyper-local distribution",
  body: "Every unit is the primary fresh food source within a 10-mile radius. Trust replaces transactions."
},
{
  num: "03",
  icon: Users,
  title: "80/20 ownership",
  body: "Access a $300K FarmBox with $60K. A clear seven-year pathway to full, legal ownership."
}];


const PillarsSection = () => {
  return (
    <section className="py-12 md:py-20 animate-fade-in">
      <div className="flex items-end justify-between mb-10 md:mb-12 animate-slide-up">
        <div className="space-y-2">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[hsl(var(--brand-accent))]">
            Three Pillars
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How a FarmBox <em className="italic font-light text-[hsl(var(--brand-accent))]">works</em>
          </h2>
        </div>
        <a href="/farmbox" className="hidden sm:inline-flex text-sm font-medium text-muted-foreground hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-muted/60">
          See blueprint →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={p.num}
              className={`group relative p-8 md:p-10 rounded-[2rem] bg-card border border-border card-hover animate-slide-up stagger-${i + 1}`}>

              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--brand-accent)/0.12)] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[hsl(var(--brand-accent))]" />
                </div>
                <span className="text-xs font-mono tracking-[0.15em] text-muted-foreground/60">{p.num}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-medium leading-tight tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </div>);

        })}
      </div>
    </section>);

};

export default PillarsSection;
