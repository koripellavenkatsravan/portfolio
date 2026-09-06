import { useEffect, useRef } from "react";

export default function WordReveal({
  parts,
  className = "",
  as: Tag = "h2",
  delay = 0,
  step = 55,
  style,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("words-in");
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  let wi = 0;
  return (
    <Tag ref={ref} className={`word-reveal ${className}`} style={style} {...rest}>
      {parts.map((p, pi) =>
        p.t
          .split(" ")
          .filter(Boolean)
          .map((w, k) => {
            const d = delay + wi++ * step;
            return (
              <span
                key={`${pi}-${k}`}
                className={`wr-w ${p.cls || ""}`}
                style={{ transitionDelay: `${d}ms` }}
              >
                {w}
                {" "}
              </span>
            );
          })
      )}
    </Tag>
  );
}
