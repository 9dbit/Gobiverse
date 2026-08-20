# Foundation Slice Milestone Report

## Scope delivered

This milestone implements the Gobiverse foundation vertical slice from `docs/02_MVP_SCOPE.md`:

- public homepage, Mobile Legends demo hub, three fictional hero detail pages, Counter Picker, tournament listing/detail, gear hub/detail, About, and Editorial Policy;
- mobile-first dark gaming discovery UI using only the approved Gobiverse asset pack;
- deterministic Counter Picker interaction using clearly labelled fictional demo data;
- tournament filters with desktop panel and mobile drawer;
- global header, searchable destination overlay, footer, breadcrumbs, loading, error, empty, and 404 states;
- noindex metadata for all demo content, route-specific canonical and Open Graph URLs, robots controls, sitemap, and site-level Organization JSON-LD;
- Drizzle PostgreSQL schema, generated migrations, safe `.env.example`, and a transactional, idempotent DEMO seed workflow with persisted-row verification and seed-only conflict identities;
- Vitest unit coverage, Playwright route/interaction smoke coverage, and desktop/mobile screenshot capture.

## Assumptions and important decisions

- All strategy, tournament, and gear records are fictional seed content and visibly marked `DEMO`. They are not live, official, publisher-supplied, active, or purchasable.
- Demo routes are deliberately excluded from indexing. The sitemap contains only the foundation trust pages.
- No managed PostgreSQL connection was provided during this milestone. The schema and migration are committed, while `pnpm db:seed` requires `DATABASE_URL` through Replit Secrets and fails explicitly until it is configured.
- The approved visual assets are used without alteration. Hero visuals are CSS-generated abstract placeholders rather than game art.
- Account access, editorial administration, tournament submission, payments, affiliate links, checkout, inventory, and user-generated content remain out of scope.

## Route inventory

| Route | Status |
|---|---|
| `/` | Demo homepage |
| `/games/mobile-legends` | Demo game hub |
| `/games/mobile-legends/heroes/asterion` | Demo hero page |
| `/games/mobile-legends/heroes/nyxara` | Demo hero page |
| `/games/mobile-legends/heroes/voltane` | Demo hero page |
| `/tools/counter-picker` | Deterministic demo tool |
| `/tournaments` | Demo tournament listing with filters |
| `/tournaments/nexushub-campus-cup` | Demo tournament detail |
| `/gear` | Demo gear hub |
| `/gear/aurora-cooler-clip` | Demo gear detail |
| `/about` | Trust page |
| `/editorial-policy` | Trust page |

## Validation results

| Command | Result |
|---|---|
| `pnpm install --frozen-lockfile` | Passed |
| `pnpm db:generate` | Passed; generated `drizzle/0000_legal_mikhail_rasputin.sql`, `drizzle/0001_lively_mister_fear.sql`, and `drizzle/0002_giant_purifiers.sql` |
| `pnpm db:migrate` | Passed against a disposable PostgreSQL database |
| `pnpm db:seed` × 2 | Passed against a disposable PostgreSQL database; each run verified 1 game, 3 heroes, 6 counter relations, 3 tournaments, and 3 gear records |
| Production slug collision | Passed: a pre-existing published `mobile-legends` record caused seeding to fail and remained `published:false` |
| `pnpm format:check` | Passed |
| `pnpm lint` | Passed |
| `pnpm typecheck` | Passed |
| `pnpm test` | Passed: 4 unit tests |
| `pnpm test:e2e` | Passed: 30 desktop/mobile route, interaction, and canonical Open Graph URL tests |
| `pnpm build` | Passed |
| `pnpm screenshots` | Passed: all public routes plus search, counter result, and filter states |

## Changed-file inventory

