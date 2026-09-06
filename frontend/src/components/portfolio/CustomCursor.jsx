import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ref = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return undefined;
    const el = ref.current;
    const label = labelRef.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf;

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    const over = (e) => {
      const t = e.target.closest ? e.target.closest("[data-cursor]") : null;
      if (t) {
        label.textContent = t.getAttribute("data-cursor") || "View";
        el.classList.add("cursor-pill");
      }
    };
    const out = (e) => {
      const t = e.target.closest ? e.target.closest("[data-cursor]") : null;
      if (t) el.classList.remove("cursor-pill");
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <div ref={ref} className="cursor-el" aria-hidden="true">
      <span ref={labelRef} />
    </div>
  );
}
