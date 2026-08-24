import PillarPageHero from "@/components/PillarPageHero";
import PillarClosingCta from "@/components/PillarClosingCta";

const categories = [
  {
    title: "Conseil & chasse",
    desc: "Analyse patrimoniale, sourcing et négociation, en lien direct avec chaque client.",
  },
  {
    title: "Mandataires du réseau",
    desc: "Formés à la méthode HUNTERS, ils relaient le cabinet sur le terrain.",
  },
];

const member = {
  name: "Anaïs SAIZONOU",
  role: "Fondateur & Directeur Général",
  initials: "AS",
  photo: anaisPhoto.url,
};

const TeamSection = () => (
  <>
    <PillarPageHero
      eyebrow="L'équipe"
      docRef="EQU-01"
      title="Un cabinet, un interlocuteur"
      intro="HUNTERS s'appuie sur une équipe restreinte et un réseau de mandataires formés, pour garantir un suivi personnel de chaque dossier."
    />

    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-[320px] border border-primary/15">
          <div className="relative h-[400px] overflow-hidden bg-primary/5">
            <img
              src={member.photo}
              alt={`${member.name} — ${member.role} HUNTERS`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div className="absolute inset-0 hidden items-center justify-center">
              <span className="font-display text-4xl text-primary">{member.initials}</span>
            </div>
          </div>
          <div className="border-t border-primary/15 p-6">
            <h2 className="font-display text-xl text-primary">{member.name}</h2>
            <p className="mt-2 font-body text-[10px] font-medium uppercase tracking-[3px] text-accent">
              {member.role}
            </p>
          </div>
        </div>

        <div className="mt-16 grid max-w-[900px] gap-px border-t border-primary/15 md:grid-cols-2">
          {categories.map((c) => (
            <div key={c.title} className="border-b border-primary/15 py-8 md:pr-10">
              <h3 className="font-body text-sm font-semibold uppercase tracking-[1.5px] text-primary">
                {c.title}
              </h3>
              <p className="mt-3 max-w-md font-body text-[15px] leading-[1.8] text-muted-foreground">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <PillarClosingCta
      idPrefix="equipe"
      eyebrow="Échangez avec l'équipe"
      title="Parlons de votre projet d'investissement"
      text="Réponse motivée sous 24h ouvrées, sans engagement."
      submitLabel="Prendre rendez-vous"
    />
  </>
);

export default TeamSection;
