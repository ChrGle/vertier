import Navigation from "@/components/Navigation";
import { Target, Users, Lightbulb } from "lucide-react";

const OmOss = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Om Vertier
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Vi digitaliserar och effektiviserar fastighetsförvaltning
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <Target className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Vårt uppdrag</h3>
                  <p className="text-muted-foreground">
                    Att leverera den bästa plattformen för fastighetsförvaltning som förenklar 
                    vardagen för fastighetsförvaltare och hyresgäster.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Våra värderingar</h3>
                  <p className="text-muted-foreground">
                    Vi tror på öppenhet, innovation och nära samarbete med våra kunder. 
                    Tillsammans skapar vi lösningar som verkligen gör skillnad.
                  </p>
                </div>
                <div className="text-center">
                  <Lightbulb className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                  <p className="text-muted-foreground">
                    Vi utvecklar ständigt nya funktioner och förbättringar baserat på 
                    branschens behov och den senaste tekniken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Vår historia</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-4">
                  Vertier grundades med visionen att revolutionera fastighetsförvaltning genom 
                  modern teknologi. Vi såg behovet av en helhetslösning som kunde hantera både 
                  administration och processstöd på ett effektivt sätt.
                </p>
                <p>
                  Idag är vi ett ledande företag inom fastighetsförvaltningssystem med kunder 
                  över hela Sverige. Vår plattform används dagligen av fastighetsförvaltare för 
                  att effektivisera sina processer och förbättra servicen till sina hyresgäster.
                </p>
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
    </div>
  );
};

export default OmOss;
