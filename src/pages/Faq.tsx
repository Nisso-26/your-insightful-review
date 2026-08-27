import Layout from "@/components/Layout";
import PillarPageHero from "@/components/PillarPageHero";
import PillarClosingCta from "@/components/PillarClosingCta";
import SEO from "@/components/SEO";

const faqs = [
  {
    q: "Quel est le périmètre géographique du cabinet ?",
    a: "Nous intervenons sur l'Indre-et-Loire — Tours, Amboise, Chinon, Loches — et les secteurs limitrophes.",
  },
  {
    q: "Puis-je faire appel à un seul pilier (ex. la chasse seule) ?",
    a: "Oui, chaque pilier — stratégie, chasse, travaux, décoration — peut être mobilisé indépendamment ou dans le cadre d'un accompagnement complet.",
  },
  {
    q: "Comment sont facturés vos honoraires ?",
    a: "Chaque pilier dispose d'une grille tarifaire dédiée, détaillée sur notre page Honoraires. Le montant exact de votre projet vous est confirmé dès le premier échange, avant tout engagement.",
  },
  {
    q: "Sous quel délai obtenez-vous une réponse à ma demande ?",
    a: "Un conseiller revient vers vous sous 24h ouvrées avec un premier retour motivé.",
  },
  {
    q: "Travaillez-vous avec des mandataires ?",
    a: "Oui, notre cabinet s'appuie à la fois sur des mandataires et des salariés, tous formés à notre méthode et à nos standards de qualité.",
  },
];

const Faq = () => (
  <Layout>
    <SEO
      title="FAQ — Questions fréquentes | HUNTERS Tours"
      description="Périmètre d'intervention, honoraires, délais de réponse : les réponses aux questions les plus fréquentes posées au cabinet HUNTERS à Tours."
      path="/faq"
    />
    <PillarPageHero
      eyebrow="Questions fréquentes"
      docRef="FAQ-01"
      title="FAQ"
      intro="Les réponses aux questions les plus souvent adressées au cabinet."
    />

    <section className="bg-[hsl(var(--hunters-cream))] py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <dl className="border-t border-primary/15">
          {faqs.map((item, i) => (
            <div
              key={item.q}
              className="grid gap-4 border-b border-primary/15 py-10 sm:grid-cols-[64px_1fr]"
            >
              <span className="font-body text-[11px] font-medium tracking-[3px] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <dt className="font-display text-2xl leading-snug text-primary">{item.q}</dt>
                <dd className="mt-3 font-body text-[15px] leading-[1.9] text-muted-foreground">
                  {item.a}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <PillarClosingCta
      idPrefix="faq"
      eyebrow="Une autre question ?"
      title="Écrivez-nous, nous répondons sous 24h"
      text="Réponse motivée sous 24h ouvrées, sans engagement."
      submitLabel="Envoyer ma question"
    />
  </Layout>
);

export default Faq;
