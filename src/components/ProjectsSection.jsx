import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projectCategories, projects } from "@/data/projects";

const filters = ["All Projects", ...projectCategories];

const renderProjectLinks = (project) => (
  <div className="project-links">
    {project.liveUrl && (
      <a className="project-action project-action-live" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        Live Demo <ExternalLink size={15} aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )}
    {project.githubUrl && (
      <a className="project-action project-action-github" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        GitHub <Github size={15} aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )}
  </div>
);

const renderProjectCard = (project, index) => (
  <article
    key={project.id}
    className={`project-card${project.featured ? " project-card-featured" : ""}`}
    style={{ "--card-index": index }}
  >
    {project.image ? (
      <div className={`project-card-visual${project.imageFit === "contain" ? " project-card-visual-screenshot" : ""}`}>
        <picture>
          {project.imageWidths && (
            <source
              type="image/webp"
              srcSet={project.imageWidths
                .map((width) => `${project.image.replace(/\.png$/i, `-${width}.webp`)} ${width}w`)
                .join(", ")}
              sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 960px) 50vw, 33vw"
            />
          )}
          <img
            src={project.image}
            alt={`${project.name} interface screenshot`}
            loading="lazy"
            decoding="async"
            width={project.imageWidth || 1200}
            height={project.imageHeight || 600}
          />
        </picture>
        <span className="project-image-index eyebrow" aria-hidden="true">
          PROJECT / {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    ) : (
      <div className="project-card-visual project-card-visual-empty" aria-hidden="true">
        <span className="eyebrow">PROJECT / {String(index + 1).padStart(2, "0")}</span>
      </div>
    )}

    <div className="project-card-content">
      <div className="project-card-meta">
        <p className="eyebrow project-number">SELECTED WORK / {String(index + 1).padStart(2, "0")}</p>
        {project.featured && <span className="project-featured-label">Featured</span>}
      </div>
      <h3>{project.name}</h3>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-description">{project.description}</p>
      {project.bullets.length > 0 && (
        <ul className="project-bullets">
          {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      )}
      <div className="project-category-list" aria-label={`${project.name} categories`}>
        {project.categories.map((category) => (
          <span className="project-category-badge" key={category}>{category}</span>
        ))}
      </div>
      <div className="tag-list project-technology-list" aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => (
          <span className="tech-tag" key={technology}>{technology}</span>
        ))}
      </div>
      {renderProjectLinks(project)}
    </div>
  </article>
);

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const visibleProjects = projects
    .filter((project) => (
      activeCategory === "All Projects" || project.categories.includes(activeCategory)
    ))
    .sort((first, second) => Number(Boolean(second.featured)) - Number(Boolean(first.featured)));

  return (
    <section id="projects" className="section projects-section">
      <div className="page-width">
        <div className="projects-heading" data-reveal>
          <div className="section-heading">
            <p className="eyebrow section-kicker"><span>04</span> / SELECTED WORK</p>
            <h2>
              Ideas in
              <br />
              <span className="text-muted">the real world.</span>
            </h2>
          </div>
          <p>
            AI products, machine learning experiments, and full-stack systems
            shaped around useful, real-world workflows.
          </p>
        </div>

        <nav className="project-filters" aria-label="Filter projects by category">
          {filters.map((filter) => {
            const count = filter === "All Projects"
              ? projects.length
              : projects.filter((project) => project.categories.includes(filter)).length;

            return (
              <button
                className="project-filter"
                type="button"
                key={filter}
                aria-pressed={activeCategory === filter}
                aria-controls="project-grid"
                onClick={() => setActiveCategory(filter)}
              >
                {filter}
                <span className="project-filter-count" aria-hidden="true">{count}</span>
              </button>
            );
          })}
        </nav>

        <p className="project-results-count" aria-live="polite" aria-atomic="true">
          Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
          {activeCategory !== "All Projects" && ` in ${activeCategory}`}
        </p>

        {visibleProjects.length > 0 ? (
          <div className="project-grid" id="project-grid" key={activeCategory}>
            {visibleProjects.map(renderProjectCard)}
          </div>
        ) : (
          <p className="project-empty-state" role="status">
            No projects in this category yet. Check back soon.
          </p>
        )}

        <div className="projects-footer">
          <p className="eyebrow">MORE EXPERIMENTS &amp; BUILDS</p>
          <a
            className="text-link"
            href="https://github.com/nitesh45176"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse GitHub <ArrowRight size={15} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
