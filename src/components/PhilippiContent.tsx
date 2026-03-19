import { MapPin, Scale, Users, GraduationCap, Wind, Expand } from "lucide-react";

const SectionHeading = ({ children }: {children: React.ReactNode;}) =>
<h2 className="text-2xl md:text-3xl font-bold mb-2 pt-2 border-t-2 border-accent/30 pb-3 text-foreground font-serif">
    {children}
  </h2>;


const advantages = [
{
  num: 1,
  icon: <MapPin className="w-4 h-4" />,
  label: "Climate",
  title: "Subtropical zone — a direct analogy for global high-demand food markets",
  desc: "Philippi sits in South Africa's subtropical climate zone — the same classification as the Mediterranean basin, coastal South America, coastal Australia, and southern China. These are the world's fastest-growing premium fresh food demand markets. A FarmBox system engineered under Philippi's conditions requires minimal adaptation before deployment in any of these regions. One R&D site. Global climate relevance."
},
{
  num: 2,
  icon: <Scale className="w-4 h-4" />,
  label: "Regulation",
  title: "Very low or no regulation for agricultural buildings",
  desc: "South Africa's agricultural building environment carries minimal regulatory burden compared to Europe or North America. This dramatically accelerates construction timelines — reducing permit lead times, compliance costs, and the administrative friction that delays R&D programmes at comparable sites in more regulated jurisdictions. Speed-to-learn is a core competitive advantage at this stage of the innovation loop."
},
{
  num: 3,
  icon: <Users className="w-4 h-4" />,
  label: "Labour",
  title: "Very low labour cost for non-specialised workers",
  desc: "Philippi's local labour pool provides highly competitive rates for construction, operations, and general agricultural work. This makes the initial FarmLab and FarmBox1 build significantly more cost-effective — stretching investor capital further and reducing the cost basis for all operational benchmarking. Lower cost-per-data-point directly improves the R&D ROI."
},
{
  num: 4,
  icon: <GraduationCap className="w-4 h-4" />,
  label: "Talent",
  title: "Very attractive country for local and nomad high-skilled talent",
  desc: "Cape Town consistently ranks among Africa's premier destinations for engineers, agronomists, software developers, and digital nomads. South Africa's infrastructure, quality of life, and cost of living make it highly attractive for international technical talent. Naked Farms can recruit world-class expertise at salary levels that would be impossible at equivalent European or North American sites."
},
{
  num: 5,
  icon: <Wind className="w-4 h-4" />,
  label: "Stress Testing",
  title: "Extreme conditions for greenhouse structure testing",
  desc: "The Cape Flats present two of the most demanding physical challenges an agricultural structure can face: soft, sandy, unstable soil with poor load-bearing characteristics, and some of urban South Africa's strongest seasonal wind loads \u2014 the famous 'Cape Doctor' south-easterly. A FarmBox structure that performs reliably here is over-engineered by design for any global deployment."
},
{
  num: 6,
  icon: <Expand className="w-4 h-4" />,
  label: "Scale",
  title: "Space for prototype expansions",
  desc: "Unlike constrained urban sites in Europe, Asia, or North Africa, Philippi offers horizontal land availability to expand the FarmLab footprint as the prototype programme grows. Additional prototype bays can be added without relocation. The same site supports both the early R&D phase and the later scaling validation phase."
}];


const climateZones = [
{ name: "Subtropical — Philippi baseline", markets: "Mediterranean basin · Coastal South America · Southern China · Coastal Australia · South Africa", color: "text-accent" },
{ name: "Tropical adjacency", markets: "Southeast Asia · Central America · Sub-Saharan Africa · Northern Brazil", color: "text-yellow-600 dark:text-yellow-500" },
{ name: "Temperate boundary", markets: "Western Europe · Eastern United States · Eastern China · New Zealand", color: "text-blue-400" },
{ name: "Equatorial variant testing", markets: "East Africa · Indian subcontinent · Malaysia · Colombia", color: "text-orange-400" }];


