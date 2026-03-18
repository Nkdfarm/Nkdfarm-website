import Header from "@/components/Header";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          

          
          

          
        </div>

        {/* Story Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p>
            Perspective began with a simple question: What if we could create a space where thoughtful ideas, 
            meaningful stories, and practical wisdom come together to enrich our daily lives?
          </p>
          <p>
            In a world saturated with information, we felt the need for something different—a publication that 
            prioritizes depth over speed, quality over quantity, and authentic connection over viral content. 
            Perspective is our answer to that need.
          </p>
          <p>
            We explore topics that matter: wellness practices that actually work, travel experiences that transform 
            us, creative pursuits that bring joy, and personal growth strategies that lead to lasting change. 
            Our approach is grounded in curiosity, backed by research, and enriched by lived experience.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12 animate-slide-up">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            We believe the future of food lies in growing closer to where it's consumed — sustainably, efficiently, and profitably.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: "🌱", title: "Return to Origins", desc: "Reconnect communities with locally grown, nutrient-rich food." },
              { icon: "🏙️", title: "Grow Close to Cities", desc: "Bring food production to urban environments, reducing transport and emissions." },
              { icon: "♻️", title: "Minimize Waste", desc: "Maximize yield through precision agriculture while eliminating unnecessary waste." },
              { icon: "📈", title: "Redefine Profitability", desc: "Prove that sustainable farming is not just viable — it's the smarter investment." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-background p-6 space-y-2">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

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
    </div>);

};

export default About;
