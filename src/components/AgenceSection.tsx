import PillarPageHero from "@/components/PillarPageHero";
import NumberedSteps from "@/components/NumberedSteps";
import PillarClosingCta from "@/components/PillarClosingCta";

const items = [
  {
    title: "Un positionnement",
    desc: "Aller au-delà de la simple recherche de bien — accompagner le projet dans son ensemble.",
  },
  {
    title: "Un seul interlocuteur",
    desc: "Du premier échange à la remise des clés, un conseiller unique suit votre dossier.",
  },
  {
    title: "Un ancrage local",
    desc: "Une connaissance fine du marché tourangeau et de ses opportunités.",
  },
];

const AgenceSection = () => (
  <>
    <PillarPageHero
      eyebrow="L'agence"
      docRef="AGC-01"
      title="Un cabinet, un accompagnement complet"
      intro="HUNTERS est né à Tours d'un constat simple : les investisseurs immobiliers sont accompagnés par étapes, jamais de bout en bout. Nous avons construit un cabinet qui réunit sous un même toit le conseil stratégique, la chasse, le suivi de travaux et la décoration."
    />

    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <NumberedSteps items={items} />
      </div>
    </section>

    <PillarClosingCta
      idPrefix="agence"
      eyebrow="Faisons connaissance"
      title="Discutons de votre projet d'investissement"
      text="Réponse motivée sous 24h ouvrées, sans engagement."
      submitLabel="Prendre rendez-vous"
    />
  </>
);

export default AgenceSection;
