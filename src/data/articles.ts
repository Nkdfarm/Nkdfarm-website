export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "001",
    title: "How to Finance My FarmBox",
    subtitle: "The 7-Year Path to Farm Ownership â€” 80/20 Capital Partnership Model",
    category: "Financing",
    date: "Mar 19, 2026",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80",
    author: {
      name: "Robbie Taylor CFO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
      bio: "Chief Financial Officer at Naked Farms",
    },
    content: {
      introduction: "Owning a smart greenhouse has historically required significant upfront capital â€” putting it out of reach for most aspiring farmers. The Naked Farms financing model changes that dynamic through a structured 80/20 capital partnership. Vetted farmers contribute just 20% of the FarmBox build cost from personal funds, while a funder provides the remaining 80%. Over a structured 7-year pay-to-own period, the funder is fully repaid from farm revenues â€” and at Year 7, the FarmBox unit transfers to the farmer's legal ownership. A single FarmBox unit â€” 4,000 sq m of precision-controlled growing space â€” can feed up to 500 local households. This guide walks you through exactly how the financing blueprint works: who pays what, when ownership transfers, and what your financial picture looks like after Year 7.",
      sections: [
        {
          heading: "Understanding the Key Entities",
          content: "Before diving into the financing model, it is important to understand who the key parties are. The FarmBox is the physical smart greenhouse unit â€” a 4,000 sq m precision-engineered growing facility designed, adapted, and installed by Naked Farms. Naked Farms is the managing entity responsible for design, engineering, installation, AI platform, operational management, and licensing. The Funder is the capital provider who finances 80% of the build cost ($240,000 of the $300,000 total), recovering capital plus interest from farm revenue over 7 years. The Farmer is the vetted operator who contributes 20% ($60,000) from personal funds, runs daily operations, earns a living wage, and receives full legal ownership at the 7-year mark.",
        },
        {
          heading: "The 80/20 Capital Formula",
          content: "The FarmBox financing model is built on a clear capital split: the Funder provides 80% ($240,000) as external capital, while the Farmer contributes 20% ($60,000) from personal funds, totaling $300,000 in combined capital. The farmer's contribution represents their equity skin-in-the-game â€” it demonstrates commitment, reduces funder risk, and means the farmer enters as a co-investor, not simply a tenant or employee. The funder's share is structured as a capital loan recovered from farm revenues over 7 years, including agreed interest. Naked Farms manages the full build, engineering, and deployment from day one.",
        },
        {
          heading: "The Two Phases of FarmBox Ownership",
          content: "During Years 1â€“7 (the pay-to-own phase), the funder is repaid $240K plus interest from farm revenue, the farmer earns a living wage from Day 1, Naked Farms manages engineering, AI, and seeds, and the farmer retains their 20% equity stake throughout. From Year 8 onwards (the ownership transition), the funder exits and the legal deed transfers to the farmer, who then captures the funder's former revenue share, resulting in significantly increased net income. Naked Farms licensing and AI support continue at farmer-owner rates.",
        },
        {
          heading: "Naked Farms Engineering Services",
          content: "Every FarmBox is engineered to the specific conditions of your site â€” this is not a one-size-fits-all greenhouse kit. Services include site assessment and feasibility surveys, structural design and local adaptation, climate system engineering, water and irrigation engineering with closed-loop management, energy system design, AI platform integration, and full commissioning and handover. Every FarmBox farmer also has direct access to a dedicated Naked Farms agronomy consultant around the clock, 7 days a week, for the full lifetime of the FarmBox.",
        },
        {
          heading: "What Does the Farmer Earn?",
          content: "During Years 1â€“7, you earn a living wage drawn from farm revenues from Day 1, coverage of all daily operating costs, practical ownership experience, and the security of a 20% personal equity stake. From Year 8 onwards, you gain full profit capture by absorbing the funder's former 80% revenue share, significantly increased net income, legal ownership of the FarmBox unit with the title in your name, and continued access to the Naked Farms AI management and 24/7 agronomy at farmer-owner rates.",
        },
        {
          heading: "The Naked Farms AI Platform",
          content: "The AI and digital management layer is the operational engine that makes the entire financing model viable. It optimises growing conditions 24/7 via sensors, satellite data, and machine learning; reduces crop loss and resource waste; provides real-time financial dashboards; supports consistent output (a single unit can feed 500 local households); includes 24/7 agronomy consultancy; and licensing fees continue after ownership transfer, giving ongoing access to platform upgrades and agronomic data insights.",
        },
        {
          heading: "How to Qualify as a Vetted Farmer",
          content: "The FarmBox model is designed for serious, committed farmers. You must demonstrate: availability of $60,000 in personal funds (the 20% equity contribution), agricultural experience or relevant farm management skills, commitment to full-time operation, suitable land or site access (assessed during the engineering feasibility phase), alignment with the FarmBox community food supply mission, and willingness to engage with the Naked Farms AI management platform and 24/7 agronomy support.",
        },
        {
          heading: "Key Financial Advantages Summary",
          content: "The model offers an 80/20 capital split (access a $300K FarmBox with only $60K), limited risk exposure to your 20% equity stake, a living wage from Day 1 while building toward ownership, site-adapted professionally engineered FarmBox included, AI-optimised operations for consistent yields, 24/7 agronomy consultancy, legal asset transfer at Year 7, and full profit capture from Year 8 with significantly higher net income.",
        },
      ],
      conclusion: "The 80/20 pay-to-own model means you enter as a co-investor on day one. By Year 7, you hold the deed to a $300,000 smart greenhouse â€” engineered, supported, and managed by Naked Farms every step of the way. Contact Naked Farms to begin the farmer vetting and application process, confirm your $60,000 personal equity contribution, commission a site feasibility assessment, and start feeding your community â€” and building your future.",
    },
    tags: ["farmbox", "financing", "80/20 model", "smart greenhouse", "farm ownership", "agriculture"],
  },
  {
    id: "002",
    title: "Building in Philippi: Six Strategic Advantages",
    subtitle: "Cape Town's Philippi agriculture land is the perfect launchpad for a global network of FarmBox smart greenhouses â€” and here is exactly why.",
    category: "R&D",
    date: "Mar 19, 2026",
    readTime: "8 min",
    image: "/uploads/myarchitectai_fnrldtxiu_sd.png",
    author: {
      name: "Francesco Gaudioso",
      avatar: "/uploads/francesco-gaudioso.jpeg",
      bio: "Head of Technology",
    },
    content: {
      introduction: "",
      sections: [],
      conclusion: "",
    },
    tags: ["philippi", "R&D", "FarmBox", "cape-town", "investor-brief", "climate"],
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getRelatedArticles(currentId: string, limit: number = 3): Article[] {
  const currentArticle = getArticleById(currentId);
  if (!currentArticle) return articles.slice(0, limit);
  
  // Get articles from the same category, excluding current
  const related = articles.filter(
    article => article.id !== currentId && article.category === currentArticle.category
  );
  
  // If not enough from same category, add others
  if (related.length < limit) {
    const others = articles.filter(
      article => article.id !== currentId && article.category !== currentArticle.category
    );
    return [...related, ...others].slice(0, limit);
  }
  
  return related.slice(0, limit);
}
