import { useEffect, useState } from "react";

const SECTIONS = [
  "home",
  "about",
  "stack",
  "projects",
  "education",
  "certs",
  "publications",
  "contact",
];

export default function ScrollProgress() {
  const [p, setP] = useState(0);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <div className="progress-rail" data-testid="scroll-progress">
      <div className="progress-line">
        <div className="progress-fill" style={{ height: `${p}%` }} />
      </div>
      {SECTIONS.map((id) => (
        <button
          key={id}
          data-testid={`progress-dot-${id}`}
          className={`progress-dot ${active === id ? "active" : ""}`}
          aria-label={`Go to ${id}`}
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }
        />
      ))}
    </div>
  );
}
