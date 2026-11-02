import { ArrowDown, ArrowRight, Download } from "lucide-react";

export const HeroSection = () => (
  <section id="hero" className="hero-section">
    <span className="scroll-sentinel" aria-hidden="true" />
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-glow hero-glow-orange" aria-hidden="true" />
    <div className="hero-glow hero-glow-blue" aria-hidden="true" />

    <div className="hero-content page-width">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="status-dot" />
          Generative AI · Agentic Systems · Backend Engineering
        </p>
        <h1 className="hero-title">
          I build
          <br />
          <span className="hero-title-accent">intelligent</span>
          <br />
          systems<span className="hero-period">.</span>
        </h1>
        <p className="hero-description">
          I&apos;m Nitesh Kumar Mishra, an engineer focused on practical AI
          applications, dependable backend systems, and thoughtful software.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore selected work <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            href="/resume/NITESH_CV_AIML.pdf"
            download="Nitesh_Kumar_Mishra_Resume.pdf"
            className="button button-quiet"
          >
            <Download size={16} aria-hidden="true" /> Download resume
          </a>
        </div>
        <p className="hero-index eyebrow">BASED IN INDIA · AVAILABLE FOR WHAT&apos;S NEXT</p>
      </div>

      <div className="portrait-stage">
        <div className="portrait-orbit" aria-hidden="true" />
        <div className="portrait-frame">
          <picture>
            <source
              type="image/webp"
              srcSet="/nitesh-portrait-480.webp 480w, /nitesh-portrait-544.webp 544w, /nitesh-portrait-768.webp 768w"
              sizes="(max-width: 680px) 72vw, 470px"
            />
            <img
              src="/nitesh-portrait.png"
              alt="Nitesh Kumar Mishra in a modern office"
              width="768"
              height="1023"
              loading="eager"
            />
          </picture>
        </div>
        <div className="portrait-caption eyebrow">
          <span>THE PERSON BEHIND THE SYSTEMS</span>
          <span>01 / 06</span>
        </div>
        <span className="portrait-mark portrait-mark-top eyebrow" aria-hidden="true">
          AI / BACKEND
        </span>
        <span className="portrait-mark portrait-mark-bottom eyebrow" aria-hidden="true">
          NKM—26
        </span>
      </div>
    </div>

    <a className="scroll-cue eyebrow" href="#about">
      <span>SCROLL TO EXPLORE</span>
      <ArrowDown size={15} aria-hidden="true" />
    </a>
    <span className="hero-side-note eyebrow" aria-hidden="true">
      THE SIGNAL WITHIN — BUILDING INTELLIGENT SYSTEMS
    </span>
  </section>
);
