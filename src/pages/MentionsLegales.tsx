import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const MentionsLegales = () => (
  <Layout>
    <SEO
      title="Mentions légales | HUNTERS"
      description="Mentions légales du site HUNTERS Immobilier — éditeur, hébergement et responsabilités."
      path="/mentions-legales"
    />
    <div className="py-12 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-display text-4xl font-light text-primary mb-8">Mentions légales</h1>

        <div className="space-y-8 font-body text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-medium text-primary mb-3">Éditeur du site</h2>
            <p>
              <strong>HUNTERS SAS</strong><br />
              45 rue Michel Colombe, 37000 Tours<br />
              SIRET : 879 176 949 00029<br />
              Email : hunters@huntersimmobilier.fr<br />
              Téléphone : 02 59 16 03 37
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-primary mb-3">Activité réglementée</h2>
            <p>
              HUNTERS SAS exerce l'activité de conseil en investissement immobilier et de chasse immobilière
              conformément à la <strong>Loi Hoguet n°70-9 du 2 janvier 1970</strong> et son décret d'application
              n°72-678 du 20 juillet 1972.
            </p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>Carte professionnelle CPI n° : en cours d'enregistrement</li>
              <li>Garantie financière : en cours de souscription</li>
              <li>Assurance RCP : en cours de souscription</li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground/70 italic">
              Ces mentions seront mises à jour dès obtention des justificatifs.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-primary mb-3">Hébergement</h2>
            <p>Ce site est hébergé par Lovable (lovable.dev).</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-primary mb-3">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logo, graphismes) est la propriété exclusive
              de HUNTERS SAS. Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </section>
        </div>
      </div>
    </div>
  </Layout>
);

export default MentionsLegales;
