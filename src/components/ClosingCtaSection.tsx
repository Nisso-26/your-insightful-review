import EtudeForm from "@/components/EtudeForm";

const ClosingCtaSection = () => (
  <section className="bg-primary py-24">
    <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <p className="font-body text-[10px] font-medium uppercase tracking-[4px] text-accent mb-6">
          Étude patrimoniale gratuite
        </p>
        <h2 className="font-display text-[clamp(30px,4vw,46px)] leading-[1.15] text-primary-foreground mb-6">
          Chiffrons ensemble votre projet d'investissement
        </h2>
        <p className="max-w-md font-body text-[15px] leading-[1.9] text-primary-foreground/70">
          Un conseiller vous répond en 24h avec une première simulation de rentabilité.
        </p>
      </div>

      <div className="bg-[hsl(var(--hunters-cream))] p-8 lg:p-10">
        <EtudeForm idPrefix="closing" />
      </div>
    </div>
  </section>
);

export default ClosingCtaSection;
