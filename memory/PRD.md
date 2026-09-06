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

## Implemented (2026-09-06, v2 motion pass)
- Hero v2 (per user's reference screenshot): left-aligned text column ("Hi, I'm" / "Sravan." stacked, rotating "Currently, a {role}"), right photo card with 4 floating colorful icon badges (Sparkles/User/Check/Code), "Venkat Sravan" + "Chennai · India" labels, SRAVAN DEV marquee behind both
- Motion pass: scroll-linked parallax (headline > photo > badges > marquee speeds), word-by-word headline reveals (About/Stack/AI/Projects/Certs/Contact), magnetic buttons (Resume/Send/Visit/GitHub/Back-to-top), 0→46% count-up in KBS outcome, ambient gradient drift on all dark panels, cursor spotlight on dark sections only, spring-overshoot nav pill, staggered beats/checklist/chips
- "How I Build" signature section: ambient drifting mesh, marching-dash path + 2 traveling glow dots (SMIL animateMotion), sequential node pulse with scale, staggered tool chips
- Stack section: paper texture (noise + fiber lines) instead of flat white
- Footer v2: gradient hairline, copy-email chip (Copied state), back-to-top pill, social row right, credit "Sravan · Built with care." (no Chennai)
- Certifications: user-provided Google logo (centered in white badge)
- resume.pdf is now the REAL uploaded resume (was placeholder)
- prefers-reduced-motion: parallax/spotlight/drift/pulse dots disabled, fades intact
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
- P1: Swap Lucide social icons for user's uploaded brand PNGs (github.png, linkedin.png, envelope.png, LeetCode logo) when provided
- P1: Add Emergent/Vercel/Render/Cursor/Copilot logo files when user provides (currently text chips / CDN icons)
- P2: Direct habit-tracker repo URL for "View on GitHub" (currently links to GitHub profile)
- P2: Optional: Tailwind/Bootstrap/Postman local logo files if user prefers self-hosted assets

## Next tasks
1. Receive resume PDF + social/skill logo uploads from user and wire them in
2. Point habit tracker button at the real repo
