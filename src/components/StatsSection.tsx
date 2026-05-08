import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "2019", label: "Année de création" },
  { value: "Tours", label: "Ancrage local & régional" },
  { value: "A → Z", label: "Accompagnement complet" },
  { value: "100%", label: "Dédié à vos intérêts" },
];

const StatsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="chiffres" className="bg-card py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal
              data-reveal-delay={String(i * 150)}
              className={`text-center ${i < stats.length - 1 ? "lg:border-r lg:border-border" : ""}`}
            >
              <div className="gold-bar mx-auto mb-4" />
              <div className="font-display text-4xl font-medium text-primary sm:text-5xl">{stat.value}</div>
              <div className="mt-2 font-body text-xs font-semibold uppercase tracking-[2px] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
