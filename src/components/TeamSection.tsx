import { Phone, Mail, Linkedin, MapPin, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const team = [
  { name: "Alexandre Dupont", role: "Fondateur & Dirigeant", zone: "Tours & France entière", specialty: "Expert en stratégie patrimoniale et investissement locatif. Plus de 10 ans d'expérience dans l'immobilier.", founder: true },
  { name: "Marie Laurent", role: "Chasseur Immobilier", zone: "Tours & Indre-et-Loire", specialty: "Spécialisée dans la recherche de biens à fort potentiel locatif en Centre-Val de Loire.", founder: false },
  { name: "Thomas Bernard", role: "Chasseur Immobilier", zone: "Bordeaux & Nouvelle-Aquitaine", specialty: "Expert du marché bordelais, spécialisé immeubles de rapport et colocation.", founder: false },
];

const TeamSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="equipe" className="bg-background py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <p className="section-tag mb-4" data-reveal>L'équipe</p>
        <h2 className="font-display text-4xl font-light text-primary sm:text-5xl lg:text-[58px] mb-16" data-reveal data-reveal-delay="100">
          Des experts <em className="italic text-accent">à votre service</em>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <div
              key={member.name}
              data-reveal
              data-reveal-delay={String(200 + i * 150)}
              className={`group relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${member.founder ? "sm:row-span-1" : ""}`}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              <div className={`relative bg-primary/10 ${member.founder ? "h-[380px]" : "h-[320px]"}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-3xl font-medium text-primary">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-primary">{member.name}</h3>
                <p className="font-body text-[10px] font-bold uppercase tracking-[3px] text-accent mt-1">{member.role}</p>
                <div className="mt-3 flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span className="font-body text-xs">{member.zone}</span>
                </div>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{member.specialty}</p>
                <div className="mt-4 flex gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                  <Mail className="h-4 w-4 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center rounded-lg bg-primary p-8 text-center sm:col-span-2 lg:col-span-3" data-reveal data-reveal-delay="650">
            <h3 className="font-display text-2xl font-light text-white mb-3">
              Rejoindre le réseau <span className="text-accent">HUNTERS</span>
            </h3>
            <p className="font-body text-sm text-white/60 mb-6 max-w-md">
              Vous êtes chasseur immobilier et souhaitez rejoindre un réseau premium ?
            </p>
            <button className="group flex items-center gap-2 rounded-sm border border-accent px-6 py-3 font-body text-[10px] font-bold uppercase tracking-[2px] text-accent transition-all hover:bg-accent hover:text-primary">
              Candidater
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
