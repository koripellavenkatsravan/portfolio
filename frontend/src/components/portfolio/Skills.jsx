import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

const SI = "https://cdn.simpleicons.org";
const BADGE = new Set(["openjdk", "express", "anthropic", "aws"]);
const OVERRIDES = {
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
};

const MARQUEE = [
  ["JavaScript", "javascript"],
  ["Java", "openjdk"],
  ["Python", "python"],
  ["React", "react"],
  ["HTML5", "html5"],
  ["CSS3", "css"],
  ["Bootstrap", "bootstrap"],
  ["Tailwind CSS", "tailwindcss"],
  ["Node.js", "nodedotjs"],
  ["Express", "express"],
  ["MongoDB", "mongodb"],
  ["MySQL", "mysql"],
  ["Git", "git"],
  ["Docker", "docker"],
  ["AWS", "aws"],
  ["Claude", "anthropic"],
  ["Gemini", "googlegemini"],
  ["Replit", "replit"],
];

const CATS = [
  {
    name: "Languages",
    items: [
      ["JavaScript (ES6+)", "javascript"],
      ["Java", "openjdk"],
      ["Python", "python"],
    ],
  },
  {
    name: "Frontend",
    items: [
      ["React.js", "react"],
      ["HTML5", "html5"],
      ["CSS3", "css"],
      ["Bootstrap", "bootstrap"],
      ["Tailwind CSS", "tailwindcss"],
    ],
  },
  {
    name: "Backend",
    items: [
      ["Node.js", "nodedotjs"],
      ["Express.js", "express"],
      ["REST API design", null],
    ],
  },
  {
    name: "Databases",
    items: [
      ["MongoDB", "mongodb"],
      ["MySQL", "mysql"],
    ],
  },
  {
    name: "AI Tools & Productivity",
    items: [
      ["Claude", "anthropic"],
      ["Google Gemini API", "googlegemini"],
      ["Emergent", null],
      ["Replit", "replit"],
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      ["AWS (in progress)", "aws"],
      ["Docker (in progress)", "docker"],
      ["CI/CD basics", null],
    ],
  },
];

function Logo({ slug, size = 26 }) {
  if (!slug) return null;
  const src = OVERRIDES[slug] || `${SI}/${slug}`;
  if (BADGE.has(slug)) {
    return (
      <span className="logo-badge">
        <img src={src} width={size - 10} height={size - 10} alt="" loading="lazy" />
      </span>
    );
  }
  return <img src={src} width={size} height={size} alt="" loading="lazy" />;
}

export default function Skills() {
  return (
    <section id="stack" data-testid="stack-section" className="stack">
      <div className="paper-tex" aria-hidden="true" />
      <div className="wrap">
        <div className="section-head">
          <WordReveal
            as="h2"
            className="section-h2"
            parts={[{ t: "The stack I ship with." }]}
          />
          <Reveal delay={140}>
            <p className="section-sub">
              Real tools, real production work — from pixel to deployment.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div
          className="logo-marquee marquee-paused"
          data-testid="skills-marquee"
        >
          <div className="marquee-track logo-track">
            {[...MARQUEE, ...MARQUEE].map(([name, slug], idx) => (
              <div key={idx} className="logo-tile">
                <Logo slug={slug} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="wrap">
        <div className="cat-grid">
          {CATS.map((cat, ci) => (
            <Reveal key={cat.name} delay={ci * 70}>
              <div
                className="cat-card"
                data-testid={`stack-cat-${cat.name
                  .toLowerCase()
                  .replace(/[^a-z]+/g, "-")}`}
              >
                <p className="cat-title">{cat.name}</p>
                <div className="chip-row">
                  {cat.items.map(([name, slug]) => (
                    <span key={name} className="chip">
                      <Logo slug={slug} size={22} />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
