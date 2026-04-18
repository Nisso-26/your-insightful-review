import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Lock, ArrowRight, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

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
              <Lock className="h-6 w-6 text-accent" aria-hidden="true" />
            </div>
            <h1 className="font-display text-2xl font-bold text-white">Espace Admin</h1>
            <p className="mt-2 font-body text-sm text-white/70">
              Connectez-vous pour accéder au tableau de bord
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulaire de connexion">
            <div>
              <label htmlFor="admin-email" className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-white/90">Email</label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="huntersimmobilier@gmail.com"
                required
                autoComplete="email"
                className="w-full rounded-sm border border-white/20 bg-white/10 px-4 py-3 font-body text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-white/90">Mot de passe</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                autoComplete="current-password"
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
                  Se connecter
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center font-body text-xs text-white/50">
            Accès réservé aux administrateurs Hunters.
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
