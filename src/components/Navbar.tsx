import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Expertise", href: "/expertise" },
  { label: "Méthode", href: "/methode" },
  { label: "Équipe", href: "/equipe" },
  { label: "Témoignages", href: "/temoignages" },
];

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
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || location.pathname !== "/" ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-medium tracking-[6px] text-white">
            HUNTERS
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-body text-[11px] font-bold uppercase tracking-[2px] transition-colors ${
                location.pathname === link.href
                  ? "text-accent"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:0650152287" className="text-white/80 hover:text-white transition-colors">
            <Phone className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="rounded-sm bg-accent px-6 py-2.5 font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            Démarrer mon projet
          </Link>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="bg-primary px-6 pb-6 md:hidden animate-fade-up">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block w-full py-3 text-left font-body text-sm font-semibold uppercase tracking-[2px] text-white/80 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0650152287"
            className="mt-2 flex items-center gap-2 py-3 font-body text-sm text-accent"
          >
            <Phone className="h-4 w-4" /> 06 50 15 22 87
          </a>
          <Link
            to="/contact"
            className="mt-2 block w-full rounded-sm bg-accent py-3 text-center font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary"
          >
            Démarrer mon projet
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
