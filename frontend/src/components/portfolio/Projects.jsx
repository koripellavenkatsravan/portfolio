import { useRef } from "react";
import { ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import CountUp from "./CountUp";
import Magnetic from "./Magnetic";

function BrowserMock({ url, img, alt, link, testId }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-py * 5).toFixed(
      2
    )}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
  };
  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  const shot = (
    <img className="browser-img" src={img} alt={alt} loading="lazy" />
  );

  return (
    <div
      ref={ref}
      className="browser"
      data-testid={testId}
      data-cursor="Open"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="browser-bar">
        <span className="bdot" style={{ background: "#ff5f57" }} />
        <span className="bdot" style={{ background: "#febc2e" }} />
        <span className="bdot" style={{ background: "#28c840" }} />
        <span className="browser-url">{url}</span>
      </div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {shot}
        </a>
      ) : (
        shot
      )}
    </div>
  );
}

function StackChips({ items }) {
  return (
    <div className="stack-chips">
      {items.map((s) => (
        <span key={s} className="stack-chip">
          {s}
        </span>
      ))}
    </div>
  );
}

const KBS_BEATS = [
  { k: "Problem", v: "Appointments ran on phone calls and walk-ins only." },
  {
    k: "Solution",
    v: "A self-service booking platform with customer auth, an admin dashboard and a payments page.",
  },
  { k: "Outcome", v: "outcome" },
];

const HABIT_CHECKS = [
  "JWT & Bcrypt authentication",
  "Gemini-powered habit coaching",
  "GitHub-style contribution heatmaps",
  "Streak analytics that actually motivate",
];

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="projects">
      <div className="wrap">
        <div className="section-head">
          <WordReveal
            as="h2"
            className="section-h2"
            parts={[{ t: "Selected work." }]}
          />
          <Reveal delay={140}>
            <p className="section-sub">
              Two projects. Both real, both shipped, both still alive.
            </p>
          </Reveal>
        </div>

        <div className="proj-card" data-testid="project-kbs">
          <div className="proj-glow glow-warm" aria-hidden="true" />
          <div className="proj-inner">
            <Reveal className="proj-mock">
              <BrowserMock
                url="kbsbeautysaloon.shop"
                img="/assets/kbs-saloon.png"
                alt="KBS Beauty Saloon booking platform homepage"
                link="https://kbsbeautysaloon.shop/"
                testId="kbs-mockup"
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="proj-kicker">Live client platform</p>
                <h3 className="proj-title">
                  KBS Beauty Saloon — Family Business Platform
                </h3>
              </Reveal>
              <Reveal delay={80}>
                <StackChips
                  items={["React.js", "Node.js", "Express.js", "MongoDB", "JWT"]}
                />
              </Reveal>
              <div className="beats">
                {KBS_BEATS.map((b, idx) => (
                  <Reveal key={b.k} delay={150 + idx * 110}>
                    <p className="beat" style={{ margin: 0 }}>
                      <b>{b.k}</b>
                      <span>
                        {b.v === "outcome" ? (
                          <>
                            Bookings up{" "}
                            <b className="stat-accent">
                              <CountUp to={46} />%
                            </b>{" "}
                            — live for months, still maintained and improved
                            post-launch.
                          </>
                        ) : (
                          b.v
                        )}
                      </span>
                    </p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={480}>
                <Magnetic>
                  <a
                    data-testid="kbs-visit-btn"
                    href="https://kbsbeautysaloon.shop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Visit live site <ArrowUpRight size={16} />
                  </a>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="proj-card" data-testid="project-habit">
          <div className="proj-glow glow-cool" aria-hidden="true" />
          <div className="proj-inner proj-flip">
            <Reveal className="proj-mock">
              <BrowserMock
                url="ai-habit-tracker"
                img="/assets/habit-tracker.png"
                alt="AI-Powered Habit Tracker dashboard with AI coaching"
                testId="habit-mockup"
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="proj-kicker">AI-powered product</p>
                <h3 className="proj-title">AI-Powered Habit Tracker</h3>
              </Reveal>
              <Reveal delay={80}>
                <StackChips
                  items={[
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Gemini API",
                  ]}
                />
              </Reveal>
              <div className="check-list">
                {HABIT_CHECKS.map((c, idx) => (
                  <Reveal key={c} delay={150 + idx * 100}>
                    <p className="check-item" style={{ margin: 0 }}>
                      <CheckCircle2 size={17} />
                      <span>{c}</span>
                    </p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={550}>
                <Magnetic>
                  <a
                    data-testid="habit-github-btn"
                    href="https://github.com/koripellavenkatsravan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ background: "#1d1d1f", boxShadow: "0 10px 24px rgba(0,0,0,.25)" }}
                  >
                    <Github size={16} /> View on GitHub
                  </a>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
