
import { activities } from "../data/activities";
import { getWhatsAppLink } from "../data/config";

export default function Activities() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">NOS PRODUCTIONS</span>
          <h1>Nos activités</h1>
          <p>
            De la porciculture à la pisciculture,
            découvrez nos domaines d'élevage.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {activities.map(activity => (
              <article className="activity-card" key={activity.id}>
                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                />
                <div className="card-body">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>

                  <a
                    className="text-link"
                    href={getWhatsAppLink(
                      `Bonjour, je souhaite avoir des informations sur : ${activity.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Se renseigner →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
