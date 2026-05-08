import { useScrollReveal } from "@/hooks/useScrollReveal";

const cities = ["Tours", "Paris", "Lyon", "Bordeaux"];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <h2
          className="font-display text-4xl font-light text-primary sm:text-5xl lg:text-[58px] mb-16"
          data-reveal
        >
          Ils nous font <em className="italic text-accent">confiance</em>
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {cities.map((city, i) => (
            <div
              key={city}
              data-reveal
              data-reveal-delay={String(i * 150)}
              className="border-t-2 border-accent pt-6"
            >
              <p className="font-display text-3xl font-light text-primary mb-2">
                {city}
              </p>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[2px] text-muted-foreground">
                Investisseur accompagné
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
