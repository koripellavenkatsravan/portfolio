import { useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Mail, Send } from "lucide-react";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import Magnetic from "./Magnetic";
import SocialRow from "./SocialIcons";

const EMAIL = "venkatsravan2003@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch (err) {
      /* clipboard unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="contact-panel"
      data-dark="true"
    >
      <div className="wrap">
        <div className="section-head">
          <WordReveal
            as="h2"
            className="section-h2"
            style={{ color: "#f5f5f7" }}
            parts={[{ t: "Let's talk." }]}
          />
          <Reveal delay={120}>
            <p className="section-sub">
              A role, a project, or just a hello — my inbox is open.
            </p>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <form
            className="contact-form"
            data-testid="contact-form"
            onSubmit={submit}
          >
            <input
              data-testid="contact-name-input"
              className="glass-input"
              placeholder="Name"
              value={form.name}
              onChange={set("name")}
              onFocus={(e) =>
                e.target.scrollIntoView({ block: "center", behavior: "smooth" })
              }
              required
            />
            <input
              data-testid="contact-email-input"
              className="glass-input"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={set("email")}
              onFocus={(e) =>
                e.target.scrollIntoView({ block: "center", behavior: "smooth" })
              }
              required
            />
            <textarea
              data-testid="contact-message-input"
              className="glass-input"
              placeholder="Message"
              value={form.message}
              onChange={set("message")}
              onFocus={(e) =>
                e.target.scrollIntoView({ block: "center", behavior: "smooth" })
              }
              required
            />
            <div>
              <Magnetic>
                <button
                  data-testid="contact-send-btn"
                  type="submit"
                  className="btn-primary"
                >
                  <Send size={15} /> Send Message
                </button>
              </Magnetic>
            </div>
            {sent && (
              <p data-testid="contact-success" className="contact-success">
                Your email draft is ready to send — it just opened in your mail
                app.
              </p>
            )}
          </form>
        </Reveal>
      </div>

      <footer data-testid="footer">
        <div className="wrap">
          <div className="foot-main">
            <div>
              <h3>Let&rsquo;s build something.</h3>
              <p className="foot-sub">
                A role, a collab, or a wild idea — I read every message,
                usually within a day.
              </p>
              <div className="foot-actions">
                <button
                  data-testid="footer-email-chip"
                  className={`mail-chip ${copied ? "copied" : ""}`}
                  onClick={copyEmail}
                >
                  {copied ? <Check size={14} /> : <Mail size={14} />}
                  {copied ? "Copied to clipboard" : EMAIL}
                </button>
                <a
                  data-testid="footer-resume-link"
                  className="resume-link"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight size={14} /> View resume
                </a>
              </div>
            </div>
            <div className="foot-right">
              <SocialRow />
              <Magnetic strength={0.25}>
                <button
                  data-testid="back-to-top"
                  className="back-top"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <ArrowUp size={14} /> Back to top
                </button>
              </Magnetic>
            </div>
          </div>
          <div className="foot-bottom">
            <span>Sravan · Built with care.</span>
            <span>React · Node.js · a lot of care about the details</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
