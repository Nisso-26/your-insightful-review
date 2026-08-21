interface PillarPageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  /** Référence dossier, ex. "EXP-01" (nommé docRef car `ref` est réservé par React) */
  docRef: string;
}

const PillarPageHero = ({ eyebrow, title, intro, docRef }: PillarPageHeroProps) => (
  <section className="bg-[hsl(var(--hunters-cream))] pt-24 pb-16">
    <div className="container mx-auto px-6">
      <p className="mt-12 font-body text-[10px] font-medium uppercase tracking-[4px] text-accent">
        {eyebrow}
      </p>
      <h1 className="mt-6 max-w-3xl font-display text-[clamp(32px,5vw,48px)] leading-[1.15] text-primary">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl font-body text-[15px] leading-[1.9] text-muted-foreground">
        {intro}
      </p>
    </div>
  </section>
);

export default PillarPageHero;
