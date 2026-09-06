import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

const SI = "https://cdn.simpleicons.org";
const STEPS = ["Brief", "Spec", "Build", "Review", "Ship"];
const PIPE_PATH = "M30 60 C 200 8, 320 112, 500 60 S 800 8, 970 60";

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
    <section
      id="ai"
      data-testid="ai-section"
      className="ai-panel grain"
      data-dark="true"
    >
      <div className="wrap">
        <Reveal>
          <p className="ai-eyebrow">
            <span className="dot" /> How I Build
          </p>
        </Reveal>
        <WordReveal
          as="h2"
          delay={80}
          parts={[{ t: "AI speeds the hands." }, { t: "Judgment steers the ship." }]}
        />
        <Reveal delay={180}>
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
                <filter id="pulseGlow" x="-300%" y="-300%" width="700%" height="700%">
                  <feGaussianBlur stdDeviation="5" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path className="pipeline-path" d={PIPE_PATH} />
              <g className="pulse-dots">
                <circle r="5" fill="#b9b7ff" filter="url(#pulseGlow)">
                  <animateMotion
                    dur="4.5s"
                    repeatCount="indefinite"
                    path={PIPE_PATH}
                  />
                </circle>
                <circle r="3.2" fill="#5e5ce6" filter="url(#pulseGlow)">
                  <animateMotion
                    dur="4.5s"
                    begin="-2.25s"
                    repeatCount="indefinite"
                    path={PIPE_PATH}
                  />
                </circle>
              </g>
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
          <div>
            <Reveal delay={80}>
              <span className="tool-row-label">Building with</span>
            </Reveal>
            <div className="tool-chips" data-testid="ai-building-tools">
              {BUILDING.map(([name, caption, logo], idx) => (
                <Reveal
                  as="span"
                  key={name}
                  delay={140 + idx * 80}
                  style={{ display: "inline-block" }}
                >
                  <span className="tool-chip">
                    <span className="tdot" />
                    {logo && (
                      <img src={logo} width={14} height={14} alt="" loading="lazy" />
                    )}
                    {name}
                    <small>— {caption}</small>
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal delay={120}>
              <span className="tool-row-label">Shipping with</span>
            </Reveal>
            <div className="tool-chips" data-testid="ai-shipping-tools">
              {SHIPPING.map(([name, logo], idx) => (
                <Reveal
                  as="span"
                  key={name}
                  delay={200 + idx * 120}
                  style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
                >
                  {idx > 0 && <ArrowRight size={15} className="tool-arrow" />}
                  <span className="tool-chip">
                    <span className="tdot" />
                    {logo && (
                      <img src={logo} width={14} height={14} alt="" loading="lazy" />
                    )}
                    {name}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
