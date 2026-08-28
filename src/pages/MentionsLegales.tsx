import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";

const MentionsLegales = () => (
  <Layout>
    <SEO
      title="Mentions légales | HUNTERS"
      description="Mentions légales du site HUNTERS — éditeur, hébergement et responsabilités."
      path="/mentions-legales"
    />
    <PillarPageHero eyebrow="Informations légales" docRef="LEG-01" title="Mentions légales" intro="" />
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-12 font-body text-[15px] leading-[1.9] text-muted-foreground">
          <section className="border-t border-primary/15 pt-6">
            <h2 className="font-display text-xl text-primary mb-3">Éditeur du site</h2>
            <p>
              <strong>HUNTERS SASU</strong><br />
              45 rue Michel Colombe, 37000 Tours<br />
              SIRET : 879 176 949 00029<br />
              Email : hunters@huntersimmobilier.fr<br />
              Téléphone : 06 50 15 22 87
            </p>
          </section>

          <section className="border-t border-primary/15 pt-6">
            <h2 className="font-display text-xl text-primary mb-3">Activité réglementée</h2>
            <p>
              HUNTERS SASU exerce l'activité de conseil en investissement immobilier et de chasse immobilière
              conformément à la <strong>Loi Hoguet n°70-9 du 2 janvier 1970</strong> et son décret d'application
              n°72-678 du 20 juillet 1972.
            </p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>Carte professionnelle CPI : non détenue à ce jour</li>
              <li>Garantie financière : non applicable — HUNTERS SASU ne reçoit ni ne détient aucun fonds, effets ou valeurs pour le compte de tiers (article 3 de la loi n°70-9 du 2 janvier 1970)</li>
              <li>Assurance RCP : couverture en cours de vérification auprès de notre assureur</li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground/70 italic">
              Ces mentions seront mises à jour dès obtention des justificatifs.
            </p>
          </section>

          <section className="border-t border-primary/15 pt-6">
            <h2 className="font-display text-xl text-primary mb-3">Hébergement</h2>
            <p>Ce site est hébergé par Lovable (lovable.dev).</p>
          </section>

          <section className="border-t border-primary/15 pt-6">
            <h2 className="font-display text-xl text-primary mb-3">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logo, graphismes) est la propriété exclusive
              de HUNTERS SASU. Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </section>
        </div>
      </div>
    </div>
  </Layout>
);

export default MentionsLegales;
