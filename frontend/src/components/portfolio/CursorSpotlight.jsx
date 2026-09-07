import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    if (
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return undefined;
    const el = ref.current;
    let raf;
    let tx = -600;
    let ty = -600;
    let x = tx;
    let y = ty;

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      const over = e.target.closest ? e.target.closest("[data-dark]") : null;
      el.style.opacity = over ? "1" : "0";
    };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.background = `radial-gradient(520px at ${x}px ${y}px, rgba(10, 132, 255, 0.11), rgba(0, 113, 227, 0.05) 45%, transparent 68%)`;
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
