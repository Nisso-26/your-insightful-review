import EtudeForm from "@/components/EtudeForm";

const HeroSection = () => (
  <section className="bg-[hsl(var(--hunters-cream))] py-16 lg:py-24">
    <div className="container mx-auto px-6">
      <div className="grid items-start gap-16 pt-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-body text-[10px] font-medium uppercase tracking-[4px] text-accent mb-8">
            Cabinet de conseil en investissement immobilier — Tours
          </p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-normal leading-[1.12] text-primary mb-8">
            Une architecture de conseil,
            <br />
            dessinée pour durer
          </h1>
          <p className="max-w-xl font-body text-[15px] leading-[1.9] text-muted-foreground">
            Stratégie patrimoniale, chasse, suivi de travaux, décoration : quatre piliers,
            un plan d'exécution unique, du premier trait à la remise des clés.
          </p>
        </div>

        <div className="border border-primary/[0.16] bg-white p-8 lg:p-10">
          <h2 className="font-display text-2xl text-primary">Étude patrimoniale gratuite</h2>
          <p className="mt-2 mb-8 font-body text-[13px] text-muted-foreground">
            Réponse motivée sous 24h ouvrées
          </p>
          <EtudeForm idPrefix="hero" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
