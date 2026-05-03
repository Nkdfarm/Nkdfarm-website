import Header from "@/components/Header";

const FarmBoxAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono&display=swap');
        .farmlab-page{
          background:#080808;color:#f0ece4;font-family:'Syne',sans-serif;
          padding:48px 40px;max-width:820px;margin:0 auto;
        }
        .farmlab-page *{box-sizing:border-box}
        .fl-topbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:64px}
        .fl-topbar-left{font-family:'Space Mono',monospace;font-size:9px;color:#d4f542;letter-spacing:.2em;text-transform:uppercase}
        .fl-topbar-right{font-family:'Space Mono',monospace;font-size:9px;color:#555;letter-spacing:.1em}
        .fl-hero{margin-bottom:56px}
        .fl-hero h1{font-size:clamp(52px,9vw,88px);font-weight:800;line-height:.95;letter-spacing:-.03em;color:#f0ece4;margin-bottom:20px}
        .fl-hero h1 em{font-style:normal;color:#d4f542}
        .fl-hero-sub{display:flex;align-items:center;gap:16px;font-family:'Space Mono',monospace;font-size:10px;color:#888;letter-spacing:.05em}
        .fl-hero-sub::before{content:'';width:32px;height:1px;background:#d4f542;flex-shrink:0}
        .fl-tesla{border-top:1px solid #d4f542;border-bottom:1px solid #1c1c1c;padding:20px 0;display:flex;align-items:center;margin-bottom:56px;flex-wrap:wrap}
        .fl-tesla-block{flex:1;min-width:140px}
        .fl-tesla-label{font-family:'Space Mono',monospace;font-size:8px;color:#888;letter-spacing:.15em;text-transform:uppercase;margin-bottom:6px}
        .fl-tesla-items{font-size:13px;font-weight:700;line-height:1.9}
        .fl-tesla-items s{color:#444;font-weight:400}
        .fl-tesla-items b{color:#d4f542}
        .fl-tesla-div{width:1px;height:48px;background:#1c1c1c;margin:0 32px}
        .fl-tesla-arrow{font-family:'Space Mono',monospace;font-size:11px;color:#d4f542;padding:0 20px;text-align:center}
        .fl-fn-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-bottom:56px}
        .fl-fn{padding:22px 20px;border:1px solid #1a1a1a;margin:-1px 0 0 -1px;position:relative;transition:background .15s}
        .fl-fn:hover{background:#0f0f0f}
        .fl-fn-n{font-family:'Space Mono',monospace;font-size:8px;color:#333;position:absolute;top:16px;right:14px}
        .fl-fn-icon{font-size:20px;margin-bottom:10px;display:block}
        .fl-fn-title{font-size:14px;font-weight:800;margin-bottom:5px;color:#f0ece4}
        .fl-fn-accent{width:20px;height:2px;margin-bottom:8px}
        .fl-fn-body{font-family:'Space Mono',monospace;font-size:9px;color:#888;line-height:1.75}
        .fl-pipeline{display:flex;align-items:center;gap:0;margin-bottom:56px;border:1px solid #1a1a1a;border-radius:2px;overflow:hidden}
        .fl-pn{flex:1;text-align:center;padding:18px 8px;border-right:1px solid #1a1a1a}
        .fl-pn:last-child{border-right:none}
        .fl-pn-icon{font-size:18px;margin-bottom:5px}
        .fl-pn-label b{display:block;font-size:10px;font-weight:800;color:#f0ece4;margin-bottom:2px}
        .fl-pn-label{font-family:'Space Mono',monospace;font-size:8px;color:#888;line-height:1.5}
        .fl-vs{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-bottom:56px}
        .fl-vs-col{padding:22px 22px;border:1px solid #1a1a1a}
        .fl-vs-col:first-child{border-right:none}
        .fl-vs-head{font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.1em;text-transform:uppercase;margin-bottom:14px}
        .fl-vs-row{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-family:'Space Mono',monospace;font-size:9px;line-height:1.5}
        .fl-vs-row s{color:#444}
        .fl-vs-row b{color:#f0ece4;font-weight:700}
        .fl-vs-row span{color:#888}
        .fl-vs-total{margin-top:14px;padding-top:12px;border-top:1px solid #1a1a1a;font-family:'Space Mono',monospace;font-size:9px;font-weight:700}
        .fl-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-bottom:48px}
        .fl-st{padding:22px 16px;border:1px solid #1a1a1a;margin:-1px 0 0 -1px;text-align:center}
        .fl-st-val{font-size:34px;font-weight:800;letter-spacing:-.02em;line-height:1;margin-bottom:6px}
        .fl-st-lbl{font-family:'Space Mono',monospace;font-size:8px;color:#888;line-height:1.5}
        .fl-footer{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #d4f542;padding-top:20px;gap:16px;flex-wrap:wrap}
        .fl-footer p{font-family:'Space Mono',monospace;font-size:9px;color:#666;line-height:1.6}
        .fl-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#d4f542;margin-left:8px;vertical-align:middle}
        @media (max-width:640px){
          .farmlab-page{padding:32px 20px}
          .fl-fn-grid{grid-template-columns:repeat(2,1fr)}
          .fl-stats{grid-template-columns:repeat(2,1fr)}
          .fl-vs{grid-template-columns:1fr}
          .fl-vs-col:first-child{border-right:1px solid #1a1a1a;border-bottom:none}
          .fl-pipeline{flex-wrap:wrap}
          .fl-pn{flex:1 1 33%}
          .fl-tesla-div{display:none}
        }
      `}</style>

      <div style={{ background: "#080808", minHeight: "100vh" }}>
        <div className="farmlab-page">
          <div className="fl-topbar">
            <div className="fl-topbar-left">// Farmlab AI · Vision system</div>
            <div className="fl-topbar-right">2025 · SA</div>
          </div>

          <div className="fl-hero">
            <h1>One camera.<br /><em>Everything.</em></h1>
            <div className="fl-hero-sub">The Tesla approach applied to precision agriculture — cameras only, no sensors, no GPS, no LIDAR</div>
          </div>

          <div className="fl-tesla">
            <div className="fl-tesla-block">
              <div className="fl-tesla-label">Tesla autonomous driving</div>
              <div className="fl-tesla-items">
                <s>LIDAR &nbsp; Radar &nbsp; HD maps</s><br />
                <b>Cameras + edge AI ✓</b>
              </div>
            </div>
            <div className="fl-tesla-div"></div>
            <div className="fl-tesla-arrow">= same<br />logic</div>
            <div className="fl-tesla-div"></div>
            <div className="fl-tesla-block">
              <div className="fl-tesla-label">Your farmlab</div>
              <div className="fl-tesla-items">
                <s>Sensors &nbsp; GPS &nbsp; probes</s><br />
                <b>Cameras + Jetson AI ✓</b>
              </div>
            </div>
          </div>

          <div className="fl-fn-grid">
            {[
              { n: "01", icon: "🌱", title: "Crop growth", c: "#4ade80", body: "Tracks plant height, canopy & stage daily per NFT row. No manual scouting." },
              { n: "02", icon: "🐛", title: "Pest & disease", c: "#fb923c", body: "Detects 348 diseases on leaf surface. Alert in minutes, days before spread." },
              { n: "03", icon: "👷", title: "Labour tracking", c: "#60a5fa", body: "Man-hours per bay, dwell time per row. Posts to ERPNext payroll hourly." },
              { n: "04", icon: "🔒", title: "Security", c: "#f87171", body: "After-hours intrusion, PPE check, perimeter breach. Photo alert in 5 sec." },
              { n: "05", icon: "🚪", title: "Open doors", c: "#a78bfa", body: "Cold store or tunnel door left open triggers alert after set timeout. No sensors." },
              { n: "06", icon: "🌡️", title: "Heatmap", c: "#d4f542", body: "Live floor occupancy per bay. Bottlenecks & idle zones visible instantly." },
            ].map((f) => (
              <div key={f.n} className="fl-fn">
                <div className="fl-fn-n">{f.n}</div>
                <span className="fl-fn-icon">{f.icon}</span>
                <div className="fl-fn-title">{f.title}</div>
                <div className="fl-fn-accent" style={{ background: f.c }}></div>
                <div className="fl-fn-body">{f.body}</div>
              </div>
            ))}
          </div>

          <div className="fl-pipeline">
            {[
              { icon: "📷", b: "12 cameras", l: <>360° fisheye<br />PoE · IP66</> },
              { icon: "⚡", b: "Jetson AI", l: <>67 TOPS<br />6 models</> },
              { icon: "⚙️", b: "n8n", l: <>rules<br />routing</> },
              { icon: "📊", b: "ERPNext", l: <>payroll<br />records</> },
              { icon: "📱", b: "You", l: <>Telegram<br />Notion</> },
            ].map((p, i) => (
              <div key={i} className="fl-pn">
                <div className="fl-pn-icon">{p.icon}</div>
                <div className="fl-pn-label"><b>{p.b}</b>{p.l}</div>
              </div>
            ))}
          </div>

          <div className="fl-vs">
            <div className="fl-vs-col">
              <div className="fl-vs-head" style={{ color: "#f87171" }}>❌ Traditional — 6 systems</div>
              {["GPS trackers per worker", "Soil & humidity sensors", "Manual pest scouting daily", "RFID access control", "Separate security NVR", "Door contact sensors"].map((t) => (
                <div key={t} className="fl-vs-row"><s>{t}</s></div>
              ))}
              <div className="fl-vs-total" style={{ color: "#f87171" }}>6 dashboards · 6 failure points</div>
            </div>
            <div className="fl-vs-col">
              <div className="fl-vs-head" style={{ color: "#4ade80" }}>✓ Camera-only — 1 system</div>
              {["tracks workers", "monitors plants", "detects pests", "handles security", "records footage", "checks doors"].map((t) => (
                <div key={t} className="fl-vs-row"><b>Same camera</b> <span>{t}</span></div>
              ))}
              <div className="fl-vs-total" style={{ color: "#4ade80" }}>1 dashboard · 1 failure point</div>
            </div>
          </div>

          <div className="fl-stats">
            {[
              { v: "R39k", c: "#d4f542", l: <>complete setup<br />12 cams · 4 bays</> },
              { v: "R0", c: "#4ade80", l: <>monthly software<br />all open-source</> },
              { v: "×6", c: "#60a5fa", l: <>use cases<br />one camera type</> },
              { v: "2d", c: "#a78bfa", l: <>to set up<br />then automatic</> },
            ].map((s, i) => (
              <div key={i} className="fl-st">
                <div className="fl-st-val" style={{ color: s.c }}>{s.v}</div>
                <div className="fl-st-lbl">{s.l}</div>
              </div>
            ))}
          </div>

          <footer className="fl-footer">
            <p>Jetson Orin Nano Super · Ubuntu · Frigate · YOLOv8<br />n8n · ERPNext · Grafana · Tailscale</p>
            <p style={{ textAlign: "right", color: "#444" }}>Farmlab SA · 2025<span className="fl-dot"></span></p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FarmBoxAI;
