import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { Brain, Cpu, Droplets, Sun, LineChart, ShieldCheck, Sparkles, Workflow, Flame, Leaf, Zap, ArrowRight, CheckCircle2, Server, Thermometer } from "lucide-react";

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
              FarmBox modules are the autonomous control system at the heart of every Naked Farms greenhouse. They sense, predict, and act thousands of times per day so growers can focus on the crop — not the controls.
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

      {/* THERMOGROW — FarmBox × AI Datacenter */}
      <section className="border-t border-border py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bottom-[-20%] left-[-10%] bg-accent/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="ai-fade opacity-0 translate-y-6 transition-all duration-700 inline-flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-4 border border-accent/30 bg-accent/5 px-3 py-1.5 rounded-full">
              <Flame className="w-3 h-3" />
              ThermoGrow · FarmBox × AI Datacenter
            </div>
            <h2 className="ai-fade opacity-0 translate-y-6 transition-all duration-700 text-3xl lg:text-5xl font-bold leading-[1.1] mb-5">
              Where AI heat<br />
              <span className="text-accent italic">grows tomorrow's food.</span>
            </h2>
            <p className="ai-fade opacity-0 translate-y-6 transition-all duration-700 delay-100 text-muted-foreground leading-relaxed max-w-2xl">
              FarmBox's modular hydroponic system captures waste heat from containerised AI data centres — eliminating heating costs and creating a truly symbiotic food &amp; compute ecosystem.
            </p>
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-16">
            {[
              { v: "~97%", l: "GPU heat captured" },
              { v: "£0", l: "Heating cost" },
              { v: "365", l: "Days/yr production" },
              { v: "2×", l: "Revenue streams" },
            ].map((s, i) => (
              <div key={s.l} className="ai-fade opacity-0 translate-y-6 transition-all duration-700 bg-background p-6 lg:p-8" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="font-serif text-3xl lg:text-4xl font-bold text-accent mb-2">{s.v}</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Symbiosis grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="ai-fade opacity-0 translate-y-6 transition-all duration-700">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-3">The symbiosis</p>
              <h3 className="text-2xl lg:text-3xl font-bold leading-[1.15] mb-5">
                Two industries.<br />
                <span className="text-accent italic">One intelligent loop.</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-[1.85] mb-4">
                AI data centres consume enormous power and expel vast quantities of heat — typically vented to atmosphere as waste. FarmBox's modular design turns this thermal by-product into a precision growing asset, maintaining perfect crop temperatures year-round regardless of external climate.
              </p>
              <p className="text-sm text-muted-foreground leading-[1.85]">
                Both systems operate at peak efficiency: GPUs stay cool, plants stay warm, and both operators share the economic upside.
              </p>
            </div>

            <div className="ai-fade opacity-0 translate-y-6 transition-all duration-700 delay-100">
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="border border-accent/30 bg-accent/5 rounded-xl p-4">
                    <Server className="w-5 h-5 text-accent mb-3" />
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent font-bold mb-1">AI Datacenter</p>
                    <p className="text-xs text-muted-foreground leading-snug">Containerised GPU pod</p>
                    <p className="text-xs text-muted-foreground leading-snug">40–65°C coolant</p>
                  </div>
                  <div className="border border-primary/30 bg-primary/5 rounded-xl p-4">
                    <Leaf className="w-5 h-5 text-primary mb-3" />
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary font-bold mb-1">FarmBox</p>
                    <p className="text-xs text-muted-foreground leading-snug">Hydroponic module</p>
                    <p className="text-xs text-muted-foreground leading-snug">18–26°C grow zone</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 py-3 border-y border-border mb-5">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent font-bold">Heat</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                  <Thermometer className="w-4 h-4 text-muted-foreground" />
                  <ArrowRight className="w-4 h-4 text-primary rotate-180" />
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary font-bold">Coolant</span>
                </div>
                <div className="bg-primary/5 border border-primary/30 rounded-xl p-4 text-center">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary font-bold mb-1">Shared savings &amp; ESG</p>
                  <p className="text-xs text-muted-foreground">Net-zero heating · Carbon credits</p>
                </div>
              </div>
            </div>
          </div>

          {/* How it works steps */}
          <div className="mb-20">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-3">Technical integration</p>
              <h3 className="text-2xl lg:text-3xl font-bold leading-[1.15] mb-3">How the system works</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Four integrated layers close the heat-to-harvest loop at any modular scale.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { n: "01", t: "Containerised GPU Pod", d: "A liquid-cooled AI data centre container (250 kW–2 MW) runs 24/7 inference workloads, generating continuous 40–65°C thermal output." },
                { n: "02", t: "Heat Exchanger Loop", d: "A closed-loop heat exchanger transfers thermal energy from server coolant to greenhouse HVAC and root-zone heating — zero contamination risk." },
                { n: "03", t: "FarmBox Hydroponic Module", d: "NFT or DWC channels maintain 18–22°C root-zone temperature. Leafy greens, herbs, microgreens thrive 365 days per year." },
                { n: "04", t: "Smart Climate Control", d: "IoT sensors and edge automation balance heat, CO₂ and lighting in real-time against GPU load and crop demand." },
              ].map((s, i) => (
                <div key={s.n} className="ai-fade opacity-0 translate-y-6 transition-all duration-700 bg-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg transition-all" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-accent block mb-4">{s.n}</span>
                  <h4 className="font-serif text-base font-bold mb-2 leading-snug">{s.t}</h4>
                  <p className="text-xs text-muted-foreground leading-[1.75]">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Win-Win */}
          <div className="mb-20">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-3">Mutual benefits</p>
              <h3 className="text-2xl lg:text-3xl font-bold leading-[1.15] mb-3">A true win-win proposition</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Each partner gains a distinct, bankable advantage — with shared ESG and cost savings on top.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="ai-fade opacity-0 translate-y-6 transition-all duration-700 bg-card border border-primary/30 rounded-2xl p-7 lg:p-8">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Leaf className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold mb-5">For FarmBox &amp; Food Operators</h4>
                <ul className="space-y-3">
                  {[
                    "Near-zero heating cost — eliminates the #1 OPEX in cold climates",
                    "365-day crop production regardless of external temperature",
                    "Highly competitive produce pricing vs. conventionally heated greenhouses",
                    "Carbon-neutral food production — strong ESG and retail story",
                    "Food sovereignty — fresh produce grown where populations actually live",
                  ].map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-[1.65]">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ai-fade opacity-0 translate-y-6 transition-all duration-700 delay-100 bg-card border border-accent/30 rounded-2xl p-7 lg:p-8">
                <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold mb-5">For AI Data Centre Operators</h4>
                <ul className="space-y-3">
                  {[
                    "Reduced cooling OPEX — waste heat leaves the system productively",
                    "Improved PUE scores — measurable regulatory and ESG compliance benefit",
                    "CSR credibility: tangible community food programme attached to compute",
                    "Planning advantage with councils prioritising sustainable infrastructure",
                    "Revenue share or land-use offset from hydroponic co-tenant",
                  ].map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-[1.65]">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Financial snapshot */}
          <div>
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-3">Financial snapshot</p>
              <h3 className="text-2xl lg:text-3xl font-bold leading-[1.15] mb-3">Pilot project indicators</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Indicative figures for a 500 kW GPU pod + 2,000 m² FarmBox greenhouse co-location.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { l: "CapEx Range", v: "£2–4M", d: "GPU container + FarmBox modules + heat exchanger infrastructure" },
                { l: "Heating Cost Saving", v: "£150–300K/yr", d: "Annual gas heating cost eliminated at UK commercial rates" },
                { l: "Payback Period", v: "4–7 yrs", d: "Hydroponic side alone; accelerated with AI compute revenue" },
                { l: "Min GPU Load", v: ">60%", d: "Minimum utilisation; backup heat pump bridges any gap" },
              ].map((m, i) => (
                <div key={m.l} className="ai-fade opacity-0 translate-y-6 transition-all duration-700 bg-card border border-border rounded-2xl p-6" style={{ transitionDelay: `${i * 60}ms` }}>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">{m.l}</p>
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-accent mb-3">{m.v}</p>
                  <p className="text-xs text-muted-foreground leading-[1.7]">{m.d}</p>
                </div>
              ))}
            </div>
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
