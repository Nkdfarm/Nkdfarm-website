import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import farmsimDashboard from "@/assets/farmsim-dashboard.png";
import ArticleCard from "@/components/ArticleCard";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

// ── DATA (from FarmTest) ──────────────────────────────
const monthlyData = [
  { month: "Jan", kg: 12344, color: "summer" },
  { month: "Feb", kg: 9678, color: "summer" },
  { month: "Mar", kg: 9217, color: "autumn" },
  { month: "Apr", kg: 9846, color: "autumn" },
  { month: "May", kg: 6252, color: "autumn" },
  { month: "Jun", kg: 4880, color: "winter" },
  { month: "Jul", kg: 5908, color: "winter" },
  { month: "Aug", kg: 5117, color: "winter" },
  { month: "Sep", kg: 6111, color: "spring" },
  { month: "Oct", kg: 9514, color: "spring" },
  { month: "Nov", kg: 9090, color: "spring" },
  { month: "Dec", kg: 9742, color: "summer" },
];

const cropData = [
  { name: "Tomatoes", kg: 27502 },
  { name: "Cucumbers", kg: 21370 },
  { name: "Strawberries", kg: 6599 },
  { name: "Lettuce", kg: 13392 },
  { name: "Spinach", kg: 8714 },
  { name: "Rocket", kg: 5588 },
  { name: "Bok Choy", kg: 3231 },
  { name: "Basil", kg: 2119 },
  { name: "Microgreens", kg: 4436 },
  { name: "Coriander", kg: 1680 },
  { name: "Parsley", kg: 1276 },
  { name: "Mint", kg: 1137 },
  { name: "Chives", kg: 656 },
];

const pieColors = [
  "hsl(160, 50%, 18%)", "hsl(153, 40%, 30%)", "hsl(338, 72%, 55%)", "hsl(145, 45%, 49%)",
  "hsl(145, 35%, 57%)", "hsl(145, 30%, 74%)", "hsl(145, 28%, 82%)", "hsl(37, 78%, 58%)",
  "hsl(37, 85%, 68%)", "hsl(24, 40%, 40%)", "hsl(24, 32%, 53%)", "hsl(24, 32%, 63%)", "hsl(24, 28%, 73%)",
];

const weeklyData = Array.from({ length: 52 }, (_, i) => {
  const vals = [
    2469,2469,2469,2469,2469,2420,2420,2420,2420,2304,2304,2304,2304,
    1969,1969,1969,1969,1969,1563,1563,1563,1563,1220,1220,1220,1220,
    1182,1182,1182,1182,1182,1279,1279,1279,1279,1528,1528,1528,1528,
    1673,1673,1673,1673,1673,1949,1949,1949,1949,2262,2262,2262,2262,
  ];
  let season = "spring";
  if (i < 9) season = "summer";
  else if (i < 22) season = "autumn";
  else if (i < 35) season = "winter";
  return { week: `W${i + 1}`, kg: vals[i], season };
});

const geoData = [
  { market: "🇿🇦 Cape Town", rev: 15.2 },
  { market: "🇬🇧 London", rev: 33.7 },
  { market: "🇦🇪 Dubai", rev: 47.7 },
  { market: "🇸🇬 Singapore", rev: 50.0 },
  { market: "🇳🇱 Amsterdam", rev: 30.1 },
  { market: "🇦🇺 Sydney", rev: 41.9 },
];

const targets = [
  { icon: "🌱", title: "Weekly Yield Forecast", desc: "Predict how many kilograms each crop produces each week across 52 weeks, adjusted for Cape Town's seasonal light variation (DLI factors from 0.57 in winter to 1.0 in summer).", metric: "📊 Weekly Yield Table", variant: "default" },
  { icon: "🏘️", title: "Household Demand Coverage", desc: "Calculate how many premium Cape Town households (avg. 2.8 persons) the greenhouse can fully supply each week, based on per-capita consumption benchmarks.", metric: "🏠 Up to 569 HH/week", variant: "accent" },
  { icon: "💰", title: "Revenue Modelling", desc: "Apply three pricing modes — farm gate, premium retail, or a custom % of retail — to every weekly yield figure to generate weekly and annual revenue projections.", metric: "💵 R15.2M/yr (Mode 3, 85%)", variant: "default" },
  { icon: "🌍", title: "Geographic Revenue Comparison", desc: "Compare the same 4,000 m² greenhouse performance across 6 global cities using local price databases and climate factors.", metric: "🌏 Dubai = 3.14× CT Revenue", variant: "default" },
  { icon: "🎯", title: "Space Optimisation", desc: "Test three allocation strategies to find the best m² split across 13 crops that maximises both revenue per m² and supply-demand balance.", metric: "🎯 Target: 1,300 subscribers", variant: "accent" },
  { icon: "💼", title: "Profitability & CAPEX", desc: "Full CAPEX breakdown (R4.6M total for 4,000 m²), financing assumptions at SA prime + margin (~11.5%), OPEX by line item, and net profitability overlay per year.", metric: "💼 R4.6M total build cost", variant: "default" },
];

