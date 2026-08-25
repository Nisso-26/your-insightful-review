import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";
import CalloutBox from "@/components/CalloutBox";
import PillarClosingCta from "@/components/PillarClosingCta";

interface PillarRow {
  cols: string[];
  highlight?: boolean;
}

interface PillarBlock {
  num: string;
  title: string;
  desc: string;
  headers: string[];
  rows: PillarRow[];
}

const pillars: PillarBlock[] = [
  {
    num: "01",
    title: "Stratégie patrimoniale",
    desc: "Stratégie patrimoniale, structuration du financement, montage juridique et fiscal, définition des critères de recherche — restitués dans une note de cadrage remise en fin de mission.",
    headers: ["Profil de dossier", "HT", "TTC"],
    rows: [
      { cols: ["Dossier standard", "1 500 €", "1 800 €"] },
      { cols: ["Dossier complexe", "2 500 €", "3 000 €"] },
      { cols: ["Dossier expert", "3 500 €", "4 200 €"] },
    ],
  },
  {
    num: "02",
    title: "Chasse immobilière",
    desc: "Sourcing et sélection des biens, visites et analyse du potentiel, négociation du prix d'acquisition — chaque bien visité fait l'objet d'un rapport de visite détaillé.",
    headers: ["Budget d'acquisition", "Honoraires HT"],
    rows: [
      { cols: ["Moins de 100 000 €", "Uniquement via l'accompagnement clé en main"], highlight: true },
      { cols: ["Jusqu'à 200 000 €", "Forfait 6 500 €"] },
      { cols: ["200 001 € — 500 000 €", "4 % du prix d'acquisition"] },
      { cols: ["500 001 € — 1 000 000 €", "3 % du prix d'acquisition"] },
      { cols: ["Au-delà de 1 000 000 €", "2 % du prix d'acquisition"] },
    ],
  },
  {
    num: "03",
    title: "AMO Suivi de travaux",
    desc: "Cadrage du chantier et chiffrage, sélection d'artisans qualifiés, pilotage et suivi hebdomadaire, réception et levée des réserves — un compte-rendu de suivi vous est transmis à chaque étape clé.",
    headers: ["Budget travaux", "Honoraires HT"],
    rows: [
      { cols: ["Jusqu'à 50 000 €", "2 000 € + 10 %"] },
      { cols: ["50 001 € — 150 000 €", "2 000 € + 8 %"] },
      { cols: ["Au-delà de 150 000 €", "2 000 € + 6 %"] },
    ],
  },
  {
    num: "04",
    title: "Décoration & ameublement",
    desc: "Plan d'aménagement et choix des matériaux, sélection et coordination du mobilier, installation et mise en valeur finale — livrés avec un book décoration et un reportage photo du bien achevé.",
    headers: ["Budget décoration", "Honoraires HT"],
    rows: [
      { cols: ["Jusqu'à 20 000 €", "2 500 € + 15 %"] },
      { cols: ["20 001 € — 50 000 €", "2 500 € + 12 %"] },
      { cols: ["Au-delà de 50 000 €", "2 500 € + 10 %"] },
    ],
  },
];

const Honoraires = () => (
  <Layout>
    <SEO
      title="Honoraires — Transparence tarifaire | HUNTERS"
      description="Une structure d'honoraires claire, communiquée dès le premier échange, sans frais de dossier caché : conseil, chasse, travaux et décoration."
      path="/honoraires"
    />
    <PillarPageHero
      eyebrow="TRANSPARENCE"
      docRef="HON-01"
      title="Honoraires"
      intro="Une structure d'honoraires claire, communiquée dès le premier échange — sans frais de dossier caché."
    />

    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <p className="mb-16 font-body text-[13px] italic text-muted-foreground">
          Montants exprimés Hors Taxes, TVA 20 % en sus.
        </p>

        <div className="max-w-[920px] space-y-20">
          {pillars.map((p) => (
            <div key={p.num}>
              {/* En-tête pilier : numéro doré + titre */}
              <div className="flex items-baseline gap-5 border-t border-primary/15 pt-8">
                <span className="font-display text-2xl text-accent">{p.num}</span>
                <h2 className="font-display text-2xl leading-snug text-primary md:text-[28px]">
                  {p.title}
                </h2>
              </div>

              <p className="mt-5 max-w-[620px] font-body text-[15px] leading-[1.9] text-muted-foreground">
                {p.desc}
              </p>

              {/* Tableau tarifaire */}
              <div className="mt-8 overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-primary/20">
                      {p.headers.map((h) => (
                        <th
                          key={h}
                          className="py-4 pr-6 font-body text-[10px] font-medium uppercase tracking-[2px] text-accent"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {p.rows.map((r, i) => (
                      <tr
                        key={i}
                        className="border-b border-primary/10"
                        style={
                          r.highlight
                            ? { backgroundColor: "rgba(200,150,47,0.06)" }
                            : undefined
                        }
                      >
                        {r.cols.map((c, j) => (
                          <td
                            key={j}
                            className={`py-5 pr-6 font-body text-sm ${
                              j === 0 ? "text-primary" : "text-muted-foreground"
                            }`}
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Encadré final */}
        <div className="mt-20 max-w-[620px]">
          <CalloutBox
            title="L'accompagnement clé en main"
            text="Pour une expérience sans couture, combinez tout ou partie de nos prestations. Une remise de 10 % s'applique sur la chasse, l'AMO et la décoration lorsqu'elles sont associées."
          />
          <p className="mt-4 font-body text-[13px] italic text-muted-foreground">
            Un devis personnalisé vous est remis à l'issue de votre premier rendez-vous, sans engagement.
          </p>
        </div>
      </div>
    </section>

    <PillarClosingCta
      idPrefix="honoraires"
      eyebrow="Une question sur nos honoraires ?"
      title="Parlons de votre projet"
      text="Réponse motivée sous 24h ouvrées, sans engagement."
    />
  </Layout>
);

export default Honoraires;
