import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import WhyHuntersSection from "@/components/WhyHuntersSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import StatsSection from "@/components/StatsSection";
import BandeauSection from "@/components/BandeauSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClosingCtaSection from "@/components/ClosingCtaSection";
import SEO from "@/components/SEO";

const Index = () => (
  <Layout>
    <SEO
      title="HUNTERS — Chasseur Immobilier Tours | Investissement Locatif"
      description="HUNTERS, chasseur immobilier expert à Tours. Stratégie, chasse, travaux et décoration. Accompagnement complet de A à Z pour votre investissement rentable."
      path="/"
    />
    <HeroSection />
    <WhyHuntersSection />
    <ExpertiseSection />
    <StatsSection />
    <BandeauSection />
    <TestimonialsSection />
    <ClosingCtaSection />
  </Layout>
);

export default Index;
