import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Check } from "lucide-react";

const projectTypes = [
  "Investissement locatif (résidentiel)",
  "Immeuble de rapport",
  "Colocation / LMNP meublé",
  "Résidence principale ou secondaire",
  "Autre",
];

const budgets = [
  "Moins de 100 000 €",
  "100 000 € — 200 000 €",
  "200 000 € — 400 000 €",
  "400 000 € — 700 000 €",
  "Plus de 700 000 €",
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-primary py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="section-tag mb-4">Contact</p>
            <h2 className="font-display text-4xl font-light text-white sm:text-5xl lg:text-[58px] mb-8">
              Démarrons <em className="italic text-accent">votre projet</em>
            </h2>
            <p className="font-body text-sm leading-relaxed text-white/60 mb-10 max-w-md">
              Remplissez le formulaire ci-contre et un expert HUNTERS vous contacte sous 24 heures
              pour discuter de votre projet d'investissement.
            </p>

            <div className="space-y-5">
              <a href="tel:0650152287" className="flex items-center gap-4 text-white/80 hover:text-accent transition-colors">
                <Phone className="h-5 w-5 text-accent" />
                <span className="font-body text-sm">06 50 15 22 87</span>
              </a>
              <a href="mailto:contact@huntersimmobilier.fr" className="flex items-center gap-4 text-white/80 hover:text-accent transition-colors">
                <Mail className="h-5 w-5 text-accent" />
                <span className="font-body text-sm">contact@huntersimmobilier.fr</span>
              </a>
              <div className="flex items-center gap-4 text-white/80">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-body text-sm">45 rue Michel Colombe, 37000 Tours</span>
              </div>
            </div>
          </div>

          {/* Right - form */}
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-medium text-white mb-2">
                  Demande envoyée
                </h3>
                <p className="font-body text-sm text-white/60">
                  Nous vous contactons sous 24h. ✓
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Votre prénom"
                    required
                    className="w-full rounded-sm bg-white/10 border border-white/10 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Votre nom"
                    required
                    className="w-full rounded-sm bg-white/10 border border-white/10 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="votre@email.fr"
                  required
                  className="w-full rounded-sm bg-white/10 border border-white/10 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="06 XX XX XX XX"
                  className="w-full rounded-sm bg-white/10 border border-white/10 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                />
                <select
                  required
                  className="w-full rounded-sm bg-white/10 border border-white/10 px-4 py-3 font-body text-sm text-white/70 focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="" className="text-foreground">Sélectionnez votre projet</option>
                  {projectTypes.map((p) => (
                    <option key={p} value={p} className="text-foreground">{p}</option>
                  ))}
                </select>
                <select className="w-full rounded-sm bg-white/10 border border-white/10 px-4 py-3 font-body text-sm text-white/70 focus:border-accent focus:outline-none transition-colors">
                  <option value="" className="text-foreground">Votre budget envisagé</option>
                  {budgets.map((b) => (
                    <option key={b} value={b} className="text-foreground">{b}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Décrivez votre projet, vos objectifs..."
                  rows={4}
                  className="w-full rounded-sm bg-white/10 border border-white/10 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors resize-none"
                />
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 accent-accent"
                  />
                  <span className="font-body text-xs text-white/50">
                    J'accepte la{" "}
                    <a href="/confidentialite" className="text-accent underline">
                      politique de confidentialité
                    </a>
                  </span>
                </label>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-sm bg-accent py-4 font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 hover:shadow-lg"
                >
                  Envoyer ma demande
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center font-body text-[10px] text-white/30">
                  Vos données sont confidentielles et ne sont jamais partagées avec des tiers.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
