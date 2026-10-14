
import { useState } from "react";
import { NavLink } from "react-router";
import { cooperative, getWhatsAppLink } from "../data/config";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Accueil" },
    { path: "/a-propos", label: "À propos" },
    { path: "/activites", label: "Nos activités" },
    { path: "/galerie", label: "Galerie" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <header className="site-header">
      <div className="container navbar">
        <NavLink to="/" className="brand">
          <span className="brand-mark">CPMG</span>
          <span className="brand-name">
            Coopérative Porcine Moderne
            <small>Ganvié 1 · Bénin</small>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Fermer" : "Menu"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="btn btn-primary nav-whatsapp"
            href={getWhatsAppLink("Bonjour, je souhaite contacter la CPMG.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
