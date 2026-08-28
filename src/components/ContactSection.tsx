import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, Check, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { budgets } from "@/lib/budgets";

const projectTypes = [
  "Investissement locatif (résidentiel)",
  "Immeuble de rapport",
  "Colocation / LMNP meublé",
  "Résidence principale ou secondaire",
  "Autre",
];

const inputClass =
  "w-full rounded-sm bg-background border border-primary/20 px-4 py-3 font-body text-sm text-primary placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors";
const labelClass =
  "mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-primary";

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

    try {
      const form = formRef.current!;
      const formData = new FormData(form);

      const id = crypto.randomUUID();
      const firstName = formData.get("first_name") as string;
      const email = formData.get("email") as string;

      // Garde-fou : si la requête HTTP part mais ne reçoit jamais de réponse,
      // la promesse ne se règle jamais et le bouton reste bloqué. On abandonne à 15 s.
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 15000);

      const { error } = await supabase
        .from("contact_leads")
        .insert({
          id,
          first_name: firstName,
          last_name: formData.get("last_name") as string,
          email,
          phone: (formData.get("phone") as string) || null,
          project_type: (formData.get("project_type") as string) || null,
          budget: (formData.get("budget") as string) || null,
          message: (formData.get("message") as string) || null,
          consent,
        })
        .abortSignal(controller.signal);

      window.clearTimeout(timeoutId);

      if (error) {
        console.error("Insert contact_leads failed", error);
        toast({
          title: "Erreur",
          description:
            "Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.",
          variant: "destructive",
        });
        return;
      }

      // Send confirmation email (fire-and-forget, don't block the success state)
      supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-confirmation",
          leadId: id,
          idempotencyKey: `contact-confirm-${id}`,
        },
      }).catch((err) => console.error("Confirmation email failed", err));


      // Notify HUNTERS internally (fire-and-forget)
      supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "lead-notification",
          recipientEmail: "hunters@huntersimmobilier.fr",
          idempotencyKey: `lead-notif-${id}`,
          templateData: {
            firstName,
            lastName: (formData.get("last_name") as string) || "",
            email,
            phone: (formData.get("phone") as string) || null,
            budget: (formData.get("budget") as string) || null,
            projectType: (formData.get("project_type") as string) || null,
            message: (formData.get("message") as string) || null,
            submittedAt: new Date().toISOString(),
            source: "Formulaire de contact",
          },
        },
      }).catch((err) => console.error("Lead notification email failed", err));

      setSubmitted(true);
    } catch (err) {
      console.error("ContactSection submit exception", err);
      toast({
        title: "Erreur",
        description:
          "Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-20" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 id="contact-heading" className="sr-only">Formulaire de contact</h2>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr]">
          {/* Formulaire */}
          <div className="border border-primary/15 bg-[hsl(var(--hunters-cream))] p-8 lg:p-10" data-reveal>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center" role="status" aria-live="polite">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Check className="h-8 w-8 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl text-primary mb-2">Demande envoyée</h3>
                <p className="font-body text-sm text-muted-foreground">Nous vous contactons sous 24h ouvrées.</p>
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
                    <option value="">Sélectionnez votre projet</option>
                    {projectTypes.map((p) => (<option key={p} value={p}>{p}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className={labelClass}>Budget</label>
                  <select id="budget" name="budget" className={inputClass}>
                    <option value="">Votre budget envisagé</option>
                    {budgets.map((b) => (<option key={b} value={b}>{b}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea id="message" name="message" placeholder="Décrivez votre projet, vos objectifs..." rows={4} className={`${inputClass} resize-none`} />
                </div>
                <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer">
                  <input id="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required aria-required="true" className="mt-1 h-4 w-4 accent-accent" />
                  <span className="font-body text-xs text-muted-foreground">
                    J'accepte la{" "}
                    <Link to="/confidentialite" className="text-primary underline underline-offset-4 hover:text-accent">
                      politique de confidentialité
                    </Link>{" "}
                    <span aria-hidden="true" className="text-accent">*</span>
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-sm bg-primary py-4 font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-accent/60 disabled:opacity-60"
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
                <p className="text-center font-body text-[11px] text-muted-foreground">
                  <span aria-hidden="true" className="text-accent">*</span> Champs obligatoires — vos données restent confidentielles.
                </p>
              </form>
            )}
          </div>

          {/* Coordonnées */}
          <div className="border-t-2 border-accent pt-8" data-reveal data-reveal-delay="150">
            <p className="font-body text-[10px] font-medium uppercase tracking-[4px] text-accent">
              Cabinet HUNTERS
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 text-primary">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <address className="font-body text-sm not-italic leading-relaxed">45 rue Michel Colombe, 37000 Tours</address>
              </div>
              <a href="tel:0650152287" className="flex items-center gap-4 text-primary hover:text-accent transition-colors">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="font-body text-sm">06 50 15 22 87</span>
              </a>
              <a href="mailto:hunters@huntersimmobilier.fr" className="flex items-center gap-4 text-primary hover:text-accent transition-colors">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="font-body text-sm">hunters@huntersimmobilier.fr</span>
              </a>
            </div>

            <div className="mt-10 border-t border-primary/15 pt-8">
              <h3 className="font-body text-[10px] font-medium uppercase tracking-[4px] text-accent">Horaires</h3>
              <div className="mt-5 flex items-start gap-4 text-primary">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div className="font-body text-sm leading-relaxed">
                  <p>Mardi – Vendredi : 9h – 12h30 / 14h – 18h</p>
                  <p className="mt-1">Samedi : 9h – 14h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
