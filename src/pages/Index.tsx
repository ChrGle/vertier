import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import heroOffice from "@/assets/hero-office.jpg";
import platformDashboard from "@/assets/platform-dashboard.png";
import platformStructure from "@/assets/platform-structure.png";
import { ArrowRight, Building2, Zap, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: `url(${heroOffice})` }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Vertier Property Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              En komplett plattform för administration och processstöd inom fastighetsförvaltning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/plattform">
                  Upptäck plattformen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/kontakt">Kontakta oss</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Varför välja Vertier?</h2>
              <p className="text-xl text-muted-foreground">
                En plattform som förenklar och effektiviserar hela er fastighetsförvaltning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Helhetslösning</h3>
                <p className="text-muted-foreground">
                  Administration och processstöd i en enda plattform
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Effektivitet</h3>
                <p className="text-muted-foreground">
                  Automatisera rutiner och spara värdefull tid
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Säkerhet</h3>
                <p className="text-muted-foreground">
                  Hög säkerhet och dataskydd enligt svenska standarder
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-muted-foreground">
                  Dedikerad support och kontinuerlig utveckling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Plattformen i aktion</h2>
              <p className="text-xl text-muted-foreground">
                Se hur Vertier Property Platform förenklar er fastighetsförvaltning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={platformDashboard} 
                  alt="Vertier Dashboard - Översikt och analys" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Översiktlig Dashboard</h3>
                  <p className="text-muted-foreground">
                    Få en komplett översikt över er verksamhet med realtidsdata och interaktiva analyser
                  </p>
                </div>
              </div>
              
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={platformStructure} 
                  alt="Vertier Fastighetsstruktur" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Fastighetsstruktur</h3>
                  <p className="text-muted-foreground">
                    Hantera hela er fastighetsportfölj med en tydlig och strukturerad hierarki
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Administration</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Hantera er fastighetsportfölj effektivt med verktyg för fastighetsstruktur, 
                  hyresgästkommunikation, mobilanpassat gränssnitt, rollanpassad dashboard, 
                  rapporter, dokumenthantering och avtalshantering.
                </p>
                <Button asChild variant="default">
                  <Link to="/plattform">Läs mer om plattformen</Link>
                </Button>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Processstöd</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Effektivisera era processer med integrerat stöd för inköp, kundservice, 
                  uthyrning, underhållsplaner, serviceärenden, besiktning och accesshantering. 
                  Allt i en sammanhängande plattform.
                </p>
                <Button asChild variant="default">
                  <Link to="/plattform">Se hela lösningen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Redo att modernisera er fastighetsförvaltning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakta oss idag för en demonstration av Vertier Property Platform
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/kontakt">
                Boka demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">Vertier AB</h3>
                <p className="text-sm text-muted-foreground">
                  Ledande plattform för fastighetsförvaltning
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Snabblänkar</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/plattform" className="text-muted-foreground hover:text-accent transition-colors">
                      Plattformen
                    </Link>
                  </li>
                  <li>
                    <Link to="/om-oss" className="text-muted-foreground hover:text-accent transition-colors">
                      Om oss
                    </Link>
                  </li>
                  <li>
                    <Link to="/kontakt" className="text-muted-foreground hover:text-accent transition-colors">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Kontakt</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>info@vertier.se</li>
                  <li>+46 12 345 67 89</li>
                  <li>Stockholm, Sverige</li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>© 2024 Vertier AB. Alla rättigheter förbehållna.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
