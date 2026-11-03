import { useState } from "react";
import { getWhatsAppLink } from "../data/config";

const links = [
  { path: "/", label: "Accueil" },
  { path: "/a-propos/", label: "À propos" },
  { path: "/activites/", label: "Nos activités" },
  { path: "/galerie/", label: "Galerie" },
  { path: "/contact/", label: "Contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isActive = path => currentPath === (path.replace(/\/+$/, "") || "/");

  return (
    <header className="site-header">
      <div className="container navbar">
        <a href="/" className="brand">
          <span className="brand-mark">CPMG</span>
          <span className="brand-name">Coopérative Porcine Moderne<small>Ganvié 1 · Bénin</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-controls="main-navigation" aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Fermer" : "Menu"}
        </button>
        <nav id="main-navigation" className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navigation principale">
          {links.map(link => (
            <a key={link.path} href={link.path} className={isActive(link.path) ? "active" : ""}
              aria-current={isActive(link.path) ? "page" : undefined}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary nav-whatsapp" href={getWhatsAppLink("Bonjour, je souhaite contacter la CPMG.")}
            target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
