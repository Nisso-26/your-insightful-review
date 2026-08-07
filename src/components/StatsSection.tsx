import { useScrollReveal } from "@/hooks/useScrollReveal";

const engagements = [
  { value: "24h", label: "Réponse motivée garantie" },
  { value: "1 seul", label: "Interlocuteur, du conseil à la décoration" },
  { value: "100%", label: "Accompagnement sur-mesure" },
  { value: "Sans", label: "Frais de dossier caché" },
];

const StatsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="chiffres" className="bg-background pb-24">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid border-l border-primary/15 sm:grid-cols-2 lg:grid-cols-4">
          {engagements.map((e, i) => (
            <div
              key={e.value}
              data-reveal
              data-reveal-delay={String(i * 100)}
              className="border-b border-r border-primary/15 p-8 lg:p-10"
            >
              <div className="font-display text-4xl text-primary">{e.value}</div>
              <p className="mt-3 font-body text-[11px] uppercase tracking-[2px] text-muted-foreground">
                {e.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
