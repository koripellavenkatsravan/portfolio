import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

const CERTS = [
  {
    name: "Introduction to Front-End Development",
    issuer: "Meta, via Coursera",
    date: "Oct 2022",
    logo: "/assets/logos/meta.svg",
    link: "https://drive.google.com/file/d/1j5XhVgKOJeHOQk8McEMoU_J6Lr608WVT/view?usp=sharing",
    accent: "rgba(10, 132, 255, 0.5)",
    testId: "cert-meta",
  },
  {
    name: "Google AI Fundamentals",
    issuer: "Google, via Coursera",
    date: null,
    logo: "/assets/google-logo.png",
    wide: true,
    link: "https://drive.google.com/file/d/1K-PGYlkZJXdd36v5k0Tj295pALXIn4oE/view?usp=sharing",
    accent: "rgba(10, 132, 255, 0.4)",
    testId: "cert-google",
  },
  {
    name: "Python Basics for Data Science",
    issuer: "IBM, via edX",
    date: "May 2022",
    logo: "/assets/logos/ibm.svg",
    link: "https://drive.google.com/file/d/1m7xfLvD4UDl8Cz-PoDsga1cwBGmp6cNV/view?usp=sharing",
    accent: "rgba(10, 132, 255, 0.55)",
    testId: "cert-ibm",
  },
];

export default function Certifications() {
  return (
    <section
      id="certs"
      data-testid="certs-section"
      className="certs-panel"
      data-dark="true"
    >
      <div className="wrap">
        <div className="section-head">
          <WordReveal
            as="h2"
            className="section-h2"
            style={{ color: "#f5f5f7" }}
            parts={[{ t: "Certifications." }]}
          />
          <Reveal delay={140}>
            <p className="section-sub">
              Structured learning, verified — from Meta, Google and IBM.
            </p>
          </Reveal>
        </div>
        <div className="cert-grid">
          {CERTS.map((c, idx) => (
            <Reveal key={c.name} delay={idx * 110}>
              <div
                className="cert-card"
                data-testid={c.testId}
                style={{ "--ca": c.accent }}
              >
                <div className="cert-inner">
                  <span className="cert-badge">
                    <img
                      src={c.logo}
                      alt={`${c.issuer.split(",")[0]} logo`}
                      className={c.wide ? "cert-logo-wide" : ""}
                      loading="lazy"
                    />
                  </span>
                  <h3 className="cert-title">{c.name}</h3>
                  <p className="cert-meta">
                    {c.issuer}
                    {c.date ? ` · ${c.date}` : ""}
                  </p>
                  <a
                    data-testid={`${c.testId}-link`}
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View Certificate <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
