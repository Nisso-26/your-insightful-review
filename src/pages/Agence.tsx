import Layout from "@/components/Layout";
import AgenceSection from "@/components/AgenceSection";
import SEO from "@/components/SEO";

const Agence = () => (
  <Layout>
    <SEO
      title="L'agence HUNTERS — Cabinet de conseil immobilier à Tours"
      description="Découvrez HUNTERS, cabinet de conseil patrimonial spécialisé en investissement immobilier locatif. Basés à Tours, nous accompagnons nos clients en France entière."
      path="/agence"
    />
    <AgenceSection />
  </Layout>
);

export default Agence;