const steps = [
  { title: "Set Your Crop Allocation", desc: "Open the Crop Allocation tab. Adjust the m² for each of the 13 crops — the total must equal exactly 4,000 m².", tag: "Tab: 🌿 Crop Allocation" },
  { title: "Review the Weekly Yield Table", desc: "The Weekly Yield Table auto-calculates kg output for each crop across all 52 weeks, applying Cape Town seasonal DLI factors.", tag: "Tab: 📊 Weekly Yield Table" },
  { title: "Check the Monthly Summary", desc: "The Monthly Summary aggregates weekly data into monthly kg totals per crop, an annual total row, and an availability score.", tag: "Tab: 📅 Monthly Summary" },
  { title: "Select a Pricing Mode & Read Revenue", desc: "In the Revenue Overlay tab, select Mode 1 (Farm Gate), Mode 2 (Woolworths Retail), or Mode 3 (Custom % of Retail).", tag: "Tab: 💵 Revenue Overlay" },
  { title: "Use the Space Optimiser", desc: "The Space Optimiser lets you set a Subscriber Target (default 1,300 households) and compare three m² allocation strategies.", tag: "Tab: 🎯 Space Optimiser" },
];

const crops = [
  { name: "🍅 Tomatoes", area: "707 m² · 17.7%", pct: 100 },
  { name: "🥒 Cucumbers", area: "640 m² · 16.0%", pct: 90 },
  { name: "🍓 Strawberries", area: "898 m² · 22.5%", pct: 100 },
  { name: "🥬 Lettuce", area: "442 m² · 11.1%", pct: 62 },
  { name: "🌿 Spinach", area: "363 m² · 9.1%", pct: 51 },
  { name: "🌱 Rocket", area: "277 m² · 6.9%", pct: 39 },
  { name: "🥦 Bok Choy", area: "143 m² · 3.6%", pct: 20 },
  { name: "🌿 Basil", area: "162 m² · 4.1%", pct: 23 },
  { name: "🌱 Microgreens", area: "50 m² · 1.3%", pct: 7 },
  { name: "🌿 Coriander", area: "106 m² · 2.7%", pct: 15 },
  { name: "🌿 Parsley", area: "92 m² · 2.3%", pct: 13 },
  { name: "🌿 Mint", area: "64 m² · 1.6%", pct: 9 },
  { name: "🌿 Chives", area: "56 m² · 1.4%", pct: 8 },
];

