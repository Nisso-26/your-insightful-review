import Layout from "@/components/Layout";
import ExpertiseSection from "@/components/ExpertiseSection";
import SEO from "@/components/SEO";

const Expertise = () => (
  <Layout>
    <SEO
      title="Nos offres — Conseil, chasse, travaux & décoration | HUNTERS"
      description="Conseil en investissement, chasse immobilière, pilotage des travaux, décoration et ameublement : nos quatre expertises pour un investissement locatif rentable clé en main."
      path="/expertise"
    />
    <ExpertiseSection />
  </Layout>
);

export default Expertise;