const PhilippiContent = () => {
  return (
    <div className="space-y-16">
      {/* INTRODUCTION */}
      <p className="text-lg leading-relaxed text-muted-foreground">At first glance, Philippi , may seem like an unconventional choice for a global agricultural R&D hub. The strategic logic, however, is precise: Philippi offers a unique convergence of climate profile, regulatory environment, cost structure, talent access, stress-testing conditions, and expansion space that no single site in Europe or Asia can match at comparable cost.

      </p>

      {/* PULL QUOTE */}
      






      

      <p className="text-lg leading-relaxed text-muted-foreground">
        Below are the six structural advantages of the Philippi site — identified in the Naked Farms investor brief as the strategic rationale for establishing both the FarmLab and FarmBox1 production unit here.
      </p>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
        {[
        { value: "6", label: "structural site advantages identified" },
        { value: "1,000", label: "local households fed by FarmBox1" },
        { value: "4,000", label: "sq m FarmBox production unit" }].
        map((s) =>
        <div key={s.value} className="bg-card p-8 text-center">
            <div className="text-4xl font-bold text-accent font-serif mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        )}
      </div>

      {/* THE SIX ADVANTAGES */}
      <div>
        <SectionHeading>The Six Advantages</SectionHeading>
        <div className="mt-8 space-y-5">
          {advantages.map((adv) =>
          <div
            key={adv.num}
            className="grid grid-cols-[72px_1fr] border border-border rounded-2xl overflow-hidden bg-card hover:shadow-lg hover:border-accent/40 transition-all">
            
              <div className="flex items-center justify-center bg-muted border-r border-border font-serif text-4xl font-bold text-accent/40">
                {adv.num}
              </div>
              <div className="p-6 md:p-7">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full mb-3">
                  {adv.icon}
                  {adv.label}
                </span>
                <h3 className="text-lg font-bold text-foreground font-serif mb-2 leading-snug">{adv.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CLIMATE IN DEPTH */}
      <div>
        <SectionHeading>Climate in Depth — One Site, Global Reach</SectionHeading>
        <p className="text-lg leading-relaxed text-muted-foreground mt-4">
          The climate advantage deserves particular attention for investor audiences. South Africa's Western Cape sits at the precise transition between subtropical and temperate bands — a position that mirrors the climate profile of the world's largest premium fresh food demand centres. This is a structural feature of the site selection that transforms Philippi into a globally valid R&D reference point.
        </p>

        <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-10 mt-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <p className="text-[11px] font-mono font-medium tracking-widest uppercase text-accent mb-3 flex items-center gap-2">
            <span className="w-5 h-px bg-accent inline-block" />
            Climate Positioning — Philippi as Global Proxy
          </p>
          <h3 className="text-xl font-serif italic font-light text-foreground mb-4 leading-snug">
            Subtropical Cape Town validates FarmBox for the world's highest-value food markets.
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            A FarmBox system proven under Philippi's subtropical conditions can be adapted and deployed across all four adjacent climate zones with minimal engineering iteration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {climateZones.map((z) =>
            <div key={z.name} className="bg-muted border border-border rounded-xl p-4">
                <div className={`text-[11px] font-mono font-medium tracking-widest uppercase mb-1.5 ${z.color}`}>
                  {z.name}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">{z.markets}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* INVESTOR NOTE */}
      



      

      {/* CLOSING CTA */}
      <div className="bg-muted border border-accent/30 rounded-2xl p-10 md:p-14 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">The global FarmBox network starts here.</h2>
        <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-6">
          Philippi is not a compromise — it is a strategic choice. If you are an investor, a farming partner, or an engineering collaborator interested in the Naked Farms Serie A programme, we welcome your engagement.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent text-accent-foreground font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-accent/90 transition-all">
          
          Connect with Naked Farms
        </a>
      </div>
    </div>);

};

export default PhilippiContent;