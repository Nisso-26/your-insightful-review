import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";
import NumberedSteps from "@/components/NumberedSteps";
import CalloutBox from "@/components/CalloutBox";
import PillarClosingCta from "@/components/PillarClosingCta";

const steps = [
  { title: "Cadrage du chantier", desc: "Définition du programme de travaux, chiffrage et priorisation." },
  { title: "Sélection d'artisans qualifiés", desc: "Choix de professionnels qualifiés, mise en concurrence des devis." },
  { title: "Pilotage AMO", desc: "Suivi hebdomadaire de l'avancement, gestion des aléas de chantier." },
  { title: "Gestion du budget travaux", desc: "Contrôle des dépenses, réception et levée des réserves avant remise des clés." },
];

const Travaux = () => (
  <Layout>
    <SEO
      title="Suivi de travaux — Pilier III | HUNTERS"
      description="Cadrage du chantier, sélection des artisans, pilotage AMO et maîtrise du budget : nous pilotons la rénovation de votre bien de bout en bout."
      path="/expertise/travaux"
    />
    <PillarPageHero
      eyebrow="EXPERTISE — PILIER III"
      docRef="EXP-03"
      title="Suivi de travaux"
      intro="Nous pilotons la rénovation de votre bien de bout en bout — cadrage du chantier, sélection des artisans, suivi hebdomadaire — pour que le projet tienne son budget et son calendrier."
    />
    <section className="bg-background py-20">
      <div className="container mx-auto space-y-16 px-6">
        <NumberedSteps items={steps} />
        <CalloutBox
          title="Un budget maîtrisé du devis à la réception"
          text="La durée du chantier dépend de son ampleur — elle est estimée précisément après le cadrage initial, avant tout engagement."
        />
      </div>
    </section>
    <PillarClosingCta
      idPrefix="travaux"
      eyebrow="DÉMARRER AVEC LE PILIER TRAVAUX"
      title="Confiez-nous le pilotage de votre chantier"
      text="Réponse motivée sous 24h ouvrées, sans engagement."
    />
  </Layout>
);

export default Travaux;
