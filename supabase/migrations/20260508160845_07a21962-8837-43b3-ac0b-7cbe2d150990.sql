CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Private config table holding webhook target + secret (locked down by RLS)
CREATE TABLE IF NOT EXISTS public.webhook_config (
  name text PRIMARY KEY,
  url text NOT NULL,
  secret text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.webhook_config ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role manages webhook_config" ON public.webhook_config;
CREATE POLICY "Service role manages webhook_config"
  ON public.webhook_config
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Seed row (empty values; will be filled via insert tool)
INSERT INTO public.webhook_config (name, url, secret)
VALUES ('contact_lead', '', '')
ON CONFLICT (name) DO NOTHING;

-- Trigger function: POST new contact_leads row to external webhook
CREATE OR REPLACE FUNCTION public.notify_contact_lead_webhook()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  v_url text;
  v_secret text;
BEGIN
  SELECT url, secret INTO v_url, v_secret
  FROM public.webhook_config
  WHERE name = 'contact_lead'
  LIMIT 1;

  IF v_url IS NULL OR v_url = '' THEN
    RETURN NEW;
  END IF;

  PERFORM net.http_post(
    url := v_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'X-Webhook-Secret', COALESCE(v_secret, '')
    ),
    body := jsonb_build_object(
      'id', NEW.id,
      'first_name', NEW.first_name,
      'last_name', NEW.last_name,
      'email', NEW.email,
      'phone', NEW.phone,
      'project_type', NEW.project_type,
      'budget', NEW.budget,
      'message', NEW.message,
      'created_at', NEW.created_at
    )
  );

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'contact_lead_webhook failed: %', SQLERRM;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS contact_leads_webhook_trigger ON public.contact_leads;
CREATE TRIGGER contact_leads_webhook_trigger
AFTER INSERT ON public.contact_leads
FOR EACH ROW
EXECUTE FUNCTION public.notify_contact_lead_webhook();