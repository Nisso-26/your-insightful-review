import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-2xl font-medium tracking-[6px] text-white">HUNTERS</Link>
          <p className="mt-4 font-body text-sm leading-relaxed text-white/40">
            Votre partenaire en investissement immobilier locatif. Basé à Tours, actif sur plusieurs régions de France.
          </p>
        </div>

        <div>
          <h4 className="font-body text-[10px] font-bold uppercase tracking-[3px] text-accent mb-4">Nos offres</h4>
          <div className="space-y-2">
            <Link to="/expertise" className="block font-body text-sm text-white/50 hover:text-accent transition-colors">Conseil en investissement</Link>
            <Link to="/expertise" className="block font-body text-sm text-white/50 hover:text-accent transition-colors">Chasse immobilière</Link>
            <Link to="/expertise" className="block font-body text-sm text-white/50 hover:text-accent transition-colors">Clé en main</Link>
            <Link to="/expertise" className="block font-body text-sm text-white/50 hover:text-accent transition-colors">Décoration & ameublement</Link>
          </div>
        </div>

        <div>
          <h4 className="font-body text-[10px] font-bold uppercase tracking-[3px] text-accent mb-4">L'agence</h4>
          <div className="space-y-2">
            <Link to="/equipe" className="block font-body text-sm text-white/50 hover:text-accent transition-colors">L'équipe</Link>
            <Link to="/methode" className="block font-body text-sm text-white/50 hover:text-accent transition-colors">Notre méthode</Link>
            <Link to="/realisations" className="block font-body text-sm text-white/50 hover:text-accent transition-colors">Réalisations</Link>
            <Link to="/temoignages" className="block font-body text-sm text-white/50 hover:text-accent transition-colors">Témoignages</Link>
            <Link to="/contact" className="block font-body text-sm text-white/50 hover:text-accent transition-colors">Réserver un audit</Link>
          </div>
        </div>

        <div>
          <h4 className="font-body text-[10px] font-bold uppercase tracking-[3px] text-accent mb-4">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white/50 font-body text-sm">
              <MapPin className="h-4 w-4 shrink-0" /> 45 rue Michel Colombe, 37000 Tours
            </div>
            <a href="tel:0259160337" className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors font-body text-sm">
              <Phone className="h-4 w-4 shrink-0" /> 02 59 16 03 37
            </a>
            <a href="mailto:hunters@huntersimmobilier.fr" className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors font-body text-sm">
              <Mail className="h-4 w-4 shrink-0" /> hunters@huntersimmobilier.fr
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-white/30">
          © {new Date().getFullYear()} Hunters Immobilier — Tous droits réservés
        </p>
        <div className="flex gap-4">
          <Link to="/mentions-legales" className="font-body text-xs text-white/30 hover:text-accent transition-colors">Mentions légales</Link>
          <Link to="/confidentialite" className="font-body text-xs text-white/30 hover:text-accent transition-colors">Politique de confidentialité</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
