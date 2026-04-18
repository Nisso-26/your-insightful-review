import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Lock, ArrowRight, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [success, setSuccess] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({ email, password });
      setLoading(false);
      if (error) {
        setError(error.message);
        return;
      }
      setSuccess("Compte créé ! Connectez-vous maintenant.");
      setMode("login");
      return;
    }

    const { error } = await signIn(email, password);
    setLoading(false);

    if (error) {
      setError("Identifiants incorrects");
      return;
    }

    navigate("/admin");
  };

  return (
    <>
      <Helmet>
        <title>Connexion Admin | HUNTERS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    <div className="flex min-h-screen items-center justify-center bg-primary px-4">
      <div className="w-full max-w-md rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
            <Lock className="h-6 w-6 text-accent" />
          </div>
          <h1 className="font-display text-2xl font-bold text-white">Espace Admin</h1>
          <p className="mt-2 font-body text-sm text-white/50">
            {mode === "login" ? "Connectez-vous pour accéder au tableau de bord" : "Créer un compte administrateur"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full rounded-sm border border-white/10 bg-white/10 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe (min. 6 caractères)"
            required
            minLength={6}
            className="w-full rounded-sm border border-white/10 bg-white/10 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
          />

          {error && <p className="font-body text-sm text-red-400">{error}</p>}
          {success && <p className="font-body text-sm text-green-400">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="group flex w-full items-center justify-center gap-2 rounded-sm bg-accent py-4 font-body text-[11px] font-bold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                {mode === "login" ? "Se connecter" : "Créer le compte"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center font-body text-xs text-white/30">
          {mode === "login" ? (
            <>
              Pas encore de compte ?{" "}
              <button onClick={() => { setMode("signup"); setError(""); setSuccess(""); }} className="text-accent hover:underline">
                Créer un compte
              </button>
            </>
          ) : (
            <>
              Déjà un compte ?{" "}
              <button onClick={() => { setMode("login"); setError(""); setSuccess(""); }} className="text-accent hover:underline">
                Se connecter
              </button>
            </>
          )}
        </p>
      </div>
    </div>
    </>
  );
};

export default AdminLogin;
