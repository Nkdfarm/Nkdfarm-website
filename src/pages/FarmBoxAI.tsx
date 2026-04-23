import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { Brain, Cpu, Droplets, Sun, LineChart, ShieldCheck, Sparkles, Workflow } from "lucide-react";

const FarmBoxAI = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".ai-fade").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const capabilities = [
    {
      icon: Brain,
      title: "Adaptive Crop Brain",
      desc: "A continuously learning model that adjusts irrigation, nutrition and climate setpoints per crop, per growth stage, per square metre.",
    },
    {
      icon: Droplets,
      title: "Precision Irrigation",
      desc: "Sub-litre dosing decisions made every minute based on substrate moisture, EC, transpiration and forecast solar load.",
    },
    {
      icon: Sun,
      title: "Light & Climate Control",
      desc: "Predictive shading, ventilation and dehumidification that anticipates Cape Town's weather hours before it arrives at the greenhouse.",
    },
    {
      icon: LineChart,
      title: "Yield Forecasting",
      desc: "Rolling 52-week yield projections updated daily as the AI compares planned vs actual against thousands of historical grow cycles.",
    },
    {
      icon: ShieldCheck,
      title: "Early Disease Detection",
      desc: "Computer vision over canopy imagery flags pest pressure and disease outliers up to 7 days before the human eye can detect them.",
    },
    {
      icon: Workflow,
      title: "Autonomous Operations",
      desc: "Daily task lists generated for the on-site team — pruning, harvest windows, system flushes — sequenced to maximise labour efficiency.",
    },
  ];

  const stack = [
    { layer: "Sensing", desc: "200+ sensors per FarmBox: substrate, atmosphere, light, plant imagery, energy and water flow." },
    { layer: "Edge Compute", desc: "On-site controller runs real-time loops with sub-second latency, even if the cloud link drops." },
    { layer: "Cloud Brain", desc: "Centralised model training across the FarmBox fleet — every greenhouse makes every other greenhouse smarter." },
    { layer: "Operator UI", desc: "A single dashboard for growers: what to do today, why, and what the model expects to happen tomorrow." },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div className="absolute w-[600px] h-[600px] rounded-full top-[-10%] right-[-10%] bg-accent/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28 relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="ai-fade opacity-0 translate-y-6 transition-all duration-700 inline-flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-6 border border-accent/30 bg-accent/5 px-3 py-1.5 rounded-full">
              <Sparkles className="w-3 h-3" />
              FarmBox Intelligence Layer
            </div>
            <h1 className="ai-fade opacity-0 translate-y-6 transition-all duration-700 delay-100 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
              The AI that<br />
              <span className="text-accent italic">grows your food.</span>
            </h1>
            <p className="ai-fade opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg md:text-xl text-muted-foreground italic font-serif mb-8 leading-relaxed">
              Every FarmBox is run by a brain — not a manual.
            </p>
            <p className="ai-fade opacity-0 translate-y-6 transition-all duration-700 delay-300 text-sm md:text-base text-muted-foreground leading-[1.85] max-w-xl">
              FarmBox AI Power is the autonomous control system at the heart of every Naked Farms greenhouse. It senses, predicts, and acts thousands of times per day so growers can focus on the crop — not the controls.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="ai-fade opacity-0 translate-y-6 transition-all duration-700 delay-[400ms] relative rounded-2xl p-8 bg-card border border-border overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
              <Cpu className="w-10 h-10 text-accent mb-5" />
              <div className="space-y-5">
                {[
                  { v: "1,440", l: "Decisions per day per FarmBox" },
                  { v: "200+", l: "Live sensor inputs" },
                  { v: "<1s", l: "Edge response latency" },
                  { v: "24/7", l: "Autonomous operation" },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0">
                    <span className="font-serif text-2xl font-bold text-foreground">{s.v}</span>
                    <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium text-right">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-border py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-3">What it does</p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-[1.1] mb-4">
              Six capabilities,<br />
              <span className="text-accent italic">one continuous loop.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The FarmBox AI doesn't run as separate features — it runs as a single closed-loop system that senses, decides, and acts in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="ai-fade opacity-0 translate-y-6 transition-all duration-700 bg-card border border-border rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 hover:border-accent/40"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-[1.7]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="bg-card border-y border-border py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-3">The stack</p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-[1.1] mb-5">
              Four layers,<br />
              <span className="text-accent italic">working as one.</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-[1.85]">
              Sensing on the plant, compute at the edge, learning in the cloud, and clarity in the operator's hands.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-px bg-border rounded-2xl overflow-hidden">
            {stack.map((s, i) => (
              <div
                key={s.layer}
                className="ai-fade opacity-0 translate-y-6 transition-all duration-700 bg-background p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-4 md:w-56 flex-shrink-0">
                  <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-accent">0{i + 1}</span>
                  <h3 className="font-serif text-xl font-bold">{s.layer}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-[1.75]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="ai-fade opacity-0 translate-y-6 transition-all duration-700 text-3xl lg:text-4xl font-bold leading-[1.15] mb-6">
            A FarmBox without AI is just a greenhouse.<br />
            <span className="text-accent italic">With it, it's a system.</span>
          </h2>
          <p className="ai-fade opacity-0 translate-y-6 transition-all duration-700 delay-100 text-muted-foreground leading-[1.85] max-w-2xl mx-auto">
            The intelligence layer is what turns a steel-and-glass building into a profitable, predictable food production unit — owned and operated locally, optimised globally.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FarmBoxAI;
