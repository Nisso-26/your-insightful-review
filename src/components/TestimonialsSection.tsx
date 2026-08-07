import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-3xl px-6 text-center" ref={ref}>
        <p className="font-display text-2xl italic leading-relaxed text-primary sm:text-3xl" data-reveal>
          Les témoignages de nos clients seront publiés ici dès les premiers retours d'accompagnement.
        </p>
        <Link
          to="/temoignages"
          data-reveal
          data-reveal-delay="150"
          className="mt-8 inline-block font-body text-[10px] font-medium uppercase tracking-[2px] text-primary underline underline-offset-4 hover:text-accent transition-colors"
        >
          Lire tous les témoignages →
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsSection;
