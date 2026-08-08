import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";
import NumberedSteps from "@/components/NumberedSteps";
import CalloutBox from "@/components/CalloutBox";
import PillarClosingCta from "@/components/PillarClosingCta";

const steps = [
  { title: "Analyse de capacité d'investissement", desc: "Taux d'endettement, TMI, apport disponible, effort d'épargne soutenable." },
  { title: "Définition de la cible de rendement", desc: "Rendement locatif visé, horizon de plus-value, tolérance au risque." },
  { title: "Choix de la zone et de la typologie", desc: "Secteurs cohérents avec vos objectifs, arbitrage neuf/ancien, typologie de bien." },
  { title: "Structuration juridique", desc: "Régime d'imposition adapté, opportunité d'une SCI, statut LMNP le cas échéant." },
];

const Strategie = () => (
  <Layout>
    <SEO
      title="Stratégie patrimoniale — Pilier I | HUNTERS"
      description="Capacité d'emprunt, fiscalité, zone et cible de rendement : nous établissons le cadre de votre projet d'investissement avant toute recherche de bien."
      path="/expertise/strategie"
    />
    <PillarPageHero
      eyebrow="EXPERTISE — PILIER I"
      docRef="EXP-01"
      title="Stratégie patrimoniale"
      intro="Avant toute recherche de bien, nous établissons le cadre de votre projet : capacité d'emprunt, fiscalité, zone géographique et cible de rendement. Cette analyse préalable oriente chaque décision qui suit."
    />
    <section className="bg-background py-20">
      <div className="container mx-auto space-y-16 px-6">
        <NumberedSteps items={steps} />
        <CalloutBox
          title="Un point de départ, pas une estimation générique"
          text="Le délai et la précision de cette étape dépendent de la complexité de votre situation patrimoniale — elle est cadrée dès le premier échange avec votre conseiller."
        />
      </div>
    </section>
    <PillarClosingCta
      idPrefix="strategie"
      eyebrow="DÉMARRER AVEC LE PILIER STRATÉGIE"
      title="Établissons ensemble le cadre de votre projet"
      text="Réponse motivée sous 24h ouvrées, sans engagement."
    />
  </Layout>
);

export default Strategie;
