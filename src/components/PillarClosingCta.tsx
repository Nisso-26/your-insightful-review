import EtudeForm from "@/components/EtudeForm";

interface PillarClosingCtaProps {
  eyebrow?: string;
  title: string;
  text: string;
  idPrefix?: string;
  submitLabel?: string;
}

const PillarClosingCta = ({ eyebrow, title, text, idPrefix = "pillar", submitLabel = "Prendre rendez-vous" }: PillarClosingCtaProps) => (
  <section className="bg-primary py-24">
    <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-[1fr_0.9fr]">
      <div>
        {eyebrow && (
          <p className="mb-6 font-body text-[10px] font-medium uppercase tracking-[4px] text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="mb-6 font-display text-[clamp(30px,4vw,46px)] leading-[1.15] text-primary-foreground">
          {title}
        </h2>
        <p className="max-w-md font-body text-[15px] leading-[1.9] text-primary-foreground/70">
          {text}
        </p>
      </div>

      <div className="bg-[hsl(var(--hunters-cream))] p-8 lg:p-10">
        <EtudeForm idPrefix={idPrefix} submitLabel={submitLabel} />
      </div>
    </div>
  </section>
);

export default PillarClosingCta;
