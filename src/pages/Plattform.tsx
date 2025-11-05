import Navigation from "@/components/Navigation";
import processDiagram from "@/assets/process-diagram.jpg";
import { Building2, MessageCircle, Paperclip, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
const Plattform = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Vertier Property Platform
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                En komplett lösning för administration och processstöd inom fastighetsförvaltning
              </p>
            </div>
          </div>
        </section>

        {/* Platform Diagram */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Så fungerar plattformen
              </h2>
              <div className="mb-8 max-w-md mx-auto">
                <Input type="text" placeholder="Skriv här..." />
              </div>
              <div className="bg-card rounded-lg shadow-lg p-8">
                <img src={processDiagram} alt="Vertier Property Platform - Process diagram" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Administration Features */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Administration</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <Building2 className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Fastighetsstruktur</h3>
                  <p className="text-muted-foreground">
                    Hantera och organisera era fastigheter effektivt
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <MessageCircle className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Hyresgäst-kommunikation</h3>
                  <p className="text-muted-foreground">
                    Smidig kommunikation med hyresgäster
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <FileText className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Rapporter</h3>
                  <p className="text-muted-foreground">
                    Detaljerade rapporter och analyser
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <Paperclip className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Dokument-hantering</h3>
                  <p className="text-muted-foreground">
                    Centraliserad dokumenthantering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Support Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Processstöd</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <div className="text-4xl mb-4">🛒</div>
                  <h3 className="text-xl font-semibold mb-2">Inköp</h3>
                  <p className="text-muted-foreground">
                    Effektivisera inköpsprocessen
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-semibold mb-2">Kundservice</h3>
                  <p className="text-muted-foreground">
                    Professionell kundservicehantering
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-semibold mb-2">Underhållsplaner</h3>
                  <p className="text-muted-foreground">
                    Planera och följ upp underhåll
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-semibold mb-2">Serviceärenden</h3>
                  <p className="text-muted-foreground">
                    Hantera serviceärenden enkelt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Integrationer</h2>
              <p className="text-lg opacity-90 mb-8">Vertier Property Platform kan integreras sömlöst med era befintliga system för styr- och regler, IMD-mätning, marknad, accessystem, energideklaration, fastighetsdata, visualisering och ekonomi.</p>
              <p className="text-lg opacity-90">Dessutom används de inbyggda integrationer med Microsoft för ännu mer kraft och flexibilitet.</p>
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
export default Plattform;