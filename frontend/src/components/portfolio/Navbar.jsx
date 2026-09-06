import { useEffect, useRef, useState } from "react";
import { Download, Moon, Sun } from "lucide-react";

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

  const go = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
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
          download="Koripella_Venkat_Sravan_Resume.pdf"
          className="nav-icon"
          aria-label="Download resume"
          title="Resume"
        >
          <Download size={15} />
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
  );
}
