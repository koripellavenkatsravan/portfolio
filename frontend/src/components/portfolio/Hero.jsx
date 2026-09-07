import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Sparkles,
  UserRound,
} from "lucide-react";
import Magnetic from "./Magnetic";

const ROLES = [
  "Software Developer",
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

export default function Hero() {
  const [i, setI] = useState(0);
  const textRef = useRef(null);
  const photoRef = useRef(null);
  const badgesRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;
    let raf;
    const update = () => {
      const y = window.scrollY;
      if (y > window.innerHeight * 1.4) return;
      if (textRef.current)
        textRef.current.style.transform = `translateY(${y * 0.16}px)`;
      if (photoRef.current)
        photoRef.current.style.transform = `translateY(${y * 0.07}px)`;
      if (badgesRef.current)
        badgesRef.current.style.transform = `translateY(${y * 0.3}px)`;
      if (marqueeRef.current)
        marqueeRef.current.style.transform = `translateY(calc(-50% - ${
          y * 0.12
        }px))`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const goWork = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" data-testid="hero-section" className="hero">
      <div className="hero-marquee" ref={marqueeRef} aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 6 }).map((_, k) => (
            <span key={k} className="hero-marquee-word">
              SRAVAN&nbsp;DEV&nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="hero-grid">
        <div className="hero-left" ref={textRef}>
          <p className="hero-eyebrow hero-in" style={{ animationDelay: "0.05s" }}>
            Hello, I build for the real world.
          </p>
          <h1 className="hero-h1 hero-in" style={{ animationDelay: "0.15s" }}>
            <span className="hero-h1-line">Hi, I&rsquo;m</span>
            <span className="hero-h1-line hero-h1-accent">Sravan.</span>
          </h1>
          <p className="hero-role hero-in" style={{ animationDelay: "0.25s" }}>
            Currently, a{" "}
            <b
              key={i}
              data-testid="hero-role"
              className="role-fade hero-role-name"
            >
              {ROLES[i]}
            </b>
          </p>
          <p className="hero-body hero-in" style={{ animationDelay: "0.35s" }}>
            A full-stack developer who likes turning everyday friction into
            software that feels simple, dependable, and worth coming back to.
          </p>
          <div className="hero-cta hero-in" style={{ animationDelay: "0.45s" }}>
            <Magnetic>
              <a
                data-testid="hero-resume-btn"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Resume <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <button
              data-testid="hero-work-link"
              onClick={goWork}
              className="link-quiet"
            >
              See my work{" "}
              <ChevronRight size={15} style={{ verticalAlign: "-2px" }} />
            </button>
          </div>
        </div>

        <div className="hero-right hero-in" style={{ animationDelay: "0.55s" }}>
          <div className="hero-photo-wrap" data-cursor="Hello">
            <div ref={photoRef} className="photo-parallax">
              <div className="photo-card grain" data-testid="hero-photo-card">
                <img
                  src="/assets/headshot.webp"
                  alt="Portrait of Koripella Venkat Sravan"
                  className="photo-img"
                />
                <div className="photo-meta">
                  <span className="photo-label">Venkat Sravan</span>
                </div>
              </div>
            </div>
            <div className="icon-badges-layer" ref={badgesRef} aria-hidden="true">
              <span className="icon-badge badge-blue grain">
                <Sparkles size={22} />
              </span>
              <span className="icon-badge badge-orange">
                <UserRound size={22} />
              </span>
              <span className="icon-badge badge-green">
                <Check size={22} />
              </span>
              <span className="icon-badge badge-purple">
                <Code2 size={22} />
              </span>
            </div>
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
