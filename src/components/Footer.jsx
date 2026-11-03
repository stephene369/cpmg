import { cooperative } from "../data/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>CPMG</h3>
          <p>{cooperative.name}</p>
          <p>Une coopérative engagée dans le développement de l'élevage et des activités agricoles.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <a href="/">Accueil</a>
          <a href="/a-propos/">À propos</a>
          <a href="/activites/">Nos activités</a>
          <a href="/galerie/">Galerie</a>
          <a href="/contact/">Contact</a>
        </div>
        <div>
          <h4>Informations légales</h4>
          <p>Enregistrement : {cooperative.registration}</p>
          <p>{cooperative.tribunal}</p>
          <p>{cooperative.journal}, p. {cooperative.journalPage}</p>
          <p>Siège : {cooperative.address}</p>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} CPMG. Tous droits réservés.</div>
    </footer>
  );
}
