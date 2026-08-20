# 03 — Information Architecture & SEO

## Canonical host

- Production canonical: `https://gobiverse.com`
- Redirect `www.gobiverse.com` to the apex domain.
- Redirect Replit’s public subdomain to the canonical host when supported, or prevent it from being indexed.
- Never publish a separate AMP domain.

## Intended route architecture

```text
/
/games/mobile-legends
/games/mobile-legends/heroes/[hero-slug]
/games/mobile-legends/builds/[hero-slug]
/games/mobile-legends/counters/[hero-slug]
/games/mobile-legends/patches/[patch-slug]
/tools/counter-picker
/tools/draft-simulator
/tournaments
/tournaments/[tournament-slug]
/tournaments/game/[game-slug]
/tournaments/city/[city-slug]
/gear
/gear/[category-slug]
/gear/reviews/[product-slug]
/shop                         # future
/about
/editorial-policy
/affiliate-disclosure
```

Do not create indexable filter combinations or city/game pages until they contain unique listings and useful editorial context.

## Initial keyword clusters

### Mobile Legends utility

- counter hero `[name]`;
- build `[name]` berdasarkan patch;
- emblem dan battle spell `[name]`;
- tier list per role and rank;
- draft simulator and counter picker.

### Tournament discovery

- turnamen Mobile Legends online;
- turnamen Mobile Legends `[city]`;
- pendaftaran turnamen esports;
- turnamen pelajar, kampus, and community.

### Commercial investigation

- rekomendasi phone cooler;
- mouse/keyboard/headset gaming by budget;
- gaming gear for specific device and use case;
- original comparisons with test methodology.

## Page quality contract

An indexable page must have:

- a clear user task and unique primary content;
- verified factual data with source records;
- visible author/reviewer and last-verified date;
- unique title, description, H1, and canonical;
- contextual internal links;
- no misleading “latest”, “official”, “active”, “best”, or “cheapest” claim;
- no copied publisher or competitor content;
- acceptable performance and accessibility.

If the contract is not met, the page remains draft and `noindex`.

## Structured data

Use only markup that matches visible content:

- `Organization` and `WebSite` at site level;
- `BreadcrumbList` on hierarchical pages;
- `Article`/`Review` for editorial gear pages;
- `Event` for verified tournament details;
- `Product` and `Offer` only when Gobiverse genuinely offers the product and price/availability are current;
- `VideoObject` only for owned or properly embedded video.

Never create fake ratings, aggregate reviews, prices, event availability, or FAQ markup.

## Crawl and index controls

- XML sitemap contains canonical, indexable URLs only.
- Drafts, previews, internal search, filter parameters, admin, and demo content are excluded.
- Pagination must use crawlable links.
- Deleted content returns `404`/`410`; redirect only to a genuinely equivalent replacement.
- Use server-rendered HTML for indexable primary content.

## Internal linking

- hero page → build, counter, patch, and related heroes;
- counter tool result → relevant hero explanation pages;
- tournament → game and city hubs;
- gear guide → relevant comparison and product/review pages;
- every indexable page must be reachable through crawlable navigation.

## Measurement

Track separately:

- non-brand impressions and clicks;
- indexable URLs and exclusion reasons;
- tool completion rate;
- tournament detail and outbound registration clicks;
- gear review to merchant clicks;
- returning visitors;
- Core Web Vitals and crawl errors.

Do not set traffic guarantees. Expansion decisions must follow verified Search Console query and conversion data.
