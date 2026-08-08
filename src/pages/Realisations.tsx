import Layout from "@/components/Layout";
import RealisationsSection from "@/components/RealisationsSection";
import PillarPageHero from "@/components/PillarPageHero";
import SEO from "@/components/SEO";

const Realisations = () => (
  <Layout>
    <SEO
      title="Nos réalisations — Investissements locatifs HUNTERS"
      description="Découvrez les projets immobiliers accompagnés par le cabinet HUNTERS à Tours : chasse, travaux et valorisation, présentés dans le respect de la confidentialité."
      path="/realisations"
    />
    <PillarPageHero
      eyebrow="Dossiers clos"
      docRef="REA-01"
      title="Réalisations"
      intro="Une sélection de projets accompagnés par le cabinet, présentés dans le respect de la confidentialité de nos clients."
    />
    <RealisationsSection />
  </Layout>
);

export default Realisations;
