# PRD — Sravan's Portfolio (Apple / Liquid Glass Grade)

## Original problem statement
Single-page portfolio for Koripella Venkat Sravan ("Sravan"), full-stack developer, built to apple.com quality: light/dark tonal shifts, dark-glass capsule navbar (never inverts to white), "SRAVAN DEV" marquee behind hero headline + photo card, rotating role line, verbatim About copy, real tech logos marquee + category cards, signature "How I Ship With AI" section with animated Brief→Spec→Build→Review→Ship pipeline, exactly two project feature cards in Safari-style browser mockups (3D tilt, colored glow), compact Education card (RMK logo), three Certification cards (Meta/Google/IBM on white badges), contact form with mailto fallback + black footer. Custom cursor, scroll progress rail, grain textures, day/night toggle, scroll-margin clearance everywhere.

## User personas
- Recruiters/hiring managers evaluating a 2025 CS grad for full-stack roles
- Small product teams looking for an ownership-driven developer

## Architecture
- Frontend-only React SPA (no backend needed; contact form uses mailto: fallback per brief)
- /app/frontend/src/App.js — page composition + SEO
- /app/frontend/src/components/portfolio/ — CustomCursor, Navbar, ScrollProgress, Reveal, Hero, About, Skills, AiWorkflow, Projects, Education, Certifications, Contact(+Footer), SocialIcons
- /app/frontend/src/index.css — full design token system (colors, glass, grain, marquee, easing cubic-bezier(0.32,0.72,0,1), day/night via html.dark vars)
- Assets in /app/frontend/public/assets/: headshot.png, kbs-saloon.png, habit-tracker.png, rmk-logo.png
- /app/frontend/public/resume.pdf — PLACEHOLDER PDF (user to upload final resume)
- Tech/cert logos served from simpleicons CDN; AWS from devicons CDN; IBM from Wikimedia (both removed from simple-icons)

## Implemented (2026-09-06)
- Hero: SRAVAN DEV marquee behind headline + photo card, rotating roles (2.5s crossfade), Resume download + "See my work", floating glass shapes, hero footer line
- Navbar: always-dark glass capsule, sliding active highlight, scroll shrink + inner highlight, resume download icon, day/night toggle
- About: verbatim copy, gradient accent word, light→dark tonal handoff, dot-grid dark zone, social row (GitHub/LinkedIn/LeetCode/Gmail) visible at rest
- Skills: logo marquee (pause on hover) + 6 category cards, white badges behind dark logos
- How I Ship With AI: animated marching-dash pipeline with sequentially pulsing nodes, building/shipping tool chip rows
- Projects: KBS (warm glow, live link) + Habit Tracker (cool glow, staggered checklist), browser mockups with 3D tilt + reflection sweep, no cropping
- Education: compact glass card, RMK logo vertically centered
- Certifications: Meta/Google/IBM cards with white logo badges, per-card accent borders, Drive links (new tab)
- Contact: glass form → mailto with prefill, in-flow success message; footer with email chip, resume link, social icons, "Sravan · Built with care in Chennai."
- Custom cursor (dot → labeled pill), right-edge scroll progress rail, grain on gradient surfaces, prefers-reduced-motion support
- SEO: canonical/og/twitter/meta + Person JSON-LD, llms.txt

## Verified
- Screenshots of every section (hero, about, stack, AI, projects, education, certs, contact/footer)
- Contact form submit → success message renders without overlapping footer
- Day/night toggle flips light sections; navbar stays dark glass in both modes
- AWS/IBM logo 404s found and fixed

## Backlog (prioritized)
- P0: Replace /app/frontend/public/resume.pdf with Sravan's real resume PDF (user uploading next)
- P1: Swap Lucide social icons for user's uploaded brand PNGs (github.png, linkedin.png, envelope.png, LeetCode logo) when provided
- P1: Add Emergent/Vercel/Render/Cursor/Copilot logo files when user provides (currently text chips / CDN icons)
- P2: Direct habit-tracker repo URL for "View on GitHub" (currently links to GitHub profile)
- P2: Optional: Tailwind/Bootstrap/Postman local logo files if user prefers self-hosted assets

## Next tasks
1. Receive resume PDF + social/skill logo uploads from user and wire them in
2. Point habit tracker button at the real repo
