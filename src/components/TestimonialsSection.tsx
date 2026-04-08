import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Marc T.",
    context: "Investisseur — Paris",
    text: "Hunters a géré mon investissement de A à Z. Un T2 meublé à 8,2 % net, loué en 11 jours. Je n'aurais jamais trouvé ce bien seul.",
  },
  {
    name: "Sophie L.",
    context: "Investisseuse — Lyon",
    text: "La décoration faite par l'équipe a tout changé. Mon loyer est 15 % au-dessus du marché. Un travail vraiment professionnel.",
  },
  {
    name: "Romain D.",
    context: "Primo-investisseur — Tours",
    text: "Premier investissement, beaucoup de doutes. Hunters a tout sécurisé : montage fiscal, négo, travaux. Je recommande les yeux fermés.",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <p className="section-tag mb-4" data-reveal>Avis clients</p>
        <h2 className="font-display text-4xl font-light text-primary sm:text-5xl lg:text-[58px] mb-6" data-reveal data-reveal-delay="100">
          Ils nous ont fait <em className="italic text-accent">confiance</em>
        </h2>
        <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-2xl mb-16" data-reveal data-reveal-delay="150">
          Des investisseurs accompagnés de A à Z, satisfaits de leur projet et de leurs rendements.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              data-reveal-delay={String(200 + i * 150)}
              className="relative overflow-hidden rounded-lg bg-card border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute top-4 right-6 font-display text-[120px] leading-none text-accent/10 select-none">"</span>
              <div className="relative">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-sm italic leading-relaxed text-foreground/80 mb-6">« {t.text} »</p>
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
};

export default TestimonialsSection;
