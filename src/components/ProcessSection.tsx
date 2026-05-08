import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "On commence par vous écouter", desc: "Chaque accompagnement débute par un échange approfondi. On comprend vos objectifs, votre budget et votre manière d'investir pour définir une stratégie sur mesure." },
  { num: "02", title: "On identifie les meilleures opportunités", desc: "Grâce à notre expertise et à une analyse précise, nous sélectionnons uniquement des propositions pertinentes et cohérentes avec votre vision." },
  { num: "03", title: "On pilote tout pour vous", desc: "Négociation, démarches administratives, suivi de chantier, décoration… Vous avancez l'esprit léger, nous coordonnons tout dans les moindres détails." },
  { num: "04", title: "On reste en communication constante", desc: "Vous êtes informé à chaque étape, avec des retours clairs et une transparence totale. Notre priorité : vous rassurer et vous offrir une expérience fluide." },
  { num: "05", title: "On livre un résultat à la hauteur", desc: "Votre projet prend forme exactement comme prévu — un espace optimisé, esthétique et fonctionnel, parfaitement adapté à votre stratégie." },
];

const ProcessSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-primary py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="section-tag mb-4" data-reveal>Notre méthode</p>
            <h2 className="font-display text-4xl font-light text-white sm:text-5xl lg:text-[58px] mb-6" data-reveal data-reveal-delay="100">
              Simple, humaine<br />et <em className="italic text-accent">efficace</em>
            </h2>
            <p className="font-body text-sm leading-relaxed text-white/60 mb-10 max-w-md" data-reveal data-reveal-delay="150">
              Nous ne vendons pas des rêves. Nous construisons des projets solides, ancrés dans la réalité du marché.
            </p>
            <div className="overflow-hidden rounded-lg" data-reveal data-reveal-delay="200">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                alt="Méthode Hunters Immobilier"
                loading="lazy"
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                data-reveal
                data-reveal-delay={String(200 + i * 100)}
                className="flex gap-5 border-b border-white/10 py-8 first:pt-0 last:border-0"
              >
                <span className="font-display text-3xl font-medium text-accent shrink-0">{step.num}</span>
                <div>
                  <h4 className="font-display text-lg font-medium text-white mb-2">{step.title}</h4>
                  <p className="font-body text-sm leading-relaxed text-white/60">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
