# Gobiverse Agent Instructions

This file is mandatory context for every Replit Agent session.

## Product

- Brand: Gobiverse
- Canonical production domain: `https://gobiverse.com`
- Audience: Indonesian mobile and esports gamers
- Positioning: gaming intelligence, tournament discovery, and content-led gaming commerce
- Tagline: `Main Lebih Cerdas`
- Language: Indonesian for user-facing content; English is acceptable for code identifiers
- This is a legal gaming product. Do not add gambling, casino, betting, jackpot, deposit, or cash-prize wagering features or copy.

## Read before coding

Read every file in `docs/` completely. Treat them as the source of truth in this order:

1. `docs/01_PRODUCT_VISION.md`
2. `docs/02_MVP_SCOPE.md`
3. `docs/03_INFORMATION_ARCHITECTURE_AND_SEO.md`
4. `docs/04_TECHNICAL_ARCHITECTURE.md`
5. `docs/06_GITHUB_REPLIT_WORKFLOW.md`
6. `docs/07_VALIDATION_GATE.md`
7. `docs/08_ROADMAP.md`
8. `docs/09_VISUAL_ASSETS.md`

If instructions conflict, stop, name the conflict, and request a decision. Do not silently choose a different product direction.

## Engineering rules

- Use the current stable versions of the approved stack; pin exact versions in the lockfile.
- TypeScript strict mode is mandatory. Avoid `any` unless justified in a code comment.
- Prefer Server Components and server-side rendering for indexable content.
- Keep interactive client bundles small.
- Validate external input with Zod and enforce server-side authorization.
- Never hard-code secrets. Use Replit Secrets/environment variables.
- Never invent live statistics, tournament status, product prices, or working game codes.
- Demo or seed data must be visibly labelled as demo data and separated from publishable data.
- Store source provenance and verification timestamps for factual content.
- Do not scrape or reuse third-party data/assets unless permission and terms are clear.
- Do not use unlicensed game character artwork, logos, screenshots, or merchandise designs.
- Do not build payment processing, user wallets, game account trading, or top-up fulfillment in the foundation milestone.

## UX rules

- Mobile-first and accessible; keyboard navigation and visible focus states are required.
- Visual direction: cosmic gaming, deep navy, electric cyan, and violet accents.
- Use the approved original assets under `public/assets/gobiverse/` according to `docs/09_VISUAL_ASSETS.md`; do not regenerate or replace them without approval.
- Avoid casino styling such as black-gold luxury, chips, roulette, jackpot effects, or flashing win animations.
- Minimum body text should remain comfortably readable on mobile.
- Every page needs loading, empty, error, and not-found behavior where applicable.

## SEO rules

- One canonical host: `https://gobiverse.com`.
- Never create a separate AMP site or duplicate host.
- Generate unique metadata, canonical tags, crawlable links, sitemap, robots rules, and appropriate JSON-LD.
- Index only useful, complete, verified pages. Draft, search, filter, preview, and thin pages must be `noindex` where appropriate.
- Evergreen URLs must not contain the year unless the year is intrinsic to the event.
- Programmatic pages are allowed only when each page has unique, verified value.

## Delivery rules

- Never commit directly to `main`.
- Work on one `agent/<milestone>` branch at a time.
- Before handoff, run the complete validation gate in `docs/07_VALIDATION_GATE.md`.
- Save desktop and mobile screenshots under `screenshots/<milestone>/`.
- Add a milestone report under `docs/reports/`.
- Stop after each milestone and request approval before starting the next milestone.
