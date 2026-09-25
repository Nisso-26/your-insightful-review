import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-webhook-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const admin = createClient(supabaseUrl, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  // --- Auth: webhook secret (DB trigger) OR authenticated user (admin dashboard)
  let authorized = false;
  const hookSecret = req.headers.get("x-webhook-secret");
  if (hookSecret) {
    const { data } = await admin
      .from("webhook_config")
      .select("secret")
      .eq("name", "contact_lead")
      .maybeSingle();
    if (data?.secret && data.secret === hookSecret) authorized = true;
  }
  if (!authorized) {
    const auth = req.headers.get("authorization") ?? "";
    const token = auth.replace(/^Bearer\s+/i, "");
    if (token) {
      const { data, error } = await admin.auth.getUser(token);
      if (!error && data?.user) authorized = true;
    }
  }
  if (!authorized) return json({ error: "Unauthorized" }, 401);

  // --- Body
  let body: { lead_id?: unknown; motif_ecarte?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    return json({ transmis: false, erreur: "Corps de requête invalide" });
  }
  const leadId = typeof body.lead_id === "string" ? body.lead_id : "";
  if (!UUID_RE.test(leadId)) return json({ transmis: false, erreur: "lead_id invalide" });
  const motif =
    typeof body.motif_ecarte === "string" && body.motif_ecarte.trim()
      ? body.motif_ecarte.trim().slice(0, 1000)
      : null;

  const { data: lead, error: leadErr } = await admin
    .from("contact_leads")
    .select("id, first_name, last_name, email, phone, project_type, budget, message, city")
    .eq("id", leadId)
    .maybeSingle();
  if (leadErr || !lead) return json({ transmis: false, erreur: "Demande introuvable" });

  const payload = {
    site_lead_id: lead.id,
    first_name: lead.first_name,
    last_name: lead.last_name,
    email: lead.email,
    phone: lead.phone,
    project_type: lead.project_type,
    budget: lead.budget,
    message: lead.message,
    city: lead.city,
    motif_ecarte: motif,
  };

  const markFail = async (msg: string) => {
    await admin
      .from("contact_leads")
      .update({ statut_transmission: "echec", erreur_transmission: msg })
      .eq("id", leadId);
    return json({ transmis: false, erreur: msg });
  };

  const url = Deno.env.get("WORKSPACE_SYNC_URL");
  const secret = Deno.env.get("SITE_SYNC_SECRET");
  if (!url || !secret) return markFail("Configuration Workspace manquante");

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-sync-secret": secret },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    });
  } catch (e) {
    clearTimeout(timer);
    return markFail(
      (e as Error)?.name === "AbortError"
        ? "Délai dépassé — Workspace injoignable"
        : "Erreur réseau — Workspace injoignable",
    );
  }
  clearTimeout(timer);

  let data: any = null;
  try {
    data = await res.json();
  } catch { /* ignore */ }

  if (!res.ok) return markFail(`Erreur ${res.status} — Workspace injoignable`);
  if (!data?.success || !data?.prospect_id) {
    return markFail("Réponse inattendue du Workspace");
  }

  await admin
    .from("contact_leads")
    .update({
      statut_transmission: "transmis",
      reference: String(data.prospect_id),
      erreur_transmission: null,
    })
    .eq("id", leadId);

  return json({ transmis: true, prospect_id: data.prospect_id, ecarte: !!motif });
});
