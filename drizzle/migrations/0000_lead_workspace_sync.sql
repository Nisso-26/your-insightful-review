ALTER TABLE public.contact_leads
  ADD COLUMN IF NOT EXISTS reference text,
  ADD COLUMN IF NOT EXISTS statut_transmission text NOT NULL DEFAULT 'en_attente',
  ADD COLUMN IF NOT EXISTS erreur_transmission text;
ALTER TABLE public.contact_leads
  ADD CONSTRAINT contact_leads_statut_transmission_check
  CHECK (statut_transmission IN ('en_attente','transmis','echec'));

CREATE OR REPLACE FUNCTION public.notify_contact_lead_webhook()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'extensions'
AS $function$
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
    body := jsonb_build_object('lead_id', NEW.id)
  );

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'contact_lead_webhook failed: %', SQLERRM;
  RETURN NEW;
END;
$function$;