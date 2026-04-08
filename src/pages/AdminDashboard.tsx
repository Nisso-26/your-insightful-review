import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Mail, Phone, Calendar, Search, Loader2, ChevronDown, ChevronUp, Trash2 } from "lucide-react";

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  project_type: string | null;
  budget: string | null;
  message: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [sortDesc, setSortDesc] = useState(true);

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
    const { data } = await supabase
      .from("contact_leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLeads((data as Lead[]) || []);
    setLoading(false);
  };

  const filtered = leads
    .filter((l) => {
      const q = search.toLowerCase();
      return (
        l.first_name.toLowerCase().includes(q) ||
        l.last_name.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        (l.project_type || "").toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      const diff = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      return sortDesc ? -diff : diff;
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
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="font-display text-xl font-bold text-white">Dashboard Admin</h1>
            <p className="font-body text-xs text-white/40">HUNTERS — Gestion des leads</p>
          </div>
          <div className="flex items-center gap-4">
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
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-body text-sm text-white/40">Aucun lead trouvé</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((lead) => (
              <div
                key={lead.id}
                className="rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent">
                      {lead.first_name[0]}{lead.last_name[0]}
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-white">
                        {lead.first_name} {lead.last_name}
                      </p>
                      <p className="font-body text-xs text-white/40">{lead.project_type || "—"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden font-body text-xs text-white/30 sm:block">
                      {new Date(lead.created_at).toLocaleDateString("fr-FR", {
                        day: "numeric", month: "short", year: "numeric",
                      })}
                    </span>
                    {expandedId === lead.id ? (
                      <ChevronUp className="h-4 w-4 text-white/30" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-white/30" />
                    )}
                  </div>
                </button>

                {expandedId === lead.id && (
                  <div className="border-t border-white/5 px-6 py-4 space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-accent" />
                        <a href={`mailto:${lead.email}`} className="font-body text-sm text-white/70 hover:text-accent">
                          {lead.email}
                        </a>
                      </div>
                      {lead.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 text-accent" />
                          <a href={`tel:${lead.phone}`} className="font-body text-sm text-white/70 hover:text-accent">
                            {lead.phone}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-accent" />
                        <span className="font-body text-sm text-white/70">
                          {new Date(lead.created_at).toLocaleString("fr-FR")}
                        </span>
                      </div>
                      {lead.budget && (
                        <div>
                          <span className="font-body text-xs uppercase tracking-wider text-white/30">Budget</span>
                          <p className="font-body text-sm text-white/70">{lead.budget}</p>
                        </div>
                      )}
                    </div>
                    {lead.message && (
                      <div>
                        <span className="font-body text-xs uppercase tracking-wider text-white/30">Message</span>
                        <p className="mt-1 font-body text-sm leading-relaxed text-white/60">{lead.message}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
