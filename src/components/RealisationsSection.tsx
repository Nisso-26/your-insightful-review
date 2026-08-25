import { useScrollReveal } from "@/hooks/useScrollReveal";
import CalloutBox from "@/components/CalloutBox";
import PillarClosingCta from "@/components/PillarClosingCta";
import photo7766 from "@/assets/realisations/DSC07766-2-HDR.jpg.asset.json";
import photo7768 from "@/assets/realisations/DSC07768-2-HDR-Modifier.jpg.asset.json";
import photo7772 from "@/assets/realisations/DSC07772-2-HDR.jpg.asset.json";
import photo7779 from "@/assets/realisations/DSC07779-2-HDR.jpg.asset.json";
import photo7784 from "@/assets/realisations/DSC07784-2-Modifier.jpg.asset.json";
import photo7794 from "@/assets/realisations/DSC07794-2-HDR-Modifier.jpg.asset.json";
import ts1 from "@/assets/realisations/avant/TS1.jpeg.asset.json";
import ts2 from "@/assets/realisations/avant/TS2.jpeg.asset.json";
import ts4 from "@/assets/realisations/avant/TS4.jpeg.asset.json";
import ts8 from "@/assets/realisations/avant/TS8.jpeg.asset.json";
import ts12 from "@/assets/realisations/avant/TS12.jpeg.asset.json";
import ts13 from "@/assets/realisations/avant/TS13.jpeg.asset.json";
import ts15 from "@/assets/realisations/avant/TS15.jpeg.asset.json";

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
      photo7766.url,
      photo7779.url,
      photo7768.url,
      photo7794.url,
      photo7772.url,
      photo7784.url,
    ],
  },
];

const RealisationsSection = () => {
  const ref = useScrollReveal();

  return (
    <>
      <section className="bg-[hsl(var(--hunters-cream))] py-24">
        <div className="container mx-auto px-6" ref={ref}>
          <div className="space-y-20">
            {projects.map((project, pi) => (
              <div key={project.label}>
                <div
                  className="mb-6 flex items-center gap-3 border-b border-primary/15 pb-4"
                  data-reveal
                  data-reveal-delay={String(100 + pi * 100)}
                >
                  <span className="h-px w-8 bg-accent" />
                  <span className="font-body text-[10px] font-medium uppercase tracking-[3px] text-muted-foreground">
                    {project.label}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {project.photos.map((src, i) => (
                    <div
                      key={i}
                      data-reveal
                      data-reveal-delay={String(200 + pi * 100 + i * 100)}
                      className="group overflow-hidden"
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

          <div className="mt-20" data-reveal>
            <CalloutBox
              title="Une sélection en cours de constitution"
              text="Cette page s'enrichit au fil des projets menés à bien et de l'accord de nos clients pour les présenter."
            />
          </div>
        </div>
      </section>

      <PillarClosingCta
        idPrefix="realisations"
        eyebrow="Votre projet, notre prochain dossier"
        title="Parlons de ce que vous voulez accomplir"
        text="Réponse motivée sous 24h ouvrées, sans engagement."
        submitLabel="Prendre rendez-vous"
      />
    </>
  );
};

export default RealisationsSection;
