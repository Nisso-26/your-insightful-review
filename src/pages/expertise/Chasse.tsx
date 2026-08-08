import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";
import NumberedSteps from "@/components/NumberedSteps";
import CalloutBox from "@/components/CalloutBox";
import PillarClosingCta from "@/components/PillarClosingCta";

const steps = [
  { title: "Sourcing élargi et off-market", desc: "Réseau d'agences, notaires et biens hors marché, en complément des plateformes classiques." },
  { title: "Visite et analyse technique", desc: "Évaluation du bien, du bâti, et du potentiel locatif ou de valorisation." },
  { title: "Négociation", desc: "Positionnement de l'offre et défense de vos intérêts jusqu'à l'accord." },
  { title: "Accompagnement jusqu'à l'acte", desc: "Coordination notariale, suivi du compromis jusqu'à la signature." },
];

const Chasse = () => (
  <Layout>
    <SEO
      title="Chasse immobilière — Pilier II | HUNTERS"
      description="Sourcing off-market, visites, analyse technique et négociation : nous trouvons le bien correspondant précisément à vos critères et vous accompagnons jusqu'à l'acte."
      path="/expertise/chasse"
    />
    <PillarPageHero
      eyebrow="EXPERTISE — PILIER II"
      docRef="EXP-02"
      title="Chasse immobilière"
      intro="Une fois le cadre défini, nous sourçons les biens correspondant précisément à vos critères — au-delà des annonces publiques, en off-market — et menons la négociation jusqu'à l'acte."
    />
    <section className="bg-background py-20">
      <div className="container mx-auto space-y-16 px-6">
        <NumberedSteps items={steps} />
        <CalloutBox
          title="Un mandat de recherche cadré"
          text="La durée d'une mission dépend du marché local et de la spécificité de vos critères — elle est précisée dans le mandat signé, encadré par la loi Hoguet."
        />
      </div>
    </section>
    <PillarClosingCta
      idPrefix="chasse"
      eyebrow="DÉMARRER AVEC LE PILIER CHASSE"
      title="Confiez-nous la recherche de votre bien"
      text="Réponse motivée sous 24h ouvrées, sans engagement."
    />
  </Layout>
);

export default Chasse;
