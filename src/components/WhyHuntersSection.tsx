import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    num: "01",
    title: "Indépendance totale",
    text: "Nous ne sommes liés à aucun promoteur ni réseau vendeur. Nous défendons exclusivement vos intérêts.",
  },
  {
    num: "02",
    title: "Ancrage terrain à Tours",
    text: "Une connaissance fine du marché local, des biens off-market et des artisans de confiance. Ce que Google ne peut pas vous donner.",
  },
  {
    num: "03",
    title: "Un interlocuteur unique de A à Z",
    text: "Stratégie, chasse, travaux, décoration — un seul référent du premier appel à la remise des clés.",
  },
];

const WhyHuntersSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Title */}
        <h2
          className="font-display text-4xl font-light text-primary text-center mb-16 sm:text-5xl"
          data-reveal
        >
          Pourquoi <em className="italic text-accent">Hunters</em> ?
        </h2>

        {/* Grid */}
        <div className="grid gap-0 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.num}
              data-reveal
              data-reveal-delay={String(i * 150)}
              className="border-t-2 border-accent px-8 py-10 first:pt-6 lg:first:pt-10"
            >
              <span className="font-display text-3xl font-medium text-accent block mb-4">
                {reason.num}
              </span>
              <h3 className="font-display text-xl font-medium text-primary mb-3">
                {reason.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHuntersSection;
