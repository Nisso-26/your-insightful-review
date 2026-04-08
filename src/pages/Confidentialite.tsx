import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Confidentialite = () => (
  <>
    <Navbar />
    <main className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-display text-4xl font-light text-primary mb-8">Politique de confidentialité</h1>

        <div className="space-y-8 font-body text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-medium text-primary mb-3">Responsable du traitement</h2>
            <p>
              <strong>HUNTERS SAS</strong> — 45 rue Michel Colombe, 37000 Tours<br />
              Email : contact@huntersimmobilier.fr
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-primary mb-3">Données collectées</h2>
            <p>
              Via le formulaire de contact : prénom, nom, adresse email, numéro de téléphone (optionnel),
              type de projet, budget envisagé et message libre. Ces données sont collectées avec votre
              consentement explicite.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-primary mb-3">Finalité du traitement</h2>
            <p>
              Les données sont utilisées exclusivement pour répondre à vos demandes de renseignements
              et vous proposer un accompagnement en investissement immobilier.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-primary mb-3">Durée de conservation</h2>
            <p>Vos données sont conservées pour une durée maximale de 3 ans à compter de leur collecte.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-primary mb-3">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement
              et de portabilité de vos données. Pour exercer ces droits, contactez-nous à :
              contact@huntersimmobilier.fr
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-primary mb-3">Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement.
              Aucun cookie publicitaire ou de traçage n'est utilisé sans votre consentement préalable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-primary mb-3">Hébergement des données</h2>
            <p>Les données sont stockées sur des serveurs sécurisés en Europe.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Confidentialite;
