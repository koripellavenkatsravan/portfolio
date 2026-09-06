import { Code2, Github, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/koripellavenkatsravan",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/koripellavenkatsravan/",
    Icon: Linkedin,
  },
  { label: "LeetCode", href: "https://leetcode.com/u/NeRe1CTaCi/", Icon: Code2 },
  { label: "Gmail", href: "mailto:venkatsravan2003@gmail.com", Icon: Mail },
];

export default function SocialRow() {
  return (
    <div className="social-row" data-testid="social-row">
      {SOCIALS.map(({ label, href, Icon }) => (
        <a
          key={label}
          data-testid={`social-${label.toLowerCase()}`}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="social-btn"
          aria-label={label}
          title={label}
          data-cursor="Open"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
