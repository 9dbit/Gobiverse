# 10 — UI Design System

## Direction

Gobiverse should feel like a fast, premium gaming discovery interface: dark, visual, compact, and easy to scan. The interaction model may take inspiration from the public usability patterns visible on [Instant Gaming](https://www.instant-gaming.com/en/)—prominent search, quick categories, feature artwork, horizontal discovery rails, strong badges, and dense cards—but the implementation must be an original Gobiverse design.

This is a reference for interface rhythm, not permission to copy a website.

## Non-copy guardrail

Do not copy or closely reproduce Instant Gaming's:

- logo, wordmark, brand colors, font files, icons, illustrations, screenshots, product artwork, or copy;
- exact header, card, hero, grid, footer, filter, or checkout geometry;
- CSS, JavaScript, DOM structure, animation timing, breakpoints, or component implementation;
- game-key marketplace language or purchase flow.

Use only Gobiverse assets, content, tokens, components, and information architecture. Gobiverse is a gaming intelligence and content-led commerce platform—not a digital game-key reseller.

## Experience principles

1. **Visual first:** imagery establishes the topic; HTML text communicates meaning.
2. **Answer first:** utility, verification status, and next action appear before long editorial copy.
3. **Scan in seconds:** titles, tags, patch/status, and primary CTA remain recognizable at a glance.
4. **Dense, not cramped:** show useful choices without shrinking body text or touch targets.
5. **Mobile is primary:** horizontal rails and filter drawers must feel intentional, not like collapsed desktop UI.
6. **Trust is visible:** demo, source, verification date, affiliate disclosure, and availability status cannot be hidden.

## Visual tokens

Use the canonical colors from `docs/09_VISUAL_ASSETS.md` with these semantic roles:

| Token role | Value | Usage |
|---|---|---|
| Page background | `#050b1c` | Global canvas |
| Header background | `rgba(5, 11, 28, 0.92)` | Sticky header with backdrop blur |
| Surface | `#111827` | Cards, search, filter controls |
| Elevated surface | `#182235` | Hovered cards, drawers, popovers |
| Primary text | `#f2f7ff` | Headings and important values |
| Secondary text | `#a9b5ca` | Metadata and supporting copy |
| Brand/focus | `#20d9ff` | Focus ring, active navigation, links |
| Supporting accent | `#8b3dff` | Gradients and selected content cues |
| Action/status accent | `#ff6b35` | Primary CTA, deadline, verified price |
| Success | `#36d399` | Verified/available states only |
| Warning | `#f6c85f` | Expiring/unverified warnings |
| Danger | `#ff5f6d` | Error, closed, unavailable |

Orange must not replace cyan as the Gobiverse identity color. Use orange sparingly to create the high-contrast action rhythm associated with gaming storefronts.

## Typography and shape

- Use a locally served or framework-supported open font; do not retrieve Instant Gaming's font.
- Display headings: bold, compact, slightly tightened tracking.
- Body text: minimum `16px` on mobile, line-height at least `1.5`.
- Metadata: minimum `13px`; never use low-contrast gray for essential status.
- Content max width: `1320px`; normal page gutters `20px` mobile, `32px` tablet, `40px` desktop.
- Card radius: `16px`; hero radius: `22px`; controls: `12px`; pills: fully rounded.
- Borders are subtle cyan-gray at low opacity; use elevation and surface contrast before heavy outlines.
- Focus ring: visible `2px` cyan with offset on every interactive element.

## Global navigation

### Desktop

- Sticky header, approximately `72px` high.
- Left: Gobiverse emblem and wordmark.
- Center: large search field with placeholder `Cari hero, build, counter, turnamen, atau gear…`.
- Right: compact utility actions; do not show cart or account until those features exist.
- Secondary category row: `Meta`, `Build`, `Counter`, `Turnamen`, `Gear`, and `Artikel`.
- Active category uses cyan text/indicator; primary CTA uses restrained orange.

### Mobile

- Top bar: emblem/wordmark, search trigger, and menu.
- Search expands into a full-width overlay with recent and suggested destinations.
- Use a five-item bottom navigation only for implemented destinations: `Beranda`, `Build`, `Counter`, `Turnamen`, `Gear`.
- Respect safe-area insets. Minimum interactive target is `44×44px`.

## Homepage composition

Implement this order:

1. **Sticky header and category row**
2. **Feature hero** using the supplied responsive homepage artwork
3. **Popular tools rail**: Counter Picker, Build Explorer, and Tournament Finder
4. **Meta & build populer rail** using clearly labelled demo cards
5. **Tournament discovery feature** plus compact tournament cards
6. **Gaming gear feature** plus curated gear cards
7. **Trust strip**: source-backed, last verified, transparent affiliate policy
8. **Editorial rail** for guides and updates
9. **Compact SEO/trust footer**

Do not autoplay the hero. If multiple feature panels are implemented, provide manual controls, pause behavior, keyboard access, reduced-motion support, and server-rendered first-panel content.

## Hero specification

- Desktop target: wide composition between `2.2:1` and `2.5:1`; minimum visible height `420px` at 1440px viewport.
- Mobile target: `4:5` or taller crop using the supplied mobile image; keep essential copy above the fold.
- Copy sits on the left over a strong navy gradient. Artwork focal point remains right/lower-middle.
- Content: eyebrow, one clear H1, maximum two-line supporting copy, one primary CTA, one secondary link, and optional trust/status line.
- Do not place tiny metadata, crowded badges, or a fake price/discount on the hero.

## Card families

### Guide/build card

- Image-dominant card with a `4:5` or `3:4` visual area.
- Overlay or footer contains hero/topic name, role, patch/demo badge, verification status, and one concise outcome.
- Entire card is clickable with a visible focus state.

### Tool card

- Wider `16:10` card with icon/illustration, task-based title, one-sentence promise, and direct CTA.
- Show interaction state or example output, not decorative statistics.

### Tournament card

- Poster/feature image, game, city/online, start date, registration deadline, and verified/demo status.
- Orange may highlight a real closing deadline; red is reserved for closed/cancelled.
- Never label a demo event as open or currently available.

### Gear card

- Original product/editorial image, product name, category, use case, review status, and disclosure.
- Show price or discount only when backed by a source URL and retrieval timestamp.
- Affiliate CTA must be visibly disclosed and must not dominate editorial judgment.

### Editorial card

- Use the square fallback artwork when no approved image exists.
- Show category, title, summary, author/reviewer, and last-verified date.

## Rails, grids, and filters

- Desktop rails show four to five cards depending on content type, with explicit previous/next controls when overflow exists.
- Mobile rails use horizontal snap scrolling, visible partial next card, and no hidden drag-only interaction.
- Avoid layout shift when cards load; reserve image and text space.
- Listing pages use a responsive grid: one column on narrow mobile, two on large mobile/tablet, three or four on desktop.
- Filters appear as a left panel on wide screens and an accessible bottom sheet/drawer on mobile.
- Active filters remain visible as removable chips. Include clear-all and result count.
- Sorting must use truthful dimensions such as relevance, newest verified, deadline, or price when available—never fake popularity.

## Route-specific patterns

### Game hub

- Feature banner, game title, demo/verification status, patch context, and shortcut chips.
- Follow with popular utilities, role filters, hero/build grid, and related editorial content.

### Hero/build detail

- Breadcrumbs, visual header, H1, role/status badges, last verified, source summary, and primary utility action.
- Sticky in-page tabs may link to overview, build, counters, and notes; every tab must remain crawlable and keyboard accessible.

### Counter Picker

- Treat as a focused tool, not a content card grid.
- Clear step indicator, large searchable selection, deterministic results, reason/explanation, reset action, and demo disclosure.
- On mobile, keep the current selection and primary action within easy thumb reach.

### Tournaments

- Feature banner followed by result count, filters, and card/list display.
- Status labels must distinguish demo, unverified, registration open, closed, cancelled, and completed.

### Gear

- Feature banner followed by category shortcuts, methodology/disclosure link, and curated grid.
- The interface may feel commerce-ready but must not expose cart or checkout until that milestone is approved.

## Motion and interaction

- Card hover: small elevation/translate only; maximum `180ms` for standard transitions.
- Do not zoom artwork aggressively, flash badges, or use infinite ambient motion.
- Honor `prefers-reduced-motion`.
- Loading states use reserved skeleton shapes without pulsing at high contrast.
- Every carousel, drawer, filter, search overlay, and tab has keyboard, Escape, focus-management, and screen-reader behavior.

## Responsive screenshot acceptance

At minimum, validate and capture:

- homepage at `1440×900` and `390×844`;
- open desktop search suggestions and mobile search overlay;
- one populated rail and its mobile horizontal overflow;
- filter panel on desktop and filter drawer on mobile;
- Counter Picker initial and result states;
- loading, empty, error, demo, and 404 states where applicable.

The screenshot review must check hierarchy, crop/focal point, text contrast, card density, touch targets, overflow, filter usability, demo labelling, and the absence of copied third-party branding/assets.
