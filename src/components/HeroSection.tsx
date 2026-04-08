import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-primary -mt-20 pt-20">
      {/* SVG geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(40 100% 48%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="hsl(40 100% 48%)" strokeWidth="0.3" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="hsl(40 100% 48%)" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="container relative mx-auto flex min-h-screen flex-col justify-center px-6 lg:flex-row lg:items-center lg:gap-16">
        {/* Left content */}
        <div className="flex-1 space-y-8">
          <p className="section-tag">Conseil en investissement immobilier</p>

          <h1 className="font-display text-4xl font-light leading-[1.1] text-white sm:text-5xl lg:text-7xl">
            L'investissement immobilier,{" "}
            <em className="text-accent italic">sans compromis.</em>
          </h1>

          <p className="max-w-lg font-body text-[15px] leading-relaxed text-white/70">
            HUNTERS vous accompagne de la stratégie à la clé en main. Nos chasseurs experts
            défendent vos intérêts à chaque étape, pour un investissement précis, rentable et serein.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-sm bg-accent px-8 py-3.5 font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              Démarrer mon projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/methode"
              className="font-body text-[11px] font-bold uppercase tracking-[2px] text-white/80 underline underline-offset-4 decoration-white/30 hover:text-white hover:decoration-accent transition-all"
            >
              Notre méthode
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-4">
            {[
              { value: "98%", label: "Clients satisfaits" },
              { value: "+200", label: "Projets réalisés" },
              { value: "A→Z", label: "Accompagnement complet" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="gold-bar mb-3" />
                <div className="font-display text-3xl font-medium text-accent">{stat.value}</div>
                <div className="font-body text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right floating cards - desktop */}
        <div className="relative mt-12 hidden flex-1 lg:flex lg:justify-end">
          <div className="relative">
            <div className="w-[380px] rounded-lg bg-secondary p-8 text-white shadow-2xl">
              <p className="font-display text-2xl font-light italic mb-6">
                Votre investissement, notre expertise.
              </p>
              <ul className="space-y-3 font-body text-sm text-white/80">
                {["Stratégie patrimoniale", "Chasse immobilière", "Pilotage travaux", "Décoration & ameublement"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="absolute -bottom-6 -right-8 w-[220px] rounded-lg bg-white p-5 shadow-xl">
              <div className="gold-bar mb-3" />
              <div className="font-display text-3xl font-medium text-primary">+8%</div>
              <div className="font-body text-xs text-muted-foreground">Rendement moyen obtenu</div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-4/5 rounded-full bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