const seasons = [
  { emoji: "☀️", title: "Summer (Dec–Feb)", desc: "Peak light (11 hrs/day). Tomatoes, cucumbers, basil and microgreens at maximum output. Yield factor: 1.0", bg: "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800/40" },
  { emoji: "🍂", title: "Autumn (Mar–May)", desc: "All-round excellent production. Strawberries building toward peak. Yield factor: 0.68–0.92", bg: "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800/40" },
  { emoji: "❄️", title: "Winter (Jun–Aug)", desc: "Lower light reduces vine crop yield ~40%. PEAK season for strawberries. Weekly total drops to ~1,180 kg. Yield factor: 0.57–0.60", bg: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800/40" },
  { emoji: "🌸", title: "Spring (Sep–Nov)", desc: "Rapid recovery across all crops. Most balanced weekly basket for subscribers. Yield factor: 0.67–0.90", bg: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800/40" },
];

const geoTable = [
  { market: "🇿🇦 Cape Town", currency: "ZAR", kg: "97,699", rev: "R15.2M", index: "1.00×", indexLevel: "base", days: 365, shutdown: 0 },
  { market: "🇬🇧 London", currency: "GBP", kg: "74,780", rev: "R33.7M", index: "2.22×", indexLevel: "high", days: 281, shutdown: 12 },
  { market: "🇦🇪 Dubai", currency: "AED", kg: "94,327", rev: "R47.7M", index: "3.14×", indexLevel: "high", days: 281, shutdown: 12 },
  { market: "🇸🇬 Singapore", currency: "SGD", kg: "103,645", rev: "R50.0M", index: "3.30×", indexLevel: "high", days: 365, shutdown: 0 },
  { market: "🇳🇱 Amsterdam", currency: "EUR", kg: "78,029", rev: "R30.1M", index: "1.98×", indexLevel: "high", days: 309, shutdown: 8 },
  { market: "🇦🇺 Sydney", currency: "AUD", kg: "109,294", rev: "R41.9M", index: "2.76×", indexLevel: "high", days: 365, shutdown: 0 },
];

const conclusions = [
  { title: "Cape Town is a Strong Home Base", desc: "At R15.2M annual revenue (Mode 3, 85% retail), no supplemental lighting, 365 growing days, and zero shutdown weeks, Cape Town is the lowest-risk starting point.", dot: "bg-accent" },
  { title: "Herbs & Microgreens Punch Far Above Their Weight", desc: "Microgreens generate R29,431/m²/yr — roughly 20× the revenue per m² of tomatoes. Any expansion in this category meaningfully lifts the total.", dot: "bg-yellow-500" },
  { title: "The Greenhouse Can Serve ~569 Households Per Week", desc: "Assuming premium CT households consume 2× the national average, weekly net supply supports approximately 569 households.", dot: "bg-accent" },
  { title: "Dubai and Singapore Offer 3–3.3× Cape Town Revenue", desc: "The same physical greenhouse would generate R47–50M/yr in Dubai or Singapore (vs R15M in CT) — a compelling case for future licensing.", dot: "bg-yellow-500" },
  { title: "Winter Is the Primary Risk Period", desc: "The June–August DLI trough reduces weekly output from ~2,469 kg to ~1,182 kg (-52%). Operators should plan cash flow management for weeks 23–35.", dot: "bg-destructive" },
];

const seasonBarColor = (season: string) => {
  switch (season) {
    case "summer": return "hsl(37, 78%, 58%)";
    case "autumn": return "hsl(145, 35%, 50%)";
    case "winter": return "hsl(153, 40%, 30%)";
    case "spring": return "hsl(145, 55%, 60%)";
    default: return "hsl(174, 100%, 37%)";
  }
};

const CustomBarShape = (props: any) => {
  const { x, y, width, height, season, color: _c } = props;
  const fill = seasonBarColor(season || _c);
  return <rect x={x} y={y} width={width} height={height} rx={4} fill={fill} />;
};

const FarmSim = () => {
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
    document.querySelectorAll(".fs-fade-up, .fst-fade").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background grid + glow */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div className="absolute w-[600px] h-[600px] rounded-full top-[10%] left-[40%] bg-accent/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 lg:pt-12 lg:pb-32 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <h1 className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 delay-100 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-3">
              Model your<br /><span className="text-accent italic">farm's future</span><br />with precision.
            </h1>
            <p className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 delay-200 text-xl md:text-2xl text-muted-foreground italic font-serif mb-9 leading-relaxed">
              Before the first seed is planted.
            </p>
            <p className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 delay-300 text-sm text-muted-foreground leading-[1.8]">
              FarmSim is a dedicated financial simulator for FarmBox smart greenhouse projects. Configure your unit, run your numbers, and arrive at your investment decision with full visibility on CapEx, OpEx, and projected ROI.
            </p>
          </div>

          {/* Right: Coming Soon Block */}
          <div className="lg:col-span-2">
            <div className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 delay-[400ms] relative rounded-xl p-7 bg-accent/5 border border-accent/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-accent to-transparent" />
              <div className="font-mono text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-3.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Launching soon
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">FarmBox Configurator</h3>
              <p className="text-xs text-muted-foreground leading-[1.7] mb-5">
                The interactive configurator is currently in development by the Naked Farms team. It will allow you to model your specific FarmBox project end-to-end — from initial capital outlay to 10-year net returns.
              </p>
              <img
                src={farmsimDashboard}
                alt="FarmSim financial simulator dashboard showing crop projections and KPIs"
                className="w-full rounded-lg mb-5"
              />
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-[11px] font-medium px-3 py-1 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-400">CapEx Modelling</span>
                <span className="font-mono text-[11px] font-medium px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent">OpEx Simulation</span>
                <span className="font-mono text-[11px] font-medium px-3 py-1 rounded-full border border-yellow-600/30 bg-yellow-600/10 text-yellow-600 dark:text-yellow-500">ROI Projection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS FARMSIM */}
      <section className="border-t border-border pt-10 pb-20 lg:pt-14 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700">
            <h2 className="text-3xl lg:text-4xl font-bold leading-[1.1]">
              Numbers that<br />farmers can <span className="text-accent italic">trust.</span>
            </h2>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <p className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 text-base text-muted-foreground leading-[1.85]">
              FarmSim is built by <strong className="text-foreground font-semibold">Naked Farms</strong> — the engineering and management entity behind every FarmBox smart greenhouse unit. When you configure a project in FarmSim, the numbers aren't generic estimates. They are drawn from real-world FarmBox deployment data, local climate parameters, and Naked Farms' own engineering cost models.
            </p>
            <p className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 delay-100 text-base text-muted-foreground leading-[1.85]">
              The FarmBox Configurator — currently in development — will let you simulate a full project lifecycle: from <strong className="text-foreground font-semibold">initial CapEx</strong> (the build cost and your 80/20 equity split) through <strong className="text-foreground font-semibold">annual OpEx</strong> (Naked Farms licensing, seed supply, AI management, and agronomy services) all the way to your projected <strong className="text-foreground font-semibold">net ROI</strong> at and beyond the Year 7 ownership transfer.
            </p>

            {/* Three Pillars */}
            <div className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 delay-200 grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mt-10">
              {[
                { icon: "CAPEX", title: "Build Cost", desc: "Model the $300K FarmBox build cost, your 20% equity contribution, and funder repayment schedule over 7 years.", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
                { icon: "OPEX", title: "Running Costs", desc: "Simulate annual operating expenditure — licensing, AI management, seeds, 24/7 agronomy, and site-specific variables.", color: "text-accent bg-accent/10 border-accent/20" },
                { icon: "ROI", title: "Net Returns", desc: "Project your net income trajectory across the 7-year pay-to-own period and full profit capture from Year 8 onwards.", color: "text-yellow-600 dark:text-yellow-500 bg-yellow-600/10 border-yellow-600/20" },
              ].map((p) => (
                <div key={p.icon} className="bg-card p-8 hover:bg-muted/50 transition-colors">
                  <span className={`font-mono text-[11px] font-medium tracking-[0.12em] inline-block px-2.5 py-1 rounded border mb-5 ${p.color}`}>{p.icon}</span>
                  <h3 className="font-serif text-xl font-bold mb-2.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.7]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Link to Finance Article */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-card p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Understand the Financial Model</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Before you configure your FarmBox project, dive into the full financing breakdown — the 80/20 capital formula, the 7-year ownership timeline, and how the numbers work for you from day one.
              </p>
              <div className="max-w-sm mx-auto">
                <ArticleCard
                  id="001"
                  title="How to Finance My FarmBox"
                  category="Financing"
                  date="Mar 19, 2026"
                  image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* ═══════ FARM TEST: HYDROPONIC YIELD MODEL ═════ */}
      {/* ═══════════════════════════════════════════════ */}

      {/* HERO */}
      <section className="relative overflow-hidden bg-foreground text-primary-foreground">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=1800&q=80')" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <span className="inline-block bg-accent text-accent-foreground text-[11px] font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6">
            🌿 FarmBox Cape Town — V5 Model
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-5">
            Hydroponic Yield &<br /><span className="text-accent">Demand Model</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mb-12 leading-relaxed">
            A fully dynamic 52-week yield, revenue, and household supply model for a 4,000 m² hydroponic greenhouse in Cape Town, South Africa — seasonally adjusted for Southern Hemisphere light conditions.
          </p>
          <div className="flex flex-wrap gap-10">
            {[
              { val: "97,699", lbl: "Annual kg output" },
              { val: "R15.2M", lbl: "Est. annual revenue (ZAR)" },
              { val: "569", lbl: "Households fed weekly" },
              { val: "13", lbl: "Crops grown" },
            ].map((s) => (
              <div key={s.lbl}>
                <span className="block font-serif text-3xl lg:text-4xl font-bold text-accent">{s.val}</span>
                <span className="text-xs text-primary-foreground/50 uppercase tracking-widest font-medium">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGETS */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-2">Model Targets</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What This Model Is Designed to Answer</h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            The FarmBox model translates greenhouse space into real-world outputs: kilograms produced, households served, revenue generated, and geographic expansion potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targets.map((t) => (
              <div key={t.title} className="fst-fade opacity-0 translate-y-6 transition-all duration-700 bg-card border border-border rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group">
                <div className={`absolute top-0 left-0 right-0 h-1 ${t.variant === "accent" ? "bg-accent" : "bg-accent/40"}`} />
                <span className="text-3xl mb-4 block">{t.icon}</span>
                <h3 className="font-serif text-lg font-bold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${t.variant === "accent" ? "bg-accent/10 text-accent" : "bg-muted text-foreground"}`}>
                  {t.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative bg-foreground overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[400px]">
          <div
            className="lg:col-span-3 min-h-[300px] bg-cover bg-center opacity-90"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=900&q=80')" }}
          />
          <div className="lg:col-span-2 p-10 lg:p-14 flex flex-col justify-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground mb-4 leading-tight">
              Year-Round Production in Cape Town's Mediterranean Climate
            </h2>
            <p className="text-primary-foreground/65 text-sm mb-8 leading-relaxed">
              Cape Town's Mediterranean climate with 11 hrs summer sunlight and mild winters creates ideal greenhouse conditions — no supplemental lighting required.
            </p>
            <div className="flex flex-wrap gap-7">
              {[
                { v: "0.57–1.0", l: "DLI Yield Factor" },
                { v: "365", l: "Growing Days/Year" },
                { v: "R0", l: "Lighting Cost" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-2xl font-bold text-accent">{s.v}</div>
                  <div className="text-[10px] text-primary-foreground/40 uppercase tracking-widest">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-2">User Guide</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How to Use the Model</h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            The model is built around a core data flow: space allocation drives yield, yield drives demand coverage, and pricing drives revenue.
          </p>
          <div className="relative pl-10">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/20" />
            {steps.map((s, i) => (
              <div key={s.title} className="fst-fade opacity-0 translate-y-6 transition-all duration-700 relative flex gap-6 pb-10 last:pb-0">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground font-serif font-bold text-sm flex items-center justify-center flex-shrink-0 z-10 -ml-10 ring-4 ring-card">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{s.desc}</p>
                  <span className="inline-block text-[11px] font-semibold bg-muted text-muted-foreground px-3 py-1 rounded">{s.tag}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-accent/10 border-l-4 border-accent rounded-r-xl p-5">
            <p className="text-sm text-foreground leading-relaxed">
              <strong>💡 Key Tip:</strong> Microgreens earn R29,431/m²/yr — the highest revenue-per-m² of any crop. The model recommends growing the subscriber base to absorb all crops rather than reducing the microgreen allocation.
            </p>
          </div>
        </div>
      </section>

      {/* CROPS */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-2">Crop Portfolio</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">13 Crops Across 4 Growing Systems</h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            The 4,000 m² is split across high-wire vine systems, NFT leafy green channels, elevated strawberry troughs, and ebb & flow tables.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {crops.map((c) => (
              <div key={c.name} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
                <span className="font-medium text-sm">{c.name}</span>
                <div className="text-right">
                  <div className="text-[11px] text-muted-foreground">{c.area}</div>
                  <div className="w-12 h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-2">Charts & Analysis</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Yield, Revenue & Seasonal Patterns</h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            All figures from the live model — 52-week yield, monthly crop breakdown, and revenue comparison across growing seasons.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-7">
            <div className="bg-background border border-border rounded-2xl p-6">
              <h4 className="font-serif font-bold mb-1">Monthly Total Yield (kg)</h4>
              <p className="text-xs text-muted-foreground mb-6">All 13 crops combined — Cape Town seasonality applied</p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={(v) => `${v / 1000}k`} tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(v: number) => [`${v.toLocaleString()} kg`, "Yield"]} />
                  <Bar dataKey="kg" shape={<CustomBarShape />} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-background border border-border rounded-2xl p-6">
              <h4 className="font-serif font-bold mb-1">Annual KG by Crop</h4>
              <p className="text-xs text-muted-foreground mb-6">Relative contribution to 97,699 kg/year total output</p>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie data={cropData} dataKey="kg" nameKey="name" cx="50%" cy="50%" innerRadius={55} outerRadius={100} paddingAngle={1}>
                    {cropData.map((_, i) => (
                      <Cell key={i} fill={pieColors[i]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number) => [`${v.toLocaleString()} kg`]} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-background border border-border rounded-2xl p-6 mb-7">
            <h4 className="font-serif font-bold mb-1">Weekly Total KG — Full 52-Week View</h4>
            <p className="text-xs text-muted-foreground mb-6">Peak summer output ~2,469 kg/week · Winter trough ~1,182 kg/week</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" tick={{ fontSize: 9 }} interval={3} />
                <YAxis tickFormatter={(v) => `${v / 1000}k`} tick={{ fontSize: 12 }} domain={[800, "auto"]} />
                <Tooltip formatter={(v: number) => [`${v.toLocaleString()} kg`, "Yield"]} />
                <Bar dataKey="kg" shape={<CustomBarShape />} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-background border border-border rounded-2xl p-6">
            <h4 className="font-serif font-bold mb-1">Annual Revenue Index by Geography (ZAR)</h4>
            <p className="text-xs text-muted-foreground mb-6">Same 4,000 m² greenhouse at Mode 3 pricing — Cape Town = baseline 1.0×</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={geoData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" tickFormatter={(v) => `R${v}M`} tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="market" width={130} tick={{ fontSize: 13 }} />
                <Tooltip formatter={(v: number) => [`R${v}M / year`]} />
                <Bar dataKey="rev" fill="hsl(174, 100%, 37%)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* SEASONS */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-2">Seasonal Guide</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What to Expect Each Season</h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Cape Town sits in the Southern Hemisphere — summer runs December–February, winter June–August.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seasons.map((s) => (
              <div key={s.title} className={`fst-fade opacity-0 translate-y-6 transition-all duration-700 rounded-2xl border p-6 text-center ${s.bg}`}>
                <span className="text-3xl block mb-3">{s.emoji}</span>
                <h4 className="font-serif font-bold text-sm mb-2">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO TABLE */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-2">Geographic Expansion</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Revenue Potential Across 6 Markets</h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            The same 4,000 m² greenhouse modelled across 6 global cities, using local climate data, retail price benchmarks, and seasonal factors.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-foreground text-primary-foreground">
                  <th className="text-left px-5 py-3 font-medium text-xs tracking-wide">Market</th>
                  <th className="text-left px-5 py-3 font-medium text-xs tracking-wide">Currency</th>
                  <th className="text-left px-5 py-3 font-medium text-xs tracking-wide">Annual KG</th>
                  <th className="text-left px-5 py-3 font-medium text-xs tracking-wide">Annual Rev (ZAR)</th>
                  <th className="text-left px-5 py-3 font-medium text-xs tracking-wide">Rev Index</th>
                  <th className="text-left px-5 py-3 font-medium text-xs tracking-wide">Growing Days</th>
                  <th className="text-left px-5 py-3 font-medium text-xs tracking-wide">Shutdown Wks</th>
                </tr>
              </thead>
              <tbody>
                {geoTable.map((r, i) => (
                  <tr key={r.market} className={i % 2 === 1 ? "bg-muted/30" : "bg-background"}>
                    <td className="px-5 py-3 font-semibold">{r.market}</td>
                    <td className="px-5 py-3 text-muted-foreground">{r.currency}</td>
                    <td className="px-5 py-3">{r.kg}</td>
                    <td className="px-5 py-3 font-medium">{r.rev}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${r.indexLevel === "high" ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"}`}>
                        {r.index}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{r.days}</td>
                    <td className="px-5 py-3 text-muted-foreground">{r.shutdown}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CONCLUSIONS */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-2">Conclusions</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Key Takeaways from the Model</h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Based on the V5 model outputs, six strategic insights stand out for the FarmBox Cape Town operation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {conclusions.map((c) => (
              <div key={c.title} className="fst-fade opacity-0 translate-y-6 transition-all duration-700 bg-card border border-border rounded-xl p-6 flex gap-4">
                <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${c.dot}`} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">{c.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTIFY */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 relative bg-card border border-accent/20 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Be first to access FarmSim.</h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[400px]">
                Leave your email and we'll notify you the moment the FarmBox Configurator goes live. No spam — one email, when it's ready.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="px-5 py-3.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent sm:w-64"
              />
              <button className="bg-accent text-accent-foreground font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-accent/90 transition-all whitespace-nowrap">
                Notify me
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FarmSim;
