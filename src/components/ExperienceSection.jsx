import { Briefcase } from "lucide-react";

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
  "AI/Computer Vision",
];

export const ExperienceSection = () => (
  <section id="experience" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Experience
      </h2>

      <article className="gradient-border bg-card p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-semibold">
              AI/Backend Engineering Intern
            </h3>
            <p className="mt-1 text-primary">Techvruk</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-muted-foreground">
              {responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
);