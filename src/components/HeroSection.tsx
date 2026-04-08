import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import mairieTours from "@/assets/mairie-tours.jpg";

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
            Une agence pas comme les autres. Une vision, des résultats.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4" data-reveal data-reveal-delay="300">
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 rounded-none bg-accent px-10 py-4 font-body text-[11px] font-bold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              Réserver un audit gratuit
            </Link>
            <Link
              to="/expertise"
              className="flex items-center justify-center gap-2 rounded-none border border-white/30 px-10 py-4 font-body text-[11px] font-bold uppercase tracking-[2px] text-white/80 transition-all hover:border-accent hover:text-accent"
            >
              Découvrir nos offres
            </Link>
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
          {/* Gradient overlay from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
          {/* Subtle green tint */}
          <div className="absolute inset-0 bg-primary/30" />
        </div>

        {/* Mobile: show image as subtle background */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={mairieTours}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-[0.06]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
