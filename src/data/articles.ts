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
    subtitle: "The 7-Year Path to Farm Ownership — 80/20 Capital Partnership Model",
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
      introduction: "Owning a smart greenhouse has historically required significant upfront capital — putting it out of reach for most aspiring farmers. The Naked Farms financing model changes that dynamic through a structured 80/20 capital partnership. Vetted farmers contribute just 20% of the FarmBox build cost from personal funds, while a funder provides the remaining 80%. Over a structured 7-year pay-to-own period, the funder is fully repaid from farm revenues — and at Year 7, the FarmBox unit transfers to the farmer's legal ownership. A single FarmBox unit — 4,000 sq m of precision-controlled growing space — can feed up to 500 local households. This guide walks you through exactly how the financing blueprint works: who pays what, when ownership transfers, and what your financial picture looks like after Year 7.",
      sections: [
        {
          heading: "Understanding the Key Entities",
          content: "Before diving into the financing model, it is important to understand who the key parties are. The FarmBox is the physical smart greenhouse unit — a 4,000 sq m precision-engineered growing facility designed, adapted, and installed by Naked Farms. Naked Farms is the managing entity responsible for design, engineering, installation, AI platform, operational management, and licensing. The Funder is the capital provider who finances 80% of the build cost ($240,000 of the $300,000 total), recovering capital plus interest from farm revenue over 7 years. The Farmer is the vetted operator who contributes 20% ($60,000) from personal funds, runs daily operations, earns a living wage, and receives full legal ownership at the 7-year mark.",
        },
        {
          heading: "The 80/20 Capital Formula",
          content: "The FarmBox financing model is built on a clear capital split: the Funder provides 80% ($240,000) as external capital, while the Farmer contributes 20% ($60,000) from personal funds, totaling $300,000 in combined capital. The farmer's contribution represents their equity skin-in-the-game — it demonstrates commitment, reduces funder risk, and means the farmer enters as a co-investor, not simply a tenant or employee. The funder's share is structured as a capital loan recovered from farm revenues over 7 years, including agreed interest. Naked Farms manages the full build, engineering, and deployment from day one.",
        },
        {
          heading: "The Two Phases of FarmBox Ownership",
          content: "During Years 1–7 (the pay-to-own phase), the funder is repaid $240K plus interest from farm revenue, the farmer earns a living wage from Day 1, Naked Farms manages engineering, AI, and seeds, and the farmer retains their 20% equity stake throughout. From Year 8 onwards (the ownership transition), the funder exits and the legal deed transfers to the farmer, who then captures the funder's former revenue share, resulting in significantly increased net income. Naked Farms licensing and AI support continue at farmer-owner rates.",
        },
        {
          heading: "Naked Farms Engineering Services",
          content: "Every FarmBox is engineered to the specific conditions of your site — this is not a one-size-fits-all greenhouse kit. Services include site assessment and feasibility surveys, structural design and local adaptation, climate system engineering, water and irrigation engineering with closed-loop management, energy system design, AI platform integration, and full commissioning and handover. Every FarmBox farmer also has direct access to a dedicated Naked Farms agronomy consultant around the clock, 7 days a week, for the full lifetime of the FarmBox.",
        },
        {
          heading: "What Does the Farmer Earn?",
          content: "During Years 1–7, you earn a living wage drawn from farm revenues from Day 1, coverage of all daily operating costs, practical ownership experience, and the security of a 20% personal equity stake. From Year 8 onwards, you gain full profit capture by absorbing the funder's former 80% revenue share, significantly increased net income, legal ownership of the FarmBox unit with the title in your name, and continued access to the Naked Farms AI management and 24/7 agronomy at farmer-owner rates.",
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
      conclusion: "The 80/20 pay-to-own model means you enter as a co-investor on day one. By Year 7, you hold the deed to a $300,000 smart greenhouse — engineered, supported, and managed by Naked Farms every step of the way. Contact Naked Farms to begin the farmer vetting and application process, confirm your $60,000 personal equity contribution, commission a site feasibility assessment, and start feeding your community — and building your future.",
    },
    tags: ["farmbox", "financing", "80/20 model", "smart greenhouse", "farm ownership", "agriculture"],
  },
  {
    id: "002",
    title: "Why Philippi? Six Strategic Advantages",
    subtitle: "Cape Town's Philippi township is the perfect launchpad for a global network of FarmBox smart greenhouses — and here is exactly why.",
    category: "R&D",
    date: "Mar 19, 2026",
    readTime: "8 min",
    image: "/lovable-uploads/myarchitectai_fnrldtxiu_sd.png",
    author: {
      name: "Francesco Gaudioso",
      avatar: "/lovable-uploads/francesco-gaudioso.jpeg",
      bio: "Head of Technology",
    },
    content: {
      introduction: "",
      sections: [],
      conclusion: "",
    },
    tags: ["philippi", "R&D", "FarmBox", "cape-town", "investor-brief", "climate"],
  },
  {
    id: "003",
    title: "Musings in Grayscale",
    subtitle: "Finding beauty and clarity in life's neutral moments",
    category: "Community",
    date: "Dec 4, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1920&q=80",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Community builder and contemplative writer",
    },
    content: {
      introduction: "We often seek the extremes—the peaks of joy, the depths of sorrow, the bright colors that define our experiences. But what about the in-between? The neutral moments, the grayscale of everyday life that makes up most of our existence? There's unexpected beauty and wisdom in these spaces.",
      sections: [
        {
          heading: "The Overlooked Majority",
          content: "Most of life isn't dramatic. It's morning coffee, routine commutes, quiet evenings, and ordinary conversations. We tend to overlook these moments, waiting for something 'significant' to happen. Yet these grayscale moments—when approached with presence and appreciation—contain their own quiet richness.",
        },
        {
          heading: "Community in the Mundane",
          content: "Some of the deepest community connections happen not in grand gestures but in ordinary moments: the neighbor who waves each morning, the barista who remembers your order, the colleague who checks in during a regular Tuesday. These small, repeated interactions create the texture of belonging.",
        },
        {
          heading: "Finding Clarity in Neutrality",
          content: "When we're not caught up in emotional extremes, we can see more clearly. The grayscale moments offer perspective—a chance to observe our lives without the distortion of intense emotion. This clarity helps us make better decisions and understand what truly matters to us.",
        },
        {
          heading: "Cultivating Appreciation",
          content: "Learning to appreciate the neutral doesn't mean settling for less—it means expanding our capacity for contentment. It's recognizing that a quiet Sunday afternoon, a simple meal with friends, or a walk without destination has its own value. This appreciation makes us resilient and less dependent on external circumstances for our sense of wellbeing.",
        },
      ],
      conclusion: "Life in grayscale isn't boring—it's the canvas on which everything else appears. By learning to appreciate these neutral moments and the community connections within them, we enrich our entire experience. The next time you find yourself in an 'ordinary' moment, pause and look closer. You might be surprised by what you find.",
    },
    tags: ["mindfulness", "community", "presence", "contentment"],
  },
  {
    id: "W001",
    title: "Finding Balance: How to Create a Sustainable Self-Care Routine",
    subtitle: "Developing practices that actually stick",
    category: "Wellness",
    date: "Mar 19, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      bio: "Certified wellness coach and holistic health practitioner",
    },
    content: {
      introduction: "Self-care has become a buzzword, often associated with spa days and indulgent treats. While these have their place, true self-care is about sustainable practices that support your physical, mental, and emotional wellbeing consistently—not just when you're burned out.",
      sections: [
        {
          heading: "Understanding Your Needs",
          content: "Before building a self-care routine, you need to understand what you actually need. Are you lacking physical movement, mental rest, emotional processing, or social connection? Self-care isn't one-size-fits-all. Take time to honestly assess where you're depleted and what would genuinely nourish you.",
        },
        {
          heading: "Start Small and Specific",
          content: "The biggest mistake people make with self-care is trying to overhaul everything at once. Instead, start with one small, specific practice. Maybe it's five minutes of stretching each morning, or drinking a glass of water before coffee, or spending ten minutes outside daily. Small, consistent actions create lasting change.",
        },
        {
          heading: "The Four Pillars of Wellness",
          content: "A balanced self-care routine addresses four key areas: physical health (movement, nutrition, sleep), mental health (stress management, learning, rest), emotional health (processing feelings, connection, creativity), and spiritual health (meaning, purpose, values alignment). You don't need elaborate practices in each area—just intentional attention.",
        },
        {
          heading: "Making It Sustainable",
          content: "Sustainability comes from integration, not addition. Instead of adding more to your already full schedule, look for ways to integrate self-care into existing routines. Take walking meetings, practice mindful eating during meals you already eat, or turn your commute into a time for podcasts that inspire you.",
        },
        {
          heading: "When Self-Care Feels Selfish",
          content: "Many people struggle with guilt around self-care, especially caregivers. Remember: you can't pour from an empty cup. Taking care of yourself isn't selfish—it's necessary for showing up as your best self for others. Your wellbeing matters, not just as a means to serve others, but as an end in itself.",
        },
      ],
      conclusion: "A sustainable self-care routine isn't about perfection or elaborate practices. It's about consistent, intentional actions that support your wellbeing across all dimensions of health. Start small, be patient with yourself, and remember that self-care is a practice, not a destination.",
    },
    tags: ["self-care", "wellness", "mindfulness", "sustainable living"],
  },
  {
    id: "T001",
    title: "The Art of Slow Travel: Embracing Local Experiences",
    subtitle: "Discovering depth over distance in your journeys",
    category: "Travel",
    date: "Mar 15, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Slow travel advocate and cultural immersion specialist",
    },
    content: {
      introduction: "In an age of whirlwind tours and bucket-list chasing, slow travel offers a radical alternative: staying longer, going deeper, and truly experiencing a place rather than just seeing it. It's not about how many countries you've visited, but how deeply you've connected with the places you've been.",
      sections: [
        {
          heading: "What Is Slow Travel?",
          content: "Slow travel is a philosophy that prioritizes depth over breadth, quality over quantity. It means staying in fewer places for longer periods, developing routines in new locations, shopping at local markets, and building relationships with locals. It's about experiencing a destination as a temporary resident rather than a tourist passing through.",
        },
        {
          heading: "The Benefits of Slowing Down",
          content: "When you slow down, travel becomes richer and more meaningful. You notice details you'd miss when rushing from sight to sight. You have time for spontaneous conversations, unexpected discoveries, and genuine cultural exchange. You also return home less exhausted and with deeper memories than a photo collection of landmarks.",
        },
        {
          heading: "Practical Steps for Slow Travel",
          content: "Start by choosing one place and staying at least a week—two or more is even better. Rent an apartment instead of staying in hotels. Shop at local markets, take local transportation, and establish routines like a regular cafe or morning walk. Say yes to invitations from locals. Allow for unplanned time in your schedule.",
        },
        {
          heading: "Overcoming FOMO",
          content: "The biggest challenge of slow travel is overcoming the fear of missing out. You might not see every museum or landmark. That's okay. You're choosing depth over breadth, experience over completion. Remember: the goal isn't to check off a list—it's to truly experience and understand a place.",
        },
        {
          heading: "Environmental and Cultural Benefits",
          content: "Slow travel is inherently more sustainable. Fewer flights, more local spending, less overtourism impact. It's also more respectful to local communities. When you stay longer and engage more deeply, you contribute more meaningfully to local economies and build bridges of understanding between cultures.",
        },
      ],
      conclusion: "Slow travel isn't just a way of moving through the world—it's a mindset that values presence, connection, and understanding. In slowing down, we paradoxically experience more. The next time you travel, consider going fewer places and staying longer. You might discover that the journey becomes infinitely richer.",
    },
    tags: ["slow travel", "sustainable travel", "cultural immersion", "mindful exploration"],
  },
  {
    id: "G001",
    title: "Minimalist Living: Creating Space for What Matters Most",
    subtitle: "The freedom found in letting go",
    category: "Growth",
    date: "Mar 10, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Minimalism advocate and intentional living coach",
    },
    content: {
      introduction: "Minimalism isn't about having less for the sake of having less—it's about making room for more: more clarity, more freedom, more focus on what truly matters. In our consumer-driven culture, choosing to live with less is a radical act of intentionality.",
      sections: [
        {
          heading: "Beyond the Aesthetic",
          content: "Minimalism has been co-opted by a certain aesthetic—white walls, sparse furniture, perfectly curated spaces. But true minimalism is about values, not visuals. It's about removing excess so you can focus on what adds value to your life. Your minimalist life might look different from someone else's, and that's exactly as it should be.",
        },
        {
          heading: "The Process of Letting Go",
          content: "Minimalism is as much psychological as it is physical. As you sort through possessions, you're also examining attachments, identities, and habits. That box of college textbooks isn't just books—it's who you used to be. Learning to let go of physical items helps us practice letting go in other areas of life too.",
        },
        {
          heading: "Quality Over Quantity",
          content: "Minimalism isn't about deprivation—it's about being selective. Instead of ten mediocre pairs of shoes, keep three you love. Instead of a closet full of clothes you never wear, maintain a smaller collection of pieces that make you feel great. When you reduce quantity, you can increase quality.",
        },
        {
          heading: "Mental and Digital Minimalism",
          content: "Physical clutter is just one dimension. Consider your commitments, your schedule, your digital life. Do you need to be on five social media platforms? Must you say yes to every invitation? Minimalism applies to time and attention too. Protect your mental space as carefully as your physical space.",
        },
        {
          heading: "The Freedom of Less",
          content: "Here's what minimalism creates: less time spent cleaning and organizing, fewer decisions to make, less financial pressure, more mental clarity, greater focus on relationships and experiences. In removing what doesn't matter, we make room for what does. That's the true gift of minimalism.",
        },
      ],
      conclusion: "Minimalism is a journey, not a destination. You don't need to purge everything or live in an empty room. Start with one drawer, one category, one area of life. As you experience the lightness that comes from letting go, you'll naturally want to continue. What you'll discover isn't just less stuff—it's more freedom, clarity, and space for what truly matters.",
    },
    tags: ["minimalism", "intentional living", "simplicity", "personal growth"],
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
