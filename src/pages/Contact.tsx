import Layout from "@/components/Layout";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";

const Contact = () => (
  <Layout>
    <SEO
      title="Contact — Réservez votre audit gratuit | HUNTERS Tours"
      description="Contactez HUNTERS pour discuter de votre projet d'investissement immobilier. Un expert vous rappelle sous 24 heures. Tours, 02 59 16 03 37."
      path="/contact"
    />
    <ContactSection />
  </Layout>
);

export default Contact;
