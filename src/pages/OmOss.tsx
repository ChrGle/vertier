import Navigation from "@/components/Navigation";
import { Target, Users, Lightbulb, Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Vår historia</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground space-y-4">
                <p>
                  Vertier AB grundades 2022 med en tydlig vision om att skapa ett modernt system som förenar 
                  fastighetsbolagens processer och förvandlar dem till konkret affärsnytta.
                </p>
                <p>
                  Vi såg hur många aktörer i branschen arbetar med isolerade system, manuella rutiner och 
                  tidskrävande arbetsflöden, vilket gör att mycket av potentialen går förlorad. Därför byggde 
                  vi Vertier på en solid grund av djup branscherfarenhet och teknisk spetskompetens inom 
                  Microsoft Dynamics-plattformen.
                </p>
                <p>
                  Vår kärna består av experter med lång erfarenhet från några av Sveriges största fastighetsbolag, 
                  tillsammans med en delägare med omfattande utvecklingskompetens inom Microsofts ekosystem. 
                  Den kombinationen gör att vi kan forma lösningar som inte bara digitaliserar utan verkligen effektiviserar.
                </p>
                <p>
                  Vertier drivs av en genuin passion för att förbättra fastighetsbranschen. Med över 25 års samlad 
                  erfarenhet från ledande positioner har vi en djup förståelse för branschens utmaningar och hur de 
                  kan vändas till möjligheter.
                </p>
                <p>
                  Vårt mål är enkelt men kraftfullt att skapa system som frigör tid, minskar kostnader och ger 
                  fastighetsbolag förutsättningar att växa hållbart, datadrivet och framtidssäkert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Teamet bakom Vertier</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-2">Per Lagerlöf</h3>
                  <p className="text-muted-foreground mb-4">
                    Ingenjörsutbildning. Arbetat med utvecklingskoncept inom inköp på stora industrier och fastighetsbolag. 
                    Har erfarenhet som inköpschef och affärsutvecklare.
                  </p>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:per.lagerlof@vertier.se" className="hover:text-foreground transition-colors">
                        per.lagerlof@vertier.se
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <a href="tel:+46702531341" className="hover:text-foreground transition-colors">
                        +46 702-53 13 41
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-2">Christofer Gleissman</h3>
                  <p className="text-muted-foreground mb-4">
                    Ingenjörsutbildning. Arbetat som supply chain manager, strategisk inköpare och projektledare 
                    för systemimplementationer hos större fastighetsbolag.
                  </p>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:christofer.gleissman@vertier.se" className="hover:text-foreground transition-colors">
                        christofer.gleissman@vertier.se
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <a href="tel:+46709588805" className="hover:text-foreground transition-colors">
                        +46 709-58 88 05
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-2">Jonas Sonberger</h3>
                  <p className="text-muted-foreground mb-4">
                    Bakgrund inom IT, affärsutveckling och ledarskap. Har arbetat som CDO och digitaliseringschef 
                    på fastighetsbolag med fokus på att driva digital transformation.
                  </p>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:jonas.sonberger@vertier.se" className="hover:text-foreground transition-colors">
                        jonas.sonberger@vertier.se
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <a href="tel:+46702888332" className="hover:text-foreground transition-colors">
                        +46 702-88 83 32
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-secondary/50">
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
