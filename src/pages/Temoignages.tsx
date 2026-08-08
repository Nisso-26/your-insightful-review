import Layout from "@/components/Layout";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import SEO from "@/components/SEO";

const Temoignages = () => (
  <Layout>
    <SEO
      title="Témoignages clients | HUNTERS Immobilier Tours"
      description="Découvrez les retours de nos clients investisseurs, publiés au fil des accompagnements menés par le cabinet HUNTERS à Tours."
      path="/temoignages"
    />
    <StatsSection />
    <TestimonialsSection />
  </Layout>
);

export default Temoignages;
