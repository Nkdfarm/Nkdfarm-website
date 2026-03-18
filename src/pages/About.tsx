import Header from "@/components/Header";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import toaAtoll from "@/assets/toa-atoll.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          

          
          

          
        </div>

        {/* Atoll Image Section */}
        <section className="mb-16 rounded-2xl overflow-hidden">
          <img src={toaAtoll} alt="Aerial view of Toa atoll in French Polynesia" className="w-full h-auto object-cover rounded-2xl" />
        </section>

        {/* Story Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p>Toau, an almost wild atoll in the middle of the Pacific, showed us our complete dependence on complex global food logistics for fresh produce. Strangely, that uneasy feeling of vulnerability followed us back to the big city, triggered by origin tags in everyday supermarkets.


A pivotal meeting with Meiny Prins revealed the harsh reality of current food production. Bringing sustainable farming back to urban areas solves a cascade of social and environmental challenges. That's when Naked Farmbox was born.
          </p>
          



          
          <p>
            We explore topics that matter: wellness practices that actually work, travel experiences that transform 
            us, creative pursuits that bring joy, and personal growth strategies that lead to lasting change. 
            Our approach is grounded in curiosity, backed by research, and enriched by lived experience.
          </p>
        </section>



        



























        

        {/* Mission Copy Section */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Vision</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>


            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                
                <span>Build a global decentralized network of small-scale food producers by empowering tens of thousands of local entrepreneurs to grow and sell food profitably within their own communities</span>
              </li>
              <li className="flex items-start">
                
                
              </li>
              

              
              <li className="flex items-start">
                
                
              </li>
            </ul>
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
    </div>);};

export default About;