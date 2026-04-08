import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    num: "01",
    title: "Conseil en investissement",
    desc: "Audit patrimonial, analyse de votre capacité d'investissement, stratégie fiscale (LMNP, SCI…). Dossier complet avec rentabilité prévisionnelle, scénarios chiffrés et recommandations personnalisées.",
  },
  {
    num: "02",
    title: "Chasse immobilière",
    desc: "Accès aux biens off-market et en avant-première. Nous visitons, analysons, sélectionnons et négocions pour vous — seulement les biens qui correspondent vraiment à vos critères.",
  },
  {
    num: "03",
    title: "Investissement clé en main",
    desc: "De la stratégie à la mise en location : acquisition, travaux, décoration, ameublement. Un interlocuteur unique, une transparence totale, aucun stress pour vous.",
  },
  {
    num: "04",
    title: "Gestion de projet & travaux",
    desc: "Coordination des artisans, suivi de chantier, contrôle qualité, respect des délais et du budget. Nous défendons vos intérêts à chaque étape de la rénovation.",
  },
  {
    num: "05",
    title: "Décoration & ameublement",
    desc: "Chaque meuble, couleur et texture choisi avec intention. Un espace harmonieux, attractif et rentable qui valorise votre bien et maximise votre loyer.",
  },
];

const ExpertiseSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <p className="section-tag mb-4" data-reveal>Nos missions</p>
        <h2 className="font-display text-4xl font-light text-primary sm:text-5xl lg:text-[58px] mb-6" data-reveal data-reveal-delay="100">
          Un accompagnement <em className="italic text-accent">complet</em>
        </h2>
        <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-2xl mb-16" data-reveal data-reveal-delay="150">
          De l'audit stratégique à la remise des clés — nous pilotons chaque étape de votre investissement.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.num}
              data-reveal
              data-reveal-delay={String(200 + i * 100)}
              className="group rounded-lg bg-card border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
            >
              <span className="font-display text-4xl font-medium text-accent">{s.num}</span>
              <h3 className="font-display text-xl font-medium text-primary mt-4 mb-3">{s.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}

          {/* CTA card */}
          <div
            data-reveal
            data-reveal-delay="700"
            className="flex flex-col items-start justify-center rounded-lg bg-primary p-8 text-white"
          >
            <span className="font-display text-4xl font-medium text-accent mb-4">→</span>
            <h3 className="font-display text-xl font-medium text-white mb-3">Votre projet mérite mieux</h3>
            <p className="font-body text-sm leading-relaxed text-white/60 mb-6">
              30 minutes d'audit personnalisé, sans engagement, pour bâtir votre stratégie d'investissement sur mesure.
            </p>
            <Link
              to="/contact"
              className="font-body text-[11px] font-bold uppercase tracking-[2px] text-accent underline underline-offset-4 hover:text-white transition-colors"
            >
              Réserver mon audit →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
