import { MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cities = [
  { name: "Tours", subtitle: "Siège & cœur d'action" },
  { name: "Paris", subtitle: "Investisseurs parisiens" },
  { name: "Lyon", subtitle: "Investisseurs lyonnais" },
  { name: "Bordeaux", subtitle: "Investisseurs bordelais" },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <p className="section-tag mb-4" data-reveal>Zones de chasse</p>
        <h2
          className="font-display text-4xl font-light text-primary sm:text-5xl lg:text-[58px] mb-6"
          data-reveal
          data-reveal-delay="100"
        >
          Ils nous font <em className="italic text-accent">confiance</em>
        </h2>
        <p
          className="font-body text-sm leading-relaxed text-muted-foreground max-w-2xl mb-16"
          data-reveal
          data-reveal-delay="150"
        >
          Nos clients investisseurs nous confient leurs projets depuis Tours, Paris, Lyon et Bordeaux.
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          {cities.map((city, i) => (
            <div
              key={city.name}
              data-reveal
              data-reveal-delay={String(200 + i * 150)}
              className="relative overflow-hidden rounded-lg bg-card border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            >
              <div className="gold-bar mb-6" />
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="font-display text-2xl font-medium text-primary">
                  {city.name}
                </span>
              </div>
              <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-muted-foreground">
                {city.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
