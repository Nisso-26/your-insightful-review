import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Julien M.",
    context: "Paris — acquisition à Tours",
    text: "HUNTERS m'a trouvé un T3 à Tours avec 7,8% de rendement net en moins de 3 semaines. La gestion de A à Z m'a évité un stress considérable.",
  },
  {
    name: "Sophie K.",
    context: "Investisseuse, Lyon",
    text: "Premier investissement totalement géré par HUNTERS. Travaux, déco, mise en location... Je n'ai eu qu'à valider. Résultat : loué en 6 jours.",
  },
  {
    name: "Thomas L.",
    context: "Investisseur, Bordeaux",
    text: "L'analyse fiscale m'a permis d'économiser plusieurs milliers d'euros. Un niveau d'expertise que je n'avais pas chez mon banquier.",
  },
];

const TestimonialsSection = () => (
  <section id="temoignages" className="bg-background py-24">
    <div className="container mx-auto px-6">
      <p className="section-tag mb-4">Témoignages</p>
      <h2 className="font-display text-4xl font-light text-primary sm:text-5xl lg:text-[58px] mb-16">
        Ils nous font <em className="italic text-accent">confiance</em>
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative overflow-hidden rounded-lg bg-card border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Giant quote */}
            <span className="absolute top-4 right-6 font-display text-[120px] leading-none text-accent/10 select-none">
              "
            </span>

            <div className="relative">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-sm italic leading-relaxed text-foreground/80 mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-body text-xs font-bold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="font-body text-xs text-muted-foreground">{t.context}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
