
import { activities } from "../data/activities";

export default function Gallery() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">EN IMAGES</span>
          <h1>Notre galerie</h1>
          <p>
            Un aperçu de nos domaines d'élevage
            et de nos activités.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {activities.map(activity => (
              <figure className="gallery-item" key={activity.id}>
                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                />
                <figcaption>{activity.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
