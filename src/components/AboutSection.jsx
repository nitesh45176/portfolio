import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Agentic AI &amp; Backend Engineer</h3>

            <p className="text-muted-foreground">
              Agentic AI &amp; Backend Engineer building multi-agent, RAG, and
              LLM-powered applications with Python and FastAPI. I focus on
              practical AI systems, reliable APIs, and the data workflows that
              make applications useful in production.
            </p>

            <p className="text-muted-foreground">
              My work spans agent orchestration, retrieval-augmented generation,
              computer vision, and backend engineering with FastAPI and
              PostgreSQL. I enjoy turning complex requirements into clear,
              maintainable systems and thoughtfully built user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agentic AI Systems</h4>
                  <p className="text-muted-foreground">
                    Building multi-agent, RAG, and multimodal applications with
                    modern LLM tooling.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Engineering</h4>
                  <p className="text-muted-foreground">
                    Developing APIs, data models, and integrations for reliable
                    application workflows.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Applied Computer Vision</h4>
                  <p className="text-muted-foreground">
                    Working with visual data pipelines for detection, assessment,
                    and actionable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
