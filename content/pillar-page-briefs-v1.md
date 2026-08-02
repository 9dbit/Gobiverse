# GOBI88 — Eight Pillar-Page Briefs v1

**Status:** Draft-ready  
**Audience:** Adults 21+  
**Editorial parent:** [Casino Game Education Editorial Plan](editorial-article-plan-v1.md)

Every pillar answers one broad learning need, owns a distinct article cluster, and avoids commercial gambling CTAs.

## 1. Casino Game Education Hub

- **Slug:** `/edukasi-casino/`
- **H1:** Panduan Edukasi Casino Game untuk Pemula
- **Primary intent:** Understand casino-game categories, terminology, rules, and mathematical differences.
- **Core promise:** A neutral map of chance games, mixed skill/chance games, table games, machine games, live games, and RNG games.
- **Required modules:** category map; rules vs mathematics vs session result; house edge; live vs RNG; information-sheet checklist; glossary; responsible-play notice.
- **Children:** casino-game types, RNG vs live dealer, house edge, odds vs payout, reading rules.
- **Interactive asset:** game-mechanic selector that returns educational reading—not a game recommendation.
- **CTA:** “Pilih mekanisme yang ingin GOBI jelaskan berikutnya.”
- **Schema:** `Article`, `BreadcrumbList`, reviewed `FAQPage` where eligible.
- **Risk:** High; 21+, jurisdiction review, no operator links.

## 2. Slot Game Hub

- **Slug:** `/slot-game/`
- **H1:** Panduan Slot Game: RNG, RTP, Volatilitas, dan Fitur
- **Primary intent:** Learn how slot mechanics and information screens work.
- **Core promise:** Explain outcomes without patterns, predictions, or guaranteed-return language.
- **Required modules:** request-to-result flow; reels/symbols; paytable; RNG; RTP; volatility; hit frequency; paylines/ways; features; myth cards.
- **Children:** RNG, RTP, volatility, hit frequency, paylines, wild/scatter, cascades, bonus buy, maximum win.
- **Interactive asset:** educational RTP/sample-size visualizer with a prominent “not a session forecast” label.
- **CTA:** “Simpan istilah yang paling sering tertukar.”
- **Schema:** `Article`, `BreadcrumbList`, glossary anchors.
- **Risk:** High; no “gacor”, live-RTP, provider ranking, deposit, or prediction CTA.

## 3. Poker Education Hub

- **Slug:** `/poker/`
- **H1:** Belajar Poker: Aturan, Hand Ranking, dan Dasar Keputusan
- **Primary intent:** Learn poker rules and decision vocabulary.
- **Core promise:** Separate skillful decisions from short-run card variance.
- **Required modules:** hand ranking; Hold'em streets; position; legal actions; pot; showdown; pot odds; cash vs tournament; tilt; bankroll separation.
- **Children:** hand ranking, Texas Hold'em basics, position, pot odds, formats, starting hands, tilt.
- **Interactive asset:** no-money hand-ranking quiz.
- **CTA:** “Uji pemahaman hand ranking tanpa mempertaruhkan apa pun.”
- **Schema:** `Article`, `BreadcrumbList`, `Quiz` only if supported.
- **Risk:** Medium-high; no income promise, collusion advice, or unlicensed-platform direction.

## 4. Blackjack Education Hub

- **Slug:** `/blackjack/`
- **H1:** Belajar Blackjack: Aturan, Nilai Kartu, dan Keputusan Dasar
- **Primary intent:** Understand card values, actions, dealer rules, and variant differences.
- **Core promise:** Teach rule literacy before discussing mathematical decisions.
- **Required modules:** objective; card values; hit/stand/double/split; dealer procedure; blackjack payout; soft/hard hand; bust; side bets; variant checklist.
- **Children:** beginner rules, soft vs hard, dealer rules, 3:2 vs 6:5, basic strategy limits, insurance/side bets.
- **Interactive asset:** rules-only hand-state trainer with no wager or balance simulation.
- **CTA:** “Bandingkan rules sebelum membandingkan keputusan.”
- **Schema:** `Article`, `BreadcrumbList`, reviewed FAQs.
- **Risk:** High; no guaranteed basic-strategy result, progression, or card-counting promotion.

