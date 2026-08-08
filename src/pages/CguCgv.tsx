import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";

const sections = [
  {
    title: "Objet",
    text: "Les présentes conditions régissent l'utilisation du site huntersimmobilier.fr et la fourniture des prestations de conseil, chasse immobilière, suivi de travaux et décoration proposées par HUNTERS.",
  },
  {
    title: "Prestations",
    text: "Chaque prestation fait l'objet d'un mandat ou d'une lettre de mission distincte, précisant son périmètre, ses honoraires et ses modalités — voir la page Honoraires pour la structure générale.",
  },
  {
    title: "Responsabilité",
    text: "HUNTERS s'engage à mettre en œuvre les moyens nécessaires à la bonne exécution de ses missions, sans garantie de résultat sur les éléments dépendant de tiers (marché, artisans, notaires).",
  },
  {
    title: "Droit applicable",
    text: "Les présentes conditions sont soumises au droit français. Tout litige relève des juridictions compétentes de Tours.",
  },
];

const CguCgv = () => (
  <Layout>
    <SEO
      title="CGU / CGV | HUNTERS"
      description="Conditions générales d'utilisation et de vente du cabinet HUNTERS — objet, prestations, responsabilité et droit applicable."
      path="/cgu-cgv"
    />
    <PillarPageHero eyebrow="Conditions" docRef="CGV-01" title="CGU / CGV" intro="" />
    <section className="bg-background py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="space-y-12">
          {sections.map((s) => (
            <div key={s.title} className="border-t border-primary/15 pt-6">
              <h2 className="mb-3 font-display text-xl text-primary">{s.title}</h2>
              <p className="font-body text-[15px] leading-[1.9] text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default CguCgv;
