import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Expertise", href: "/expertise" },
  { label: "Méthode", href: "/methode" },
  { label: "Équipe", href: "/equipe" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "L'agence", href: "/agence" },
  { label: "Honoraires", href: "/honoraires" },
  { label: "Contact", href: "/contact" },
];

const Monogram = ({ className = "h-9 w-auto" }: { className?: string }) => (
  <svg viewBox="0 0 120 132" className={className} aria-hidden="true" focusable="false">
    <g fill="#004621">
      <rect x="24" y="4" width="17" height="22" rx="5" />
      <rect x="24" y="37" width="17" height="22" rx="5" />
      <rect x="24" y="70" width="17" height="22" rx="5" />
      <rect x="24" y="103" width="17" height="22" rx="5" />
      <rect x="79" y="4" width="17" height="22" rx="5" />
      <rect x="79" y="37" width="17" height="22" rx="5" />
      <rect x="79" y="70" width="17" height="22" rx="5" />
      <rect x="79" y="103" width="17" height="22" rx="5" />
    </g>
    <path d="M24 68 L60 52 L96 68" fill="none" stroke="#C8962F" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-primary/[0.16] bg-[hsl(var(--hunters-cream))] transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="container mx-auto flex h-[92px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="HUNTERS — Accueil">
          <Monogram className="h-9 w-auto" />
          <span className="font-display text-xl tracking-[6px] text-primary">HUNTERS</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-body text-[11px] font-medium uppercase tracking-[1.5px] transition-colors ${
                location.pathname === link.href ? "text-accent" : "text-primary hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-sm bg-primary px-6 py-3 font-body text-[10px] font-bold uppercase tracking-[1.5px] text-primary-foreground transition-opacity hover:opacity-90 lg:inline-block"
        >
          Demander une étude
        </Link>

        <button
          className="text-primary lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-primary/10 bg-[hsl(var(--hunters-cream))] px-6 pb-6 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block w-full border-b border-primary/10 py-4 text-left font-body text-sm font-medium uppercase tracking-[2px] transition-colors ${
                location.pathname === link.href ? "text-accent" : "text-primary hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 block w-full rounded-sm bg-primary py-4 text-center font-body text-[10px] font-bold uppercase tracking-[2px] text-primary-foreground"
          >
            Demander une étude
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
