import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
const Kontakt = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kontakta oss
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Vi hjälper er gärna med frågor om Vertier Property Platform
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Hör av dig</h2>
                <p className="text-muted-foreground mb-8">
                  Fyll i formuläret så återkommer vi inom kort. Du kan även nå oss 
                  direkt via telefon eller e-post.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">E-post</h3>
                      <a href="mailto:info@vertier.se" className="text-muted-foreground hover:text-accent transition-colors">
                        info@vertier.se
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    
                    <div>
                      
                      
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Adress</h3>
                      <p className="text-muted-foreground">
                        Stockholm, Sverige
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Namn *
                    </label>
                    <Input id="name" type="text" placeholder="Ditt namn" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-post *
                    </label>
                    <Input id="email" type="email" placeholder="din@email.se" required />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Företag
                    </label>
                    <Input id="company" type="text" placeholder="Ditt företag" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Meddelande *
                    </label>
                    <Textarea id="message" placeholder="Berätta hur vi kan hjälpa dig..." rows={5} required />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Skicka meddelande
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2024 Vertier AB. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Kontakt;