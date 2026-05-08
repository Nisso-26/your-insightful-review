import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    alt: "Place Jean-Jaurès, Tours",
  },
  {
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80",
    alt: "Vieille ville de Tours, toits",
  },
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    alt: "Pont Wilson sur la Loire",
  },
  {
    url: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=1920&q=80",
    alt: "Centre-ville haussmannien français",
  },
];

const INTERVAL = 5000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true));
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden -mt-20">
      {/* ── Carousel background ── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.url}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,77,46,0.88) 0%, rgba(26,77,46,0.65) 60%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto grid min-h-screen items-center gap-12 px-6 pt-28 pb-20 lg:grid-cols-[55%_45%] lg:pt-20">
        {/* ── Left column ── */}
        <div className="flex flex-col justify-center">
          {/* Tag line */}
          <p
            className={`section-tag mb-8 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Conseil en investissement immobilier — Tours & Indre-et-Loire
          </p>

          {/* H1 */}
          <h1
            className={`font-display text-[clamp(44px,5vw,82px)] font-light leading-[1.08] text-white mb-5 transition-all duration-700 ease-out delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            L'expertise immobilière
            <br />
            au service de votre
            <br />
            <em className="text-accent italic">patrimoine</em>
          </h1>

          {/* Subtitle */}
          <p
            className={`font-body text-[15px] leading-[1.85] text-white/65 mb-10 max-w-lg transition-opacity duration-700 ease-out delay-[400ms] ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Stratégie · Chasse · Travaux · Décoration — De la décision à la clé
            en main.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 ease-out delay-[600ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-none bg-accent px-8 py-4 font-body text-[11px] font-extrabold uppercase tracking-[2px] text-primary transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,168,0,0.35)]"
            >
              Démarrer mon projet →
            </Link>
            <Link
              to="/methode"
              className="inline-flex items-center justify-center rounded-none border border-white/40 bg-transparent px-8 py-4 font-body text-[11px] font-bold uppercase tracking-[2px] text-white transition-all hover:border-white hover:bg-white/5"
            >
              Notre méthode
            </Link>
          </div>

          {/* Stats band */}
          <div
            className={`mt-14 grid grid-cols-4 gap-4 border-t border-white/10 pt-8 transition-opacity duration-700 ease-out delay-[800ms] ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            {[
              { value: "2019", label: "Année de création" },
              { value: "Tours", label: "Ancrage local & régional" },
              { value: "A → Z", label: "Accompagnement complet" },
              { value: "100%", label: "Dédié à vos intérêts" },
            ].map((stat, i, arr) => (
              <div
                key={stat.label}
                className={`${
                  i < arr.length - 1
                    ? "border-r border-white/15 pr-4"
                    : ""
                }`}
              >
                <span className="font-display text-[clamp(24px,2.5vw,36px)] font-medium text-accent">
                  {stat.value}
                </span>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[2px] text-white/50 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — Glassmorphism card (desktop) ── */}
        <div
          className={`hidden lg:flex flex-col items-end justify-center transition-all duration-700 ease-out delay-300 ${
            loaded
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
          }`}
        >
          <div className="relative w-full max-w-md">
            {/* Main card */}
            <div
              className="rounded-sm p-10 border"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderColor: "rgba(245,168,0,0.25)",
              }}
            >
              {/* Gold bar top */}
              <div className="w-full h-[2px] bg-accent mb-6" />

              <p className="font-body text-[10px] font-bold uppercase tracking-[4px] text-accent mb-3">
                Notre promesse
              </p>
              <h3 className="font-display text-[26px] leading-snug text-white mb-6">
                Votre investissement,
                <br />
                notre expertise.
              </h3>

              <ul className="space-y-3">
                {[
                  "Stratégie patrimoniale",
                  "Chasse immobilière exclusive",
                  "Pilotage des travaux",
                  "Décoration & ameublement",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-body text-[13px] text-white/80"
                  >
                    <span className="inline-block w-4 h-[2px] bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ... */}
          </div>
        </div>
      </div>

      {/* ── Slide indicators ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-accent"
                : "w-4 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
