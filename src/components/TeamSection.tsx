import { useScrollReveal } from "@/hooks/useScrollReveal";

const team = [
  {
    name: "Anaïs SAIZONOU",
    role: "Directeur Général",
    initials: "AS",
    photo: "https://huntersimmobilier.fr/wp-content/uploads/2025/11/ANAIS-INDIV-2.jpg",
  },
  {
    name: "Raphaëlle HERVÉ",
    role: "Commerciale",
    initials: "RH",
    photo: "https://huntersimmobilier.fr/wp-content/uploads/2025/11/RAPH-INDIV.jpg",
  },
];

const TeamSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <p className="section-tag mb-4" data-reveal>L'équipe</p>
        <h2 className="font-display text-4xl font-light text-primary sm:text-5xl lg:text-[58px] mb-6" data-reveal data-reveal-delay="100">
          Des experts <em className="italic text-accent">à votre service</em>
        </h2>
        <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-2xl mb-16" data-reveal data-reveal-delay="150">
          Chez Hunters Immobilier, chaque projet commence par une rencontre. Derrière chaque réussite, des femmes et des hommes passionnés, engagés et entièrement dédiés à vos ambitions.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {team.map((member, i) => (
            <div
              key={member.name}
              data-reveal
              data-reveal-delay={String(200 + i * 150)}
              className="group relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              <div className="relative h-[400px] overflow-hidden bg-primary/10">
                {/* Photo with fallback initials */}
                <img
                  src={member.photo}
                  alt={`${member.name} — ${member.role} Hunters Immobilier`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 items-center justify-center hidden">
                  <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-4xl font-medium text-primary">{member.initials}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-primary">{member.name}</h3>
                <p className="font-body text-[10px] font-bold uppercase tracking-[3px] text-accent mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="relative rounded-lg bg-primary p-10 lg:p-16 overflow-hidden" data-reveal data-reveal-delay="400">
          <span className="absolute top-4 right-8 font-display text-[160px] leading-none text-accent/10 select-none">"</span>
          <div className="relative max-w-3xl">
            <div className="gold-bar mb-6" />
            <blockquote className="font-display text-xl font-light italic leading-relaxed text-white lg:text-2xl mb-6">
              Chez Hunters Immobilier, chaque projet commence par une rencontre. Derrière chaque réussite, il y a des femmes et des hommes passionnés, engagés, et entièrement dédiés à transformer vos ambitions immobilières en réalité.
            </blockquote>
            <cite className="font-body text-sm font-semibold text-accent not-italic">
              — L'équipe Hunters Immobilier
            </cite>
          </div>
        </div>

        <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-3xl mx-auto text-center mt-16" data-reveal data-reveal-delay="500">
          Notre équipe, c'est avant tout une alliance de personnalités complémentaires, animées par la même conviction : l'immobilier doit être simple, fluide et profondément humain. Que ce soit pour trouver le bien idéal, suivre un chantier, imaginer un aménagement ou optimiser un investissement, nous avançons à vos côtés avec transparence, réactivité et exigence.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
