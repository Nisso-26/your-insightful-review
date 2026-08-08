import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";
import PillarClosingCta from "@/components/PillarClosingCta";

const articles = [
  { num: "ARTICLE I", title: "Premier échange", desc: "Écoute de votre projet, cadrage patrimonial initial, réponse sous 24h ouvrées." },
  { num: "ARTICLE II", title: "Mandat & stratégie", desc: "Signature du mandat, définition précise de la cible et du budget." },
  { num: "ARTICLE III", title: "Exécution", desc: "Chasse, négociation, puis travaux et décoration si le pilier est mobilisé." },
  { num: "ARTICLE IV", title: "Remise des clés", desc: "Bilan du projet, bien livré, dossier clos et archivé." },
];

const Methode = () => (
  <Layout>
    <SEO
      title="Notre méthode — Investissement locatif de A à Z | HUNTERS"
      description="Découvrez la méthode HUNTERS : un processus structuré en étapes claires, de la définition de votre stratégie patrimoniale à la remise des clés de votre bien."
      path="/methode"
    />
    <PillarPageHero
      eyebrow="DOSSIER PATRIMONIAL — CABINET HUNTERS"
      docRef="MET-01"
      title="Chaque projet, instruit comme un dossier"
      intro="Du premier échange à la remise des clés, quatre articles rythment l'instruction de votre dossier."
    />

    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid border-l border-t border-primary/15 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => (
            <div key={a.num} className="border-b border-r border-primary/15 p-8 lg:p-10">
              <span className="font-body text-[10px] font-medium uppercase tracking-[3px] text-accent">
                {a.num}
              </span>
              <h2 className="mb-4 mt-3 font-display text-2xl leading-snug text-primary">{a.title}</h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <PillarClosingCta
      idPrefix="methode"
      eyebrow="INSTRUCTION DE VOTRE DOSSIER"
      title="Instruction de votre dossier"
      text="Réponse motivée sous 24h ouvrées."
    />
  </Layout>
);

export default Methode;
