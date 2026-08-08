import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";
import NumberedSteps from "@/components/NumberedSteps";
import CalloutBox from "@/components/CalloutBox";
import PillarClosingCta from "@/components/PillarClosingCta";

const steps = [
  { title: "Plan d'aménagement", desc: "Optimisation des volumes, choix des matériaux et de l'ambiance." },
  { title: "Sélection du mobilier", desc: "Ameublement adapté au budget et à la cible (locative ou personnelle)." },
  { title: "Coordination des livraisons", desc: "Réception et installation, jusqu'au dernier détail." },
  { title: "Mise en valeur finale", desc: "Reportage photo du bien livré, support à la mise en location si besoin." },
];

const Decoration = () => (
  <Layout>
    <SEO
      title="Décoration & ameublement — Pilier IV | HUNTERS"
      description="Plan d'aménagement, mobilier, coordination des livraisons et mise en valeur : nous révélons le potentiel locatif ou personnel de votre bien."
      path="/expertise/decoration"
    />
    <PillarPageHero
      eyebrow="EXPERTISE — PILIER IV"
      docRef="EXP-04"
      title="Décoration & ameublement"
      intro="Dernière étape du parcours : nous aménageons le bien pour en révéler tout le potentiel — qu'il s'agisse de maximiser son attractivité locative ou de le préparer à être habité."
    />
    <section className="bg-background py-20">
      <div className="container mx-auto space-y-16 px-6">
        <NumberedSteps items={steps} />
        <CalloutBox
          title="Une décoration pensée pour son usage"
          text="Locatif ou résidence personnelle : le parti pris esthétique et budgétaire s'adapte à la destination du bien."
        />
      </div>
    </section>
    <PillarClosingCta
      idPrefix="decoration"
      eyebrow="DÉMARRER AVEC LE PILIER DÉCORATION"
      title="Révélons le potentiel de votre bien"
      text="Réponse motivée sous 24h ouvrées, sans engagement."
    />
  </Layout>
);

export default Decoration;