- Application routes and global styling: `app/**`
- Reusable interface components: `components/**`
- Demo data, site helpers, schema, and unit test: `lib/**`
- Database configuration and generated migrations: `drizzle.config.ts`, `drizzle/**`
- Runtime/configuration: `.replit`, `.env.example`, `.gitignore`, `.prettierignore`, `package.json`, `pnpm-lock.yaml`, `next.config.ts`, `next-env.d.ts`, `tsconfig.json`, `postcss.config.mjs`, `prettier.config.mjs`, `eslint.config.mjs`, `vitest.config.ts`, `playwright.config.ts`
- Automation: `scripts/seed.ts`, `scripts/capture-screenshots.ts`, `tests/foundation.spec.ts`
- Review evidence: `screenshots/foundation-slice/**`, `docs/reports/foundation-slice.md`
- Replit operating instructions and durable environment note: `replit.md`, `.agents/memory/**`

## Screenshot index

Desktop 1440×900:

- `screenshots/foundation-slice/desktop/home.png`
- `screenshots/foundation-slice/desktop/mobile-legends-hub.png`
- `screenshots/foundation-slice/desktop/hero-asterion.png`
- `screenshots/foundation-slice/desktop/hero-nyxara.png`
- `screenshots/foundation-slice/desktop/hero-voltane.png`
- `screenshots/foundation-slice/desktop/counter-picker.png`
- `screenshots/foundation-slice/desktop/counter-picker-result.png`
- `screenshots/foundation-slice/desktop/tournaments.png`
- `screenshots/foundation-slice/desktop/tournaments-filters-open.png`
- `screenshots/foundation-slice/desktop/tournament-detail.png`
- `screenshots/foundation-slice/desktop/gear.png`
- `screenshots/foundation-slice/desktop/gear-detail.png`
- `screenshots/foundation-slice/desktop/about.png`
- `screenshots/foundation-slice/desktop/editorial-policy.png`
- `screenshots/foundation-slice/desktop/home-search-open.png`

Mobile 390×844:

- `screenshots/foundation-slice/mobile/home.png`
- `screenshots/foundation-slice/mobile/mobile-legends-hub.png`
- `screenshots/foundation-slice/mobile/hero-asterion.png`
- `screenshots/foundation-slice/mobile/hero-nyxara.png`
- `screenshots/foundation-slice/mobile/hero-voltane.png`
- `screenshots/foundation-slice/mobile/counter-picker.png`
- `screenshots/foundation-slice/mobile/counter-picker-result.png`
- `screenshots/foundation-slice/mobile/tournaments.png`
- `screenshots/foundation-slice/mobile/tournaments-filters-open.png`
- `screenshots/foundation-slice/mobile/tournament-detail.png`
- `screenshots/foundation-slice/mobile/gear.png`
- `screenshots/foundation-slice/mobile/gear-detail.png`
- `screenshots/foundation-slice/mobile/about.png`
- `screenshots/foundation-slice/mobile/editorial-policy.png`
- `screenshots/foundation-slice/mobile/home-search-open.png`

## Security, privacy, copyright, and SEO checks

- No secret, token, private credential, or database connection is committed.
- `DATABASE_URL` is documented with a safe placeholder only.
- No game logo, character art, publisher screenshot, price, event availability, rating, or code is fabricated.
- All demo content is labelled in data and UI and is prevented from indexing.
- Every public route renders an `og:url` equal to its canonical URL; this is covered by browser regression tests.
- No gambling, betting, wallet, payment, checkout, or account-trading experience was implemented.

## Known limitations

- No managed database or project `DATABASE_URL` is configured, so no persistent project data has been created. The complete migration and two-pass seed workflow was validated against a disposable PostgreSQL database. When configured, run `pnpm db:migrate` followed by `pnpm db:seed`; the seed executes all demo writes in one transaction and fails unless it can verify 1 game, 3 heroes, 6 counter relations, 3 tournaments, and 3 gear records stored as DEMO.
- Data is intentionally limited to three fictional heroes, three tournament examples, and three gear examples.
- Analytics remains disabled; no analytics identifier or external tracking script has been configured.
- The visual system is a foundation implementation; production editorial content still needs verified sources, authorship, and moderation.

## Rollback

All work is isolated to `agent/foundation-slice`. Review and revert the milestone commit on that branch if needed; `main` remains unchanged.

## Proposed next step

After approval, provision the managed PostgreSQL connection through Replit, run `pnpm db:migrate` followed by `pnpm db:seed`, then replace demo content only with verified editorial records that satisfy the publishing and indexing contract.