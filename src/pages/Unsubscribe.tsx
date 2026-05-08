import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Loader2, Check, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State =
  | { status: "validating" }
  | { status: "ready" }
  | { status: "already" }
  | { status: "invalid" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>({ status: "validating" });

  useEffect(() => {
    if (!token) {
      setState({ status: "invalid" });
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        const data = await res.json();
        if (data.valid) setState({ status: "ready" });
        else if (data.reason === "already_unsubscribed") setState({ status: "already" });
        else setState({ status: "invalid" });
      } catch {
        setState({ status: "invalid" });
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState({ status: "submitting" });
    try {
      const res = await fetch(
        `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", apikey: SUPABASE_ANON_KEY },
          body: JSON.stringify({ token }),
        }
      );
      const data = await res.json();
      if (data.success || data.reason === "already_unsubscribed") {
        setState({ status: "success" });
      } else {
        setState({ status: "error", message: "Une erreur est survenue." });
      }
    } catch {
      setState({ status: "error", message: "Une erreur est survenue." });
    }
  };

  return (
    <Layout>
      <section className="bg-primary py-32 min-h-[70vh]">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-xl rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-10 text-center">
            <p className="section-tag mb-4">Désabonnement</p>
            <h1 className="font-display text-4xl font-light text-white mb-6">
              Gestion de vos <em className="italic text-accent">communications</em>
            </h1>

            {state.status === "validating" && (
              <div className="flex flex-col items-center gap-3 py-6">
                <Loader2 className="h-6 w-6 animate-spin text-accent" />
                <p className="font-body text-sm text-white/75">Vérification du lien…</p>
              </div>
            )}

            {state.status === "ready" && (
              <>
                <p className="font-body text-sm text-white/85 mb-8">
                  Confirmez ci-dessous pour ne plus recevoir d'emails de la part de Hunters Immobilier.
                </p>
                <button
                  onClick={confirm}
                  className="rounded-sm bg-accent px-8 py-4 font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90"
                >
                  Confirmer le désabonnement
                </button>
              </>
            )}

            {state.status === "submitting" && (
              <div className="flex flex-col items-center gap-3 py-6">
                <Loader2 className="h-6 w-6 animate-spin text-accent" />
                <p className="font-body text-sm text-white/75">Traitement…</p>
              </div>
            )}

            {(state.status === "success" || state.status === "already") && (
              <div className="flex flex-col items-center py-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-7 w-7 text-white" />
                </div>
                <p className="font-body text-sm text-white/90">
                  {state.status === "success"
                    ? "Vous avez été désabonné avec succès."
                    : "Cette adresse est déjà désabonnée."}
                </p>
              </div>
            )}

            {state.status === "invalid" && (
              <div className="flex flex-col items-center py-6">
                <AlertCircle className="h-10 w-10 text-accent mb-3" />
                <p className="font-body text-sm text-white/85">
                  Ce lien de désabonnement est invalide ou a expiré.
                </p>
              </div>
            )}

            {state.status === "error" && (
              <p className="font-body text-sm text-white/85">{state.message}</p>
            )}

            <div className="mt-10">
              <Link
                to="/"
                className="font-body text-xs uppercase tracking-[2px] text-accent hover:underline"
              >
                ← Retour au site
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Unsubscribe;
