# Build Status — lynnb.design (resume here)

_Last updated: 2026-06-25_

## What this is
Lynn Baxter's personal/professional portfolio. Rebuilt from scratch on Astro after recovering the content from a dead Gatsby + Contentful stack. Target audience: **product-design roles at progressive edtech / family-tech.** Full strategy in `BRIEF.md`.

## Stack
- **Astro 7** (fresh scaffold). Old Gatsby app archived at `~/Crucible/Portfolio-gatsby-legacy/`.
- Self-hosted variable fonts: `@fontsource-variable/fraunces` (display) + `@fontsource-variable/inter` (body).
- Content is **in-repo markdown** — no CMS (Contentful retired).
- Runs on default Node (node@25 is fine for Astro — unlike old Gatsby, which needed node@20).

## How to run
- Preview tool: `preview_start` config **"portfolio"** (in `~/Crucible/.claude/launch.json`), or
- `npm run dev --prefix ~/Crucible/Portfolio` → http://localhost:4321

## Design system
"Warm editorial (A) + tech-forward discipline (B)." Tokens in `src/styles/global.css`: paper `#FAF6EF`, ink `#26211C`, terracotta accent `#A8481F`, Fraunces display + Inter body. `src/layouts/Base.astro` holds the nav (Work / About) + footer + a11y (focus-visible, reduced-motion).

## What's built
- **Home** `src/pages/index.astro` — lists the 3 recovered case studies.
- **Case study** `src/pages/work/[slug].astro` — renders markdown, styled prose, terracotta insight-quotes.
- **About** `src/pages/about.astro` — bio verified against the dossier; weaves the "build calm things for kids" thread (Kiddex + Fogmilk Butterloaf YouTube + the childcare space).
- Content: `src/content/case-studies/{trash-panda,nextbook,plant-parenthood}.md`; 127 images in `public/assets/`.

## What's next (priority order)
1. **Narration section** — 2 Audible titles (Amazing Stories, Gallant Ghosts) + embedded sample players.
2. **Flagship case studies (Task 12 — needs Lynn's input):** Kiddex (the keystone), the NEW childcare/coworking concept (net-new design), Deviation Index as a systems-design study.
3. **AI for Moms** entry; optional small **"Also makes"** range strip (Fogmilk Butterloaf et al.).
4. Copy polish · full mobile/responsive pass · QA (Lighthouse + axe a11y) · launch (deploy + cut `lynnb.design` over from the old build; hosting TBD).

## Open questions for Lynn
- Confirm the **Kiddex-from-pistachio-allergy** origin (currently kept out of the About).
- The **new childcare/coworking case study** is hers to define before it can be built.

## Working agreement
Start now, steady pace, integrity each step, don't stop until done. No fabricated estimates. Use her dossier (`~/Touchstone/Dossiers/`) for any personal facts.
