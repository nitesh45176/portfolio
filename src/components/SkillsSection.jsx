import {
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  PanelsTopLeft,
  Server,
} from "lucide-react";

const skillGroups = [
  {
    category: "AI & intelligent systems",
    index: "01",
    icon: BrainCircuit,
    skills: ["LLMs", "RAG", "LangChain", "LangGraph", "AI Agents", "MCP", "Vector Databases", "Computer Vision"],
  },
  {
    category: "Backend & APIs",
    index: "02",
    icon: Server,
    skills: ["Python", "FastAPI", "Node.js", "REST APIs", "SQLAlchemy", "Alembic", "Express"],
  },
  {
    category: "Frontend",
    index: "03",
    icon: PanelsTopLeft,
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Data",
    index: "04",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Infrastructure",
    index: "05",
    icon: CloudCog,
    skills: ["Docker", "AWS EC2", "Nginx", "GitHub Actions", "Linux", "Git"],
  },
  {
    category: "Languages",
    index: "06",
    icon: Code2,
    skills: ["Python", "C++", "JavaScript", "TypeScript"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <div className="page-width">
        <div className="skills-intro" data-reveal>
          <div className="section-heading">
            <p className="eyebrow section-kicker"><span>03</span> / THE TOOLKIT</p>
            <h2>
              Built from
              <br />
              <span className="text-muted">good tools.</span>
            </h2>
          </div>
          <p>
            A practical toolkit for moving from an idea to a reliable,
            production-minded application.
          </p>
        </div>

        <div className="skill-groups">
          {skillGroups.map(({ category, index, icon: Icon, skills }, cardIndex) => (
            <article
              className="skill-group"
              key={index}
              data-reveal
              data-cursor="STACK"
              style={{ "--skill-order": cardIndex }}
            >
              <div className="skill-group-heading">
                <span className="eyebrow">{index}</span>
                <span className="skill-icon" aria-hidden="true">
                  <Icon size={19} strokeWidth={1.7} />
                </span>
                <h3>{category}</h3>
              </div>
              <div className="skill-list">
                {skills.map((skill) => (
                  <span className="skill-label" key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
