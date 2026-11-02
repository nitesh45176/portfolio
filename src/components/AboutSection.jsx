import { ArrowDownRight, Code, User } from "lucide-react";

export const AboutSection = () => (
  <section id="about" className="section about-section">
    <div className="page-width">
      <div className="section-heading" data-reveal>
        <p className="eyebrow section-kicker"><span>01</span> / A LITTLE CONTEXT</p>
        <h2>
          Curiosity, made
          <br />
          <span className="text-muted">useful.</span>
        </h2>
      </div>

      <div className="about-layout">
        <div className="about-intro" data-reveal>
          <p className="about-lead">
            I work where <span>generative AI</span>, engineering, and real
            people&apos;s problems meet.
          </p>
          <a className="text-link" href="#experience">
            A closer look at my experience <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="about-details" data-reveal>
          <p>
            I&apos;m a Generative AI and Backend Engineer building multi-agent,
            RAG, and LLM-powered applications with Python and FastAPI. I focus on
            practical AI systems, reliable APIs, and the data workflows that make
            applications useful in production.
          </p>
          <p>
            My work spans agent orchestration, retrieval-augmented generation,
            computer vision, and backend engineering with FastAPI and PostgreSQL.
            I enjoy turning complex requirements into clear, maintainable
            systems and thoughtfully built user experiences.
          </p>
        </div>
      </div>

      <div className="about-principles">
        <article data-reveal>
          <Code size={19} aria-hidden="true" />
          <span className="eyebrow">01 / BUILD</span>
          <p>Useful systems, designed to work beyond the demo.</p>
        </article>
        <article data-reveal>
          <User size={19} aria-hidden="true" />
          <span className="eyebrow">02 / CONNECT</span>
          <p>Thoughtful engineering grounded in the people using it.</p>
        </article>
      </div>
    </div>
  </section>
);
