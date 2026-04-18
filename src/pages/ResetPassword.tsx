import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Lock, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validSession, setValidSession] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Supabase met à jour automatiquement la session via le hash #access_token
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
        setValidSession(true);
      }
    });

    // Vérification immédiate au cas où la session est déjà active
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setValidSession(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setSuccess(true);
    setTimeout(() => navigate("/admin/login"), 2500);
  };

  return (
    <>
      <Helmet>
        <title>Réinitialiser le mot de passe | HUNTERS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-primary px-4">
        <div className="w-full max-w-md rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="mb-8 flex flex-col items-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <Lock className="h-6 w-6 text-accent" aria-hidden="true" />
            </div>
            <h1 className="font-display text-2xl font-bold text-white">Nouveau mot de passe</h1>
            <p className="mt-2 text-center font-body text-sm text-white/70">
              Choisissez un nouveau mot de passe sécurisé
            </p>
          </div>

          {success ? (
            <div className="flex flex-col items-center text-center" role="status">
              <CheckCircle2 className="mb-3 h-10 w-10 text-accent" aria-hidden="true" />
              <p className="font-body text-sm text-white">
                Mot de passe mis à jour ! Redirection vers la connexion…
              </p>
            </div>
          ) : !validSession ? (
            <p className="text-center font-body text-sm text-white/70">
              Lien invalide ou expiré. Veuillez relancer une demande depuis la page de connexion.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulaire nouveau mot de passe">
              <div>
                <label htmlFor="new-password" className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-white/90">Nouveau mot de passe</label>
                <input
                  id="new-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  className="w-full rounded-sm border border-white/20 bg-white/10 px-4 py-3 font-body text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-white/90">Confirmer le mot de passe</label>
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  className="w-full rounded-sm border border-white/20 bg-white/10 px-4 py-3 font-body text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>

              {error && <p className="font-body text-sm text-red-400" role="alert">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-sm bg-accent py-4 font-body text-[11px] font-bold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <>
                    Mettre à jour
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
