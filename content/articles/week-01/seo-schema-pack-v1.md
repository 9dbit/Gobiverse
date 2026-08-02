# Week 01 SEO Schema Pack v1

Use this only after replacing every `{{PLACEHOLDER}}`. The FAQ content must remain visibly present on the published page. Rich-result display is not guaranteed.

## Shared JSON-LD template

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "{{CANONICAL_URL}}#article",
      "headline": "{{HEADLINE}}",
      "description": "{{META_DESCRIPTION}}",
      "image": ["{{ABSOLUTE_HERO_URL}}"],
      "datePublished": "{{DATE_PUBLISHED_ISO}}",
      "dateModified": "{{DATE_MODIFIED_ISO}}",
      "inLanguage": "id-ID",
      "isAccessibleForFree": true,
      "author": {"@type": "Person", "name": "{{HUMAN_AUTHOR}}"},
      "reviewedBy": {"@type": "Person", "name": "{{HUMAN_REVIEWER}}"},
      "publisher": {"@type": "Organization", "name": "GOBI88", "url": "{{SITE_ORIGIN}}"},
      "mainEntityOfPage": {"@type": "WebPage", "@id": "{{CANONICAL_URL}}"},
      "audience": {"@type": "PeopleAudience", "suggestedMinAge": 21}
    },
    {
      "@type": "BreadcrumbList",
      "@id": "{{CANONICAL_URL}}#breadcrumbs",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "{{SITE_ORIGIN}}/"},
        {"@type": "ListItem", "position": 2, "name": "{{HUB_NAME}}", "item": "{{SITE_ORIGIN}}{{HUB_PATH}}"},
        {"@type": "ListItem", "position": 3, "name": "{{SHORT_TITLE}}", "item": "{{CANONICAL_URL}}"}
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "{{CANONICAL_URL}}#faq",
      "mainEntity": [
        {"@type": "Question", "name": "{{FAQ_1_Q}}", "acceptedAnswer": {"@type": "Answer", "text": "{{FAQ_1_A}}"}},
        {"@type": "Question", "name": "{{FAQ_2_Q}}", "acceptedAnswer": {"@type": "Answer", "text": "{{FAQ_2_A}}"}},
        {"@type": "Question", "name": "{{FAQ_3_Q}}", "acceptedAnswer": {"@type": "Answer", "text": "{{FAQ_3_A}}"}}
      ]
    }
  ]
}
```

## Page mapping

| ID | Hub name/path | Article path | Hero |
|---|---|---|---|
| A01 | Slot Game `/slot-game/` | `/slot-game/cara-kerja-slot-game/` | `hero-a01-slot-flow-v1.png` |
| A02 | Poker `/poker/` | `/poker/urutan-kartu-poker/` | `hero-a02-poker-ranking-v1.png` |
| A03 | Mitos Casino `/mitos-casino/` | `/mitos-casino/mitos-jam-gacor/` | `hero-a03-jam-gacor-myth-v1.png` |
| A04 | Blackjack `/blackjack/` | `/blackjack/aturan-blackjack-pemula/` | `hero-a04-blackjack-rules-v1.png` |
| A05 | Edukasi Casino `/edukasi-casino/` | `/edukasi-casino/apa-itu-casino-game/` | `hero-a05-casino-categories-v1.png` |
| A06 | Spin Wheel `/spin-wheel/` | `/spin-wheel/cara-kerja-roulette/` | `hero-a06-roulette-v1.png` |
| A07 | Money Management `/money-management/` | `/money-management/entertainment-budget/` | `hero-a07-budget-limits-v1.png` |

## Validation gate

- Replace all placeholders; unresolved template strings block deployment.
- Author and reviewer must be real named people.
- Canonical and image URLs must be absolute HTTPS URLs.
- JSON must pass Schema.org and Google Rich Results validation where applicable.
- Do not mark up FAQ answers that are hidden or materially different from visible copy.
