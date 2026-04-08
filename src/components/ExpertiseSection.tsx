import { Home, UserSearch, HardHat, Paintbrush } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    num: "01",
    title: "Défense exclusive de vos intérêts",
    desc: "Contrairement à une agence, nous n'avons aucun bien à vendre. Notre seul mandat : trouver le meilleur bien pour votre stratégie.",
  },
  {
    num: "02",
    title: "Accès off-market & réseau exclusif",
    desc: "Nos mandataires activent un réseau de partenaires locaux pour accéder à des opportunités avant leur mise sur le marché.",
  },
  {
    num: "03",
    title: "Honoraires au succès uniquement",
    desc: "Vous ne payez qu'en cas de succès de la mission, lors de la signature de l'acte authentique. Aucun frais de dossier.",
  },
];

const services = [
  { icon: Home, title: "Stratégie", desc: "Analyse patrimoniale, fiscalité, sélection du marché et définition de votre profil d'investisseur.", featured: false },
  { icon: UserSearch, title: "Chasse", desc: "Sourcing actif, visites, analyse financière, offre d'achat et négociation en votre faveur.", featured: false },
  { icon: HardHat, title: "Travaux", desc: "Pilotage complet du chantier, suivi budgétaire et reporting périodique jusqu'à réception.", featured: false },
  { icon: Paintbrush, title: "Décoration & Ameublement", desc: "Notre décoratrice salariée pilote la mise en valeur complète du bien pour maximiser l'attractivité locative.", featured: true },
];

const ExpertiseSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <p className="section-tag mb-4" data-reveal data-reveal-delay="0">Notre expertise</p>
        <h2 className="font-display text-4xl font-light text-primary sm:text-5xl lg:text-[58px] mb-16" data-reveal data-reveal-delay="100">
          Un accompagnement <em className="italic text-accent">à 360°</em>
        </h2>

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            {pillars.map((p, i) => (
              <div key={p.num} className="group" data-reveal data-reveal-delay={String(200 + i * 120)}>
                <div className="flex items-start gap-5">
                  <span className="font-display text-4xl font-medium text-accent">{p.num}</span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-primary mb-2">{p.title}</h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <div
                key={s.title}
                data-reveal
                data-reveal-delay={String(300 + i * 120)}
                className={`group rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 ${
                  s.featured
                    ? "sm:col-span-2 bg-primary text-white"
                    : "bg-card border border-border hover:border-accent/30 hover:shadow-lg"
                }`}
              >
                <div className={`mb-4 inline-flex rounded-sm p-2 ${s.featured ? "bg-white/10" : "bg-accent/10"}`}>
                  <s.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className={`font-display text-lg font-medium mb-2 ${s.featured ? "text-white" : "text-primary"}`}>{s.title}</h3>
                <p className={`font-body text-sm leading-relaxed ${s.featured ? "text-white/70" : "text-muted-foreground"}`}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
