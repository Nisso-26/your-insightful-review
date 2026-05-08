import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Compass, GraduationCap, TrendingUp } from "lucide-react";

const candidatureSchema = z.object({
  first_name: z.string().trim().nonempty("Prénom requis").max(100),
  last_name: z.string().trim().nonempty("Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().nonempty("Téléphone requis").max(30),
  city: z.string().trim().nonempty("Ville requise").max(100),
  experience: z.string().nonempty("Expérience requise"),
  message: z.string().trim().max(2000).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Consentement requis" }) }),
});

const reasons = [
  {
    icon: Compass,
    title: "Liberté & indépendance",
    text: "Vous exercez à votre rythme, sur votre secteur, avec votre clientèle.",
  },
  {
    icon: GraduationCap,
    title: "Formation & accompagnement",
    text: "Intégration, outils, méthode Hunters et suivi terrain dès le premier jour.",
  },
  {
    icon: TrendingUp,
    title: "Rémunération attractive",
    text: "Commissions compétitives, système de parrainage et progression N1/N2.",
  },
];

const Rejoindre = () => {
  const reasonsRef = useScrollReveal();
  const formRef = useScrollReveal();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = candidatureSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Formulaire incomplet",
        description: result.error.issues[0]?.message ?? "Vérifiez les champs",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("candidatures_reseau").insert({
      first_name: result.data.first_name,
      last_name: result.data.last_name,
      email: result.data.email,
      phone: result.data.phone,
      city: result.data.city,
      experience: result.data.experience,
      message: result.data.message ?? null,
      consent: result.data.consent,
    });
    setSubmitting(false);
    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer la candidature. Réessayez.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Candidature envoyée",
      description: "Merci ! Nous reviendrons vers vous très vite.",
    });
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      city: "",
      experience: "",
      message: "",
      consent: false,
    });
  };

  return (
    <Layout>
      <SEO
        title="Rejoindre le réseau Hunters — Mandataires immobiliers"
        description="Devenez mandataire indépendant Hunters. Liberté, formation, rémunération attractive. Rejoignez un réseau structuré et ambitieux."
        path="/rejoindre"
      />

      {/* Hero */}
      <section className="bg-primary pt-32 pb-24 border-b-2 border-accent">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="section-tag mb-6 text-accent">Réseau Hunters</p>
          <h1 className="font-display text-4xl font-light text-white sm:text-5xl lg:text-6xl mb-8">
            Rejoignez le <em className="italic text-accent">réseau Hunters</em>
          </h1>
          <p className="font-body text-base leading-relaxed text-white/75 max-w-2xl mx-auto">
            Devenez mandataire indépendant et développez votre activité avec le soutien d'une structure experte, structurée et ambitieuse.
          </p>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6" ref={reasonsRef}>
          <p className="section-tag mb-4" data-reveal>Avantages</p>
          <h2 className="font-display text-4xl font-light text-primary sm:text-5xl mb-16" data-reveal data-reveal-delay="100">
            Pourquoi rejoindre <em className="italic text-accent">Hunters</em> ?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  data-reveal
                  data-reveal-delay={String(200 + i * 150)}
                  className="border-t-2 border-accent pt-8"
                >
                  <Icon className="h-8 w-8 text-accent mb-6" />
                  <h3 className="font-display text-2xl font-medium text-primary mb-4">
                    {r.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {r.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-6 max-w-3xl" ref={formRef}>
          <p className="section-tag mb-4" data-reveal>Candidature</p>
          <h2 className="font-display text-4xl font-light text-primary sm:text-5xl mb-6" data-reveal data-reveal-delay="100">
            Postuler au <em className="italic text-accent">réseau</em>
          </h2>
          <p className="font-body text-sm leading-relaxed text-muted-foreground mb-12" data-reveal data-reveal-delay="150">
            Remplissez le formulaire ci-dessous, nous reviendrons vers vous sous 48 heures.
          </p>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 lg:p-10 space-y-6" data-reveal data-reveal-delay="200">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="first_name" className="font-body text-[10px] font-bold uppercase tracking-[2px] text-primary">Prénom *</Label>
                <Input id="first_name" required maxLength={100} value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="last_name" className="font-body text-[10px] font-bold uppercase tracking-[2px] text-primary">Nom *</Label>
                <Input id="last_name" required maxLength={100} value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email" className="font-body text-[10px] font-bold uppercase tracking-[2px] text-primary">Email *</Label>
                <Input id="email" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone" className="font-body text-[10px] font-bold uppercase tracking-[2px] text-primary">Téléphone *</Label>
                <Input id="phone" type="tel" required maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="city" className="font-body text-[10px] font-bold uppercase tracking-[2px] text-primary">Ville de résidence *</Label>
                <Input id="city" required maxLength={100} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="mt-2" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="experience" className="font-body text-[10px] font-bold uppercase tracking-[2px] text-primary">Expérience immobilière *</Label>
                <Select value={form.experience} onValueChange={(v) => setForm({ ...form, experience: v })}>
                  <SelectTrigger id="experience" className="mt-2">
                    <SelectValue placeholder="Sélectionnez votre niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Débutant">Débutant</SelectItem>
                    <SelectItem value="1 à 3 ans">1 à 3 ans</SelectItem>
                    <SelectItem value="Plus de 3 ans">Plus de 3 ans</SelectItem>
                    <SelectItem value="Agent immobilier en activité">Agent immobilier en activité</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message" className="font-body text-[10px] font-bold uppercase tracking-[2px] text-primary">Parlez-nous de votre projet</Label>
                <Textarea id="message" rows={5} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2" />
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="consent"
                checked={form.consent}
                onCheckedChange={(v) => setForm({ ...form, consent: v === true })}
                className="mt-1"
              />
              <Label htmlFor="consent" className="font-body text-xs leading-relaxed text-muted-foreground cursor-pointer">
                J'accepte que mes données soient traitées par Hunters Immobilier dans le cadre de ma candidature, conformément à la{" "}
                <Link to="/confidentialite" className="text-accent underline hover:no-underline">politique de confidentialité</Link>.
              </Label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-sm bg-accent px-6 py-4 font-body text-[11px] font-extrabold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 hover:shadow-lg disabled:opacity-50"
            >
              {submitting ? "Envoi en cours..." : "Envoyer ma candidature"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Rejoindre;
