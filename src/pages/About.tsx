import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import { Mail, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const boardMembers = [
  {
    name: "Grant Horsfield",
    role: "Founder",
    bio: "Serial entrepreneur & UCT GSB MBA. Built global real estate portfolio + \"The Naked Retreat\" luxury hospitality disruptor. TEDx speaker with multimillion exits across China, South Africa, Europe",
    image: "/lovable-uploads/dc6be22a-0a0f-4aef-b154-01b12f59311b.png",
    flagCode: "za",
  },
  {
    name: "Oliver Tittman",
    role: "test",
    bio: "MBA entrepreneur pioneering modular construction across 6 countries. XCUBE founder scaling prefab systems that cut deployment 50-80%. TEDx speaker standardizing hotels, housing, infrastructure.",
    image: "/lovable-uploads/bfcee86e-a748-4d16-8ac2-c6a5d67246c1.jpg",
    flagCode: ["be", "us"],
  },
  {
    name: "Francesco Gaudioso",
    role: "Head of Technology",
    bio: "Mechanical and Energy Engineer driving innovation across OEM projects, off-grid tech, and ocean adventures.",
    image: "/lovable-uploads/3ad422b8-63a9-49e7-96ea-52557ec23949.jpg",
    flagCode: "it",
  },
  {
    name: "Frederick Steinmeyer",
    role: "Head of Life",
    bio: "Test",
    image: "/lovable-uploads/6d7ee304-e5db-4a64-bd3b-ad13d67178ef.jpg",
    flagCode: ["de", "za"],
  },
  {
    name: "Natalia Ozerova-Jones",
    role: "Chief Executive Officer",
    bio: "test",
    image: "/lovable-uploads/985ef160-a7aa-4cb0-93f1-35cc83bf0b96.jpg",
    flagCode: "ru",
  },
  {
    name: "Robbie Taylor",
    role: "Chief Financial Officer",
    bio: "Finance professional with deep expertise in capital structuring, investment strategy, and sustainable business models across emerging markets.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    flagCode: "za",
  },
  {
    name: "Abigail Rutter",
    role: "Executive Assistant",
    bio: "Experienced executive assistant with a background in farming operations and private family office management, bringing organizational excellence to agricultural ventures.",
    image: "/lovable-uploads/abigail-rutter.jpeg",
    flagCode: "gb",
  },
  {
    name: "Jason Karas",
    role: "Legal Counsel",
    bio: "Seasoned international lawyer with extensive commercial experience.",
    image: "/lovable-uploads/jason-karas.jpeg",
    flagCode: "hk",
  },
];

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "instant", block: "start" }), 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6"></div>

        {/* Atoll Image Section */}
        <section className="mb-16 rounded-2xl overflow-hidden">
          <img
            alt="Aerial view of Toa atoll in French Polynesia"
            className="w-full h-auto object-cover rounded-2xl"
            src="/lovable-uploads/27fcc19c-c6af-4bea-ad66-0689f4b39b81.jpg"
          />
        </section>

        {/* Story Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p>
            Toau, an almost wild atoll in the middle of the Pacific, showed us our complete dependence on complex global
            food logistics for fresh produce. Strangely, that uneasy feeling of vulnerability followed us back to the
            big city, triggered by origin tags in everyday supermarkets.
          </p>
          <p>
            A pivotal meeting with Meiny Prins revealed the harsh reality of current food production. Bringing sustainable farming back to urban areas solves a cascade
            of social and environmental challenges.
          </p>
          <p>
            That's when Naked Farms was born.
          </p>
        </section>

        {/* Our Board Section */}
        <section id="board" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-2">Our Board</h2>
          <p className="text-muted-foreground mb-8">An eclectic team viewing challenges through a global lens</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {boardMembers.map((member) => (
              <div key={member.name} className="rounded-2xl bg-card p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-5 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                      {member.name}
                      <span className="flex items-center gap-0.5">
                        {(Array.isArray(member.flagCode) ? member.flagCode : [member.flagCode]).map((code) => (
                          <img key={code} src={`https://flagcdn.com/20x15/${code}.png`} alt="" className="inline-block" width={20} height={15} />
                        ))}
                      </span>
                    </h3>
                    <p className="text-accent font-medium text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex items-center gap-2">
                  <a href="#email" className="w-8 h-8 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Email">
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a href="#twitter" className="w-8 h-8 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Twitter">
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                  <a href="#instagram" className="w-8 h-8 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center" aria-label="Instagram">
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Copy Section */}

        {/* CTA Section */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to receive our latest articles, insights, and inspiration directly in your inbox.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe Now
          </Button>
        </section>
      </main>
    </div>
  );
};
export default About;
