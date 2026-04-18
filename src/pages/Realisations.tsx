import Layout from "@/components/Layout";
import RealisationsSection from "@/components/RealisationsSection";
import SEO from "@/components/SEO";

const Realisations = () => (
  <Layout>
    <SEO
      title="Nos réalisations — Investissements locatifs HUNTERS"
      description="Découvrez nos investissements immobiliers réalisés à Tours et en France : chasses, rénovations, mises en location et rendements obtenus pour nos clients."
      path="/realisations"
    />
    <RealisationsSection />
  </Layout>
);

export default Realisations;
