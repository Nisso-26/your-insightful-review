import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BandeauSection from "@/components/BandeauSection";
import WhyHuntersSection from "@/components/WhyHuntersSection";
import StatsSection from "@/components/StatsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProcessSection from "@/components/ProcessSection";
import RealisationsSection from "@/components/RealisationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SEO from "@/components/SEO";

const Index = () => (
  <Layout>
    <SEO
      title="HUNTERS — Chasseur Immobilier Tours | Investissement Locatif"
      description="HUNTERS, chasseur immobilier expert à Tours. Stratégie, chasse, travaux et décoration. Accompagnement complet de A à Z pour votre investissement rentable."
      path="/"
    />
    <HeroSection />
    <BandeauSection />
    <WhyHuntersSection />
    <StatsSection />
    <ExpertiseSection />
    <ProcessSection />
    <RealisationsSection />
    <TestimonialsSection />
  </Layout>
);

export default Index;
