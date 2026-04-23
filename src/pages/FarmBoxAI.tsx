import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { Leaf, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

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

  const steps = [
    { n: "01", t: "Containerised GPU Pod", d: "A liquid-cooled AI data centre container (250 kW–2 MW) runs 24/7 AI inference workloads, generating continuous, stable thermal output of 40–65°C from the liquid cooling loop." },
    { n: "02", t: "Heat Exchanger Loop", d: "A closed-loop heat exchanger transfers thermal energy from server coolant to the greenhouse HVAC and root-zone heating circuits — with zero fluid mixing or contamination risk." },
    { n: "03", t: "FarmBox Hydroponic Module", d: "NFT or DWC growing channels maintain 18–22°C root-zone temperature. Leafy greens, herbs, and microgreens thrive in a GPS-monitored stable environment, 365 days per year." },
    { n: "04", t: "Smart Climate Control", d: "IoT sensors and Node-RED automation balance heat distribution, CO₂ supplementation, and lighting — adapting in real-time to both GPU load fluctuations and crop growth demands." },
  ];

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
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-semibold tracking-[0.09em] uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Cold Climate Innovation · UK
          </div>
          <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-6">
            Where <em className="italic text-accent">AI Heat</em><br />
            Grows Tomorrow's Food
          </h1>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            FarmBox's modular hydroponic system captures waste heat from containerised AI data centres — eliminating heating costs and creating a truly symbiotic food &amp; compute ecosystem.
          </p>
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

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-4">Technical Integration</p>
            <h2 className="font-serif text-3xl lg:text-5xl font-normal leading-[1.15] mb-5">How the system works</h2>
            <p className="text-base text-muted-foreground leading-relaxed">Four integrated layers close the heat-to-harvest loop at any modular scale.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {steps.map((s, i) => (
              <div key={s.n} className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-card border border-border rounded-xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent transition-all" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="font-serif text-4xl text-accent/30 block mb-4 leading-none">{s.n}</span>
                <h3 className="font-serif text-xl mb-3 leading-snug">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-[1.75]">{s.d}</p>
              </div>
            ))}
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
