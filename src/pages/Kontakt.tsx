import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
const Kontakt = () => {
  const [sent, setSent] = useState(false);
  const [captchaOk, setCaptchaOk] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // hindra 404 / sidladdning

    if (!captchaOk) {
      alert("Vänligen bekräfta att du inte är en robot.");
      return;
    }
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") ?? "";
    const email = formData.get("email") ?? "";
    const company = formData.get("company") ?? "";
    const message = formData.get("message") ?? "";
    const subject = encodeURIComponent("Kontakt via vertier.se");
    const body = encodeURIComponent(`Namn: ${name}
E-post: ${email}
Företag: ${company}

Meddelande:
${message}`);
    window.location.href = `mailto:info@vertier.se?subject=${subject}&body=${body}`;
    setSent(true);
  };
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
                  direkt via e-post.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Vi vill gärna komma i kontakt med dig. Skicka oss gärna ett mail, så hör vi av oss.                       </h3>
                      <a href="mailto:info@vertier.se" className="text-muted-foreground hover:text-accent transition-colors">
                        info@vertier.se
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Adress</h3>
                      <p className="text-muted-foreground">
                        Stockholm, Göteborg, Helsingborg, Sverige
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              
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