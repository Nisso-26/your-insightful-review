import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="font-display text-2xl font-medium tracking-[6px] text-white">HUNTERS</Link>
          <p className="mt-4 font-body text-sm leading-relaxed text-white/40">
            Réseau de mandataires spécialisés dans le conseil en investissement immobilier.
            Chasseur immobilier à Tours, Indre-et-Loire et France entière.
          </p>
        </div>

        <div>
          <h4 className="font-body text-[10px] font-bold uppercase tracking-[3px] text-accent mb-4">Contact</h4>
          <div className="space-y-3">
            <a href="tel:0650152287" className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors font-body text-sm">
              <Phone className="h-4 w-4" /> 06 50 15 22 87
            </a>
            <a href="mailto:contact@huntersimmobilier.fr" className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors font-body text-sm">
              <Mail className="h-4 w-4" /> contact@huntersimmobilier.fr
            </a>
            <div className="flex items-center gap-3 text-white/50 font-body text-sm">
              <MapPin className="h-4 w-4" /> 45 rue Michel Colombe, 37000 Tours
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-body text-[10px] font-bold uppercase tracking-[3px] text-accent mb-4">Informations légales</h4>
          <div className="space-y-2">
            <Link to="/mentions-legales" className="block font-body text-sm text-white/50 hover:text-accent transition-colors">Mentions légales</Link>
            <Link to="/confidentialite" className="block font-body text-sm text-white/50 hover:text-accent transition-colors">Politique de confidentialité</Link>
          </div>
          <div className="mt-4 space-y-1 font-body text-[10px] text-white/25">
            <p>HUNTERS SAS — SIRET 879 176 949 00029</p>
            <p>Loi Hoguet n°70-9 du 2 janvier 1970</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8 text-center">
        <p className="font-body text-xs text-white/30">
          © {new Date().getFullYear()} HUNTERS SAS. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
