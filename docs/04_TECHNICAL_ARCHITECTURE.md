# 04 — Technical Architecture

## Approved foundation stack

- current stable Next.js with App Router;
- TypeScript in strict mode;
- Tailwind CSS with a small token-based design system;
- PostgreSQL using Replit’s managed database when available;
- Drizzle ORM and migrations;
- Zod for input and environment validation;
- Vitest for unit/integration tests;
- Playwright for route and responsive smoke tests;
- pnpm with a committed lockfile.

Do not replace this stack without documenting the reason and receiving approval.

## Rendering strategy

- Server Components by default.
- Server-rendered or statically generated indexable pages.
- Client Components only for interactive controls such as filters and counter selection.
- Cache and revalidation must never present stale data as current without showing the verification timestamp.

## Core data entities

- `Game`
- `GamePatch`
- `Hero`
- `HeroBuild`
- `HeroCounter`
- `Tournament`
- `TournamentSubmission`
- `GearProduct`
- `GearReview`
- `SourceRecord`
- `EditorialRevision`

Publishable factual entities should support:

- `status`: `draft | review | published | archived`;
- `sourceUrl`, `sourceTitle`, `retrievedAt`;
- `verifiedAt`, `verifiedBy`;
- created and updated timestamps;
- slug uniqueness and revision history where relevant.

## Content and administration

- Public routes must never expose draft records.
- Tournament submissions default to `review` or `pending`; they are never auto-published.
- Use Replit Auth or another approved provider for editor access. If the available auth approach is unclear, stop and request a decision instead of creating custom insecure authentication.
- All write operations require server-side authorization and validation.

## Security and privacy

- No secrets in source control, logs, screenshots, or client bundles.
- Apply rate limiting and anti-spam controls to public submissions.
- Collect the minimum personal data necessary.
- Do not request game passwords, NIK, payment credentials, or unrelated identity documents.
- Sanitize rich text and protect against XSS, CSRF, injection, and open redirects.
- Add clear privacy, editorial, affiliate, and takedown/contact paths before production.

## Performance budget

- mobile-first implementation;
- avoid autoplay video and heavy decorative animation;
- optimize images with explicit dimensions;
- minimize third-party scripts;
- target good Core Web Vitals on representative mobile hardware;
- keep the counter tool responsive without loading the entire application dataset client-side.

## Environment variables

Document variables in `.env.example` with safe placeholders. Expected categories:

- database connection;
- canonical site URL;
- approved authentication configuration;
- analytics IDs;
- optional affiliate configuration.

Never commit real values.

## Observability and recovery

- structured server logs without sensitive payloads;
- error boundary and production error monitoring hook;
- database migration and rollback notes;
- seed command that is idempotent and clearly separates demo from production content;
- backup/restore procedure before production writes are enabled.
