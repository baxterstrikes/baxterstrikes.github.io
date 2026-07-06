# Build Status — lynnb.design (resume here)

_Last updated: 2026-07-05 (polish-for-launch session)_

## Launch decision (2026-07-05)
Lynn: **no new case studies or narration before launch** — polish what exists, then publish. Items 2–5 of the old "what's next" are POST-launch.

## Polish pass — DONE 2026-07-05
- All prior work committed (was sitting uncommitted for 10 days).
- 9 typos/copy defects fixed in the coursework studies (incl. a duplicated section in Plant Parenthood).
- All 67 coursework image alts rewritten from junk filenames to real descriptions (agents viewed each PNG).
- Footer contrast AA-fixed (`--color-faint` → `#766C5F`, 4.78:1).
- 117 PNGs palette-compressed behind a visual-quality gate: site 36MB → 14MB. Gate skipped 6 (blobs, portrait, flow diagrams) that would degrade.
- Case-study prose images lazy-loaded via `scripts/lazy-images.mjs` post-build step (Astro 7's Sätteri markdown processor has no plugin hook without replacing the image pipeline — don't move this into `astro.config.mjs`).
- Latin Fraunces/Inter woff2 preloaded; `<main>` landmark on case-study pages.
- Verified: 0 horizontal overflow at 320px on all 8 pages; prod Lighthouse home 100/100/100/100, kiddex 99/97/100/100, about 83/100/100/100 (about's LCP is the font-swap repaint under simulated slow-4G — accepted).
- Known/accepted: `heading-order` Lighthouse flag from the h3 opener blocks (Problem space / Solution / Project details) — house style, left alone.
- Flagged for Lynn: tp-11-03 and tp-12-01 are the same screenshot; tp-05-03 sits oddly under the category-search heading.

## Voice + design session (2026-07-05, same day, later)
- **Tone pivot (Lynn's call):** ALL case studies + blurbs rewritten to *elegant minimal utility* — she judged the June maximalist copy "slop," including approved Kiddex/Apocrypha. Wit ≈1 dry beat/page. Calibration samples + full rules in the [[lynn-voice-profile]] memory.
- **Hero (Lynn's own, final):** "Biologist by training, facilities by trade, designer by mutation. I work in that liminal space where adults and children are thrown together to grow into a family."
- **About: rewritten 3× until landed.** Memoir → minimal (="sterile") → warm-slots (="botlike") → **person-talking draft, APPROVED verbatim.** Closes with a mailto (lynnmariebee@gmail.com — she okayed publishing it). Facts re-verified against `~/Touchstone/Dossiers/Self/Employment History.md`.
- **Eyebrow:** "Designer · Caregiver · Builder" (hers). Tab title: "Lynn Baxter — Designer".
- **Fonts:** Fraunces (wonk complaints — it has a literal WONK axis) → **Newsreader Variable** (opsz) display; Inter stays body.
- **About photo:** real couch-sketching photo (`portrait-sketching.jpg`, from her PXL download, gentle crop, 220px rounded rect).
- **Kiddex origin line generalized for privacy** (son, "several allergies" — no allergen list).
- /flavor lens auditioned well (caught AI tells: antithesis density, recycled metaphors, internet idioms) — **not yet a mandatory gate**, Lynn evaluating.

## Deploy target (confirmed 2026-07-05)
lynnb.design is **GitHub Pages** — CNAME → `baxterstrikes.github.io`, serving the July-2022 build. Cutover = push new `dist` to that Pages setup (ideally via Actions workflow building from the Portfolio repo); **no DNS change needed**. Awaiting Lynn's go + repo location/access.

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
- **Home** `src/pages/index.astro` — hero leads with the combined opener (the truest voice hit — lived/relational, not mechanical): *"Biologist by training, designer by mutation. I work in that liminal space where parents and kids are thrown together and forced to grow with each other."* Work is **grouped by maturity** via a `category` frontmatter field (`live` | `wip` | `coursework`), rendered as **Live apps → In progress → Coursework**, skipping empty groups (`.work-group` sections). Currently visible: Live apps = Kiddex; Coursework = Trash Panda / NextBook / Plant Parenthood. **In-progress tier is wired but hidden** (no public WIP item yet — shared-space is still draft; Deviation Index / AI for Moms not built). Nav is **Work · About**. Voice tuned over many passes 2026-06-26; see [[lynn-voice-profile]] memory.
- **Case study** `src/pages/work/[slug].astro` — renders markdown, styled prose, terracotta insight-quotes.
- **Responsive + image pass (2026-06-26):** fluid type scale + fluid spacing/padding (clamp throughout `global.css` and the page styles) so layout transitions smoothly across widths; nav wraps on narrow phones (verified no overflow at 320px). **Image-crispness fitter** (inline script in `Base.astro`) caps every content image at `naturalWidth ÷ devicePixelRatio` and centers it — so low-res old screenshots (~800px) stay sharp on retina instead of stretching blurry, and the Kiddex phone mockups render phone-sized.
- **About** `src/pages/about.astro` — **reworked in the sophisticated voice 2026-06-26.** Lead = *"I came to design sideways."*; body folds in the hard/soft POV (*"problems everyone files under soft… the hard, high-stakes design problems they actually are"*) + the every-perspective ethic. Facts dossier-verified. **TODO (when expanding the "range" section):** add Lynn's hobby/maker channels — **Fogmilk Butterloaf, Prep Lady, Archaosity, Sleepy Stories for Sleepless People** — each has a social-media presence; they're the concrete proof of "range is the entire point."
- Content: `src/content/case-studies/{trash-panda,nextbook,plant-parenthood}.md`; 127 images in `public/assets/`.
- **Kiddex case study (LIVE — approved 2026-06-26)** `src/content/case-studies/kiddex.md` — the keystone, published (draft removed) and in the nav. Deep experiment write-up, **refit to Lynn's house style** (Problem space / Solution to explore / Project details opener; question/action headings; evidence-style italics; "What I learned…" closer). Arc: origin (allergy) → Pocketlore tiered-sharing geometry → built alpha (8-bucket constitutional model) → AI form-filler → "family knower" kill → the June "output primitive" collapse → a self-audit. Reconciled against the **current** Kiddex truth in `~/Crucible/Kiddex/` (June 2026 rebuild).
- **Kiddex mockups (5, embedded)** in `public/assets/kiddex-*.png`: 3 polished full-fidelity app screens (profile, form-filler, share/handoff) + 2 greyscale concept diagrams (sharing-as-distance rings, source-of-truth → outputs). Built as real HTML/CSS using the **exact** rebuild design tokens (`Kiddex/app/src/app/globals.css`) + real Hanken Grotesk, rendered via Chrome headless @2×. Demo family is **fictional** (Theo, Mia) to protect the real kids. Source HTML in this session's scratchpad (`/mockups`). NOT screenshots of the half-built rebuild app (it's still at the SaaS-starter stage).
- **Apocrypha case study (LIVE — 2026-06-26)** `src/content/case-studies/apocrypha.md` — the household/personal AI operating system (multi-agent platform built on the open-source Hermes framework; sealed per-person profiles). **Renamed from "Hermes"** (that's the dependency framework, not her system). **Reworked from a D+ first draft to Kiddex-grade:** specific war stories + critical self-analysis — the pre-AI origin (a manual Obsidian tags-and-queries OS that hit its wall), the "I built the wrong thing first" reckoning, the 3 over-engineering kills (git vault / custom permissions / routing rulebook), the honest half-built state + bespoke-system risk. Privacy-careful (design/architecture only — kids/meds/practice/infra all kept out; the SOUL is full of them). **2 visuals embedded:** `apocrypha-chat.png` (full-fidelity dark phone chat — privacy-safe demo, carries the voice) + `apocrypha-arch.png` (greyscale sealed-profile architecture, 2 live / 2 configured). Source docs: `~/Documents/Lynn/Administrative/References/Apocrypha North Star.md` + `Hermes Architecture Map.md`; `~/Documents/Lynn/Projects/Hermes Agent Exploration/` (Apocrypha SOUL + decision log); `~/Documents/Lynn/Projects/Household Machine/README.md`. Mockup HTML in this session's scratchpad `/mockups`. **Voice regenerated heavy (2026-06-26)** — dark wit as default, archaic/liturgical vocab, one meme, food metaphor; edgiest lines flagged to Lynn ("hit by a bus", "I'm not a monster"). **New closing section "What 'done' looks like — and what it fixes"** — a forward-looking *proposed end-state* mapping each surfaced gap to its fix (wire the 2 inert agents · wire the dependency graph so the house stops failing in silence · run without Lynn as dispatcher), ending on the honest "still mine" tradeoff.
- **Live-Apps pattern (established on Apocrypha):** live/in-flight products end NOT on "What I learned" but on a **proposed-finished section** (what "done" looks like + how it resolves the issues just admitted). Coursework studies stay retrospective. ✅ **Both live apps now close forward** — Kiddex got its "What 'done' looks like — and what it fixes" section (output-primitive finished state: every output an adapter · the credentials wall tested not just sworn · a real beta that meets a stranger). Concept diagrams cleaned up 2026-06-26 (kiddex-output redrawn with eased branch arrows + in-row Credentials lock; kiddex-distance decluttered).
- **Work ordering:** within each tier, `order` frontmatter (number) controls sequence (Live apps: Kiddex `order: 1`, Apocrypha `order: 2`). Unset → sorts last.
- **Shared-space placeholder (DRAFT)** `src/content/case-studies/shared-space.md` — stub for the childcare/coworking ("kid hotel") concept. Holds the seed + the questions it must answer. Hers to define.
- **Draft mechanism:** `draft: true` frontmatter (schema in `content.config.ts`) hides a study from the Home list (`index.astro` filters it) but still builds its page, so drafts are reviewable at their URL without leaking publicly.

## What's next (priority order)
1. ✅ **Kiddex — DONE:** approved, published, in nav; 5 mockups embedded; responsive + image-crispness pass shipped.
2. **Childcare/coworking ("kid hotel")** — develop the stub into a real net-new design case study. Hers to define.
3. **Deviation Index** as a systems-design case study.
4. **Narration section** — 2 Audible titles (Amazing Stories, Gallant Ghosts) + embedded sample players.
5. **AI for Moms** entry; optional small **"Also makes"** range strip (Fogmilk Butterloaf et al.).
6. Copy polish · full mobile/responsive pass · QA (Lighthouse + axe a11y) · launch (deploy + cut `lynnb.design` over from the old build; hosting TBD).

## Open questions for Lynn
- **Kiddex origin — CONFIRMED 2026-06-25:** discovering her son's severe **peanut** allergy, then later **several grasses + canine dander**. Used as the galvanizing moment in the Kiddex case study; child kept **unnamed** on the public site (a Kiddex value). Still kept out of the About proper.
- **Privacy call on Kiddex — effectively resolved** by Lynn's approval of the published version, which downplays personal custody specifics and foregrounds allergy-safety + multi-caregiver coordination. Revisit only if she later wants the co-parenting/professional-market angle pushed harder.
- The **childcare/coworking case study** is stubbed (`shared-space.md`) but still hers to define.

## Working agreement
Start now, steady pace, integrity each step, don't stop until done. No fabricated estimates. Use her dossier (`~/Touchstone/Dossiers/`) for any personal facts.
