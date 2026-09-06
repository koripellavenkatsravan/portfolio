import { useState } from "react";
import { FileText, Mail, Send } from "lucide-react";
import Reveal from "./Reveal";
import SocialRow from "./SocialIcons";

const EMAIL = "venkatsravan2003@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

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

  return (
    <section id="contact" data-testid="contact-section" className="contact-panel">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <h2 className="section-h2" style={{ color: "#f5f5f7" }}>
              Let&rsquo;s talk.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="section-sub">
              A role, a project, or just a hello — my inbox is open.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
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
              required
            />
            <input
              data-testid="contact-email-input"
              className="glass-input"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={set("email")}
              required
            />
            <textarea
              data-testid="contact-message-input"
              className="glass-input"
              placeholder="Message"
              value={form.message}
              onChange={set("message")}
              required
            />
            <div>
              <button
                data-testid="contact-send-btn"
                type="submit"
                className="btn-primary"
              >
                <Send size={15} /> Send Message
              </button>
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
              <div className="foot-actions">
                <a
                  data-testid="footer-email-chip"
                  className="mail-chip"
                  href={`mailto:${EMAIL}`}
                >
                  <Mail size={14} /> {EMAIL}
                </a>
                <a
                  data-testid="footer-resume-link"
                  className="resume-link"
                  href="/resume.pdf"
                  download="Koripella_Venkat_Sravan_Resume.pdf"
                >
                  <FileText size={14} /> Download resume
                </a>
              </div>
            </div>
            <SocialRow />
          </div>
          <p className="credit">Sravan · Built with care in Chennai.</p>
        </div>
      </footer>
    </section>
  );
}
