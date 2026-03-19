import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";
import farmsimDashboard from "@/assets/farmsim-dashboard.jpg";
import { Link } from "react-router-dom";
import ArticleCard from "@/components/ArticleCard";

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
    document.querySelectorAll(".fs-fade-up").forEach((el) => observerRef.current?.observe(el));
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 pb-24 lg:pt-12 lg:pb-32 relative z-10">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <h1 className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 delay-100 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-3">
              Model your<br /><span className="text-accent italic">farm's future</span><br />with precision.
            </h1>
            <p className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 delay-200 text-xl md:text-2xl text-muted-foreground italic font-serif mb-9 leading-relaxed">
              Before the first seed is planted.
            </p>
            <p className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 delay-300 text-sm text-muted-foreground leading-[1.8] max-w-[420px] mb-12">
              FarmSim is a dedicated financial simulator for FarmBox smart greenhouse projects. Configure your unit, run your numbers, and arrive at your investment decision with full visibility on CapEx, OpEx, and projected ROI.
            </p>

            {/* Coming Soon Block */}
            <div className="fs-fade-up opacity-0 translate-y-6 transition-all duration-700 delay-[400ms] relative max-w-[420px] rounded-xl p-7 bg-accent/5 border border-accent/20 overflow-hidden">
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

      {/* NOTIFY */}
      <section className="pb-16 lg:pb-20">
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
