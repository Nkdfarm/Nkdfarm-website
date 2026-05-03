import Header from "@/components/Header";
import { Camera, Cpu, Workflow, BarChart3, Smartphone, Sprout, Bug, HardHat, Lock, DoorOpen, Thermometer } from "lucide-react";

const FarmVision = () => {
  const fns = [
    { n: "01", icon: Sprout, title: "Crop growth", accent: "hsl(var(--accent))", body: "Tracks plant height, canopy & stage daily per NFT row. No manual scouting." },
    { n: "02", icon: Bug, title: "Pest & disease", accent: "hsl(25 90% 50%)", body: "Detects 348 diseases on leaf surface. Alert in minutes, days before spread." },
    { n: "03", icon: HardHat, title: "Labour tracking", accent: "hsl(210 80% 50%)", body: "Man-hours per bay, dwell time per row. Posts to ERPNext payroll hourly." },
    { n: "04", icon: Lock, title: "Security", accent: "hsl(0 75% 55%)", body: "After-hours intrusion, PPE check, perimeter breach. Photo alert in 5 sec." },
    { n: "05", icon: DoorOpen, title: "Open doors", accent: "hsl(265 70% 55%)", body: "Cold store or tunnel door left open triggers alert after set timeout. No sensors." },
    { n: "06", icon: Thermometer, title: "Heatmap", accent: "hsl(var(--accent))", body: "Live floor occupancy per bay. Bottlenecks & idle zones visible instantly." },
  ];

  const pipeline = [
    { icon: Camera, title: "12 cameras", sub: "360° fisheye · PoE · IP66" },
    { icon: Cpu, title: "Jetson AI", sub: "67 TOPS · 6 models" },
    { icon: Workflow, title: "n8n", sub: "rules · routing" },
    { icon: BarChart3, title: "ERPNext", sub: "payroll · records" },
    { icon: Smartphone, title: "You", sub: "Telegram · Notion" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="max-w-4xl mx-auto px-6 sm:px-10 pt-10 pb-24">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-16 font-mono text-xs uppercase tracking-[0.2em]">
          <span className="text-accent font-semibold">// FarmVision · Vision system</span>
          <span className="text-muted-foreground">2026 · SA</span>
        </div>

        {/* Hero */}
        <section className="mb-16">
          <h1 className="font-serif font-extrabold leading-[0.95] tracking-tight text-[clamp(56px,9vw,96px)] mb-6">
            One camera.<br />
            <em className="not-italic text-accent">Everything.</em>
          </h1>
          <div className="flex items-center gap-4 font-mono text-sm md:text-base text-foreground/80 tracking-wide">
            <span className="w-10 h-px bg-accent flex-shrink-0" />
            The Tesla approach applied to precision agriculture — cameras only, no sensors, no GPS, no LIDAR
          </div>
        </section>

        {/* Tesla parallel */}
        <section className="border-t-2 border-accent border-b border-border py-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Tesla autonomous driving</p>
            <p className="text-base font-bold leading-[1.9]">
              <s className="text-muted-foreground/60 font-normal">LIDAR &nbsp; Radar &nbsp; HD maps</s><br />
              <span className="text-accent">Cameras + edge AI ✓</span>
            </p>
          </div>
          <div className="font-mono text-sm text-accent text-center leading-tight border-y md:border-y-0 md:border-x border-border py-3 md:py-0 md:px-6">
            = same<br />logic
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Your farm</p>
            <p className="text-base font-bold leading-[1.9]">
              <s className="text-muted-foreground/60 font-normal">Sensors &nbsp; GPS &nbsp; probes</s><br />
              <span className="text-accent">Cameras + Jetson AI ✓</span>
            </p>
          </div>
        </section>

        {/* Function grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-16">
          {fns.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.n} className="relative p-6 border border-border -ml-px -mt-px hover:bg-muted/40 transition-colors">
                <span className="absolute top-4 right-4 font-mono text-xs text-muted-foreground/70">{f.n}</span>
                <Icon className="w-7 h-7 mb-3" style={{ color: f.accent }} />
                <h3 className="font-serif text-lg font-extrabold mb-2">{f.title}</h3>
                <div className="w-8 h-0.5 mb-3" style={{ background: f.accent }} />
                <p className="text-sm text-foreground/75 leading-relaxed">{f.body}</p>
              </div>
            );
          })}
        </section>

        {/* Pipeline */}
        <section className="grid grid-cols-2 sm:grid-cols-5 mb-16 border border-border rounded-sm overflow-hidden">
          {pipeline.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="text-center px-3 py-5 border-r border-b border-border last:border-r-0 sm:border-b-0">
                <Icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  <b className="block font-extrabold text-sm text-foreground mb-1 font-sans">{p.title}</b>
                  {p.sub}
                </p>
              </div>
            );
          })}
        </section>

        {/* VS comparison */}
        <section className="grid grid-cols-1 md:grid-cols-2 mb-16">
          <div className="p-6 border border-border md:border-r-0">
            <p className="font-mono text-xs uppercase tracking-[0.1em] mb-4 text-destructive font-semibold">✕ Traditional — 6 systems</p>
            {["GPS trackers per worker", "Soil & humidity sensors", "Manual pest scouting daily", "RFID access control", "Separate security NVR", "Door contact sensors"].map((t) => (
              <div key={t} className="text-sm mb-2.5 leading-relaxed">
                <s className="text-muted-foreground/70">{t}</s>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border text-sm font-bold text-destructive">
              6 dashboards · 6 failure points
            </div>
          </div>
          <div className="p-6 border border-border">
            <p className="font-mono text-xs uppercase tracking-[0.1em] mb-4 text-accent font-semibold">✓ Camera-only — 1 system</p>
            {["tracks workers", "monitors plants", "detects pests", "handles security", "records footage", "checks doors"].map((t, i) => (
              <div key={i} className="text-sm mb-2.5 leading-relaxed flex gap-2">
                <b className="text-foreground font-bold whitespace-nowrap">Same camera</b>
                <span className="text-foreground/75">{t}</span>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border text-sm font-bold text-accent">
              1 dashboard · 1 failure point
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 mb-16">
          {[
            { val: "R39k", color: "text-accent", lbl: "complete setup\n12 cams · 4 bays" },
            { val: "R0", color: "text-accent", lbl: "monthly software\nall open-source" },
            { val: "×6", color: "text-foreground", lbl: "use cases\none camera type" },
            { val: "2d", color: "text-foreground", lbl: "to set up\nthen automatic" },
          ].map((s, i) => (
            <div key={i} className="p-6 border border-border -ml-px -mt-px text-center">
              <div className={`font-serif text-5xl font-extrabold tracking-tight leading-none mb-2 ${s.color}`}>{s.val}</div>
              <div className="font-mono text-xs text-muted-foreground leading-relaxed whitespace-pre-line">{s.lbl}</div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t-2 border-accent pt-6">
          <p className="font-mono text-xs text-muted-foreground leading-relaxed">
            Jetson Orin Nano Super · Ubuntu · Frigate · YOLOv8<br />
            n8n · ERPNext · Grafana · Tailscale
          </p>
          <p className="font-mono text-xs text-muted-foreground sm:text-right">
            FarmVision · 2026
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent ml-2 align-middle" />
          </p>
        </footer>
      </main>
    </div>
  );
};

export default FarmVision;
