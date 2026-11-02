import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sentinel = document.querySelector(".scroll-sentinel");
    if (!sentinel || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { rootMargin: "-16px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <nav className="nav-inner page-width" aria-label="Main navigation">
        <a className="nav-brand" href="#hero" onClick={closeMenu}>
          Nitesh Kumar Mishra<span>.</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "is-active" : ""}
              aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
            >
              {item.name}
            </a>
          ))}
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          className="nav-menu-button"
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-navigation${isMenuOpen ? " is-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={closeMenu}
            style={{ "--nav-index": index }}
          >
            <span className="eyebrow">0{index + 1}</span>
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={closeMenu}
          style={{ "--nav-index": navItems.length }}
        >
          <span className="eyebrow">05</span>
          Contact
        </a>
      </div>
    </header>
  );
};
