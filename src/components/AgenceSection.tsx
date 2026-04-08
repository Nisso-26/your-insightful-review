import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AgenceSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <p className="section-tag mb-4" data-reveal>L'agence</p>
        <h2 className="font-display text-4xl font-light text-primary sm:text-5xl lg:text-[58px] mb-16" data-reveal data-reveal-delay="100">
          Une maison d'expertise <em className="italic text-accent">patrimoniale</em>
        </h2>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Text */}
          <div className="space-y-6" data-reveal data-reveal-delay="200">
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Hunters Immobilier est bien plus qu'une simple agence immobilière. C'est une maison d'expertise patrimoniale, un partenaire de confiance, une passerelle vers la liberté financière pour celles et ceux qui veulent faire de l'immobilier un levier concret d'enrichissement.
            </p>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Spécialisée dans l'investissement immobilier locatif, notre agence vous accompagne de l'audit stratégique à la remise des clés — recherche de biens rentables, montage financier, pilotage des travaux, décoration d'intérieur et mise en location.
            </p>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Nous ne vendons pas des rêves, nous construisons des projets solides, ancrés dans la réalité du marché, avec méthode, transparence et excellence.
            </p>

            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center gap-3 text-primary">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-body text-sm font-medium">45 rue Michel Colombe, 37000 Tours</span>
              </div>
              <a href="tel:0259160337" className="flex items-center gap-3 text-primary hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent" />
                <span className="font-body text-sm font-medium">02 59 16 03 37</span>
              </a>
              <a href="mailto:hunters@huntersimmobilier.fr" className="flex items-center gap-3 text-primary hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                <span className="font-body text-sm font-medium">hunters@huntersimmobilier.fr</span>
              </a>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary-foreground transition-all hover:bg-secondary hover:shadow-lg mt-4"
            >
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 gap-3" data-reveal data-reveal-delay="350">
            {[
              { src: "https://huntersimmobilier.fr/wp-content/uploads/2025/11/DSC06633-1024x683.jpg", alt: "Agence Hunters Immobilier Tours", tall: false },
              { src: "https://huntersimmobilier.fr/wp-content/uploads/2025/11/DSC06626-683x1024.jpg", alt: "Hunters Immobilier bureau Tours", tall: true },
              { src: "https://huntersimmobilier.fr/wp-content/uploads/2025/11/DSC06673-1-1024x683.jpg", alt: "Équipe Hunters Immobilier", tall: true },
              { src: "https://huntersimmobilier.fr/wp-content/uploads/2025/11/DSC06660-683x1024.jpg", alt: "Hunters Immobilier agence Tours", tall: false },
            ].map((photo, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-lg ${photo.tall ? "row-span-2" : ""}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenceSection;
