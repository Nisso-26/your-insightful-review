import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import pontWilson from "@/assets/hero/pont-wilson-tours.jpg.asset.json";
import hotelDeVille from "@/assets/hero/hotel-de-ville-tours.jpg.asset.json";
import tramHotelDeVille from "@/assets/hero/tram-hotel-de-ville-tours.jpg.asset.json";

const SLIDES = [
  { src: pontWilson.url, alt: "Le pont Wilson enjambant la Loire à Tours" },
  { src: hotelDeVille.url, alt: "La façade de l'hôtel de ville de Tours" },
  {
    src: tramHotelDeVille.url,
    alt: "Le tramway passant devant l'hôtel de ville de Tours",
  },
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
    <section className="relative isolate flex min-h-[440px] items-center overflow-hidden lg:min-h-[520px]">
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
        {/* Dégradé sombre : plus foncé à gauche (lisibilité texte), plus clair à droite */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.70) 40%, rgba(15,23,42,0.45) 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="flex min-h-[440px] max-w-[460px] flex-col justify-center lg:min-h-[520px]">
          <p className="font-body text-[10px] font-medium uppercase tracking-[4px] text-accent mb-8">
            Cabinet de conseil en investissement immobilier — Tours
          </p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-normal leading-[1.12] text-white mb-8 drop-shadow-sm">
            Une architecture de conseil,
            <br />
            dessinée pour durer
          </h1>
          <p className="font-body text-[15px] leading-[1.9] text-white/90 drop-shadow-sm mb-10">
            Stratégie patrimoniale, chasse, suivi de travaux, décoration : quatre piliers,
            un plan d'exécution unique, du premier trait à la remise des clés.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-block rounded-sm bg-accent px-7 py-3.5 font-body text-[10px] font-bold uppercase tracking-[1.5px] text-primary transition-opacity hover:opacity-90"
            >
              Demander une étude
            </Link>
          </div>
        </div>

        {/* Indicateurs cliquables */}
        <div className="mt-12 flex items-center gap-3">
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
