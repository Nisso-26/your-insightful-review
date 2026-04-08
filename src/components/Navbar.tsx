import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Expertise", href: "#expertise" },
  { label: "Méthode", href: "#processus" },
  { label: "Équipe", href: "#equipe" },
  { label: "Témoignages", href: "#temoignages" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "expertise", "processus", "equipe", "chiffres", "temoignages", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => handleClick("#hero")} className="flex items-center gap-2">
          <span className="font-display text-2xl font-medium tracking-[6px] text-white">
            HUNTERS
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`font-body text-[11px] font-bold uppercase tracking-[2px] transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-accent"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:0650152287" className="text-white/80 hover:text-white transition-colors">
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => handleClick("#contact")}
            className="rounded-sm bg-accent px-6 py-2.5 font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            Démarrer mon projet
          </button>
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
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full py-3 text-left font-body text-sm font-semibold uppercase tracking-[2px] text-white/80 hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:0650152287"
            className="mt-2 flex items-center gap-2 py-3 font-body text-sm text-accent"
          >
            <Phone className="h-4 w-4" /> 06 50 15 22 87
          </a>
          <button
            onClick={() => handleClick("#contact")}
            className="mt-2 w-full rounded-sm bg-accent py-3 font-body text-[10px] font-extrabold uppercase tracking-[2px] text-primary"
          >
            Démarrer mon projet
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
