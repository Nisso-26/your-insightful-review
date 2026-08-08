import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PillarPageHero from "@/components/PillarPageHero";
import CalloutBox from "@/components/CalloutBox";
import PillarClosingCta from "@/components/PillarClosingCta";

const rows = [
  "Stratégie patrimoniale",
  "Chasse immobilière",
  "Suivi de travaux",
  "Décoration & ameublement",
];

const pending = "italic text-[#a8a292]";

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
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-primary/20">
                {["Pilier", "Structure", "Modalité"].map((h) => (
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
              {rows.map((r) => (
                <tr key={r} className="border-b border-primary/10">
                  <td className="py-5 pr-6 font-body text-sm text-primary">{r}</td>
                  <td className={`py-5 pr-6 font-body text-sm ${pending}`}>À compléter</td>
                  <td className={`py-5 pr-6 font-body text-sm ${pending}`}>À compléter</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 max-w-[620px] font-body text-[15px] leading-[1.9] text-muted-foreground">
          Un pilier isolé ou l'accompagnement complet A à Z : chaque prestation peut être mobilisée
          seule, ou intégrée à un parcours global — le détail des inclusions figure dans le mandat ou
          la lettre de mission.
        </p>

        <div className="mt-12">
          <CalloutBox
            title="Notre grille tarifaire"
            text="Notre grille tarifaire complète sera communiquée ici prochainement. Dans l'attente, chaque montant est précisé individuellement dès le premier échange, avant tout engagement."
          />
        </div>
      </div>
    </section>

    <PillarClosingCta
      idPrefix="honoraires"
      eyebrow="UNE QUESTION SUR NOS HONORAIRES ?"
      title="Parlons de votre projet"
      text="Réponse motivée sous 24h ouvrées, sans engagement."
    />
  </Layout>
);

export default Honoraires;
