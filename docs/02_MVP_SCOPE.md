# 02 — MVP Scope

## MVP objective

Prove that Gobiverse can deliver one coherent user journey:

> A gamer arrives from search, gets a useful answer or tool, discovers a relevant tournament or gear recommendation, and trusts the freshness and source of the information.

## Foundation milestone (first Replit build)

Build only the following vertical slice:

### Public routes

1. `/` — homepage
2. `/games/mobile-legends` — game hub
3. `/games/mobile-legends/heroes/[slug]` — three representative demo hero pages
4. `/tools/counter-picker` — working counter selection flow using seeded demo data
5. `/tournaments` — list with game, city, date, and status filters
6. `/tournaments/[slug]` — one representative tournament detail
7. `/gear` — curated gear hub
8. `/gear/[slug]` — one representative review/product detail
9. `/about` and `/editorial-policy` — trust pages

### Foundation capabilities

- responsive global header, footer, breadcrumbs, and search entry point;
- database schema and safe seed workflow;
- content provenance and `last verified` display;
- metadata, canonical URLs, Open Graph, sitemap, robots, and JSON-LD;
- accessible loading, empty, error, and 404 states;
- analytics hooks that remain disabled until IDs are supplied through environment variables;
- automated tests and screenshot workflow.

## Demo data restrictions

- Use fictional hero names and abstract placeholder art for the foundation unless licensed assets and verified data are supplied.
- Mark all seed statistics and tournament records as `DEMO` in both the UI and database.
- Demo content must be `noindex` until replaced with verified publishable content.
- Never label seed data as live, official, current, active, or publisher supplied.

## Full MVP after foundation approval

- 30 verified Mobile Legends hero/build/counter pages;
- patch and season model with update history;
- tournament submission form and moderation workflow;
- city and online tournament landing pages that meet the SEO quality gate;
- at least 10 first-hand or editorially reviewed gear pages;
- outbound affiliate click tracking with consent and disclosure;
- lightweight content administration with authenticated editor access;
- Search Console, analytics, error monitoring, backup, and restore procedure.

## Explicitly deferred

- internal checkout and payment gateway;
- inventory, shipping, returns, and order management;
- official game top-up integration;
- user wallet, virtual currency, or financial balance;
- public comments, chat, direct messages, and team recruitment;
- ranking ladders or rewards with monetary value;
- Roblox and Free Fire expansion;
- mobile application.

## Acceptance criteria

The foundation milestone is complete only when:

- every listed route works on mobile and desktop;
- the counter picker performs a real deterministic interaction;
- all demo data is clearly marked and excluded from indexing;
- no copyrighted game art is shipped;
- validation commands pass;
- screenshots and a milestone report are committed;
- the user explicitly approves moving to the next milestone.
