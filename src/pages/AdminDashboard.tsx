import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Mail, Phone, Calendar, Search, Loader2, ChevronDown, ChevronUp, RotateCw, XCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  project_type: string | null;
  budget: string | null;
  message: string | null;
  city: string | null;
  reference: string | null;
  statut_transmission: string;
  erreur_transmission: string | null;
  motif_ecarte: string | null;
  created_at: string;
}

const statutLabel = (s: string) =>
  s === "transmis" ? "Transmis" : s === "echec" ? "Échec technique" : "En attente";

const StatusBadge = ({ lead }: { lead: Lead }) => {
  if (lead.motif_ecarte) {
    return (
      <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-body text-[10px] uppercase tracking-wider text-white/40 line-through">
        Écartée
      </span>
    );
  }
  const cls =
    lead.statut_transmission === "transmis"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
      : lead.statut_transmission === "echec"
        ? "border-red-400/30 bg-red-400/10 text-red-300"
        : "border-white/15 bg-white/5 text-white/50";
  return (
    <span className={`rounded-full border px-2.5 py-0.5 font-body text-[10px] uppercase tracking-wider ${cls}`}>
      {statutLabel(lead.statut_transmission)}
    </span>
  );
};

const initial = (s: string | null | undefined) => (s && s.trim() ? s.trim()[0].toUpperCase() : "?");

