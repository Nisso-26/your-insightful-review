import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * ═══════════════════════════════════════════════════════
 * AJOUTER UNE NOUVELLE RÉALISATION :
 * 
 * Copiez un bloc dans le tableau `projects` ci-dessous :
 * 
 *   {
 *     label: "Mois AAAA — Quartier NOM",
 *     photos: [
 *       "URL_PHOTO_1",
 *       "URL_PHOTO_2",
 *       "URL_PHOTO_3",
 *       "URL_PHOTO_4",
 *     ],
 *   },
 * 
 * Placez-le en PREMIER dans le tableau pour qu'il
 * apparaisse en haut de la page (le plus récent d'abord).
 * ═══════════════════════════════════════════════════════
 */
const projects = [
  {
    label: "Septembre 2025 — Quartier Tours Sud",
    photos: [
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/PHOTO-2025-10-21-14-43-363-769x1024.jpg",
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/PHOTO-2025-10-21-14-43-36-769x1024.jpg",
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/PHOTO-2025-10-21-14-43-352-769x1024.jpg",
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/PHOTO-2025-10-21-14-43-353-769x1024.jpg",
    ],
  },
  {
    label: "Mars 2025 — Quartier Tours Nord",
    photos: [
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/DSC07751-2-Modifier-1024x683.jpg",
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/DSC07753-2-HDR-Modifier-1024x683.jpg",
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/DSC07772-2-HDR-1024x683.jpg",
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/DSC07768-2-HDR-Modifier-1024x683.jpg",
    ],
  },
];

const RealisationsSection = () => {
  const ref = useScrollReveal();

  return (
    <>
      <section className="bg-background py-24">
        <div className="container mx-auto px-6" ref={ref}>
          <p className="section-tag mb-4" data-reveal>Réalisations</p>
          <h2 className="font-display text-4xl font-light text-primary sm:text-5xl lg:text-[58px] mb-6" data-reveal data-reveal-delay="100">
            Des projets qui <em className="italic text-accent">parlent</em> pour nous
          </h2>
          <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-2xl mb-16" data-reveal data-reveal-delay="150">
            Chaque projet raconte une histoire : celle d'un lieu transformé, optimisé et pensé dans les moindres détails. Découvrez nos réalisations et imaginez ce que nous pourrions créer ensemble.
          </p>

          <div className="space-y-20">
            {projects.map((project, pi) => (
              <div key={project.label}>
                <div
                  className="mb-6 inline-flex items-center gap-3"
                  data-reveal
                  data-reveal-delay={String(200 + pi * 100)}
                >
                  <div className="gold-bar" />
                  <span className="font-body text-[11px] font-bold uppercase tracking-[2px] text-muted-foreground">
                    {project.label}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {project.photos.map((src, i) => (
                    <div
                      key={i}
                      data-reveal
                      data-reveal-delay={String(300 + pi * 100 + i * 100)}
                      className="group overflow-hidden rounded-lg"
                    >
                      <img
                        src={src}
                        alt={`Réalisation Hunters Immobilier — ${project.label}`}
                        loading="lazy"
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-light text-white sm:text-4xl lg:text-5xl mb-4">
            Prêt à faire travailler<br />votre <em className="italic text-accent">capital</em> ?
          </h2>
          <p className="font-body text-sm text-white/60 max-w-md mx-auto mb-8">
            Réservez votre audit stratégique offert — 30 minutes pour définir votre plan d'investissement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-sm bg-accent px-8 py-4 font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              Réserver mon audit gratuit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:0259160337"
              className="rounded-sm border border-white/30 px-8 py-4 font-body text-[10px] font-bold uppercase tracking-[2px] text-white transition-all hover:border-accent hover:text-accent"
            >
              02 59 16 03 37
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default RealisationsSection;
