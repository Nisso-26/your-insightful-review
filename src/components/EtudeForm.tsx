import { useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const budgets = [
  "Moins de 100 000 €",
  "100 000 € — 200 000 €",
  "200 000 € — 400 000 €",
  "400 000 € — 700 000 €",
  "Plus de 700 000 €",
];

const objectifs = [
  "Rendement locatif",
  "Plus-value à terme",
  "Résidence principale ou secondaire",
  "Autre",
];

const inputClass =
  "w-full rounded-none border border-primary/20 bg-white px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors";
const labelClass =
  "mb-1.5 block font-body text-[10px] font-medium uppercase tracking-[2px] text-muted-foreground";

const EtudeForm = ({
  idPrefix = "etude",
  submitLabel = "Envoyer ma demande",
}: { idPrefix?: string; submitLabel?: string }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(formRef.current!);
      const id = crypto.randomUUID();
      const firstName = formData.get("first_name") as string;
      const email = formData.get("email") as string;

      const { error } = await supabase.from("contact_leads").insert({
        id,
        first_name: firstName,
        last_name: (formData.get("last_name") as string) || "",
        email,
        phone: null,
        project_type: (formData.get("project_type") as string) || null,
        budget: (formData.get("budget") as string) || null,
        message: null,
        consent: true,
      });

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

      supabase.functions
        .invoke("send-transactional-email", {
          body: {
            templateName: "contact-confirmation",
            recipientEmail: email,
            idempotencyKey: `contact-confirm-${id}`,
            templateData: { firstName },
          },
        })
        .catch((err) => console.error("Confirmation email failed", err));

      supabase.functions
        .invoke("send-transactional-email", {
          body: {
            templateName: "lead-notification",
            recipientEmail: "hunters@huntersimmobilier.fr",
            idempotencyKey: `lead-notif-${id}`,
            templateData: {
              firstName,
              lastName: (formData.get("last_name") as string) || "",
              email,
              phone: null,
              budget: (formData.get("budget") as string) || null,
              projectType: (formData.get("project_type") as string) || null,
              message: null,
              submittedAt: new Date().toISOString(),
              source: "Formulaire étude",
            },
          },
        })
        .catch((err) => console.error("Lead notification email failed", err));

      setSubmitted(true);
    } catch (err) {
      console.error("EtudeForm submit exception", err);
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

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center" role="status" aria-live="polite">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
          <Check className="h-7 w-7 text-accent" aria-hidden="true" />
        </div>
        <h3 className="font-display text-2xl text-primary mb-2">Demande envoyée</h3>
        <p className="font-body text-sm text-muted-foreground">
          Réponse motivée sous 24h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" aria-label="Étude patrimoniale gratuite">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-first_name`} className={labelClass}>Prénom</label>
          <input id={`${idPrefix}-first_name`} name="first_name" type="text" autoComplete="given-name" className={inputClass} />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-last_name`} className={labelClass}>Nom</label>
          <input id={`${idPrefix}-last_name`} name="last_name" type="text" autoComplete="family-name" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-email`} className={labelClass}>Email</label>
        <input id={`${idPrefix}-email`} name="email" type="email" required aria-required="true" autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-budget`} className={labelClass}>Budget d'investissement</label>
        <select id={`${idPrefix}-budget`} name="budget" className={inputClass} defaultValue="">
          <option value="">Sélectionner</option>
          {budgets.map((b) => (<option key={b} value={b}>{b}</option>))}
        </select>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-project_type`} className={labelClass}>Objectif</label>
        <select id={`${idPrefix}-project_type`} name="project_type" className={inputClass} defaultValue="">
          <option value="">Sélectionner</option>
          {objectifs.map((o) => (<option key={o} value={o}>{o}</option>))}
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-none bg-primary py-4 font-body text-[11px] font-medium uppercase tracking-[3px] text-primary-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent/60 disabled:opacity-60"
      >
        {loading ? (<><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Envoi en cours…</>) : submitLabel}
      </button>
    </form>
  );
};

export default EtudeForm;
