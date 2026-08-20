# 07 — Validation Gate

Every milestone must pass this gate before review. Record results in the milestone report.

## A. Scope and source of truth

- [ ] Implemented work matches the approved milestone.
- [ ] No deferred feature was silently added.
- [ ] Assumptions and decisions are documented.
- [ ] No conflict with `replit.md` or product documents remains unresolved.

## B. Functional

- [ ] Every required route returns the expected page.
- [ ] Navigation and internal links work.
- [ ] Counter picker produces deterministic, testable results.
- [ ] Filters, empty states, errors, and 404 behavior work.
- [ ] Draft/demo records cannot appear as verified production data.

## C. Data quality

- [ ] Every factual record has provenance and verification fields.
- [ ] Demo data is clearly marked in storage and UI.
- [ ] No invented live status, price, code, statistic, rating, or source.
- [ ] Dates, time zones, slugs, and status transitions are tested.

## D. SEO

- [ ] Unique title, description, H1, canonical, and social metadata.
- [ ] Server-rendered primary content is visible without interaction.
- [ ] Sitemap contains canonical indexable pages only.
- [ ] Robots and `noindex` rules protect demo, draft, preview, filter, and admin URLs.
- [ ] Structured data matches visible, verified content and validates.
- [ ] No duplicate AMP, host, path, or parameter pages.
- [ ] Crawlable internal links and useful breadcrumbs exist.

## E. Accessibility and responsive UI

- [ ] Keyboard navigation and visible focus states work.
- [ ] Semantic landmarks, labels, alt text, and heading order are correct.
- [ ] Contrast and touch targets are acceptable.
- [ ] Layout is usable at 390×844 and 1440×900.
- [ ] Reduced-motion preferences are respected.
- [ ] Desktop and mobile screenshots are current.

## F. Performance

- [ ] Images have dimensions and appropriate optimization.
- [ ] No unnecessary client-side rendering or large dependency is introduced.
- [ ] No autoplay media or blocking third-party script.
- [ ] Representative page performance is measured and regressions documented.

## G. Security and privacy

- [ ] No secret is committed or exposed to the client.
- [ ] Environment variables are validated and documented safely.
- [ ] Input is validated and output is safely rendered.
- [ ] Authorization is enforced server-side for non-public operations.
- [ ] Logs and screenshots contain no personal or confidential data.
- [ ] Spam/rate-limit strategy exists for public submissions.

## H. Legal and brand safety

- [ ] No gambling, betting, wagering, casino, or misleading prize mechanic.
- [ ] No unlicensed game art, logo, screenshot, or merchandise design.
- [ ] Editorial references do not imply publisher affiliation.
- [ ] Affiliate/sponsored relationships are clearly disclosed.
- [ ] Contact/takedown path is documented before production.

## I. Engineering quality

- [ ] Dependency install succeeds from the lockfile.
- [ ] Formatting and lint checks pass.
- [ ] Type checking passes.
- [ ] Unit/integration tests pass.
- [ ] Playwright smoke tests pass.
- [ ] Production build passes.
- [ ] Migration and seed commands are repeatable.

Expected commands after scaffolding:

```bash
pnpm install --frozen-lockfile
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

If a command is intentionally different, document the equivalent and the reason.

## J. Approval

- [ ] Milestone report is complete.
- [ ] Changed-file inventory is complete.
- [ ] Known limitations and rollback are stated.
- [ ] User has explicitly approved proceeding.
