import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";

const Confidentialite = () => (
  <Layout>
    <SEO
      title="Politique de confidentialité | HUNTERS"
      description="Politique de confidentialité et traitement des données personnelles conforme RGPD — HUNTERS Immobilier."
      path="/confidentialite"
    />
    <PillarPageHero eyebrow="Données personnelles" docRef="CNF-01" title="Politique de confidentialité" intro="" />
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-12 font-body text-[15px] leading-[1.9] text-muted-foreground">
          <section className="border-t border-primary/15 pt-6">
            <h2 className="font-display text-xl text-primary mb-3">Responsable du traitement</h2>
            <p>
              <strong>HUNTERS SASU</strong> — 45 rue Michel Colombe, 37000 Tours<br />
              Email : hunters@huntersimmobilier.fr
            </p>
          </section>

          <section className="border-t border-primary/15 pt-6">
            <h2 className="font-display text-xl text-primary mb-3">Données collectées</h2>
            <p>
              Via le formulaire de contact : prénom, nom, adresse email, numéro de téléphone (optionnel),
              type de projet, budget envisagé et message libre. Ces données sont collectées avec votre
              consentement explicite.
            </p>
          </section>

          <section className="border-t border-primary/15 pt-6">
            <h2 className="font-display text-xl text-primary mb-3">Finalité du traitement</h2>
            <p>
              Les données sont utilisées exclusivement pour répondre à vos demandes de renseignements
              et vous proposer un accompagnement en investissement immobilier.
            </p>
          </section>

          <section className="border-t border-primary/15 pt-6">
            <h2 className="font-display text-xl text-primary mb-3">Durée de conservation</h2>
            <p>Vos données sont conservées pour une durée maximale de 3 ans à compter de leur collecte.</p>
          </section>

          <section className="border-t border-primary/15 pt-6">
            <h2 className="font-display text-xl text-primary mb-3">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement
              et de portabilité de vos données. Pour exercer ces droits, contactez-nous à :
              hunters@huntersimmobilier.fr
            </p>
          </section>

          <section className="border-t border-primary/15 pt-6">
            <h2 className="font-display text-xl text-primary mb-3">Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement.
              Aucun cookie publicitaire ou de traçage n'est utilisé sans votre consentement préalable.
            </p>
          </section>

          <section className="border-t border-primary/15 pt-6">
            <h2 className="font-display text-xl text-primary mb-3">Hébergement des données</h2>
            <p>Les données sont stockées sur des serveurs sécurisés en Europe.</p>
          </section>
        </div>
      </div>
    </div>
  </Layout>
);

export default Confidentialite;
