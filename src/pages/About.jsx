
import { cooperative } from "../data/config";

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">NOTRE COOPÉRATIVE</span>
          <h1>À propos de la CPMG</h1>
          <p>
            Découvrez notre identité, notre mission
            et notre engagement pour l'élevage.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <h2>Qui sommes-nous ?</h2>
          </div>
          <div>
            <p>
              La Coopérative Porcine Moderne de Ganvié 1
              (CPMG) est une organisation basée à
              Ganvié 1, au Bénin.
            </p>
            <p>
              Elle intervient dans l'élevage porcin
              et la diversification des activités
              d'élevage, notamment les volailles,
              les lapins et les poissons.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <h2>Notre vision et notre mission</h2>

          <div className="two-columns">
            <article className="info-card">
              <h3>Notre vision</h3>
              <p>
                Contribuer au développement d'un
                élevage moderne, responsable et
                durable dans notre communauté.
              </p>
            </article>

            <article className="info-card">
              <h3>Notre mission</h3>
              <p>
                Favoriser la coopération entre les
                acteurs de l'élevage, encourager
                le partage des connaissances et
                promouvoir les productions animales.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Informations officielles</h2>

          <div className="legal-details">
            <p><strong>Dénomination :</strong> {cooperative.name}</p>
            <p><strong>Numéro d'enregistrement :</strong> {cooperative.registration}</p>
            <p><strong>Juridiction :</strong> {cooperative.tribunal}</p>
            <p><strong>Publication :</strong> {cooperative.journal}</p>
            <p><strong>Page :</strong> {cooperative.journalPage}</p>
            <p><strong>Siège social :</strong> {cooperative.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
