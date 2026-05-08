// Forwards new contact_leads rows to an external webhook URL.
// Called by a Postgres trigger via pg_net with a shared bearer token.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const internalToken = Deno.env.get("CONTACT_LEAD_WEBHOOK_INTERNAL_TOKEN");
    const externalUrl = Deno.env.get("CONTACT_LEAD_WEBHOOK_URL");
    const externalSecret = Deno.env.get("CONTACT_LEAD_WEBHOOK_SECRET");

    if (!internalToken || !externalUrl || !externalSecret) {
      console.error("Missing env config");
      return new Response(JSON.stringify({ error: "Server misconfigured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Authenticate the call from the DB trigger
    const auth = req.headers.get("Authorization") ?? "";
    if (auth !== `Bearer ${internalToken}`) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const row = body?.record ?? body;

    const payload = {
      id: row.id,
      first_name: row.first_name,
      last_name: row.last_name,
      email: row.email,
      phone: row.phone,
      project_type: row.project_type,
      budget: row.budget,
      message: row.message,
      created_at: row.created_at,
    };

    const res = await fetch(externalUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Secret": externalSecret,
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    console.log("Forwarded webhook", res.status, text.slice(0, 200));

    return new Response(JSON.stringify({ ok: res.ok, status: res.status }), {
      status: res.ok ? 200 : 502,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Webhook error", e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
