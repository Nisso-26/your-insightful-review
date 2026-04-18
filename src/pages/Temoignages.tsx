import Layout from "@/components/Layout";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import SEO from "@/components/SEO";

const Temoignages = () => (
  <Layout>
    <SEO
      title="Témoignages clients — 98% de satisfaction | HUNTERS"
      description="Lisez les témoignages de nos clients investisseurs. 98% de satisfaction, plus de 200 projets réalisés : la confiance au cœur de l'expertise HUNTERS."
      path="/temoignages"
    />
    <StatsSection />
    <TestimonialsSection />
  </Layout>
);

export default Temoignages;
