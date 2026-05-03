import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { Leaf, Zap, ArrowRight, CheckCircle2, Camera, Cpu, Workflow, BarChart3, Smartphone, Sprout, Bug, HardHat, Lock, DoorOpen, Thermometer } from "lucide-react";

const FarmBoxAI = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            observerRef.current?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const farmBenefits = [
    "Near-zero heating cost — eliminates the #1 operating expense in cold climates",
    "365-day crop production regardless of external temperature or season",
    "Highly competitive produce pricing vs. conventionally heated greenhouses",
    "Carbon-neutral food production — strong ESG and retail sustainability story",
    "Food sovereignty — fresh produce grown where populations actually live",
  ];

  const dcBenefits = [
    "Reduced cooling OPEX — waste heat leaves the system productively",
    "Improved PUE scores — measurable regulatory and ESG compliance benefit",
    "CSR credibility: tangible community food programme attached to compute",
    "Planning advantage with UK councils prioritising sustainable infrastructure",
    "Revenue share or land-use offset from hydroponic co-tenant",
  ];

  const metrics = [
    { l: "CapEx Range", v: "£2–4M", d: "GPU container + FarmBox modules + heat exchanger infrastructure" },
    { l: "Heating Cost Saving", v: "£150–300K/yr", d: "Annual gas heating cost eliminated at UK commercial rates" },
    { l: "Payback Period", v: "4–7 yrs", d: "Hydroponic side alone; accelerated with AI compute revenue" },
    { l: "Min GPU Load", v: ">60%", d: "Minimum utilisation for sufficient heat; backup heat pump bridges any gap" },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* SUB TOP BAR */}
      <div className="sticky top-[72px] z-40 border-y border-border bg-background/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-12 overflow-x-auto">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="hidden sm:inline text-xs text-muted-foreground">Hybrid Farm × AI Data Center</span>
            </div>
            <nav className="flex items-center gap-1 flex-shrink-0">
              {[
                { href: "#concept", label: "Concept" },
                { href: "#benefits", label: "Benefits" },
                { href: "#metrics", label: "Metrics" },
                { href: "#hydracore", label: "Hydracore" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-accent rounded-full px-3 py-1.5 transition-colors whitespace-nowrap">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center px-6 py-20 lg:py-28 text-center">
        <div className="absolute inset-0 z-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, hsl(var(--accent) / 0.14) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 85% 85%, hsl(var(--accent) / 0.09) 0%, transparent 60%)"
        }} />
        <div className="absolute inset-0 z-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-6">
            Intelligence and <em className="italic text-accent">food sovereignty</em>,<br />
            growing together
          </h1>
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-base md:text-lg text-muted-foreground font-light max-w-3xl mx-auto mb-8 leading-relaxed text-left md:text-center space-y-4">
            <p>FarmBox is a modular farm system designed to adapt to a wide range of climates, crops, and community requirements.</p>
            <p>In cold regions, FarmBox pairs the growing space with a containerised AI data center — using the server waste heat that would otherwise be lost to the atmosphere as the greenhouse's primary heat source. Free, continuous, and available around the clock.</p>
            <p>The data center runs cooler. The farm runs warmer. Energy bills shrink on both sides.</p>
            <p>Beyond the energy equation, the same computing power that drives AI workloads monitors plant health, optimises nutrients, and predicts harvests in real time.</p>
          </div>
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 flex gap-4 justify-center flex-wrap mb-16">
            <a href="#concept" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Explore the Concept
            </a>
            <a href="#contact" className="border border-border text-muted-foreground hover:border-accent hover:text-accent px-8 py-4 rounded-full text-sm font-medium transition-all">
              Partner With Us
            </a>
          </div>
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-[400ms] flex justify-center gap-8 md:gap-12 flex-wrap pt-10 border-t border-border">
            {[
              { v: "~97%", l: "GPU heat captured" },
              { v: "£0", l: "Heating cost" },
              { v: "365", l: "Days/yr production" },
              { v: "2×", l: "Revenue streams" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <span className="font-serif text-3xl md:text-4xl text-accent block">{s.v}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-[0.08em]">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section id="concept" className="bg-card py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-4">The Symbiosis</p>
              <h2 className="font-serif text-3xl lg:text-5xl font-normal leading-[1.15] mb-6">
                Two industries.<br /><em className="italic text-accent">One intelligent loop.</em>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                AI data centres consume enormous power and expel vast quantities of heat — typically vented to atmosphere as waste. FarmBox's modular design turns this thermal by-product into a precision growing asset, maintaining perfect crop temperatures year-round regardless of external climate.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                This is not a compromise. Both systems operate at peak efficiency: GPUs stay cool, plants stay warm, and both operators share the economic upside. A genuine win-win built on industrial symbiosis.
              </p>
            </div>

            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 aspect-square bg-background border border-border rounded-2xl shadow-xl p-6 flex items-center justify-center">
              <svg viewBox="0 0 300 300" className="w-full h-full" aria-label="System flow diagram">
                <defs>
                  <marker id="ao" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="hsl(var(--accent))" />
                  </marker>
                  <marker id="ag" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="hsl(var(--primary))" />
                  </marker>
                </defs>
                {/* DC Box */}
                <rect x="10" y="30" width="120" height="65" rx="10" fill="hsl(var(--muted))" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                <text x="70" y="55" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="hsl(var(--accent))" letterSpacing="0.07em">AI DATACENTER</text>
                <text x="70" y="70" textAnchor="middle" fontSize="8.5" fill="hsl(var(--muted-foreground))">Containerised GPU Pod</text>
                <text x="70" y="83" textAnchor="middle" fontSize="8.5" fill="hsl(var(--muted-foreground))">40–65°C coolant loop</text>
                {/* FarmBox Box */}
                <rect x="170" y="30" width="120" height="65" rx="10" fill="hsl(var(--muted))" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                <text x="230" y="55" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="hsl(var(--primary))" letterSpacing="0.07em">FARMBOX</text>
                <text x="230" y="70" textAnchor="middle" fontSize="8.5" fill="hsl(var(--muted-foreground))">Hydroponic Module</text>
                <text x="230" y="83" textAnchor="middle" fontSize="8.5" fill="hsl(var(--muted-foreground))">18–26°C grow zone</text>
                {/* Arrows */}
                <path d="M130 52 L170 52" stroke="hsl(var(--accent))" strokeWidth="1.8" strokeDasharray="4 2.5" markerEnd="url(#ao)" />
                <text x="150" y="46" textAnchor="middle" fontSize="8" fill="hsl(var(--accent))" fontWeight="600">HEAT →</text>
                <path d="M170 73 L130 73" stroke="hsl(var(--primary))" strokeWidth="1.8" strokeDasharray="4 2.5" markerEnd="url(#ag)" />
                <text x="150" y="87" textAnchor="middle" fontSize="8" fill="hsl(var(--primary))" fontWeight="600">← COOLANT</text>
                {/* Output DC */}
                <line x1="70" y1="95" x2="70" y2="148" stroke="hsl(var(--accent))" strokeWidth="1.2" strokeDasharray="3 2" />
                <rect x="15" y="148" width="110" height="48" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
                <text x="70" y="168" textAnchor="middle" fontSize="8.5" fill="hsl(var(--muted-foreground))">AI Compute Revenue</text>
                <text x="70" y="183" textAnchor="middle" fontSize="9" fontWeight="600" fill="hsl(var(--accent))">Cloud · Inference · HPC</text>
                {/* Output FarmBox */}
                <line x1="230" y1="95" x2="230" y2="148" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeDasharray="3 2" />
                <rect x="175" y="148" width="110" height="48" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
                <text x="230" y="168" textAnchor="middle" fontSize="8.5" fill="hsl(var(--muted-foreground))">Year-Round Fresh Produce</text>
                <text x="230" y="183" textAnchor="middle" fontSize="9" fontWeight="600" fill="hsl(var(--primary))">Food Sovereignty</text>
                {/* Shared savings */}
                <line x1="70" y1="196" x2="120" y2="232" stroke="hsl(var(--border))" strokeWidth="1" />
                <line x1="230" y1="196" x2="180" y2="232" stroke="hsl(var(--border))" strokeWidth="1" />
                <rect x="70" y="232" width="160" height="50" rx="8" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary))" strokeWidth="1" />
                <text x="150" y="253" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="hsl(var(--primary))">SHARED SAVINGS &amp; ESG</text>
                <text x="150" y="268" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Net-zero heating · Carbon credits</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* WIN-WIN */}
      <section id="benefits" className="bg-card py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-4">Mutual Benefits</p>
            <h2 className="font-serif text-3xl lg:text-5xl font-normal leading-[1.15] mb-5">A true win-win proposition</h2>
            <p className="text-base text-muted-foreground leading-relaxed">Each partner gains a distinct, bankable advantage — with shared ESG and cost savings on top.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 rounded-xl p-8 border border-primary/30 bg-primary/5">
              <Leaf className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-2xl mb-6 font-normal">For FarmBox &amp;<br />Food Operators</h3>
              <div className="flex flex-col gap-3">
                {farmBenefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 text-sm leading-[1.6]">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                    </span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 rounded-xl p-8 border border-accent/30 bg-accent/5">
              <Zap className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-serif text-2xl mb-6 font-normal">For AI Data Centre<br />Operators</h3>
              <div className="flex flex-col gap-3">
                {dcBenefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 text-sm leading-[1.6]">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                    </span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section id="metrics" className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-4">Financial Snapshot</p>
            <h2 className="font-serif text-3xl lg:text-5xl font-normal leading-[1.15] mb-5">Pilot project indicators</h2>
            <p className="text-base text-muted-foreground leading-relaxed">Indicative figures for a 500 kW GPU pod + 2,000 m² FarmBox greenhouse co-location in the UK.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {metrics.map((m, i) => (
              <div key={m.l} className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-card border border-border rounded-xl p-6 shadow-sm" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="text-xs text-muted-foreground uppercase tracking-[0.08em] block mb-2">{m.l}</span>
                <span className="font-serif text-3xl lg:text-4xl text-accent block leading-tight mb-2">{m.v}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYDRACORE — Hybrid Farm × AI Data Center */}
      <section id="hydracore" className="bg-card py-20 lg:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-3 flex items-center gap-3">
            <Leaf className="w-6 h-6 text-primary" />
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide uppercase text-accent">
              Hydracore — Hybrid Farm · AI Data Center
            </h2>
          </div>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-75 text-sm md:text-base text-muted-foreground mb-10">
            4 000 m² Vine Hydroponics · 20' Direct Water-Cooled Container · Thermal Symbiosis Design
          </p>

          {/* Tabs (visual labels) */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {["System Overview", "Thermal Energy", "Technical Specs", "AI Interface"].map((t) => (
              <div key={t} className="border border-border rounded-xl px-4 py-3 text-center text-sm font-medium text-foreground bg-background/50">
                {t}
              </div>
            ))}
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { v: "250", u: "kW", l: "DC IT Load", c: "text-primary" },
              { v: "225", u: "kW", l: "Recoverable Heat", c: "text-accent" },
              { v: "4 000", u: "m²", l: "Greenhouse Area", c: "text-primary" },
              { v: "90%", u: "ratio", l: "Heat Recovery", c: "text-accent" },
            ].map((k, i) => (
              <div key={k.l} className="reveal opacity-0 translate-y-6 transition-all duration-700 border border-border rounded-xl bg-background/60 p-5" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className={`font-serif text-4xl md:text-5xl font-normal leading-none ${k.c}`}>{k.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{k.u}</div>
                <div className="text-sm font-medium text-foreground mt-3">{k.l}</div>
              </div>
            ))}
          </div>

          {/* Architecture diagram */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 border border-border rounded-2xl bg-background/40 p-4 md:p-6 overflow-x-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-w-[760px]">
              {/* DATA CENTER ZONE */}
              <div className="border border-dashed border-primary/60 rounded-xl p-4">
                <p className="text-center text-[11px] font-bold tracking-[0.18em] uppercase text-primary mb-4">Data Center Zone</p>
                <div className="space-y-3">
                  <div className="border border-primary/60 rounded-lg p-4 bg-primary/5">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-primary mb-2">20' Container (6.1m × 2.4m)</p>
                    <div className="flex gap-3 items-start">
                      <div className="text-[10px] text-muted-foreground border border-border rounded px-2 py-3 text-center">RACK<br/>×16</div>
                      <div className="text-xs space-y-1 text-muted-foreground">
                        <p className="text-accent font-semibold">Direct Water Cold Plates</p>
                        <p className="text-foreground font-bold">250 kW IT Load</p>
                        <p>PUE 1.08</p>
                        <p>270 kW Total Draw</p>
                        <p className="text-primary">225 kW recoverable</p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary/40 rounded-lg p-3 bg-primary/5">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-primary mb-1">Networking / Storage</p>
                    <p className="text-xs text-muted-foreground">100GbE · NVMe SAN · GPU Nodes</p>
                    <p className="text-xs text-muted-foreground">Farm sensor edge compute</p>
                  </div>
                  <div className="border border-accent/40 rounded-lg p-3 bg-accent/5">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-accent mb-1">Power Supply</p>
                    <p className="text-xs text-muted-foreground">270 kW grid · UPS 2×160 kVA</p>
                    <p className="text-xs text-muted-foreground">Solar PV optional (100 kWp)</p>
                  </div>
                  <div className="border border-primary/40 rounded-lg p-3 bg-primary/5">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-primary mb-1">AI Monitoring Unit</p>
                    <p className="text-xs text-muted-foreground">500+ sensors · SCADA link</p>
                    <p className="text-xs text-muted-foreground">Predictive thermal mgmt</p>
                  </div>
                </div>
              </div>

              {/* THERMAL EXCHANGE */}
              <div className="border border-dashed border-primary/60 rounded-xl p-4">
                <p className="text-center text-[11px] font-bold tracking-[0.18em] uppercase text-primary mb-4">Thermal Exchange</p>
                <div className="space-y-3">
                  <div className="border border-accent/60 rounded-lg p-3 bg-accent/5 text-center">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-accent mb-1">Hot Water Loop</p>
                    <p className="text-xs text-muted-foreground">Supply: 45–55 °C</p>
                    <p className="text-xs text-muted-foreground">Return: 35–40 °C</p>
                    <p className="text-xs text-muted-foreground">Flow: ~50 m³/h</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-accent rotate-90" />
                  </div>
                  <div className="border border-primary/60 rounded-lg p-3 bg-primary/5 text-center">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-primary mb-1">Plate Heat Exchanger</p>
                    <p className="text-xs text-muted-foreground">Efficiency: 92%</p>
                    <p className="text-xs text-muted-foreground">Transfer: 207 kW avg</p>
                    <p className="text-xs text-muted-foreground">Isolation DC ↔ GH circuits</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                  </div>
                  <div className="border border-primary/60 rounded-lg p-3 bg-primary/5 text-center">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-primary mb-1">Buffer Tank</p>
                    <p className="text-xs text-muted-foreground">2 × 10 000 L insulated</p>
                    <p className="text-xs text-muted-foreground">Thermal storage ~40 kWh</p>
                  </div>
                  <div className="border border-dashed border-accent/40 rounded-lg p-3 bg-accent/5 text-center">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-accent mb-1">Backup Boiler</p>
                    <p className="text-xs text-muted-foreground">Gas 150 kW · Peak only</p>
                    <p className="text-xs text-muted-foreground">Oct – Nov / Feb – Mar</p>
                  </div>
                  <p className="text-[10px] text-center text-muted-foreground tracking-widest uppercase pt-1">AI control bus</p>
                </div>
              </div>

              {/* GREENHOUSE */}
              <div className="border border-dashed border-primary/60 rounded-xl p-4">
                <p className="text-center text-[11px] font-bold tracking-[0.18em] uppercase text-primary mb-4">Greenhouse — 4 000 m²</p>
                <div className="space-y-3">
                  <div className="border border-primary/60 rounded-lg p-3 bg-primary/5">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-primary mb-3 text-center">Vine Hydroponic Zones</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { z: "Zone A", t: "NFT Rails" },
                        { z: "Zone B", t: "NFT Rails" },
                        { z: "Zone C", t: "DWC Basins" },
                        { z: "Zone D", t: "DWC Basins" },
                      ].map((z) => (
                        <div key={z.z} className="border border-primary/40 rounded p-2 text-center">
                          <p className="text-xs font-semibold text-foreground">{z.z}</p>
                          <p className="text-[10px] text-muted-foreground">{z.t}</p>
                          <p className="text-[10px] text-muted-foreground">1 000 m²</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border border-primary/60 rounded-lg p-3 bg-primary/5 text-center">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-primary mb-1">Underfloor + Pipe Heating</p>
                    <p className="text-xs text-muted-foreground">40°C low-temp radiant circuit</p>
                    <p className="text-xs text-muted-foreground">Floor + perimeter pipe grid</p>
                    <p className="text-xs text-muted-foreground">Setpoint: 18 – 24 °C</p>
                  </div>
                  <div className="border border-accent/40 rounded-lg p-3 bg-accent/5 text-center">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-accent mb-1">Greenhouse Automation</p>
                    <p className="text-xs text-muted-foreground">CO₂ · Humidity · PAR sensors</p>
                    <p className="text-xs text-muted-foreground">Nutrient dosing · pH control</p>
                    <p className="text-xs text-muted-foreground">EdgeAI crop monitoring (cameras)</p>
                    <p className="text-xs text-muted-foreground">Yield prediction models</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONE CAMERA · VISION SYSTEM */}
      <section id="vision" className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          {/* topbar */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 flex items-center justify-between mb-12 font-mono text-[10px] tracking-[0.2em] uppercase">
            <span className="text-accent">// FarmBox AI · Vision system</span>
            <span className="text-muted-foreground">2026 · NF</span>
          </div>

          {/* hero */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-14">
            <h2 className="font-serif text-5xl md:text-7xl font-normal leading-[0.95] tracking-tight mb-5">
              One camera.<br /><em className="italic text-accent">Everything.</em>
            </h2>
            <div className="flex items-center gap-4 font-mono text-[11px] text-muted-foreground tracking-wide">
              <span className="w-8 h-px bg-accent" />
              <span>The Tesla approach applied to precision agriculture — cameras only, no sensors, no GPS, no LIDAR</span>
            </div>
          </div>

          {/* tesla parallel */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 border-y border-accent/60 py-6 mb-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-8">
            <div>
              <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground mb-2">Tesla autonomous driving</p>
              <p className="text-sm leading-relaxed"><span className="line-through text-muted-foreground/50 font-normal">LIDAR · Radar · HD maps</span><br /><span className="font-bold text-accent">Cameras + edge AI ✓</span></p>
            </div>
            <div className="font-mono text-xs text-accent text-center md:px-6 md:border-x border-border">= same<br />logic</div>
            <div>
              <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground mb-2">Your FarmBox</p>
              <p className="text-sm leading-relaxed"><span className="line-through text-muted-foreground/50 font-normal">Sensors · GPS · probes</span><br /><span className="font-bold text-accent">Cameras + Jetson AI ✓</span></p>
            </div>
          </div>

          {/* function grid */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-14">
            {[
              { n: "01", Icon: Sprout, t: "Crop growth", c: "bg-primary", body: "Tracks plant height, canopy & stage daily per NFT row. No manual scouting." },
              { n: "02", Icon: Bug, t: "Pest & disease", c: "bg-orange-400", body: "Detects 348 diseases on leaf surface. Alert in minutes, days before spread." },
              { n: "03", Icon: HardHat, t: "Labour tracking", c: "bg-blue-400", body: "Man-hours per bay, dwell time per row. Posts to ERPNext payroll hourly." },
              { n: "04", Icon: Lock, t: "Security", c: "bg-red-400", body: "After-hours intrusion, PPE check, perimeter breach. Photo alert in 5 sec." },
              { n: "05", Icon: DoorOpen, t: "Open doors", c: "bg-violet-400", body: "Cold store or tunnel door left open triggers alert after set timeout. No sensors." },
              { n: "06", Icon: Thermometer, t: "Heatmap", c: "bg-accent", body: "Live floor occupancy per bay. Bottlenecks & idle zones visible instantly." },
            ].map(({ n, Icon, t, c, body }) => (
              <div key={n} className="relative border border-border -m-px p-6 hover:bg-muted/30 transition-colors">
                <span className="absolute top-3 right-3 font-mono text-[9px] text-muted-foreground/60">{n}</span>
                <Icon className="w-5 h-5 mb-3 text-foreground" />
                <p className="text-sm font-bold mb-2">{t}</p>
                <div className={`w-5 h-0.5 mb-2 ${c}`} />
                <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* pipeline */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 grid grid-cols-2 md:grid-cols-5 border border-border rounded-sm mb-14 overflow-hidden">
            {[
              { Icon: Camera, b: "12 cameras", l: "360° fisheye · PoE · IP66" },
              { Icon: Cpu, b: "Jetson AI", l: "67 TOPS · 6 models" },
              { Icon: Workflow, b: "n8n", l: "rules · routing" },
              { Icon: BarChart3, b: "ERPNext", l: "payroll · records" },
              { Icon: Smartphone, b: "You", l: "Telegram · Notion" },
            ].map(({ Icon, b, l }, i) => (
              <div key={b} className={`text-center p-5 ${i < 4 ? "md:border-r border-border" : ""} ${i % 2 === 0 ? "border-r" : ""} border-border`}>
                <Icon className="w-5 h-5 mx-auto mb-2 text-accent" />
                <p className="text-[11px] font-bold mb-1">{b}</p>
                <p className="font-mono text-[9px] text-muted-foreground leading-snug">{l}</p>
              </div>
            ))}
          </div>

          {/* vs */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 grid grid-cols-1 md:grid-cols-2 mb-14">
            <div className="border border-border p-6 md:border-r-0">
              <p className="font-mono text-[9px] tracking-[0.1em] uppercase text-red-400 mb-4">✗ Traditional — 6 systems</p>
              {["GPS trackers per worker","Soil & humidity sensors","Manual pest scouting daily","RFID access control","Separate security NVR","Door contact sensors"].map((x) => (
                <p key={x} className="font-mono text-[10px] text-muted-foreground/60 line-through mb-1.5">{x}</p>
              ))}
              <p className="mt-3 pt-3 border-t border-border font-mono text-[10px] font-bold text-red-400">6 dashboards · 6 failure points</p>
            </div>
            <div className="border border-border p-6">
              <p className="font-mono text-[9px] tracking-[0.1em] uppercase text-primary mb-4">✓ Camera-only — 1 system</p>
              {["tracks workers","monitors plants","detects pests","handles security","records footage","checks doors"].map((x) => (
                <p key={x} className="font-mono text-[10px] mb-1.5"><span className="font-bold text-foreground">Same camera</span> <span className="text-muted-foreground">{x}</span></p>
              ))}
              <p className="mt-3 pt-3 border-t border-border font-mono text-[10px] font-bold text-primary">1 dashboard · 1 failure point</p>
            </div>
          </div>

          {/* stats */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 grid grid-cols-2 md:grid-cols-4 mb-10">
            {[
              { v: "R39k", l: "complete setup\n12 cams · 4 bays", c: "text-accent" },
              { v: "R0", l: "monthly software\nall open-source", c: "text-primary" },
              { v: "×6", l: "use cases\none camera type", c: "text-blue-400" },
              { v: "2d", l: "to set up\nthen automatic", c: "text-violet-400" },
            ].map(({ v, l, c }, i) => (
              <div key={i} className="border border-border -m-px p-6 text-center">
                <p className={`font-serif text-4xl font-normal mb-2 ${c}`}>{v}</p>
                <p className="font-mono text-[9px] text-muted-foreground whitespace-pre-line leading-relaxed">{l}</p>
              </div>
            ))}
          </div>

          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 border-t border-accent/60 pt-5 flex justify-between items-center flex-wrap gap-3 font-mono text-[9px] text-muted-foreground/70">
            <p>Jetson Orin Nano Super · Ubuntu · Frigate · YOLOv8<br />n8n · ERPNext · Grafana · Tailscale</p>
            <p className="text-right">FarmBox AI · 2026 <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent ml-2 align-middle" /></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="text-center py-24 lg:py-28 relative overflow-hidden">

        <div className="absolute inset-0 z-0" style={{
          background: "radial-gradient(ellipse 70% 80% at 50% 100%, hsl(var(--accent) / 0.10), transparent 70%)"
        }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-4">Join the Symbiosis</p>
            <h2 className="font-serif text-3xl lg:text-5xl font-normal leading-[1.15] mb-4">
              Ready to turn GPU heat into<br />
              <em className="italic text-accent">food sovereignty?</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you operate a data centre, manage a hydroponic farm, or represent a local authority seeking sustainable food infrastructure — let's build the loop together.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:contact@farmbox.io" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#concept" className="border border-border text-muted-foreground hover:border-accent hover:text-accent px-8 py-4 rounded-full text-sm font-medium transition-all">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6 max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4 text-xs text-muted-foreground">
        <span>© 2026 FarmBox · AI-Integrated Hydroponic Systems</span>
        <span>Modular · Sustainable · Cold-Climate Ready</span>
      </footer>
    </div>
  );
};

export default FarmBoxAI;
