import { useState } from "react";
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

interface Dossier {
  code: string;
  title: string;
  descriptif: string;
  beforePhotos?: string[];
  photos: string[];
}

const projects: Dossier[] = [
  {
    code: "REA-02",
    title: "Septembre 2025 — Quartier Tours Sud",
    descriptif: "À compléter.",
    beforePhotos: [
      ts1.url,
      ts2.url,
      ts4.url,
      ts8.url,
      ts12.url,
      ts13.url,
      ts15.url,
    ],
    photos: [
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/PHOTO-2025-10-21-14-43-363-769x1024.jpg",
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/PHOTO-2025-10-21-14-43-36-769x1024.jpg",
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/PHOTO-2025-10-21-14-43-352-769x1024.jpg",
      "https://huntersimmobilier.fr/wp-content/uploads/2025/11/PHOTO-2025-10-21-14-43-353-769x1024.jpg",
    ],
  },
  {
    code: "REA-01",
    title: "Mars 2025 — Quartier Tours Nord",
    descriptif:
      "Appartement T3 avec bureau et pièce à vivre baignée de lumière. Rénovation complète : transformation intégrale du bien.",
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

const SubGalleryLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 flex items-center gap-3">
    <span className="h-px w-8 bg-accent/60" />
    <span className="font-body text-[10px] font-medium uppercase tracking-[3px] text-muted-foreground">
      {children}
    </span>
  </div>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
      open ? "rotate-90" : ""
    }`}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
  </svg>
);

const Dossier = ({ dossier }: { dossier: Dossier }) => {
  const [open, setOpen] = useState(false);
  const panelId = `dossier-panel-${dossier.code.toLowerCase()}`;

  return (
    <div className="border border-primary/15 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-4 bg-white px-6 py-5 text-left transition-colors hover:bg-muted/30 lg:px-8 lg:py-6"
      >
        <span className="font-display text-[15px] tracking-[2px] text-accent">
          {dossier.code}
        </span>
        <span className="h-6 w-px bg-primary/15" aria-hidden="true" />
        <span className="flex-1 font-display text-xl leading-snug text-primary lg:text-2xl">
          {dossier.title}
        </span>
        <ChevronIcon open={open} />
      </button>

      <div
        id={panelId}
        className="grid transition-all duration-400 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          transitionDuration: "400ms",
        }}
      >
        <div className="overflow-hidden">

          <div className="border-t border-primary/15 px-6 pb-10 pt-8 lg:px-8 lg:pb-12 lg:pt-10">
            {/* Descriptif */}
            <div className="mb-10 max-w-[620px] border-l-2 border-accent bg-muted/40 p-6 lg:p-8">
              <p className="font-body text-[15px] leading-[1.9] text-muted-foreground">
                {dossier.descriptif}
              </p>
            </div>

            {/* Galerie Avant (Tours Sud uniquement) */}
            {dossier.beforePhotos && (
              <div className="mb-10">
                <SubGalleryLabel>Avant</SubGalleryLabel>
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {dossier.beforePhotos.map((src, i) => (
                    <div key={`before-${i}`} className="group overflow-hidden">
                      <img
                        src={src}
                        alt={`Chantier Hunters Immobilier — ${dossier.title}`}
                        loading="lazy"
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Galerie Après */}
            <div>
              <SubGalleryLabel>Après</SubGalleryLabel>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {dossier.photos.map((src, i) => (
                  <div key={i} className="group overflow-hidden">
                    <img
                      src={src}
                      alt={`Réalisation Hunters Immobilier — ${dossier.title}`}
                      loading="lazy"
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-80"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RealisationsSection = () => {
  const ref = useScrollReveal();

  return (
    <>
      <section className="bg-[hsl(var(--hunters-cream))] py-24">
        <div className="container mx-auto px-6" ref={ref}>
          <div className="space-y-6">
            {projects.map((dossier) => (
              <div
                key={dossier.code}
                data-reveal
                data-reveal-delay={String(100)}
              >
                <Dossier dossier={dossier} />
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
