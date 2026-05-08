import { useState, useRef } from "react";
import { Phone, Mail, MapPin, ArrowRight, Check, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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

const inputClass =
  "w-full rounded-sm bg-white/10 border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-white/55 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors";
const labelClass =
  "mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-white/95";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const ref = useScrollReveal();
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current!;
    const formData = new FormData(form);

    const id = crypto.randomUUID();
    const firstName = formData.get("first_name") as string;
    const email = formData.get("email") as string;

    const { error } = await supabase.from("contact_leads").insert({
      id,
      first_name: firstName,
      last_name: formData.get("last_name") as string,
      email,
      phone: (formData.get("phone") as string) || null,
      project_type: (formData.get("project_type") as string) || null,
      budget: (formData.get("budget") as string) || null,
      message: (formData.get("message") as string) || null,
      consent,
    });

    setLoading(false);

    if (error) {
      toast({ title: "Erreur", description: "Une erreur est survenue. Veuillez réessayer.", variant: "destructive" });
      return;
    }

    // Send confirmation email (fire-and-forget, don't block the success state)
    supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "contact-confirmation",
        recipientEmail: email,
        idempotencyKey: `contact-confirm-${id}`,
        templateData: { firstName },
      },
    }).catch((err) => console.error("Confirmation email failed", err));

    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-primary py-24" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="section-tag mb-4" data-reveal>Contact</p>
            <h2 id="contact-heading" className="font-display text-4xl font-light text-white sm:text-5xl lg:text-[58px] mb-8" data-reveal data-reveal-delay="100">
              Démarrons <em className="italic text-accent">votre projet</em>
            </h2>
            <p className="font-body text-sm leading-relaxed text-white/75 mb-10 max-w-md" data-reveal data-reveal-delay="200">
              Remplissez le formulaire ci-contre et un expert Hunters vous contacte sous 24 heures
              pour discuter de votre projet d'investissement.
            </p>

            <div className="space-y-5" data-reveal data-reveal-delay="300">
              <a href="tel:0259160337" className="flex items-center gap-4 text-white/90 hover:text-accent focus:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-sm transition-colors">
                <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="font-body text-sm">02 59 16 03 37</span>
              </a>
              <a href="mailto:hunters@huntersimmobilier.fr" className="flex items-center gap-4 text-white/90 hover:text-accent focus:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-sm transition-colors">
                <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="font-body text-sm">hunters@huntersimmobilier.fr</span>
              </a>
              <div className="flex items-center gap-4 text-white/90">
                <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                <address className="font-body text-sm not-italic">45 rue Michel Colombe, 37000 Tours</address>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-8" data-reveal data-reveal-delay="200">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center" role="status" aria-live="polite">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-medium text-white mb-2">Demande envoyée</h3>
                <p className="font-body text-sm text-white/85">Nous vous contactons sous 24h. ✓</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" aria-label="Formulaire de contact" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first_name" className={labelClass}>Prénom <span aria-hidden="true" className="text-accent">*</span></label>
                    <input id="first_name" type="text" name="first_name" placeholder="Votre prénom" required aria-required="true" autoComplete="given-name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="last_name" className={labelClass}>Nom <span aria-hidden="true" className="text-accent">*</span></label>
                    <input id="last_name" type="text" name="last_name" placeholder="Votre nom" required aria-required="true" autoComplete="family-name" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email <span aria-hidden="true" className="text-accent">*</span></label>
                  <input id="email" type="email" name="email" placeholder="votre@email.fr" required aria-required="true" autoComplete="email" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Téléphone</label>
                  <input id="phone" type="tel" name="phone" placeholder="06 XX XX XX XX" autoComplete="tel" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="project_type" className={labelClass}>Type de projet <span aria-hidden="true" className="text-accent">*</span></label>
                  <select id="project_type" name="project_type" required aria-required="true" className={inputClass}>
                    <option value="" className="text-foreground">Sélectionnez votre projet</option>
                    {projectTypes.map((p) => (<option key={p} value={p} className="text-foreground">{p}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className={labelClass}>Budget</label>
                  <select id="budget" name="budget" className={inputClass}>
                    <option value="" className="text-foreground">Votre budget envisagé</option>
                    {budgets.map((b) => (<option key={b} value={b} className="text-foreground">{b}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea id="message" name="message" placeholder="Décrivez votre projet, vos objectifs..." rows={4} className={`${inputClass} resize-none`} />
                </div>
                <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer">
                  <input id="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required aria-required="true" className="mt-1 h-4 w-4 accent-accent" />
                  <span className="font-body text-xs text-white/85">
                    J'accepte la{" "}
                    <Link to="/confidentialite" className="text-accent underline focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-sm">
                      politique de confidentialité
                    </Link>{" "}
                    <span aria-hidden="true" className="text-accent">*</span>
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-sm bg-accent py-4 font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      <span>Envoi en cours…</span>
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className="text-center font-body text-[11px] text-white/65">
                  <span aria-hidden="true" className="text-accent">*</span> Champs obligatoires — vos données restent confidentielles.
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
