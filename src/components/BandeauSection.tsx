import { Link } from "react-router-dom";

const BandeauSection = () => (
  <div className="bg-accent py-6">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
      <p className="font-display text-lg font-medium text-primary italic sm:text-xl">
        Hunters Immobilier, c'est bien plus qu'une agence. C'est un partenaire de confiance, une passerelle vers la liberté financière.
      </p>
      <Link
        to="/expertise"
        className="shrink-0 font-body text-[11px] font-bold uppercase tracking-[2px] text-primary underline underline-offset-4 hover:text-primary/70 transition-colors"
      >
        Nos services →
      </Link>
    </div>
  </div>
);

export default BandeauSection;
