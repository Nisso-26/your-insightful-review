import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    num: "I.",
    title: "Stratégie",
    href: "/expertise/strategie",
    desc: "Analyse patrimoniale, TMI, capacité d'emprunt, cible de rendement.",
  },
  {
    num: "II.",
    title: "Chasse",
    href: "/expertise/chasse",
    desc: "Sourcing exclusif, visite, négociation.",
  },
  {
    num: "III.",
    title: "Travaux",
    href: "/expertise/travaux",
    desc: "Pilotage AMO, artisans qualifiés, suivi hebdomadaire.",
  },
  {
    num: "IV.",
    title: "Décoration",
    href: "/expertise/decoration",
    desc: "Aménagement clé en main, mise en valeur locative ou personnelle.",
  },
];

const ExpertiseSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background pt-24">
      <div className="container mx-auto px-6" ref={ref}>
        <p className="font-body text-[10px] font-medium uppercase tracking-[4px] text-accent mb-6" data-reveal>
          Les quatre piliers
        </p>

        <div className="grid border-t border-l border-primary/15 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              data-reveal
              data-reveal-delay={String(i * 100)}
              className="border-b border-r border-primary/15 p-8 lg:p-10"
            >
              <span className="font-display text-lg text-accent">{p.num}</span>
              <h3 className="font-display text-2xl text-primary mt-3 mb-4">{p.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">{p.desc}</p>
              <Link
                to={p.href}
                className="font-body text-[10px] font-medium uppercase tracking-[2px] text-primary underline underline-offset-4 hover:text-accent transition-colors"
              >
                En savoir plus →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