const AdminDashboard = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [sortDesc, setSortDesc] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [ecartId, setEcartId] = useState<string | null>(null);
  const [motif, setMotif] = useState("");

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchLeads();
    }
  }, [user, isAdmin]);

  const fetchLeads = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const result = await Promise.race([
        supabase
          .from("contact_leads")
          .select("*")
          .order("created_at", { ascending: false }),
        new Promise<never>((_, reject) =>
          window.setTimeout(() => reject(new Error("timeout")), 15000)
        ),
      ]);
      setLeads((result.data as Lead[]) || []);
    } catch (err) {
      console.error("fetchLeads error or timeout", err);
      setLeads([]);
      setErrorMsg(
        "Impossible de charger les leads. Vérifiez votre connexion internet."
      );
    } finally {
      setLoading(false);
    }
  };

  const syncLead = async (lead_id: string, motif_ecarte?: string) => {
    setBusyId(lead_id);
    try {
      const { data, error } = await supabase.functions.invoke("sync-lead-to-workspace", {
        body: motif_ecarte ? { lead_id, motif_ecarte } : { lead_id },
      });
      if (error) throw error;
      if (data?.transmis) {
        toast.success(motif_ecarte ? "Demande écartée et transmise au Workspace" : "Demande transmise au Workspace");
      } else {
        toast.error(data?.erreur || "Échec de la transmission");
      }
      if (motif_ecarte) {
        setEcartId(null);
        setMotif("");
      }
    } catch (err) {
      console.error("syncLead error", err);
      toast.error("Échec technique — Workspace injoignable");
    } finally {
      setBusyId(null);
      fetchLeads();
    }
  };

  const filtered = leads
    .filter((l) => {
      const q = search.toLowerCase();
      return (
        (l.first_name || "").toLowerCase().includes(q) ||
        (l.last_name || "").toLowerCase().includes(q) ||
        (l.email || "").toLowerCase().includes(q) ||
        (l.project_type || "").toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      const diff = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      return sortDesc ? -diff : diff;
    });

  const latest = [...leads].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )[0];
  const dotColor =
    latest?.statut_transmission === "transmis"
      ? "bg-emerald-400"
      : latest?.statut_transmission === "echec"
        ? "bg-red-400"
        : "bg-orange-400";

  const today = new Date().toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    );
  }

  if (!user || !isAdmin) return null;

  return (
    <>
      <Helmet>
        <title>Registre des demandes | HUNTERS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <h1 className="font-display text-xl font-bold text-white">Registre des demandes</h1>
            <p className="font-body text-xs text-white/40">HUNTERS Immobilier · {today}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-body text-xs text-white/60">
              <span className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden="true" />
              Workspace connecté
            </span>
            <span className="font-body text-xs text-white/50">{user.email}</span>
            <button
              onClick={() => { signOut(); navigate("/"); }}
              className="flex items-center gap-2 rounded-sm border border-white/10 px-4 py-2 font-body text-xs text-white/60 transition hover:border-accent hover:text-accent"
            >
              <LogOut className="h-3.5 w-3.5" />
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="font-body text-xs uppercase tracking-wider text-white/40">Total leads</p>
            <p className="mt-2 font-display text-3xl font-bold text-accent">{leads.length}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="font-body text-xs uppercase tracking-wider text-white/40">Cette semaine</p>
            <p className="mt-2 font-display text-3xl font-bold text-white">
              {leads.filter((l) => {
                const d = new Date(l.created_at);
                const now = new Date();
                return now.getTime() - d.getTime() < 7 * 24 * 60 * 60 * 1000;
              }).length}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="font-body text-xs uppercase tracking-wider text-white/40">Aujourd'hui</p>
            <p className="mt-2 font-display text-3xl font-bold text-white">
              {leads.filter((l) => new Date(l.created_at).toDateString() === new Date().toDateString()).length}
            </p>
          </div>
        </div>

        {/* Search + Sort */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un lead..."
              className="w-full rounded-sm border border-white/10 bg-white/10 py-2.5 pl-10 pr-4 font-body text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
            />
          </div>
          <button
            onClick={() => setSortDesc(!sortDesc)}
            className="flex items-center gap-1 font-body text-xs text-white/50 hover:text-accent transition-colors"
          >
            Date {sortDesc ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronUp className="h-3.5 w-3.5" />}
          </button>
        </div>

        {/* Leads list */}
        {loading && leads.length === 0 ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
          </div>
        ) : errorMsg ? (
          <div className="py-16 text-center">
            <p className="font-body text-sm text-red-400 mb-4">{errorMsg}</p>
            <button
              onClick={fetchLeads}
              className="inline-flex items-center gap-2 rounded-sm border border-white/10 px-4 py-2 font-body text-xs text-white/70 transition hover:border-accent hover:text-accent"
            >
              <Loader2 className="h-3.5 w-3.5" />
              Réessayer
            </button>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-body text-sm text-white/40">Aucun lead trouvé</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((lead) => {
              const fullName = `${lead.first_name || ""} ${lead.last_name || ""}`.trim() || "Sans nom";
              const canResend = !lead.motif_ecarte && (lead.statut_transmission === "echec" || lead.statut_transmission === "en_attente");
              const busy = busyId === lead.id;
              return (
              <div
                key={lead.id}
                className="rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
                  aria-expanded={expandedId === lead.id}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent">
                      {initial(lead.first_name)}{initial(lead.last_name)}
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-white">{fullName}</p>
                      <p className="font-body text-xs text-white/40">{lead.project_type || "—"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden font-body text-xs text-white/30 sm:block">
                      {new Date(lead.created_at).toLocaleDateString("fr-FR", {
                        day: "numeric", month: "short", year: "numeric",
                      })}
                    </span>
                    <StatusBadge lead={lead} />
                    {expandedId === lead.id ? (
                      <ChevronUp className="h-4 w-4 text-white/30" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-white/30" />
                    )}
                  </div>
                </button>

                {expandedId === lead.id && (
                  <div className="border-t border-white/5 px-6 py-4 space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-accent" />
                        <a href={`mailto:${lead.email}`} className="font-body text-sm text-white/70 hover:text-accent">
                          {lead.email || "—"}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-accent" />
                        {lead.phone ? (
                          <a href={`tel:${lead.phone}`} className="font-body text-sm text-white/70 hover:text-accent">{lead.phone}</a>
                        ) : (
                          <span className="font-body text-sm text-white/40">—</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-accent" />
                        <span className="font-body text-sm text-white/70">
                          {new Date(lead.created_at).toLocaleString("fr-FR")}
                        </span>
                      </div>
                      <div>
                        <span className="font-body text-xs uppercase tracking-wider text-white/30">Ville</span>
                        <p className="font-body text-sm text-white/70">{lead.city || "—"}</p>
                      </div>
                      <div>
                        <span className="font-body text-xs uppercase tracking-wider text-white/30">Budget</span>
                        <p className="font-body text-sm text-white/70">{lead.budget || "—"}</p>
                      </div>
                      <div>
                        <span className="font-body text-xs uppercase tracking-wider text-white/30">Statut de transmission</span>
                        <p className="font-body text-sm text-white/70">{statutLabel(lead.statut_transmission)}</p>
                      </div>
                      <div>
                        <span className="font-body text-xs uppercase tracking-wider text-white/30">Référence Workspace</span>
                        <p className="font-body text-sm text-white/70 break-all">{lead.reference || "—"}</p>
                      </div>
                    </div>
                    <div>
                      <span className="font-body text-xs uppercase tracking-wider text-white/30">Message</span>
                      <p className="mt-1 font-body text-sm leading-relaxed text-white/60">{lead.message || "—"}</p>
                    </div>
                    {lead.statut_transmission === "echec" && lead.erreur_transmission && (
                      <div className="rounded-sm border border-red-400/30 bg-red-400/10 px-4 py-3">
                        <span className="font-body text-xs uppercase tracking-wider text-red-300">Erreur</span>
                        <p className="mt-1 font-body text-sm text-red-200">{lead.erreur_transmission}</p>
                      </div>
                    )}
                    {lead.motif_ecarte && (
                      <div className="rounded-sm border border-white/10 bg-white/5 px-4 py-3">
                        <span className="font-body text-xs uppercase tracking-wider text-white/30">Motif d'écartement</span>
                        <p className="mt-1 font-body text-sm text-white/60">{lead.motif_ecarte}</p>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {canResend && (
                        <button
                          onClick={() => syncLead(lead.id)}
                          disabled={busy}
                          className="inline-flex items-center gap-2 rounded-sm border border-accent/40 px-4 py-2 font-body text-xs text-accent transition hover:bg-accent/10 disabled:opacity-50"
                        >
                          {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <RotateCw className="h-3.5 w-3.5" />}
                          Renvoyer
                        </button>
                      )}
                      {ecartId !== lead.id && (
                        <button
                          onClick={() => { setEcartId(lead.id); setMotif(""); }}
                          disabled={busy}
                          className="inline-flex items-center gap-2 rounded-sm border border-white/10 px-4 py-2 font-body text-xs text-white/60 transition hover:border-white/30 hover:text-white disabled:opacity-50"
                        >
                          <XCircle className="h-3.5 w-3.5" />
                          Écarter
                        </button>
                      )}
                    </div>

                    {ecartId === lead.id && (
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <input
                          value={motif}
                          onChange={(e) => setMotif(e.target.value)}
                          placeholder="Motif (obligatoire)"
                          maxLength={1000}
                          autoFocus
                          className="flex-1 rounded-sm border border-white/10 bg-white/10 px-3 py-2 font-body text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => syncLead(lead.id, motif.trim())}
                            disabled={!motif.trim() || busy}
                            className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2 font-body text-xs text-accent-foreground transition hover:opacity-90 disabled:opacity-40"
                          >
                            {busy && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                            Confirmer
                          </button>
                          <button
                            onClick={() => { setEcartId(null); setMotif(""); }}
                            className="rounded-sm border border-white/10 px-4 py-2 font-body text-xs text-white/60 hover:text-white"
                          >
                            Annuler
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              );
            })}
          </div>
        )}

        {/* Footer */}
        {!errorMsg && (
          <p className="mt-8 border-t border-white/10 pt-4 text-center font-body text-xs text-white/40">
            {filtered.length} demandes affichées · transmission automatique vers le Workspace à chaque soumission
          </p>
        )}
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;
