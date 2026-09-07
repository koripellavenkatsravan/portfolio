import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Send, X } from "lucide-react";

const EMAIL = "venkatsravan2003@gmail.com";

const QUICK_ACTIONS = [
  { label: "About Sravan", target: "about" },
  { label: "View Projects", target: "projects" },
  { label: "See Skills", target: "stack" },
  { label: "View Resume", href: "/resume.pdf" },
  { label: "Contact", target: "contact" },
];

const FALLBACK = {
  reply:
    "I can help you find Sravan's projects, skills, resume, or contact info — try asking about one of those!",
  action: null,
};

const RULES = [
  {
    keys: ["project", "work", "portfolio", "built", "ship"],
    reply:
      "Two shipped projects: KBS Beauty Saloon — a live booking platform for a real salon — and an AI-Powered Habit Tracker with Gemini coaching.",
    action: { label: "View Projects", target: "projects" },
  },
  {
    keys: ["about", "who are", "who is", "tell me about", "yourself"],
    reply:
      "Sravan is a full-stack developer who shipped a live booking platform for a real family business — bookings are up 46% and he still owns it post-launch. He works across the MERN stack and Java, and builds deliberately with AI tools.",
    action: { label: "Read more", target: "about" },
  },
  {
    keys: ["resume", "cv"],
    reply: "Here's Sravan's resume — it opens in a new tab for reading.",
    action: { label: "View Resume", href: "/resume.pdf" },
  },
  {
    keys: ["contact", "email", "reach", "hire", "mail"],
    reply: `You can reach Sravan at ${EMAIL} — he usually replies within a day.`,
    action: { label: "Go to Contact", target: "contact" },
  },
  {
    keys: ["skill", "stack", "tech", "language"],
    reply:
      "JavaScript, Java, Python, React, Node.js, Express, MongoDB, MySQL and Tailwind — plus AI tooling like Claude, Cursor and the Gemini API.",
    action: { label: "See Skills", target: "stack" },
  },
  {
    keys: ["publication", "paper", "research", "journal"],
    reply:
      "Sravan co-authored a Taylor & Francis journal paper on liver cancer detection using a deep learning framework — 99.56% detection accuracy.",
    action: { label: "Read about it", target: "publications" },
  },
  {
    keys: ["education", "college", "degree", "study", "cgpa"],
    reply:
      "B.E. in Computer Science & Design from R.M.K. Engineering College, Anna University — graduated May 2025 with a CGPA of 8.20.",
    action: { label: "View Education", target: "education" },
  },
  {
    keys: ["certification", "certificate", "course"],
    reply:
      "Certified by Meta (Front-End Development), Google (AI Fundamentals) and IBM (Python for Data Science).",
    action: { label: "View Certifications", target: "certs" },
  },
];

export default function Inc() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    {
      from: "inc",
      text: "Hi, I'm Inc — Sravan's portfolio assistant. Ask me about his work, skills, resume, or how to reach him.",
      action: null,
    },
  ]);
  const [input, setInput] = useState("");
  const msgsRef = useRef(null);

  useEffect(() => {
    if (msgsRef.current)
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [msgs, open]);

  const go = (target) => {
    setOpen(false);
    setTimeout(
      () =>
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }),
      80
    );
  };

  const act = (a) => {
    if (!a) return;
    if (a.href) window.open(a.href, "_blank", "noopener,noreferrer");
    else go(a.target);
  };

  const send = (e) => {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    const lq = q.toLowerCase();
    const rule =
      RULES.find((r) => r.keys.some((k) => lq.includes(k))) || FALLBACK;
    setMsgs((m) => [
      ...m,
      { from: "user", text: q, action: null },
      { from: "inc", text: rule.reply, action: rule.action },
    ]);
    setInput("");
  };

  return (
    <>
      <button
        data-testid="inc-fab"
        className="inc-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Inc assistant" : "Open Inc assistant"}
      >
        <img src="/assets/inc-logo.png" alt="Inc assistant logo" />
      </button>
      <div
        className={`inc-panel ${open ? "open" : ""}`}
        data-testid="inc-panel"
        aria-hidden={!open}
      >
        <div className="inc-head">
          <img src="/assets/inc-logo.png" alt="" />
          <div>
            <b>Inc</b>
            <span>Portfolio assistant</span>
          </div>
          <button
            className="inc-close"
            data-testid="inc-close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X size={15} />
          </button>
        </div>
        <div className="inc-quick" data-testid="inc-quick-actions">
          {QUICK_ACTIONS.map((a) => (
            <button
              key={a.label}
              className="inc-chip"
              data-testid={`inc-quick-${a.label.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => act(a)}
            >
              {a.label}
            </button>
          ))}
        </div>
        <div className="inc-msgs" ref={msgsRef} data-testid="inc-messages">
          {msgs.map((m, i) => (
            <div key={i} className={`inc-msg ${m.from === "user" ? "user" : ""}`}>
              {m.text}
              {m.action && (
                <span style={{ display: "block" }}>
                  <button
                    className="inc-inline"
                    data-testid={`inc-action-${i}`}
                    onClick={() => act(m.action)}
                  >
                    {m.action.label} <ArrowUpRight size={12} />
                  </button>
                </span>
              )}
            </div>
          ))}
        </div>
        <form className="inc-input-row" onSubmit={send}>
          <input
            className="inc-input"
            data-testid="inc-input"
            placeholder="Ask about Sravan…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="inc-send"
            data-testid="inc-send"
            type="submit"
            aria-label="Send"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </>
  );
}
