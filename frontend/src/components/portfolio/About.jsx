import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import SocialRow from "./SocialIcons";

const PARAS = [
  "I'm a full-stack developer who shipped a live production app for a real business — not just another portfolio project sitting on GitHub.",
  "When my mother's beauty salon was still running on phone calls and walk-ins, I built her a complete booking platform from scratch (React, Node.js, Express, MongoDB) — customer auth, real-time booking, an admin dashboard, and a payments flow. It's been live for months, bookings are up 46%, and I still own it post-launch — fixing bugs, shipping features, watching a real non-technical person depend on something I built every single day.",
  "That experience set the bar for how I want to work: end-to-end ownership, real users, real consequences — not tickets in a backlog.",
  "I use AI tools daily as part of how I actually build — Claude and Cursor for coding and debugging, Emergent and Replit for fast prototyping, Gemini API for shipping AI-powered features into production. I've already integrated this into two of my own projects (an AI coaching layer in a habit tracker, AI-driven resume scoring in an ATS tool). I'm a 2025 CS grad, comfortable across the MERN stack and Java, and I'm looking for a small, fast-moving team where I can keep building things people actually use.",
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="about">
      <div className="wrap">
        <WordReveal
          as="h2"
          className="section-h2"
          parts={[
            { t: "Turning everyday friction into" },
            { t: "dependable", cls: "grad-word" },
            { t: "software." },
          ]}
        />
        {PARAS.map((p, idx) => (
          <Reveal key={idx} delay={80 + idx * 90}>
            <p className="about-p">{p}</p>
          </Reveal>
        ))}
      </div>
      <div className="about-dark-zone" data-dark="true">
        <div className="wrap about-dark-inner">
          <Reveal>
            <p className="about-social-title">Find me around the web</p>
          </Reveal>
          <Reveal delay={120}>
            <SocialRow />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
