DROP POLICY IF EXISTS "Allow authenticated reads" ON public.contact_leads;

CREATE POLICY "Admins can view all leads"
ON public.contact_leads
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));