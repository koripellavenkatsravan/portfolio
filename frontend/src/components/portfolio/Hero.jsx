import { useEffect, useState } from "react";
import { ArrowDown, FileDown } from "lucide-react";

const ROLES = [
  "Software Developer",
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2500);
    return () => clearInterval(t);
  }, []);

  const goWork = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" data-testid="hero-section" className="hero">
      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 6 }).map((_, k) => (
            <span key={k} className="hero-marquee-word">
              SRAVAN&nbsp;DEV&nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow hero-in" style={{ animationDelay: "0.05s" }}>
          Hello, I build for the real world.
        </p>
        <h1 className="hero-in" style={{ animationDelay: "0.15s" }}>
          Hi, I&rsquo;m{" "}
          <span style={{ color: "var(--blue)", fontWeight: 700 }}>Sravan.</span>
        </h1>
        <p
          key={i}
          data-testid="hero-role"
          className="hero-role role-fade hero-in"
          style={{ animationDelay: "0.25s" }}
        >
          {ROLES[i]}
        </p>
        <p className="hero-body hero-in" style={{ animationDelay: "0.35s" }}>
          I turn everyday friction into dependable software — from a family
          business to AI-powered tools, built end to end and owned long after
          launch.
        </p>
        <div className="hero-cta hero-in" style={{ animationDelay: "0.45s" }}>
          <a
            data-testid="hero-resume-btn"
            href="/resume.pdf"
            download="Koripella_Venkat_Sravan_Resume.pdf"
            className="btn-primary"
          >
            <FileDown size={16} /> Resume
          </a>
          <button
            data-testid="hero-work-link"
            onClick={goWork}
            className="link-quiet"
          >
            See my work
          </button>
        </div>

        <div
          className="hero-photo-wrap hero-in"
          style={{ animationDelay: "0.55s" }}
          data-cursor="Hello"
        >
          <div className="float-shape float-shape-a grain" aria-hidden="true" />
          <div className="float-shape float-shape-b grain" aria-hidden="true" />
          <div className="photo-card grain" data-testid="hero-photo-card">
            <img
              src="/assets/headshot.png"
              alt="Portrait of Koripella Venkat Sravan"
              className="photo-img"
            />
            <span className="photo-label">Sravan</span>
          </div>
        </div>
      </div>

      <div className="hero-foot hero-in" style={{ animationDelay: "0.7s" }}>
        <span>Open to building useful things with a thoughtful team.</span>
        <span className="hero-scroll-hint">
          Scroll to explore <ArrowDown size={13} />
        </span>
      </div>
    </section>
  );
}
