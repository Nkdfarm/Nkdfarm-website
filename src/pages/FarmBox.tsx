import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import farmboxHero from "@/assets/farmbox-hero.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&display=swap');

  .fb-root {
    --ink: hsl(var(--foreground));
    --paper: hsl(var(--background));
    --sage: hsl(var(--accent));
    --wheat: hsl(var(--tag-growth));
    --mist: hsl(var(--muted));
    --rule: hsl(var(--border));
    background: var(--paper);
    color: var(--ink);
    font-family: 'Cormorant Garamond', Georgia, serif;
    min-height: 100vh;
  }

  .fb-page {
    max-width: 820px;
    margin: 0 auto;
    padding: 80px 60px 120px;
  }

  .fb-header {
    border-top: 2px solid var(--ink);
    padding-top: 48px;
    margin-bottom: 72px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 40px;
  }
  .fb-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 300;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 16px;
  }
  .fb-title {
    font-size: clamp(42px, 6vw, 72px);
    font-weight: 300;
    line-height: 0.95;
    letter-spacing: -0.02em;
    margin: 0;
  }
  .fb-title em { font-style: italic; color: var(--sage); }
  .fb-header-stat {
    text-align: right;
    border-left: 1px solid var(--rule);
    padding-left: 32px;
  }
  .fb-stat-number {
    font-size: 56px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--sage);
  }
  .fb-stat-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 0.5;
    margin-top: 6px;
  }

  .fb-section {
    margin-bottom: 64px;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fb-section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .fb-section-header {
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 28px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--rule);
  }
  .fb-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--wheat);
  }
  .fb-section-title {
    font-size: 26px;
    font-weight: 300;
    letter-spacing: -0.01em;
    margin: 0;
  }

  .fb-intro {
    font-size: 22px;
    font-weight: 300;
    line-height: 1.55;
    max-width: 580px;
    letter-spacing: 0.005em;
    margin: 0;
  }
  .fb-intro strong { font-weight: 400; color: var(--sage); }

  .fb-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
    margin: 40px 0;
  }
  .fb-metric {
    background: var(--paper);
    padding: 28px 24px;
  }
  .fb-metric-value {
    font-size: 44px;
    font-weight: 300;
    letter-spacing: -0.03em;
    line-height: 1;
  }
  .fb-metric-value sup { font-size: 18px; vertical-align: super; color: var(--sage); }
  .fb-metric-desc {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.45;
    margin-top: 8px;
    line-height: 1.5;
    white-space: pre-line;
  }

  .fb-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }
  .fb-col-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--wheat);
    margin-bottom: 14px;
  }
  .fb-col-body {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.7;
    opacity: 0.85;
    margin: 0;
  }

  .fb-crops {
    display: flex;
    border: 1px solid var(--rule);
    margin-top: 32px;
  }
  .fb-crop {
    flex: 1;
    padding: 20px 16px;
    border-right: 1px solid var(--rule);
    text-align: center;
  }
  .fb-crop:last-child { border-right: none; }
  .fb-crop-glyph { font-size: 22px; margin-bottom: 8px; }
  .fb-crop-name {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.5;
  }

  .fb-chart {
    display: flex;
    align-items: flex-end;
    gap: 24px;
    margin-top: 20px;
    height: 260px;
  }
  .fb-bar-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    flex: 1;
  }
  .fb-bar-top-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.4;
    text-align: center;
  }
  .fb-bars {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
    flex: 1;
    width: 100%;
  }
  .fb-bar-old-top {
    width: 64px;
    height: 148px;
    background: var(--mist);
    border-radius: 2px 2px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: var(--ink);
  }
  .fb-bar-old-bot {
    width: 64px;
    height: 40px;
    background: var(--sage);
    border-radius: 2px 2px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: white;
  }
  .fb-bar-new {
    width: 64px;
    height: 200px;
    background: var(--sage);
    border-radius: 2px 2px 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 10px;
    font-family: 'DM Mono', monospace;
    font-size: 14px;
    color: white;
    align-self: flex-end;
  }
  .fb-bar-seg-label {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.4;
    text-align: center;
  }
  .fb-chart-note {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.1em;
    opacity: 0.4;
    text-transform: uppercase;
    margin-top: 10px;
    line-height: 1.5;
  }

  .fb-pullquote {
    margin: 48px 0;
    padding: 32px 40px;
    border-left: 2px solid var(--sage);
    background: hsl(var(--accent) / 0.06);
  }
  .fb-pullquote p {
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    line-height: 1.5;
    color: var(--sage);
    margin: 0 0 12px;
  }
  .fb-pullquote cite {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    font-style: normal;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 0.4;
  }

  .fb-pillars {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
  }
  .fb-pillar {
    background: var(--paper);
    padding: 32px 24px;
  }
  .fb-pillar-num {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.12em;
    color: var(--wheat);
    margin-bottom: 20px;
  }
  .fb-pillar-head {
    font-size: 19px;
    font-weight: 300;
    line-height: 1.3;
    margin: 0 0 14px;
    letter-spacing: -0.01em;
  }
  .fb-pillar-body {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    line-height: 1.7;
    letter-spacing: 0.02em;
    opacity: 0.5;
    margin: 0;
  }

  .fb-divider {
    border: none;
    border-top: 1px solid var(--rule);
    margin: 40px 0;
  }

  .fb-footer {
    margin-top: 80px;
    padding-top: 24px;
    border-top: 1px solid var(--rule);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .fb-footer-left {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 0.3;
  }
  .fb-footer-right {
    font-size: 13px;
    font-style: italic;
    opacity: 0.35;
    font-weight: 300;
  }

  @media (max-width: 640px) {
    .fb-page { padding: 40px 24px 80px; }
    .fb-header { grid-template-columns: 1fr; }
    .fb-header-stat { text-align: left; border-left: none; padding-left: 0; border-top: 1px solid var(--rule); padding-top: 20px; }
    .fb-metrics { grid-template-columns: 1fr; }
    .fb-two-col { grid-template-columns: 1fr; gap: 32px; }
    .fb-pillars { grid-template-columns: 1fr; }
    .fb-crops { flex-wrap: wrap; }
    .fb-crop { min-width: 33%; }
    .fb-footer { flex-direction: column; gap: 12px; align-items: flex-start; }
  }
`;

export default function FarmBox() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((el) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const addRef = (i: number) => (el: HTMLDivElement | null) => { sectionRefs.current[i] = el; };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <Header />
      <div className="fb-root">
        <div className="fb-page">
          {/* HERO IMAGE */}
          <div style={{ marginBottom: 48, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--rule)' }}>
            <img src={farmboxHero} alt="The Farmbox Solution — A 4,000 sq.m Blueprint for Urban Food Sovereignty" style={{ width: '100%', display: 'block' }} />
          </div>

          {/* HEADER */}
          <div className="fb-header">
            <div>
              <div className="fb-eyebrow">Urban Food Sovereignty · Blueprint</div>
              <h1 className="fb-title">
                The<br /><em>Farmbox</em><br />Solution
              </h1>
            </div>
            <div className="fb-header-stat">
              <div className="fb-stat-number">4,000</div>
              <div className="fb-stat-label">Square metres<br />per unit</div>
            </div>
          </div>

          {/* OVERVIEW */}
          <div className="fb-section" ref={addRef(0)}>
            <p className="fb-intro">
              A precision-agriculture franchise combining{" "}
              <strong>AI-driven production, zero-capital</strong>{" "}
              entrepreneurship, and hyper-local distribution — placing fresh food
              sovereignty within reach of any urban community.
            </p>
            <div className="fb-metrics">
              {[
                { value: "95", sup: "%", desc: "Less water vs.\nfield agriculture" },
                { value: "1000", sup: "", desc: "Families served\nper unit" },
                { value: "84", sup: "¢", desc: "Food dollar\nretained locally" },
              ].map((m, i) => (
                <div className="fb-metric" key={i}>
                  <div className="fb-metric-value">
                    {m.value}
                    {m.sup && <sup>{m.sup}</sup>}
                  </div>
                  <div className="fb-metric-desc">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCTION */}
          <div className="fb-section" ref={addRef(1)}>
            <div className="fb-section-header">
              <span className="fb-tag">01</span>
              <h2 className="fb-section-title">Production — The AI Clever Box</h2>
            </div>
            <div className="fb-two-col">
              <div>
                <div className="fb-col-label">Technology</div>
                <p className="fb-col-body">
                  Each 4,000 sq.m greenhouse unit operates under continuous AI
                  monitoring. Remote "Intelligent Growers" manage nutrient levels,
                  climate, and crop cycles — 24 hours a day, seven days a week —
                  via wide-area network.
                </p>
              </div>
              <div>
                <div className="fb-col-label">The Essential 5 · Crop Rotation</div>
                <div className="fb-crops">
                  {[
                    { g: "🍅", n: "Tomatoes" },
                    { g: "🥒", n: "Cucumbers" },
                    { g: "🥬", n: "Greens" },
                    { g: "🫑", n: "Peppers" },
                    { g: "🍓", n: "Strawberries" },
                  ].map((c) => (
                    <div className="fb-crop" key={c.n}>
                      <div className="fb-crop-glyph">{c.g}</div>
                      <div className="fb-crop-name">{c.n}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DISTRIBUTION */}
          <div className="fb-section" ref={addRef(2)}>
            <div className="fb-section-header">
              <span className="fb-tag">02</span>
              <h2 className="fb-section-title">Distribution — The Food Dollar</h2>
            </div>
            <div className="fb-two-col">
              <div>
                <div className="fb-col-label">Hyper-local radius</div>
                <p className="fb-col-body">
                  Each unit serves as the primary fresh food source within a
                  10-mile radius. A trust-based subscription model replaces
                  transactional supermarket relationships with a regular, reliable
                  supply cycle.
                </p>
              </div>
              <div>
                <div className="fb-col-label">Value capture comparison</div>
                <div className="fb-chart">
                  {/* Current system */}
                  <div className="fb-bar-group">
                    <div className="fb-bar-top-label">Current System</div>
                    <div className="fb-bars">
                      <div className="fb-bar-old-top">84.1¢</div>
                      <div className="fb-bar-old-bot">15.9¢</div>
                    </div>
                    <div className="fb-bar-seg-label">Supply chain / Producer</div>
                  </div>
                  {/* Farmbox */}
                  <div className="fb-bar-group">
                    <div className="fb-bar-top-label">Farmbox</div>
                    <div className="fb-bars">
                      <div className="fb-bar-new">84.1¢</div>
                    </div>
                    <div className="fb-bar-seg-label">Producer keeps all</div>
                  </div>
                </div>
                <div className="fb-chart-note">
                  Direct-to-consumer captures nearly 85% of value typically lost to middlemen
                </div>
              </div>
            </div>
          </div>

          {/* PULLQUOTE */}
          <div className="fb-pullquote">
            <p>"Zero-capital entrepreneurship — no $300,000 initial investment required."</p>
            <cite>Core empowerment principle · Bottom of the Pyramid Franchise Model</cite>
          </div>

          {/* EMPOWERMENT */}
          <div className="fb-section" ref={addRef(3)}>
            <div className="fb-section-header">
              <span className="fb-tag">03</span>
              <h2 className="fb-section-title">Empowerment — Ownership Pathways</h2>
            </div>
            <div className="fb-pillars">
              {[
                {
                  id: "A",
                  head: "Zero-Capital Entry",
                  body: "No $300,000 start-up capital required. Entrepreneurs operate under a Pay-to-Own contract structure from day one.",
                },
                {
                  id: "B",
                  head: "7-Year Full Ownership",
                  body: "A clearly defined pathway to full ownership over seven years, with progressive equity accumulation built into the franchise agreement.",
                },
                {
                  id: "C",
                  head: "AI-Proof Careers",
                  body: "Stable, local roles resistant to white-collar automation — rooted in physical production, logistics, and community relationships.",
                },
              ].map((p) => (
                <div className="fb-pillar" key={p.id}>
                  <div className="fb-pillar-num">{p.id}</div>
                  <h3 className="fb-pillar-head">{p.head}</h3>
                  <p className="fb-pillar-body">{p.body}</p>
                </div>
              ))}
            </div>

            <hr className="fb-divider" />

            <div className="fb-two-col">
              <div>
                <div className="fb-col-label">Model philosophy</div>
                <p className="fb-col-body">
                  The Bottom of the Pyramid model deliberately includes the
                  lowest-income segments of the economy, using enterprise as the
                  mechanism for wealth creation rather than aid.
                </p>
              </div>
              <div>
                <div className="fb-col-label">Community impact</div>
                <p className="fb-col-body">
                  Each franchise unit anchors a local food economy — reducing
                  dependence on distant supply chains while building durable,
                  place-based livelihoods.
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="fb-footer">
            <div className="fb-footer-left">The Farmbox Solution · Urban Food Sovereignty Blueprint</div>
            <div className="fb-footer-right">4,000 sq.m · 500 families · 10-mile radius</div>
          </div>

        </div>
      </div>
    </>
  );
}
