import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  // Require service-role key in the Authorization header to run
  const auth = req.headers.get("Authorization") ?? "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  if (auth !== `Bearer ${serviceKey}`) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const url = Deno.env.get("CONTACT_LEAD_WEBHOOK_URL") ?? "";
  const secret = Deno.env.get("CONTACT_LEAD_WEBHOOK_SECRET") ?? "";

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, serviceKey);
  const { error } = await supabase
    .from("webhook_config")
    .upsert({ name: "contact_lead", url, secret, updated_at: new Date().toISOString() });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ ok: true, url_set: !!url, secret_set: !!secret }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
