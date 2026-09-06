import Reveal from "./Reveal";

export default function Education() {
  return (
    <section
      id="education"
      data-testid="education-section"
      className="edu-panel"
      data-dark="true"
    >
      <div className="wrap">
        <Reveal>
          <div className="edu-card" data-testid="education-card">
            <img
              src="/assets/rmk-logo.png"
              alt="R.M.K. Engineering College logo"
              className="edu-logo"
            />
            <div className="edu-divider" aria-hidden="true" />
            <div>
              <p className="edu-line1">
                R.M.K. Engineering College, Anna University, Chennai
              </p>
              <p className="edu-line2">
                B.E., Computer Science &amp; Design · Graduated May 2025 · CGPA:
                8.20
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
