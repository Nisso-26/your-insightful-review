import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";
import PillarClosingCta from "@/components/PillarClosingCta";

const pillars = [
  {
    num: "I.",
    title: "Stratégie patrimoniale",
    desc: "Capacité d'investissement, cible de rendement, zone et structuration juridique.",
    href: "/expertise/strategie",
  },
  {
    num: "II.",
    title: "Chasse immobilière",
    desc: "Sourcing off-market, visite et analyse technique, négociation jusqu'à l'acte.",
    href: "/expertise/chasse",
  },
  {
    num: "III.",
    title: "Suivi de travaux",
    desc: "Cadrage du chantier, artisans qualifiés, pilotage AMO et budget maîtrisé.",
    href: "/expertise/travaux",
  },
  {
    num: "IV.",
    title: "Décoration & ameublement",
    desc: "Plan d'aménagement, mobilier, coordination des livraisons et mise en valeur.",
    href: "/expertise/decoration",
  },
];

const Expertise = () => (
  <Layout>
    <SEO
      title="Nos offres — Conseil, chasse, travaux & décoration | HUNTERS"
      description="Conseil en investissement, chasse immobilière, pilotage des travaux, décoration et ameublement : nos quatre expertises pour un investissement locatif rentable clé en main."
      path="/expertise"
    />
    <PillarPageHero
      eyebrow="NOTRE EXPERTISE"
      docRef="EXP-00 — SOMMAIRE"
      title="Quatre piliers, un seul cabinet"
      intro="De la stratégie à la décoration, chaque pilier peut être mobilisé seul ou dans le cadre d'un accompagnement complet, selon votre besoin."
    />

    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid border-l border-t border-primary/15 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.num} className="border-b border-r border-primary/15 p-8 lg:p-10">
              <span className="font-display text-lg text-accent">{p.num}</span>
              <h2 className="mb-4 mt-3 font-display text-2xl leading-snug text-primary">{p.title}</h2>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <Link
                to={p.href}
                className="font-body text-[10px] font-medium uppercase tracking-[2px] text-primary underline underline-offset-4 transition-colors hover:text-accent"
              >
                Découvrir →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <PillarClosingCta
      idPrefix="expertise"
      eyebrow="ÉTUDE PATRIMONIALE GRATUITE"
      title="Un seul pilier, ou l'accompagnement complet"
      text="Réponse motivée sous 24h ouvrées, sans engagement."
    />
  </Layout>
);

export default Expertise;
