import { Link } from "react-router-dom";
import mairieTours from "@/assets/mairie-tours.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary -mt-20">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left content */}
        <div className="relative z-10 flex flex-col justify-center px-8 pt-32 pb-16 sm:px-12 lg:px-16 lg:pt-20" ref={ref}>
          <p className="section-tag mb-8" data-reveal>
            Chasseur immobilier — Tours & régions
          </p>

          <h1
            className="font-display text-[clamp(42px,4.5vw,66px)] font-bold leading-[1.1] text-white mb-4"
            data-reveal
            data-reveal-delay="100"
          >
            L'expertise immobilière<br />
            au service de votre<br />
            <em className="text-accent italic">patrimoine</em>
          </h1>

          <p
            className="font-body text-[15px] italic leading-relaxed text-white/55 mb-10 max-w-md"
            data-reveal
            data-reveal-delay="200"
          >
            Stratégie · Chasse · Travaux · Décoration — De la décision à la clé en main.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4" data-reveal data-reveal-delay="300">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-none bg-accent px-10 py-4 font-body text-[11px] font-bold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              Démarrer mon projet →
            </Link>
            <Link
              to="/expertise"
              className="flex items-center justify-center gap-2 rounded-none border border-white/40 bg-transparent px-10 py-4 font-body text-[11px] font-bold uppercase tracking-[2px] text-white transition-all hover:border-white hover:bg-white/5"
            >
              Découvrir nos offres
            </Link>
          </div>

          {/* Stats band */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8" data-reveal data-reveal-delay="400">
            <div>
              <span className="font-display text-3xl font-bold text-accent">98%</span>
              <p className="font-body text-[11px] uppercase tracking-wider text-white/50 mt-1">Clients satisfaits</p>
            </div>
            <div>
              <span className="font-display text-3xl font-bold text-accent">+200</span>
              <p className="font-body text-[11px] uppercase tracking-wider text-white/50 mt-1">Projets réalisés</p>
            </div>
            <div>
              <span className="font-display text-3xl font-bold text-accent">A→Z</span>
              <p className="font-body text-[11px] uppercase tracking-wider text-white/50 mt-1">Accompagnement</p>
            </div>
          </div>
        </div>

        {/* Right image - Mairie de Tours */}
        <div className="relative hidden lg:block">
          <img
            src={mairieTours}
            alt="Hôtel de Ville de Tours"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
          <div className="absolute inset-0 bg-primary/30" />
        </div>

        {/* Mobile: subtle background */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={mairieTours}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-[0.04]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
