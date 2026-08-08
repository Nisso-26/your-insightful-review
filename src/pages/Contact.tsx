import Layout from "@/components/Layout";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";

const Contact = () => (
  <Layout>
    <SEO
      title="Contact — Réservez votre audit gratuit | HUNTERS Tours"
      description="Contactez HUNTERS pour discuter de votre projet d'investissement immobilier. Un expert vous rappelle sous 24 heures. Tours, 06 50 15 22 87."
      path="/contact"
    />
    <PillarPageHero
      eyebrow="Nous contacter"
      docRef="CTC-01"
      title="Un premier échange, sans engagement"
      intro="Décrivez votre projet — un conseiller vous répond sous 24h ouvrées avec un premier retour motivé."
    />
    <ContactSection />
  </Layout>
);

export default Contact;
