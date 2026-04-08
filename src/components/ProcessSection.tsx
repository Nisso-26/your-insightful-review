import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Profil investisseur", desc: "Analyse de votre situation financière, objectifs de rendement et stratégie fiscale optimale." },
  { num: "02", title: "Mission de conseil", desc: "Signature du mandat de recherche et définition précise des critères de sélection." },
  { num: "03", title: "Chasse active", desc: "Prospection multi-canaux, accès off-market, sélection et visites ciblées pour vous." },
  { num: "04", title: "Acquisition", desc: "Offre d'achat, négociation, accompagnement compromis et signature acte authentique." },
  { num: "05", title: "Clé en main", desc: "Gestion des travaux, décoration, ameublement et mise en location — tout est géré." },
];

const ProcessSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="processus" className="bg-primary py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <p className="section-tag mb-4" data-reveal>Notre méthode</p>
        <h2 className="font-display text-4xl font-light text-white sm:text-5xl lg:text-[58px] mb-20" data-reveal data-reveal-delay="100">
          De la stratégie à la <em className="italic text-accent">clé en main</em>
        </h2>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-accent/30" />
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <div key={step.num} className="relative text-center" data-reveal data-reveal-delay={String(200 + i * 150)}>
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-primary font-body text-sm font-bold text-accent">
                    {step.num}
                  </div>
                  <h3 className="font-display text-lg font-medium text-white mb-3">{step.title}</h3>
                  <p className="font-body text-xs leading-relaxed text-white/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:hidden">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-5" data-reveal data-reveal-delay={String(200 + i * 100)}>
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent font-body text-xs font-bold text-accent">
                  {step.num}
                </div>
                <div className="mt-2 w-[2px] flex-1 bg-accent/20" />
              </div>
              <div className="pb-8">
                <h3 className="font-display text-lg font-medium text-white mb-2">{step.title}</h3>
                <p className="font-body text-sm leading-relaxed text-white/60">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