## 5. Spin Wheel and Roulette Hub

- **Slug:** `/spin-wheel/`
- **H1:** Spin Wheel dan Roulette: Cara Kerja, Peluang, dan Varian
- **Primary intent:** Understand physical-wheel and RNG-wheel structures.
- **Core promise:** Show how segments, pockets, payout, and probability connect.
- **Required modules:** physical vs digital; equal vs weighted segments; roulette layout; inside/outside bets; single/double zero; independence; payout-vs-probability table.
- **Children:** roulette basics, European vs American, inside vs outside, prior-spin myth, weighted digital wheels.
- **Interactive asset:** probability visualizer using fictional non-wagering units.
- **CTA:** “Pelajari struktur peluang, bukan urutan hasil.”
- **Schema:** `Article`, `BreadcrumbList`.
- **Risk:** High; no wheel predictor, dealer-signature claim, or staking system.

## 6. RTP and Probability Hub

- **Slug:** `/rtp-dan-probabilitas/`
- **H1:** Memahami RTP, House Edge, dan Probabilitas Game
- **Primary intent:** Understand long-run metrics and their limits.
- **Core promise:** Clearly separate theoretical model, observed aggregate, and individual session.
- **Required modules:** RTP; house edge; probability; variance; volatility; sample size; theoretical vs actual RTP; game-specific data source.
- **Children:** RTP explained, RTP vs volatility, hit frequency, house edge vs RTP, sample size, variance.
- **Interactive asset:** long-run simulation labelled as illustration, never prediction.
- **CTA:** “Simpan sebagai kamus matematika game.”
- **Schema:** `Article`, `BreadcrumbList`, `DefinedTermSet` where supported.
- **Risk:** High; no live-RTP prediction or fabricated percentages.

## 7. Casino Myths Hub

- **Slug:** `/mitos-casino/`
- **H1:** Mitos Casino dan Slot: Jam Gacor, Pola, dan Near Miss
- **Primary intent:** Fact-check popular prediction claims.
- **Core promise:** Turn high-interest myths into evidence-led explanations.
- **Required modules:** claim; verdict; mechanism; why it feels plausible; what evidence would be required; safer action; sources.
- **Children:** jam gacor, streaks, near miss, autoplay myths, hot/cold machines, gambler's fallacy.
- **Interactive asset:** Myth/Fact voting card followed by explanation.
- **CTA:** “Kirim mitos untuk diuji—bukan untuk dipercaya.”
- **Schema:** `Article`, `BreadcrumbList`; avoid unsupported claim-review markup.
- **Risk:** Very high; myth wording must never appear as an endorsed prediction.

## 8. Money Management Hub

- **Slug:** `/money-management/`
- **H1:** Money Management untuk Anggaran Hiburan
- **Primary intent:** Set pre-committed money and time boundaries.
- **Core promise:** Reduce exposure and recognize harm; never frame limits as a profit system.
- **Required modules:** essential-funds firewall; entertainment budget; session cap; time cap; stop rule; no borrowing; no chasing; transaction tools; self-exclusion; support resources.
- **Children:** informed-play checklist, entertainment budget, session plan, chasing losses, time-outs, support.
- **Interactive asset:** private offline budget worksheet with no account, operator, or deposit connection.
- **CTA:** “Tetapkan batas sebelum mulai—berhenti saat batas tercapai.”
- **Schema:** `Article`, `BreadcrumbList`.
- **Risk:** High; never call stop-loss a strategy for winning or recovering losses.

## Shared production requirements

- Unique copy and one primary search intent per page.
- Direct answer in the opening 80–120 words.
- Named writer and human reviewer.
- Current primary or authoritative sources with access date.
- Original/licensed hero image at least 1200 px wide.
- Internal links to children and relevant sibling hubs only.
- 21+ notice and responsible-play close on all real-money game pages.
- No registration, deposit, bonus, affiliate, or operator redirect.
- No guaranteed outcome, pattern prediction, fabricated performance, or recovery system.
