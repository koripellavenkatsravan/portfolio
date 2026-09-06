import { useEffect } from "react";

export default function Seo({ title, siteName, description, image, jsonLd }) {
  useEffect(() => {
    const url = window.location.origin + window.location.pathname;

    const setMeta = (attr, key, content) => {
      const sel = `meta[${attr}="${key}"]`;
      let el = document.head.querySelector(sel);
      if (!content) {
        if (el) el.remove();
        return;
      }
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    if (title) document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:site_name", siteName);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta(
      "property",
      "og:image",
      image ? window.location.origin + image : undefined
    );
    setMeta("name", "twitter:card", image ? "summary_large_image" : undefined);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta(
      "name",
      "twitter:image",
      image ? window.location.origin + image : undefined
    );

    const id = "seo-jsonld";
    let script = document.head.querySelector(`#${id}`);
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, siteName, description, image, jsonLd]);

  return null;
}
