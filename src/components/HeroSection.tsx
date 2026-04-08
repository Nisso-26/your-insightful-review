import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import mairieTours from "@/assets/mairie-tours.jpg";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-primary -mt-20 pt-20">
      {/* Mairie de Tours watermark */}
      <div className="absolute inset-0">
        <img src={mairieTours} alt="" aria-hidden="true" width={1920} height={1080} className="h-full w-full object-cover opacity-[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60" />
      </div>

      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(40 100% 48%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative mx-auto flex min-h-screen flex-col justify-center px-6 lg:flex-row lg:items-center lg:gap-16" ref={ref}>
        <div className="flex-1 space-y-8">
          <p className="section-tag" data-reveal>Chasseur immobilier — Tours & régions</p>

          <h1 className="font-display text-4xl font-light leading-[1.1] text-white sm:text-5xl lg:text-7xl" data-reveal data-reveal-delay="100">
            L'expertise immobilière<br />au service de votre{" "}
            <em className="text-accent italic">patrimoine</em>
          </h1>

          <p className="max-w-lg font-body text-[15px] leading-relaxed text-white/60 italic" data-reveal data-reveal-delay="200">
            Une agence pas comme les autres. Une vision, des résultats.
          </p>

          <div className="flex flex-wrap items-center gap-4" data-reveal data-reveal-delay="300">
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-sm bg-accent px-8 py-3.5 font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              Réserver un audit gratuit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/expertise"
              className="font-body text-[11px] font-bold uppercase tracking-[2px] text-white/80 underline underline-offset-4 decoration-white/30 hover:text-white hover:decoration-accent transition-all"
            >
              Découvrir nos offres
            </Link>
          </div>

          <div className="flex gap-10 pt-4" data-reveal data-reveal-delay="400">
            {[
              { value: "+120", label: "Investisseurs accompagnés" },
              { value: "8,4%", label: "Rentabilité moyenne" },
              { value: "100%", label: "Clé en main" },
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
        <div className="relative mt-12 hidden flex-1 lg:flex lg:justify-end" data-reveal data-reveal-delay="300">
          <div className="relative">
            <div className="w-[380px] rounded-lg bg-secondary p-8 text-white shadow-2xl">
              <p className="font-display text-2xl font-light italic mb-6">
                Votre investissement, notre expertise.
              </p>
              <ul className="space-y-3 font-body text-sm text-white/80">
                {["Conseil en investissement", "Chasse immobilière", "Investissement clé en main", "Gestion de projet & travaux", "Décoration & ameublement"].map(
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
              <div className="font-display text-3xl font-medium text-primary">8,4%</div>
              <div className="font-body text-xs text-muted-foreground">Rentabilité moyenne</div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[84%] rounded-full bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
