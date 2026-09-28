const skillGroups = [
  { category: "Languages", skills: ["Python", "C++", "JavaScript", "TypeScript"] },
  { category: "AI/GenAI", skills: ["LLMs", "RAG", "LangChain", "LangGraph", "AI Agents", "MCP", "Vector Databases", "Computer Vision"] },
  { category: "Backend", skills: ["FastAPI", "Node.js", "REST APIs", "SQLAlchemy", "Alembic"] },
  { category: "Frontend", skills: ["Next.js", "React.js", "Tailwind CSS"] },
  { category: "Databases", skills: ["PostgreSQL", "MongoDB"] },
  { category: "Cloud & DevOps", skills: ["Docker", "AWS EC2", "Nginx", "GitHub Actions", "Linux"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-card p-6 rounded-lg shadow-md card-hover">
              <h3 className="font-semibold text-lg mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm border rounded-full bg-secondary text-secondary-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
