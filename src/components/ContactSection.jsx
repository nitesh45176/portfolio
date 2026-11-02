import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    detail: "mishranitesh45176@gmail.com",
    href: "mailto:mishranitesh45176@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    detail: "github.com/nitesh45176",
    href: "https://github.com/nitesh45176",
    icon: Github,
  },
  {
    label: "LinkedIn",
    detail: "linkedin.com/in/nitesh45176",
    href: "https://www.linkedin.com/in/nitesh45176",
    icon: Linkedin,
  },
];

export const ContactSection = () => (
  <section id="contact" className="section contact-section">
    <div className="page-width">
      <div className="contact-kicker eyebrow" data-reveal>
        <span>05 / OPEN CHANNEL</span>
        <span className="status-dot" />
      </div>
      <div className="contact-main" data-reveal>
        <h2>
          Have a good
          <br />
          <span>problem?</span>
        </h2>
        <a
          className="contact-cta"
          href="mailto:mishranitesh45176@gmail.com"
          aria-label="Let's talk about it — email Nitesh Kumar Mishra"
        >
          <span>Let&apos;s talk about it</span>
          <ArrowUpRight size={21} aria-hidden="true" />
        </a>
      </div>
      <div className="contact-bottom">
        <p>
          Open to conversations about intelligent systems, backend engineering,
          and thoughtful products.
        </p>
        <div className="contact-links">
          {contactLinks.map(({ label, detail, href, icon: Icon }) => (
            <a
              href={href}
              key={label}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            >
              <Icon size={16} aria-hidden="true" />
              <span className="contact-link-label">{label}</span>
              <span className="contact-link-detail">{detail}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
