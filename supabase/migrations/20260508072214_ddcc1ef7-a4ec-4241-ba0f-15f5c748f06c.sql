CREATE TABLE public.candidatures_reseau (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  experience TEXT NOT NULL,
  message TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.candidatures_reseau ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
ON public.candidatures_reseau
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view all candidatures"
ON public.candidatures_reseau
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));