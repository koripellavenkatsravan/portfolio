import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const SI = "https://cdn.simpleicons.org";
const STEPS = ["Brief", "Spec", "Build", "Review", "Ship"];

const BUILDING = [
  ["Claude", "everyday coding & debugging", `${SI}/anthropic/ffffff`],
  ["Cursor", "AI pair programming", null],
  ["Emergent", "full-stack prototyping", null],
  ["Replit", "fast experiments", `${SI}/replit`],
  ["GitHub Copilot", "inline suggestions", null],
];

const SHIPPING = [
  ["GitHub", `${SI}/github/ffffff`],
  ["Vercel", `${SI}/vercel/ffffff`],
  ["Render", `${SI}/render/ffffff`],
];

export default function AiWorkflow() {
  return (
    <section id="ai" data-testid="ai-section" className="ai-panel grain">
      <div className="wrap">
        <Reveal>
          <p className="ai-eyebrow">
            <span className="dot" /> How I Build
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2>AI speeds the hands. Judgment steers the ship.</h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="ai-sub">
            I build deliberately with AI tools — and I personally read, run and
            own everything that ships. The tools accelerate the loop; they never
            replace the thinking.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="pipeline" data-testid="ai-pipeline">
            <svg
              className="pipeline-svg"
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="pipeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#0071e3" />
                  <stop offset="0.5" stopColor="#5e5ce6" />
                  <stop offset="1" stopColor="#bf5af2" />
                </linearGradient>
              </defs>
              <path
                className="pipeline-path"
                d="M30 60 C 200 8, 320 112, 500 60 S 800 8, 970 60"
              />
            </svg>
            <div className="pipeline-nodes">
              {STEPS.map((s, idx) => (
                <div
                  key={s}
                  className="ai-node"
                  data-testid={`ai-node-${s.toLowerCase()}`}
                  style={{ animationDelay: `${idx * 0.9}s` }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="tool-rows">
          <Reveal delay={100}>
            <div>
              <span className="tool-row-label">Building with</span>
              <div className="tool-chips" data-testid="ai-building-tools">
                {BUILDING.map(([name, caption, logo]) => (
                  <span key={name} className="tool-chip">
                    <span className="tdot" />
                    {logo && <img src={logo} width={14} height={14} alt="" loading="lazy" />}
                    {name}
                    <small>— {caption}</small>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <span className="tool-row-label">Shipping with</span>
              <div className="tool-chips" data-testid="ai-shipping-tools">
                {SHIPPING.map(([name, logo], idx) => (
                  <span key={name} style={{ display: "contents" }}>
                    {idx > 0 && <ArrowRight size={15} className="tool-arrow" />}
                    <span className="tool-chip">
                      <span className="tdot" />
                      {logo && <img src={logo} width={14} height={14} alt="" loading="lazy" />}
                      {name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
