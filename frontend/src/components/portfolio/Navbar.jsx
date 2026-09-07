import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certs", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const linkRefs = useRef({});
  const [hl, setHl] = useState({ x: 0, w: 0, o: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = linkRefs.current[active];
    if (el) setHl({ x: el.offsetLeft, w: el.offsetWidth, o: 1 });
  }, [active, scrolled]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const go = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <>
      <nav
        data-testid="navbar"
        className={`nav-capsule ${scrolled ? "nav-scrolled" : ""}`}
      >
      <div className="nav-track">
        <span
          className="nav-highlight"
          style={{
            transform: `translateX(${hl.x}px) translateY(-50%)`,
            width: hl.w,
            opacity: hl.o,
          }}
        />
        {NAV_LINKS.map((l) => (
          <button
            key={l.id}
            ref={(el) => (linkRefs.current[l.id] = el)}
            data-testid={`nav-${l.id}`}
            onClick={() => go(l.id)}
            className={`nav-link ${active === l.id ? "nav-link-active" : ""}`}
          >
            {l.label}
          </button>
        ))}
        <span className="nav-sep" />
        <a
          data-testid="nav-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon"
          aria-label="View resume"
          title="View Resume"
        >
          <ArrowUpRight size={15} />
        </a>
        <button
          data-testid="nav-theme-toggle"
          onClick={toggleTheme}
          className="nav-icon"
          aria-label="Toggle day and night mode"
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
      </nav>

      <button
        data-testid="mobile-menu-btn"
        className="mobile-nav-btn"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div
        className={`mobile-panel ${menuOpen ? "open" : ""}`}
        data-testid="mobile-panel"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-panel-links">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`mobile-nav-${l.id}`}
              className="mp-link"
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
          <a
            data-testid="mobile-nav-resume"
            className="mp-link mp-link-accent"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume <ArrowUpRight size={22} />
          </a>
        </div>
        <button
          data-testid="mobile-theme-toggle"
          className="mp-theme"
          onClick={toggleTheme}
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
          {dark ? "Switch to day mode" : "Switch to night mode"}
        </button>
      </div>
    </>
  );
}
