const responsibilities = [
  "Designed and documented a microservices architecture for an AI-powered circuit diagram analysis platform.",
  "Performed manual annotation of P&ID datasets for YOLO-based symbol detection and model training.",
  "Developed and integrated FastAPI REST APIs for diagram upload, processing, authentication, and validation.",
  "Designed PostgreSQL/SQLAlchemy database models and Alembic migrations for companies, users, roles, departments, and diagrams.",
];

const technologies = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Alembic",
  "AI / Computer Vision",
];

export const ExperienceSection = () => (
  <section id="experience" className="section experience-section">
    <div className="page-width">
      <div className="section-heading" data-reveal>
        <p className="eyebrow section-kicker"><span>02</span> / IN PRACTICE</p>
        <h2>
          Engineering with
          <br />
          <span className="text-muted">intent.</span>
        </h2>
      </div>

      <article className="experience-entry" data-reveal>
        <div className="experience-meta">
          <span className="eyebrow">PROFESSIONAL EXPERIENCE</span>
          <span className="experience-marker" aria-hidden="true" />
        </div>
        <div className="experience-content">
          <p className="eyebrow experience-company">TECHVRUK</p>
          <h3>AI / Backend Engineering Intern</h3>
          <p className="experience-summary">
            Building the connective tissue between computer vision, APIs, and
            dependable data workflows.
          </p>
          <ul className="experience-list">
            {responsibilities.map((responsibility, index) => (
              <li key={responsibility}>
                <span className="eyebrow">0{index + 1}</span>
                <p>{responsibility}</p>
              </li>
            ))}
          </ul>
          <div className="tag-list">
            {technologies.map((technology) => (
              <span className="tech-tag" key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </article>
    </div>
  </section>
);
