import Layout from "@/components/Layout";
import TeamSection from "@/components/TeamSection";
import SEO from "@/components/SEO";

const Equipe = () => (
  <Layout>
    <SEO
      title="L'équipe HUNTERS — Experts en investissement immobilier"
      description="Rencontrez les chasseurs immobiliers et conseillers patrimoniaux HUNTERS. Une équipe d'experts dédiée à la réussite de votre projet d'investissement locatif."
      path="/equipe"
    />
    <TeamSection />
  </Layout>
);

export default Equipe;
