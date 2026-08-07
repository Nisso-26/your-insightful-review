import { Link } from "react-router-dom";

const BandeauSection = () => (
  <section className="bg-muted py-10">
    <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
      <div>
        <p className="font-body text-[10px] font-medium uppercase tracking-[4px] text-accent mb-3">
          Zones d'intervention
        </p>
        <p className="font-display text-xl text-primary sm:text-2xl">
          Tours · Joué-lès-Tours · Saint-Cyr-sur-Loire · Amboise{" "}
          <span className="font-body text-sm text-muted-foreground">et Indre-et-Loire</span>
        </p>
      </div>
      <Link
        to="/contact"
        className="shrink-0 font-body text-[10px] font-medium uppercase tracking-[2px] text-primary underline underline-offset-4 hover:text-accent transition-colors"
      >
        Voir toutes les zones →
      </Link>
    </div>
  </section>
);

export default BandeauSection;
