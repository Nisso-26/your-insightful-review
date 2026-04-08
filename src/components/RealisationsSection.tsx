import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  );
};

export default RealisationsSection;
