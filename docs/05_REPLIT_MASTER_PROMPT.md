# 05 — Replit Master Prompt

Copy the prompt below into Replit Agent after importing the GitHub repository.

---

You are implementing the Gobiverse foundation milestone in `9dbit/Gobiverse`.

First, read `README.md`, `replit.md`, and every document in `docs/` completely. Also inspect `public/assets/gobiverse/manifest.json`. Treat them as the implementation contract. Summarize the contract and list only materially blocking questions. If nothing is blocking, record reasonable assumptions and proceed without waiting.

## Goal

Build the foundation vertical slice defined in `docs/02_MVP_SCOPE.md` for `https://gobiverse.com`: an Indonesian, mobile-first gaming intelligence and content-led commerce platform.

Implement only the foundation milestone. Do not start later roadmap phases.

## Required work

1. Create and work on a feature branch named `agent/foundation-slice` (or a collision-free equivalent). Never commit directly to `main`.
2. Scaffold the approved stack in `docs/04_TECHNICAL_ARCHITECTURE.md`.
3. Implement every foundation public route and state listed in `docs/02_MVP_SCOPE.md`.
4. Use the approved original visual pack in `public/assets/gobiverse/` according to `docs/09_VISUAL_ASSETS.md`. Do not regenerate, replace, recolor, stretch, or bake interface text into these assets.
5. Use fictional, visibly labelled demo data and original abstract placeholders. Do not copy game art or invent live facts.
6. Make the counter picker a real deterministic interaction backed by seeded data, not a static mockup.
7. Implement the SEO, canonical, sitemap, robots, metadata, crawl, and structured-data requirements in `docs/03_INFORMATION_ARCHITECTURE_AND_SEO.md`.
8. Keep all demo routes/data `noindex` until verified production content exists.
9. Add unit/integration tests and Playwright smoke tests for the critical routes and interaction.
10. Add `.env.example`; store actual secrets only in Replit Secrets.
11. Run the complete validation gate in `docs/07_VALIDATION_GATE.md`.
12. Capture desktop (1440×900) and mobile (390×844) screenshots for every public foundation route. Save them in `screenshots/foundation-slice/desktop/` and `screenshots/foundation-slice/mobile/`.
13. Write `docs/reports/foundation-slice.md` containing scope, assumptions, architecture decisions, validation results, known limitations, screenshot index, and proposed next step.

## Design direction

- Modern cosmic gaming visual language.
- Deep navy foundation with restrained electric cyan and violet accents.
- Strong information hierarchy, readable typography, and visible focus states.
- No casino visual language, black-gold jackpot aesthetic, gambling terms, or flashing win effects.
- Do not sacrifice mobile speed or readability for decorative animation.

## Completion behavior

Before declaring completion:

- show the exact validation commands and results;
- show the route inventory;
- show all changed files;
- show the screenshot paths;
- identify any demo, mock, or unverified data;
- confirm that no secrets or copyrighted game assets were committed.

Commit only the validated milestone files to the feature branch with a descriptive commit. Do not merge to `main`, do not deploy production, and do not begin the next milestone. Stop and request review/approval.

---
