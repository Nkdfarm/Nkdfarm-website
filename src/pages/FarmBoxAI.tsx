import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { Camera, Cpu, Workflow, BarChart3, Smartphone, Sprout, Bug, HardHat, Lock, DoorOpen, Thermometer } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

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

      <footer className="border-t border-border py-8 px-6 max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4 text-xs text-muted-foreground">
        <span>© 2026 FarmBox · AI-Integrated Hydroponic Systems</span>
        <span>Modular · Sustainable · Cold-Climate Ready</span>
      </footer>
    </div>
  );
};

export default FarmBoxAI;
