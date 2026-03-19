import { Check, Search, Building2, Thermometer, Droplets, Zap, Brain, CheckCircle2 } from "lucide-react";

const SectionBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded bg-accent text-accent-foreground mb-3">
    {children}
  </span>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold mb-2 pt-2 border-t-2 border-accent/30 pb-3 text-foreground font-serif">
    {children}
  </h2>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 font-sans">
    {children}
  </h3>
);

const ChecklistItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 py-2.5 px-3 border-b border-border/50 last:border-b-0 text-[15px] text-foreground leading-relaxed">
    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const FarmBoxFinanceContent = () => {
  return (
    <div className="space-y-16">
      {/* TABLE OF CONTENTS */}
      <nav className="bg-muted border-l-4 border-accent rounded-r-lg p-7">
        <p className="text-[11px] font-bold tracking-widest uppercase text-accent mb-4 font-sans">In this guide</p>
        <ol className="list-decimal pl-5 space-y-1.5 font-sans text-sm text-foreground">
          <li><a href="#entities" className="hover:underline font-medium">Understanding the key entities</a></li>
          <li><a href="#formula" className="hover:underline font-medium">The 80/20 capital formula</a></li>
          <li><a href="#phases" className="hover:underline font-medium">The two phases of FarmBox ownership</a></li>
          <li><a href="#engineering" className="hover:underline font-medium">Naked Farms engineering services</a></li>
          <li><a href="#earnings" className="hover:underline font-medium">What does the farmer earn?</a></li>
          <li><a href="#timeline" className="hover:underline font-medium">The 7-year timeline at a glance</a></li>
          <li><a href="#ai" className="hover:underline font-medium">The Naked Farms AI platform</a></li>
          <li><a href="#qualify" className="hover:underline font-medium">How to qualify as a vetted farmer</a></li>
          <li><a href="#summary" className="hover:underline font-medium">Key financial advantages summary</a></li>
        </ol>
      </nav>

      {/* INTRODUCTION */}
      <p className="text-lg leading-relaxed text-muted-foreground">
        Owning a smart greenhouse has historically required significant upfront capital — putting it out of reach for most aspiring farmers. The Naked Farms financing model changes that dynamic through a structured 80/20 capital partnership. Vetted farmers contribute just 20% of the FarmBox build cost from personal funds, while a funder provides the remaining 80%. Over a structured 7-year pay-to-own period, the funder is fully repaid from farm revenues — and at Year 7, the FarmBox unit transfers to the farmer's legal ownership.
      </p>
      <p className="text-lg leading-relaxed text-muted-foreground -mt-10">
        A single FarmBox unit — 4,000 sq m of precision-controlled growing space — can feed up to 500 local households. This guide walks you through exactly how the financing blueprint works: who pays what, when ownership transfers, and what your financial picture looks like after Year 7.
      </p>

      {/* ENTITIES */}
      <section id="entities" className="scroll-mt-24">
        <SectionBadge>Definitions</SectionBadge>
        <SectionHeading>Understanding the key entities</SectionHeading>
        <p className="text-muted-foreground mb-6">Before diving into the financing model, it is important to understand who the key parties are and what each term means throughout this document.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl p-5 bg-accent/10 border border-accent/20">
            <div className="text-xs font-extrabold tracking-wider uppercase text-accent mb-2 font-sans">FarmBox</div>
            <p className="text-sm text-foreground leading-relaxed">The physical smart greenhouse unit itself — a 4,000 sq m precision-engineered growing facility designed, adapted, and installed by Naked Farms.</p>
          </div>
          <div className="rounded-xl p-5 bg-secondary/10 border border-secondary/20">
            <div className="text-xs font-extrabold tracking-wider uppercase text-secondary mb-2 font-sans">Naked Farms</div>
            <p className="text-sm text-foreground leading-relaxed">The managing entity responsible for the design, engineering, installation, AI platform, operational management, and licensing of each FarmBox unit. Naked Farms is your partner from blueprint to harvest.</p>
          </div>
          <div className="rounded-xl p-5 bg-accent/10 border border-accent/20">
            <div className="text-xs font-extrabold tracking-wider uppercase text-accent mb-2 font-sans">The Funder</div>
            <p className="text-sm text-foreground leading-relaxed">The capital provider who finances 80% of the FarmBox build cost ($240,000 of the $300,000 total). The funder recovers capital plus interest from farm revenue over 7 years.</p>
          </div>
          <div className="rounded-xl p-5 bg-[hsl(40_60%_92%)] dark:bg-accent/10 border border-[hsl(40_50%_80%)] dark:border-accent/20">
            <div className="text-xs font-extrabold tracking-wider uppercase text-[hsl(30_60%_40%)] dark:text-accent mb-2 font-sans">The Farmer</div>
            <p className="text-sm text-foreground leading-relaxed">The vetted operator who contributes 20% of the FarmBox build cost ($60,000) from personal funds, runs daily operations, earns a living wage, and receives full legal ownership of the FarmBox unit at the 7-year mark.</p>
          </div>
        </div>
      </section>

      {/* CAPITAL FORMULA */}
      <section id="formula" className="scroll-mt-24">
        <SectionBadge>Section 1</SectionBadge>
        <SectionHeading>The 80/20 capital formula</SectionHeading>
        <p className="text-muted-foreground mb-6">The FarmBox financing model is built on a clear capital split between two parties:</p>

        {/* Capital Visual Bar */}
        <div className="flex gap-3 rounded-xl overflow-hidden h-[72px] mb-6 font-sans">
          <div className="flex-[8] bg-accent flex items-center justify-center flex-col text-accent-foreground rounded-l-xl">
            <span className="text-2xl font-bold">80%</span>
            <span className="text-[11px] opacity-85 tracking-wide">Funder — $240,000</span>
          </div>
          <div className="flex-[2] bg-[hsl(30_60%_45%)] flex items-center justify-center flex-col text-white rounded-r-xl">
            <span className="text-2xl font-bold">20%</span>
            <span className="text-[11px] opacity-85 tracking-wide">Farmer — $60K</span>
          </div>
        </div>

        {/* Capital Table */}
        <div className="overflow-x-auto rounded-xl border border-border mb-6">
          <table className="w-full text-sm font-sans border-collapse">
            <thead>
              <tr className="bg-accent text-accent-foreground">
                <th className="text-left font-semibold px-4 py-3 text-xs tracking-wide">Party</th>
                <th className="text-left font-semibold px-4 py-3 text-xs tracking-wide">Share</th>
                <th className="text-left font-semibold px-4 py-3 text-xs tracking-wide">Amount (USD)</th>
                <th className="text-left font-semibold px-4 py-3 text-xs tracking-wide">Source of funds</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 font-semibold text-accent">The Funder</td>
                <td className="px-4 py-3">80%</td>
                <td className="px-4 py-3">$240,000</td>
                <td className="px-4 py-3">External capital investor</td>
              </tr>
              <tr className="bg-background">
                <td className="px-4 py-3 font-semibold text-accent">The Farmer</td>
                <td className="px-4 py-3">20%</td>
                <td className="px-4 py-3">$60,000</td>
                <td className="px-4 py-3">Personal funds (equity stake)</td>
              </tr>
              <tr className="bg-accent/10 font-bold">
                <td className="px-4 py-3">Total FarmBox build cost</td>
                <td className="px-4 py-3">100%</td>
                <td className="px-4 py-3">$300,000</td>
                <td className="px-4 py-3">Combined capital</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground mb-4">The farmer's 20% contribution ($60,000) represents their equity skin-in-the-game. It demonstrates commitment to the project, reduces the funder's risk exposure, and — critically — means the farmer enters the arrangement as a co-investor, not simply a tenant or employee.</p>
        <p className="text-muted-foreground">Naked Farms manages the full build, engineering, and deployment of the FarmBox unit from day one — so from the moment capital is committed, Naked Farms is working to deliver a fully operational farm.</p>
      </section>

      {/* PHASES */}
      <section id="phases" className="scroll-mt-24">
        <SectionBadge>Section 2</SectionBadge>
        <SectionHeading>The two phases of FarmBox ownership</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="rounded-xl p-6 bg-accent/10 border border-accent/20">
            <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-accent text-accent-foreground mb-3">Years 1–7</span>
            <h3 className="text-base font-bold mb-3 text-foreground font-sans">The pay-to-own phase</h3>
            <ul className="pl-4 text-sm text-foreground space-y-1.5 list-disc">
              <li>Funder is repaid $240K + interest from farm revenue</li>
              <li>Farmer earns a living wage from Day 1</li>
              <li>Naked Farms manages engineering, AI, and seeds</li>
              <li>Farmer retains 20% equity stake throughout</li>
            </ul>
          </div>
          <div className="rounded-xl p-6 bg-secondary/10 border border-secondary/20">
            <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-secondary text-secondary-foreground mb-3">Year 8+</span>
            <h3 className="text-base font-bold mb-3 text-foreground font-sans">The ownership transition</h3>
            <ul className="pl-4 text-sm text-foreground space-y-1.5 list-disc">
              <li>Funder exits — legal deed transferred to farmer</li>
              <li>Farmer captures funder's former revenue share</li>
              <li>Significantly increased net income</li>
              <li>Naked Farms licensing and AI support continue</li>
            </ul>
          </div>
        </div>

        <SubHeading>Financial structure during Years 1–7</SubHeading>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm font-sans border-collapse">
            <thead>
              <tr className="bg-accent text-accent-foreground">
                <th className="text-left font-semibold px-4 py-3 text-xs tracking-wide">Party</th>
                <th className="text-left font-semibold px-4 py-3 text-xs tracking-wide">Role</th>
                <th className="text-left font-semibold px-4 py-3 text-xs tracking-wide">Financial obligation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 font-semibold text-accent">The Funder</td>
                <td className="px-4 py-3">Provides 80% of the $300K build capital</td>
                <td className="px-4 py-3">Recovers $240K + interest from farm revenue over 7 years</td>
              </tr>
              <tr className="bg-background">
                <td className="px-4 py-3 font-semibold text-accent">The Farmer</td>
                <td className="px-4 py-3">Contributes 20% personally; operates full-time</td>
                <td className="px-4 py-3">Earns a living wage + daily operating costs. Retains equity stake.</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 font-semibold text-accent">Naked Farms</td>
                <td className="px-4 py-3">Manages engineering, AI, seeds, and support</td>
                <td className="px-4 py-3">Receives ongoing licensing, management, and seed fees</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ENGINEERING */}
      <section id="engineering" className="scroll-mt-24">
        <SectionBadge>Section 3</SectionBadge>
        <SectionHeading>Naked Farms engineering services</SectionHeading>
        <p className="text-muted-foreground mb-6">One of the most important aspects of the FarmBox model is what happens before the first seed is planted. Every FarmBox is engineered to the specific conditions of your site — this is not a one-size-fits-all greenhouse kit.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { icon: <Search className="w-5 h-5" />, title: "Site Assessment & Feasibility", desc: "Full site survey evaluating soil, topography, water access, sun exposure, wind patterns, and local climate data." },
            { icon: <Building2 className="w-5 h-5" />, title: "Structural Design & Adaptation", desc: "Adapted to local building codes, seismic zones, wind load requirements, and material availability." },
            { icon: <Thermometer className="w-5 h-5" />, title: "Climate System Engineering", desc: "Heating, ventilation, cooling, and humidity systems calibrated for local conditions." },
            { icon: <Droplets className="w-5 h-5" />, title: "Water & Irrigation Engineering", desc: "Full irrigation and water recycling system including rainwater harvesting and fertigation." },
            { icon: <Zap className="w-5 h-5" />, title: "Energy System Design", desc: "Power requirements assessed and engineered to integrate with grid, solar PV, or backup generation." },
            { icon: <Brain className="w-5 h-5" />, title: "AI Platform Integration", desc: "The Naked Farms AI system configured for your specific crop mix, season, and climate variables." },
            { icon: <CheckCircle2 className="w-5 h-5" />, title: "Commissioning & Handover", desc: "Engineers remain on-site during commissioning, certifying all systems are operational." },
          ].map((service, i) => (
            <div key={i} className="bg-card border border-border border-t-[3px] border-t-accent rounded-lg p-5">
              <span className="text-accent mb-2.5 block">{service.icon}</span>
              <div className="text-xs font-bold text-foreground uppercase tracking-wider mb-2 font-sans">{service.title}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* 24/7 Agronomy Highlight */}
        <div className="bg-primary text-primary-foreground rounded-xl p-8 flex flex-col sm:flex-row gap-5 items-start mb-8">
          <span className="inline-block text-[11px] font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-full bg-[hsl(30_60%_45%)] text-white whitespace-nowrap flex-shrink-0">24H / 7 Days</span>
          <div>
            <h3 className="text-lg font-bold mb-2 font-sans">Agronomy consultancy — around the clock</h3>
            <p className="text-sm opacity-80 leading-relaxed">Every FarmBox farmer has direct access to a dedicated Naked Farms agronomy consultant around the clock, 7 days a week. Whether you face a pest outbreak at midnight, an unexpected disease pressure, or a crop performance question mid-harvest, a qualified agronomist is always available. This service continues for the full lifetime of your FarmBox, including post-ownership transfer.</p>
          </div>
        </div>

        <SubHeading>Why this matters for the financing model</SubHeading>
        <p className="text-muted-foreground">The engineering services provided by Naked Farms are a core component of the $300,000 FarmBox build cost. A FarmBox unit that is incorrectly specified cannot generate the revenue needed to repay the funder, support the farmer's living wage, and cover Naked Farms fees. By taking full engineering responsibility, Naked Farms aligns its interests directly with yours.</p>
      </section>

      {/* EARNINGS */}
      <section id="earnings" className="scroll-mt-24">
        <SectionBadge>Section 4</SectionBadge>
        <SectionHeading>What does the farmer earn?</SectionHeading>

        <SubHeading>During Years 1–7</SubHeading>
        <p className="text-muted-foreground mb-3">While the funder is being repaid, you earn:</p>
        <ul className="list-none p-0 mb-6 font-sans">
          <ChecklistItem>A living wage drawn from farm revenues from Day 1</ChecklistItem>
          <ChecklistItem>Coverage of all daily operating costs</ChecklistItem>
          <ChecklistItem>Practical ownership experience and growing equity toward the asset transfer</ChecklistItem>
          <ChecklistItem>The security of a 20% personal equity stake in the asset from the outset</ChecklistItem>
        </ul>

        <SubHeading>From Year 8 onwards</SubHeading>
        <p className="text-muted-foreground mb-3">Once the funder exits, your income picture changes dramatically:</p>
        <ul className="list-none p-0 font-sans">
          <ChecklistItem>Full profit capture — you absorb the funder's former 80% revenue share</ChecklistItem>
          <ChecklistItem>Significantly increased net income</ChecklistItem>
          <ChecklistItem>Legal ownership of the FarmBox unit (title in your name)</ChecklistItem>
          <ChecklistItem>Continued access to Naked Farms AI management and 24/7 agronomy — now at farmer-owner rates</ChecklistItem>
        </ul>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="scroll-mt-24">
        <SectionBadge>Section 5</SectionBadge>
        <SectionHeading>The 7-year timeline at a glance</SectionHeading>

        <div className="relative ml-7 mt-7">
          {/* Vertical line */}
          <div className="absolute left-[29px] top-0 bottom-0 w-0.5 bg-accent/30" />

          {[
            { label: "Pre-\nLaunch", highlight: false, title: "Capital committed — engineering begins", items: ["Funder commits 80% ($240K); Farmer commits 20% ($60K)", "Naked Farms begins site assessment, structural design & local adaptation"] },
            { label: "Year 1", highlight: false, title: "FarmBox goes live", items: ["Farmer earns a living wage; FarmBox fully operational", "Funder repayment + interest begins from farm revenue", "Naked Farms AI platform active; seeds supplied; 24/7 agronomy on call"] },
            { label: "Years\n2–6", highlight: false, title: "Steady operations — equity building", items: ["Farmer earns stable income; equity stake growing", "Funder continues to receive repayment", "Naked Farms licensing, remote management, and agronomy fees continue"] },
            { label: "Year 7", highlight: false, title: "Final pay-to-own year", items: ["$240K + all interest fully repaid to the funder", "Naked Farms prepares legal ownership handover documentation"] },
            { label: "Year\n8+", highlight: true, title: "Full ownership — full profit capture", items: ["Funder exits — legal deed transferred to the farmer", "Farmer absorbs the funder's former revenue share; net income rises significantly", "Naked Farms licensing, AI, and 24/7 agronomy continue at farmer-owner rates"] },
          ].map((item, i) => (
            <div key={i} className="flex gap-5 mb-5 relative">
              <div className={`w-[58px] h-[58px] rounded-full flex items-center justify-center text-[11px] font-bold text-center leading-tight flex-shrink-0 z-10 font-sans whitespace-pre-line ${item.highlight ? 'bg-secondary text-secondary-foreground' : 'bg-accent text-accent-foreground'}`}>
                {item.label}
              </div>
              <div className="bg-card border border-border rounded-xl p-4 flex-1">
                <h4 className="text-sm font-bold text-foreground mb-1.5 font-sans">{item.title}</h4>
                <ul className="pl-4 text-xs text-muted-foreground list-disc space-y-1">
                  {item.items.map((text, j) => <li key={j}>{text}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI PLATFORM */}
      <section id="ai" className="scroll-mt-24">
        <SectionBadge>Section 6</SectionBadge>
        <SectionHeading>The Naked Farms AI platform</SectionHeading>
        <p className="text-muted-foreground mb-4">The Naked Farms AI and digital management layer is the operational engine that makes the entire financing model viable. From the moment your FarmBox unit is commissioned, the platform works continuously to maximise yield, minimise waste, and protect the revenue stream.</p>
        <ul className="list-none p-0 font-sans">
          <ChecklistItem>Optimises growing conditions 24/7 via sensors, satellite data, and machine learning</ChecklistItem>
          <ChecklistItem>Reduces crop loss and resource waste — maximising revenue per square metre</ChecklistItem>
          <ChecklistItem>Provides real-time dashboards so you always know exactly where you stand financially</ChecklistItem>
          <ChecklistItem>Supports consistent output — a single 4,000 sq m FarmBox unit can feed 500 local households</ChecklistItem>
          <ChecklistItem>24/7 agronomy consultancy — direct access to a qualified agronomist at any hour</ChecklistItem>
          <ChecklistItem>Licensing fees continue after ownership transfer, giving ongoing access to platform upgrades</ChecklistItem>
        </ul>
      </section>

      {/* QUALIFY */}
      <section id="qualify" className="scroll-mt-24">
        <SectionBadge>Section 7</SectionBadge>
        <SectionHeading>How to qualify as a vetted farmer</SectionHeading>
        <p className="text-muted-foreground mb-4">The FarmBox model is designed for serious, committed farmers. Because the funder carries 80% of the upfront capital risk, the vetting process exists to protect all parties. You can expect to demonstrate:</p>
        <ul className="list-none p-0 font-sans">
          <ChecklistItem>Availability of $60,000 in personal funds — the 20% equity contribution</ChecklistItem>
          <ChecklistItem>Agricultural experience or relevant farm management skills</ChecklistItem>
          <ChecklistItem>Commitment to full-time operation of the FarmBox unit</ChecklistItem>
          <ChecklistItem>Suitable land or site access — assessed during the Naked Farms engineering feasibility phase</ChecklistItem>
          <ChecklistItem>Alignment with the FarmBox community food supply mission</ChecklistItem>
          <ChecklistItem>Willingness to engage with the Naked Farms AI management platform and 24/7 agronomy support</ChecklistItem>
        </ul>
      </section>

      {/* SUMMARY */}
      <section id="summary" className="scroll-mt-24">
        <SectionBadge>Section 8</SectionBadge>
        <SectionHeading>Key financial advantages summary</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { feature: "80/20 capital split", benefit: "Access a $300K FarmBox with only $60K personal contribution" },
            { feature: "Funder carries 80% of build risk", benefit: "Your exposure is limited to your 20% equity stake" },
            { feature: "Living wage from Day 1", benefit: "Earn immediately while building toward full ownership" },
            { feature: "Naked Farms engineering included", benefit: "Site-adapted, professionally engineered FarmBox from day one" },
            { feature: "AI-optimised operations", benefit: "Consistent yields reduce revenue risk for all parties" },
            { feature: "24/7 agronomy consultancy", benefit: "A qualified agronomist available around the clock, every day" },
            { feature: "Legal asset transfer at Year 7", benefit: "Full ownership of the FarmBox — yours permanently" },
            { feature: "Full profit capture from Year 8", benefit: "Significantly higher net income post-ownership" },
          ].map((card, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5">
              <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1.5 font-sans">{card.feature}</div>
              <p className="text-sm text-foreground leading-relaxed">{card.benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-10 md:p-12 text-center font-sans mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">Ready to start your FarmBox journey?</h2>
        <p className="text-sm opacity-75 mb-8 max-w-xl mx-auto">The 80/20 pay-to-own model means you enter as a co-investor on day one. By Year 7, you hold the deed to a $300,000 smart greenhouse — engineered, supported, and managed by Naked Farms every step of the way.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-8">
          {[
            "Contact Naked Farms to begin the farmer vetting and application process.",
            "Confirm your $60,000 personal equity contribution and explore available funder partnerships.",
            "Commission a site feasibility assessment with the Naked Farms engineering team.",
            "Start feeding your community — and building your future.",
          ].map((step, i) => (
            <div key={i} className="bg-[hsl(0_0%_100%/0.07)] rounded-xl p-4 text-sm opacity-85 leading-relaxed border border-[hsl(0_0%_100%/0.1)]">
              <span className="text-xl font-bold text-[hsl(40_60%_75%)] block mb-1.5">{String(i + 1).padStart(2, '0')}</span>
              {step}
            </div>
          ))}
        </div>

        <a href="/contact" className="inline-block bg-accent text-accent-foreground font-bold text-sm px-8 py-3.5 rounded-lg tracking-wide hover:opacity-90 transition-opacity">
          Get in touch with Naked Farms
        </a>
      </div>
    </div>
  );
};

export default FarmBoxFinanceContent;
