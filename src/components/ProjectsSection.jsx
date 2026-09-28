import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const renderProjectImage = (project, compact = false) => {
  return (
    <div className="relative h-full min-h-40 overflow-hidden bg-gradient-to-br from-primary/30 via-secondary to-primary/10">
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <span className="text-xl font-semibold text-foreground/80">{project.title}</span>
      </div>
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className={`relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${compact ? "aspect-video" : ""}`}
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
      )}
    </div>
  );
};

const renderProjectLinks = (project) => (
  <div className="flex flex-wrap gap-3">
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="cosmic-button inline-flex items-center gap-2"
    >
      Live Demo <ExternalLink size={16} />
    </a>
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 font-medium transition-colors hover:border-primary hover:text-primary"
    >
      GitHub <Github size={16} />
    </a>
  </div>
);

export const ProjectsSection = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of AI products and backend systems built around useful,
          real-world workflows.
        </p>

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <article key={project.title} className="group grid overflow-hidden rounded-lg bg-card shadow-xs card-hover md:grid-cols-5">
              <div className="min-h-56 overflow-hidden md:col-span-2">
                {renderProjectImage(project)}
              </div>
              <div className="space-y-5 p-6 md:col-span-3 md:p-8">
                <div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-1 text-primary">{project.tagline}</p>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span key={technology} className="rounded-full border bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                      {technology}
                    </span>
                  ))}
                </div>
                {renderProjectLinks(project)}
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-16 mb-6 text-2xl font-semibold">More Projects</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {moreProjects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-lg bg-card shadow-xs card-hover">
              <div className="h-44 overflow-hidden">
                {renderProjectImage(project, true)}
              </div>
              <div className="space-y-4 p-5">
                <div>
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-sm text-primary">{project.tagline}</p>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span key={technology} className="rounded-full border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                      {technology}
                    </span>
                  ))}
                </div>
                {renderProjectLinks(project)}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nitesh45176"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
