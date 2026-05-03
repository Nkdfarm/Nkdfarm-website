import Header from "@/components/Header";
import { Camera, Cpu, Workflow, BarChart3, Smartphone, Sprout, Bug, HardHat, Lock, DoorOpen, Thermometer } from "lucide-react";

const FarmVision = () => {
  const fns = [
    { n: "01", icon: Sprout, title: "Crop growth", accent: "hsl(var(--accent))", body: "Tracks plant height, canopy & stage daily per NFT row. No manual scouting." },
    { n: "02", icon: Bug, title: "Pest & disease", accent: "hsl(25 90% 55%)", body: "Detects 348 diseases on leaf surface. Alert in minutes, days before spread." },
    { n: "03", icon: HardHat, title: "Labour tracking", accent: "hsl(210 80% 60%)", body: "Man-hours per bay, dwell time per row. Posts to ERPNext payroll hourly." },
    { n: "04", icon: Lock, title: "Security", accent: "hsl(0 75% 60%)", body: "After-hours intrusion, PPE check, perimeter breach. Photo alert in 5 sec." },
    { n: "05", icon: DoorOpen, title: "Open doors", accent: "hsl(265 70% 65%)", body: "Cold store or tunnel door left open triggers alert after set timeout. No sensors." },
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

      <main className="max-w-3xl mx-auto px-6 sm:px-10 pt-8 pb-24">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-16 font-mono text-[10px] uppercase tracking-[0.2em]">
          <span className="text-accent">// FarmVision · Vision system</span>
          <span className="text-muted-foreground">2026 · SA</span>
        </div>

        {/* Hero */}
        <section className="mb-14">
          <h1 className="font-serif font-extrabold leading-[0.95] tracking-tight text-[clamp(52px,9vw,88px)] mb-5">
            One camera.<br />
            <em className="not-italic text-accent">Everything.</em>
          </h1>
          <div className="flex items-center gap-4 font-mono text-[11px] text-muted-foreground tracking-wide">
            <span className="w-8 h-px bg-accent" />
            The Tesla approach applied to precision agriculture — cameras only, no sensors, no GPS, no LIDAR
          </div>
        </section>

        {/* Tesla parallel */}
        <section className="border-t border-accent border-b border-border py-5 flex items-center mb-14">
          <div className="flex-1">
            <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-muted-foreground mb-1.5">Tesla autonomous driving</p>
            <p className="text-[13px] font-bold leading-[1.9]">
              <s className="text-muted-foreground/40 font-normal">LIDAR &nbsp; Radar &nbsp; HD maps</s><br />
              <span className="text-accent">Cameras + edge AI ✓</span>
            </p>
          </div>
          <div className="w-px h-12 bg-border mx-6 sm:mx-8" />
          <div className="font-mono text-[11px] text-accent px-2 sm:px-5 text-center leading-tight">= same<br />logic</div>
          <div className="w-px h-12 bg-border mx-6 sm:mx-8" />
          <div className="flex-1">
            <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-muted-foreground mb-1.5">Your farm</p>
            <p className="text-[13px] font-bold leading-[1.9]">
              <s className="text-muted-foreground/40 font-normal">Sensors &nbsp; GPS &nbsp; probes</s><br />
              <span className="text-accent">Cameras + Jetson AI ✓</span>
            </p>
          </div>
        </section>

        {/* Function grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-14">
          {fns.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.n} className="relative p-5 border border-border -ml-px -mt-px hover:bg-muted/40 transition-colors">
                <span className="absolute top-4 right-3 font-mono text-[8px] text-muted-foreground/60">{f.n}</span>
                <Icon className="w-5 h-5 mb-2.5" style={{ color: f.accent }} />
                <h3 className="font-serif text-[14px] font-extrabold mb-1.5">{f.title}</h3>
                <div className="w-5 h-0.5 mb-2" style={{ background: f.accent }} />
                <p className="font-mono text-[9px] text-muted-foreground leading-[1.75]">{f.body}</p>
              </div>
            );
          })}
        </section>

        {/* Pipeline */}
        <section className="flex items-stretch mb-14 border border-border rounded-sm overflow-hidden">
          {pipeline.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className={`flex-1 text-center px-2 py-4 ${i < pipeline.length - 1 ? "border-r border-border" : ""}`}>
                <Icon className="w-4 h-4 mx-auto mb-1.5 text-accent" />
                <p className="font-mono text-[8px] text-muted-foreground leading-[1.5]">
                  <b className="block font-extrabold text-[10px] text-foreground mb-0.5">{p.title}</b>
                  {p.sub}
                </p>
              </div>
            );
          })}
        </section>

        {/* VS comparison */}
        <section className="grid grid-cols-1 sm:grid-cols-2 mb-14">
          <div className="p-5 border border-border sm:border-r-0">
            <p className="font-mono text-[8px] uppercase tracking-[0.1em] mb-3.5 text-destructive">✕ Traditional — 6 systems</p>
            {["GPS trackers per worker", "Soil & humidity sensors", "Manual pest scouting daily", "RFID access control", "Separate security NVR", "Door contact sensors"].map((t) => (
              <div key={t} className="font-mono text-[9px] mb-2 leading-[1.5]">
                <s className="text-muted-foreground/40">{t}</s>
              </div>
            ))}
            <div className="mt-3.5 pt-3 border-t border-border font-mono text-[9px] font-bold text-destructive">
              6 dashboards · 6 failure points
            </div>
          </div>
          <div className="p-5 border border-border">
            <p className="font-mono text-[8px] uppercase tracking-[0.1em] mb-3.5 text-accent">✓ Camera-only — 1 system</p>
            {[["tracks workers"], ["monitors plants"], ["detects pests"], ["handles security"], ["records footage"], ["checks doors"]].map(([t], i) => (
              <div key={i} className="font-mono text-[9px] mb-2 leading-[1.5] flex gap-2">
                <b className="text-foreground font-bold">Same camera</b>
                <span className="text-muted-foreground">{t}</span>
              </div>
            ))}
            <div className="mt-3.5 pt-3 border-t border-border font-mono text-[9px] font-bold text-accent">
              1 dashboard · 1 failure point
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 mb-12">
          {[
            { val: "R39k", color: "text-accent", lbl: "complete setup\n12 cams · 4 bays" },
            { val: "R0", color: "text-accent", lbl: "monthly software\nall open-source" },
            { val: "×6", color: "text-foreground", lbl: "use cases\none camera type" },
            { val: "2d", color: "text-foreground", lbl: "to set up\nthen automatic" },
          ].map((s, i) => (
            <div key={i} className="p-5 border border-border -ml-px -mt-px text-center">
              <div className={`font-serif text-[34px] font-extrabold tracking-tight leading-none mb-1.5 ${s.color}`}>{s.val}</div>
              <div className="font-mono text-[8px] text-muted-foreground leading-[1.5] whitespace-pre-line">{s.lbl}</div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="flex justify-between items-center border-t border-accent pt-5">
          <p className="font-mono text-[8px] text-muted-foreground leading-[1.6]">
            Jetson Orin Nano Super · Ubuntu · Frigate · YOLOv8<br />
            n8n · ERPNext · Grafana · Tailscale
          </p>
          <p className="font-mono text-[8px] text-muted-foreground/70 text-right">
            FarmVision · 2026
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent ml-2 align-middle" />
          </p>
        </footer>
      </main>
    </div>
  );
};

export default FarmVision;
