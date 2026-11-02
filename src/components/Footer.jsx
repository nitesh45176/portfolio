import { ArrowUpRight } from "lucide-react";

export const Footer = () => (
  <footer className="site-footer page-width">
    <p>© {new Date().getFullYear()} Nitesh Kumar Mishra</p>
    <span className="eyebrow">BUILT WITH CURIOSITY &amp; CARE</span>
    <a href="#hero">
      Back to top <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  </footer>
);
