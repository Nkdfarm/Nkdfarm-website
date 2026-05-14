import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import farmboxHero from "@/assets/farmbox-hero.png";
import "@/styles/farmbox.css";

export default function FarmBox() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((el) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {if (entry.isIntersecting) el.classList.add("visible");},
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const addRef = (i: number) => (el: HTMLDivElement | null) => {sectionRefs.current[i] = el;};

  return (
    <>
      <Header />
      <div className="fb-root">
        <div className="fb-page">
          {/* HERO IMAGE */}
          <div style={{ marginBottom: 48, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--rule)' }}>
            <img src={farmboxHero} alt="The Farmbox Solution — A 4,000 sq.m Blueprint for Urban Food Sovereignty" loading="lazy" style={{ width: '100%', display: 'block' }} />
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
              <strong>AI-driven production, 80/20 capital split</strong>{" "}
              entrepreneurship, and hyper-local distribution — placing fresh food
              sovereignty within reach of any urban community.
            </p>
            <div className="fb-metrics">
              {[
              { value: "95", sup: "%", desc: "Less water vs.\nfield agriculture" },
              { value: "1000", sup: "", desc: "Families served\nper unit" },
              { value: "84", sup: "¢", desc: "Food dollar\nretained locally" }].
              map((m, i) =>
              <div className="fb-metric" key={i}>
                  <div className="fb-metric-value">
                    {m.value}
                    {m.sup && <sup>{m.sup}</sup>}
                  </div>
                  <div className="fb-metric-desc">{m.desc}</div>
                </div>
              )}
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
                  { g: "🍓", n: "Strawberries" }].
                  map((c) =>
                  <div className="fb-crop" key={c.n}>
                      <div className="fb-crop-glyph">{c.g}</div>
                      <div className="fb-crop-name">{c.n}</div>
                    </div>
                  )}
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
                  <div className="fb-bar-group">
                    <div className="fb-bar-top-label">Current System</div>
                    <div className="fb-bars">
                      <div className="fb-bar-old-top">84.1¢</div>
                      <div className="fb-bar-old-bot">15.9¢</div>
                    </div>
                    <div className="fb-bar-seg-label">Supply chain / Producer</div>
                  </div>
                  <div className="fb-bar-group">
                    <div className="fb-bar-top-label">Farmbox</div>
                    <div className="fb-bars">
                      <div className="fb-bar-new">100.0¢</div>
                    </div>
                    <div className="fb-bar-seg-label">Producer keeps all</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EMPOWERMENT */}
          <div className="fb-section" ref={addRef(3)}>
            <div className="fb-section-header">
              <span className="fb-tag">03</span>
              <h2 className="fb-section-title">Empowerment — Ownership Pathways</h2>
            </div>
            <div className="fb-pillars">
              {[{
                id: "A",
                head: "80/20 capital split",
                body: "Access a $300K FarmBox with only $60K personal contribution.\nEntrepreneurs operate under a Pay-to-Own contract structure from day one."
              },
              {
                id: "B",
                head: "7-Year Full Ownership",
                body: "A clearly defined pathway to full ownership over seven years, with progressive equity accumulation built into the franchise agreement."
              },
              {
                id: "C",
                head: "AI-Proof Careers",
                body: "Stable, local roles resistant to white-collar automation — rooted in physical production, logistics, and community relationships."
              }].
              map((p) =>
              <div className="fb-pillar" key={p.id}>
                  <div className="fb-pillar-num">{p.id}</div>
                  <h3 className="fb-pillar-head">{p.head}</h3>
                  <p className="fb-pillar-body">{p.body}</p>
                </div>
              )}
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

        </div>
      </div>
    </>);
}
