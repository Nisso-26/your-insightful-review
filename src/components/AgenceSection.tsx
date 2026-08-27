import PillarPageHero from "@/components/PillarPageHero";
import NumberedSteps from "@/components/NumberedSteps";
import CalloutBox from "@/components/CalloutBox";
import PillarClosingCta from "@/components/PillarClosingCta";

const steps = [
  {
    title: "Cadrage patrimonial",
    desc: "Chaque projet démarre par une lecture de votre situation et de vos objectifs, quel que soit votre niveau d'expérience — c'est le cadrage qui détermine la stratégie, pas l'inverse.",
  },
  {
    title: "Sélectivité",
    desc: "Nous ne présentons que les biens qui répondent aux critères de rentabilité et de risque fixés en amont — pas un catalogue, une short-list.",
  },
  {
    title: "Un interlocuteur unique",
    desc: "De la stratégie à la mise en location, un seul conseiller suit votre dossier — vous ne recommencez jamais l'explication de votre projet.",
  },
];

const zones = [
  { num: "I.", title: "Tours", desc: "Centre historique, quartiers résidentiels, secteur en tension locative." },
  { num: "II.", title: "Joué-lès-Tours", desc: "Deuxième ville de l'agglomération, marché résidentiel dynamique." },
  { num: "III.", title: "Saint-Cyr-sur-Loire", desc: "Secteur prisé en bord de Loire, forte demande locative." },
  { num: "IV.", title: "Chambray-lès-Tours", desc: "Pôle économique et résidentiel au sud de l'agglomération." },
  { num: "V.", title: "Fondettes", desc: "Cadre résidentiel recherché, proximité immédiate de Tours." },
  { num: "VI.", title: "Saint-Pierre-des-Corps", desc: "Pôle ferroviaire, marché locatif accessible." },
];

const AgenceSection = () => (
  <>
    <PillarPageHero
      eyebrow="L'agence"
      docRef="AGC-01"
      title="Une méthode d'investisseur, un accompagnement de bout en bout"
      intro="HUNTERS conseille des investisseurs à différents stades de leur parcours — de la première acquisition à la constitution d'un patrimoine structuré — avec une méthode unique : cadrer, sélectionner, exécuter et suivre chaque projet jusqu'à sa mise en location. Fondé à Tours en 2019 par Anaïs Saizonou."
    />

    {/* Histoire */}
    <section className="bg-[hsl(var(--hunters-cream))] py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <p className="mb-6 font-body text-[10px] font-medium uppercase tracking-[4px] text-accent">
          Histoire
        </p>
        <h2 className="mb-10 font-display text-[clamp(30px,4vw,46px)] leading-[1.15] text-primary">
          De l'intuition à l'impact
        </h2>
        <div className="space-y-6">
          <p className="font-body text-[15px] leading-[1.9] text-muted-foreground">
            HUNTERS est parti d'un constat partagé par beaucoup d'investisseurs, débutants comme confirmés : le marché immobilier récompense la méthode, pas l'improvisation — et la plupart des accompagnements s'arrêtent à une seule étape du projet, en laissant le reste à la charge du client.
          </p>
          <p className="font-body text-[15px] leading-[1.9] text-muted-foreground">
            Fondé en 2019 par Anaïs Saizonou, HUNTERS a construit une approche structurée en quatre étapes — stratégie, sélection du bien, travaux, mise en valeur — avec un même interlocuteur du premier échange à la mise en location. Cette rigueur s'applique aussi bien à un premier investissement locatif qu'à la structuration d'un patrimoine immobilier plus large.
          </p>
        </div>
      </div>
    </section>

    {/* Méthode */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <p className="mb-6 font-body text-[10px] font-medium uppercase tracking-[4px] text-accent">
          Méthode
        </p>
        <NumberedSteps items={steps} />
      </div>
    </section>

    {/* Zones d'intervention */}
    <section id="zones-intervention" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <p className="mb-6 font-body text-[10px] font-medium uppercase tracking-[4px] text-accent">
          Zones d'intervention
        </p>
        <h2 className="mb-10 font-display text-[clamp(30px,4vw,46px)] leading-[1.15] text-primary">
          Tours et 20 km à la ronde
        </h2>
        <div className="grid border-t border-l border-primary/15 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((z) => (
            <div key={z.title} className="border-b border-r border-primary/15 p-8 lg:p-10">
              <span className="font-display text-lg text-accent">{z.num}</span>
              <h3 className="font-display text-2xl text-primary mt-3 mb-4">{z.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{z.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CalloutBox
            title="Une zone élargie sur demande"
            text="Notre zone d'intervention principale couvre Tours et 20 km à la ronde. Certains projets nous amènent au-delà, notamment vers Amboise — n'hésitez pas à nous soumettre votre recherche, même hors de ce périmètre."
          />
        </div>
      </div>
    </section>

    <PillarClosingCta
      idPrefix="agence"
      eyebrow="Parlons de votre projet"
      title="Un premier échange pour cadrer votre projet"
      text="Un premier échange pour cadrer votre situation et vos objectifs — que vous prépariez un premier investissement locatif ou structuriez un patrimoine existant."
      submitLabel="Prendre rendez-vous"
    />
  </>
);

export default AgenceSection;
