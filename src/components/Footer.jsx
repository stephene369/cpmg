
import { Link } from "react-router";
import { cooperative } from "../data/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>CPMG</h3>
          <p>{cooperative.name}</p>
          <p>
            Une coopérative engagée dans le développement
            de l'élevage et des activités agricoles.
          </p>
        </div>

        <div>
          <h4>Navigation</h4>
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">À propos</Link>
          <Link to="/activites">Nos activités</Link>
          <Link to="/galerie">Galerie</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Informations légales</h4>
          <p>Enregistrement : {cooperative.registration}</p>
          <p>{cooperative.tribunal}</p>
          <p>{cooperative.journal}, p. {cooperative.journalPage}</p>
          <p>Siège : {cooperative.address}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} CPMG.
        Tous droits réservés.
      </div>
    </footer>
  );
}
