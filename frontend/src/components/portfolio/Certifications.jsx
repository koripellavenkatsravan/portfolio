import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const CERTS = [
  {
    name: "Introduction to Front-End Development",
    issuer: "Meta, via Coursera",
    date: "Oct 2022",
    logo: "https://cdn.simpleicons.org/meta",
    link: "https://drive.google.com/file/d/1j5XhVgKOJeHOQk8McEMoU_J6Lr608WVT/view?usp=sharing",
    accent: "rgba(0, 113, 227, 0.7)",
    testId: "cert-meta",
  },
  {
    name: "Google AI Fundamentals",
    issuer: "Google, via Coursera",
    date: null,
    logo: "https://cdn.simpleicons.org/google",
    link: "https://drive.google.com/file/d/1K-PGYlkZJXdd36v5k0Tj295pALXIn4oE/view?usp=sharing",
    accent: "rgba(66, 133, 244, 0.65)",
    testId: "cert-google",
  },
  {
    name: "Python Basics for Data Science",
    issuer: "IBM, via edX",
    date: "May 2022",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    link: "https://drive.google.com/file/d/1m7xfLvD4UDl8Cz-PoDsga1cwBGmp6cNV/view?usp=sharing",
    accent: "rgba(15, 98, 254, 0.7)",
    testId: "cert-ibm",
  },
];

export default function Certifications() {
  return (
    <section id="certs" data-testid="certs-section" className="certs-panel">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <h2 className="section-h2" style={{ color: "#f5f5f7" }}>
              Certifications.
            </h2>
          </Reveal>
          <Reveal delay={90}>
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
                    <img src={c.logo} alt={`${c.issuer.split(",")[0]} logo`} loading="lazy" />
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
