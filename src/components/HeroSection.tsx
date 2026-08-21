import { useEffect, useState, useCallback } from "react";
import EtudeForm from "@/components/EtudeForm";

const SLIDES = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Pont_Wilson_(Tours).JPG",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Tours,%20H%C3%B4tel%20de%20Ville.JPG",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Tram_et_h%C3%B4tel_de_ville_de_Tours.JPG",
];

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  const goTo = useCallback((i: number) => setActive(i), []);

  return (
    <section className="relative isolate overflow-hidden py-16 lg:py-24">
      {/* Carrousel de fond */}
      <div className="absolute inset-0 -z-10">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
            aria-hidden={i !== active}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        {/* Dégradé sombre : plus foncé en bas */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.45) 45%, rgba(15,23,42,0.85) 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid items-start gap-16 pt-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-body text-[10px] font-medium uppercase tracking-[4px] text-accent mb-8">
              Cabinet de conseil en investissement immobilier — Tours
            </p>
            <h1 className="font-display text-[clamp(36px,5vw,56px)] font-normal leading-[1.12] text-white mb-8 drop-shadow-sm">
              Une architecture de conseil,
              <br />
              dessinée pour durer
            </h1>
            <p className="max-w-xl font-body text-[15px] leading-[1.9] text-white/90 drop-shadow-sm">
              Stratégie patrimoniale, chasse, suivi de travaux, décoration : quatre piliers,
              un plan d'exécution unique, du premier trait à la remise des clés.
            </p>
          </div>

          <div className="border border-primary/[0.16] bg-white p-8 lg:p-10">
            <h2 className="font-display text-2xl text-primary">Étude patrimoniale gratuite</h2>
            <p className="mt-2 mb-8 font-body text-[13px] text-muted-foreground">
              Réponse motivée sous 24h ouvrées
            </p>
            <EtudeForm idPrefix="hero" />
          </div>
        </div>

        {/* Indicateurs cliquables */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Photo ${i + 1}`}
              aria-current={i === active}
              className="h-2.5 w-2.5 rounded-full transition-opacity duration-300"
              style={{
                backgroundColor: "rgba(255,255,255,1)",
                opacity: i === active ? 1 : 0.4,
              }}
            />
          ))}
        </div>
      </div>

      {/* Crédit discret */}
      <p className="pointer-events-none absolute bottom-2 right-4 font-body text-[10px] text-white/40">
        Photos : Wikimedia Commons, CC BY-SA 3.0 — version test
      </p>
    </section>
  );
};

export default HeroSection;
