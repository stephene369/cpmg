
import { Link } from "react-router";
import { activities } from "../data/activities";
import { getWhatsAppLink } from "../data/config";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">
              COOPÉRATIVE AGRICOLE · GANVIÉ 1
            </span>

            <h1>
              Ensemble pour un élevage
              moderne et durable.
            </h1>

            <p>
              La Coopérative Porcine Moderne de Ganvié 1
              (CPMG) œuvre pour le développement de
              l'élevage porcin, de l'aviculture,
              de la cuniculture et de la pisciculture.
            </p>

            <div className="hero-actions">
              <Link to="/activites" className="btn btn-primary">
                Découvrir nos activités
              </Link>

              <a
                href={getWhatsAppLink(
                  "Bonjour, je souhaite en savoir plus sur la CPMG."
                )}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nous contacter
              </a>
            </div>
          </div>

          <img
            className="hero-image"
            src="/images/porcs.jpg"
            alt="Élevage porcin"
          />
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">QUI SOMMES-NOUS ?</span>
            <h2>Une coopérative ancrée à Ganvié 1</h2>
          </div>
          <div>
            <p>
              La CPMG rassemble des initiatives autour
              de l'élevage et du développement des
              activités agricoles.
            </p>
            <p>
              Notre ambition est de promouvoir des
              pratiques d'élevage organisées et
              adaptées aux réalités locales.
            </p>
            <Link to="/a-propos" className="text-link">
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <span className="eyebrow">NOS DOMAINES</span>
          <h2>Nos activités d'élevage</h2>
          <p className="section-description">
            Découvrez les différentes activités
            développées par notre coopérative.
          </p>

          <div className="cards-grid">
            {activities.slice(0, 3).map(activity => (
              <article className="activity-card" key={activity.id}>
                <img src={activity.image} alt={activity.title} />
                <div className="card-body">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="section-action">
            <Link to="/activites" className="btn btn-primary">
              Toutes nos activités
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <div>
            <h2>Vous souhaitez échanger avec nous ?</h2>
            <p>
              Pour toute demande d'information ou de
              collaboration, contactez notre coopérative.
            </p>
          </div>
          <a
            className="btn btn-light"
            href={getWhatsAppLink(
              "Bonjour, je souhaite échanger avec votre coopérative."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Écrivez-nous sur WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
