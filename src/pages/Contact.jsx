
import { cooperative, getWhatsAppLink } from "../data/config";

export default function Contact() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">RESTONS EN CONTACT</span>
          <h1>Contactez-nous</h1>
          <p>
            Une question sur nos activités ?
            Notre coopérative est à votre écoute.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2>Parlons de votre demande</h2>
            <p>
              Pour obtenir des informations sur nos
              élevages, nos activités ou une éventuelle
              collaboration, contactez-nous sur WhatsApp.
            </p>

            <a
              className="btn btn-primary"
              href={getWhatsAppLink(
                "Bonjour CPMG, je voudrais avoir plus d'informations."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacter sur WhatsApp
            </a>
          </div>

          <div className="contact-card">
            <h3>Nos coordonnées</h3>

            <div className="contact-detail">
              <strong>Siège social</strong>
              <p>{cooperative.address}</p>
              <p>{cooperative.country}</p>
            </div>

            <div className="contact-detail">
              <strong>Organisation</strong>
              <p>{cooperative.name}</p>
            </div>

            <div className="contact-detail">
              <strong>Enregistrement</strong>
              <p>{cooperative.registration}</p>
            </div>

            <div className="contact-detail">
              <strong>WhatsApp</strong>
              <p>Contact direct avec la coopérative</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
