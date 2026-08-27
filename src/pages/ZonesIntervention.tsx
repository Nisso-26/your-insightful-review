import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";
import CalloutBox from "@/components/CalloutBox";
import PillarClosingCta from "@/components/PillarClosingCta";

const zones = [
  { num: "I.", title: "Tours", desc: "Centre historique, quartiers résidentiels, secteur en tension locative." },
  { num: "II.", title: "Joué-lès-Tours", desc: "Deuxième ville de l'agglomération, marché résidentiel dynamique." },
  { num: "III.", title: "Saint-Cyr-sur-Loire", desc: "Secteur prisé en bord de Loire, forte demande locative." },
  { num: "IV.", title: "Chambray-lès-Tours", desc: "Pôle économique et résidentiel au sud de l'agglomération." },
  { num: "V.", title: "Fondettes", desc: "Cadre résidentiel recherché, proximité immédiate de Tours." },
  { num: "VI.", title: "Saint-Pierre-des-Corps", desc: "Pôle ferroviaire, marché locatif accessible." },
];

const ZonesIntervention = () => (
  <Layout>
    <SEO
      title="Zones d'intervention — Tours, Amboise, Chinon, Loches | HUNTERS"
      description="Le cabinet HUNTERS intervient sur Tours, Amboise, Chinon, Loches et l'ensemble de l'Indre-et-Loire pour vos projets d'investissement immobilier."
      path="/zones-intervention"
    />

    <PillarPageHero
      eyebrow="Périmètre d'intervention"
      docRef="ZON-01"
      title="Zones d'intervention"
      intro="Basé à Tours, le cabinet HUNTERS opère sur l'ensemble de l'Indre-et-Loire et des départements limitrophes, avec une connaissance fine des marchés locaux."
    />

    <section className="bg-background pt-20">
      <div className="container mx-auto px-6">
        <div className="grid border-t border-l border-primary/15 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((z) => (
            <div key={z.title} className="border-b border-r border-primary/15 p-8 lg:p-10">
              <span className="font-display text-lg text-accent">{z.num}</span>
              <h2 className="font-display text-2xl text-primary mt-3 mb-4">{z.title}</h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{z.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <CalloutBox
          title="Une expertise territoriale, pas une couverture nationale"
          text="Nous concentrons notre action sur l'Indre-et-Loire pour garantir une connaissance précise de chaque marché local — une condition de la qualité de nos recommandations."
        />
      </div>
    </section>

    <PillarClosingCta
      idPrefix="zones"
      eyebrow="Votre projet est-il dans notre périmètre ?"
      title="Parlons de votre zone de recherche"
      text="Réponse motivée sous 24h ouvrées, sans engagement."
      submitLabel="Prendre rendez-vous"
    />
  </Layout>
);

export default ZonesIntervention;
