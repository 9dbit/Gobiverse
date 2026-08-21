import { gearProducts, heroes, tournaments, type SourceRecord } from "./data";

export const DEMO_GAME_ID = "102a0b7c-6f6c-48e7-8b64-005002000001";
export const DEMO_SEED_KEY_PREFIX = "gobiverse-foundation-2026-08-20";

const heroIds = {
  asterion: "102a0b7c-6f6c-48e7-8b64-005002000011",
  nyxara: "102a0b7c-6f6c-48e7-8b64-005002000012",
  voltane: "102a0b7c-6f6c-48e7-8b64-005002000013",
} as const;

type SeedProvenance = SourceRecord & {
  isDemo: true;
  status: "demo";
};

const toSeedProvenance = (source: SourceRecord): SeedProvenance => ({
  ...source,
  isDemo: true,
  status: "demo",
});

export const demoSeedPlan = {
  game: {
    id: DEMO_GAME_ID,
    name: "Mobile Legends demo dataset",
    slug: "mobile-legends",
    seedKey: `${DEMO_SEED_KEY_PREFIX}:game:mobile-legends`,
    ...toSeedProvenance({
      title: "Dataset strategi demo Gobiverse",
      url: "https://example.com/gobiverse-demo-source",
      retrievedAt: "2026-08-20T00:00:00.000Z",
      verifiedAt: "2026-08-20T00:00:00.000Z",
      verifiedBy: "Tim Editorial Gobiverse",
    }),
  },
  heroes: heroes.map((hero) => ({
    ...hero,
    id: heroIds[hero.slug as keyof typeof heroIds],
    seedKey: `${DEMO_SEED_KEY_PREFIX}:hero:${hero.slug}`,
    ...toSeedProvenance(hero.source),
  })),
  tournaments: tournaments.map((tournament) => ({
    ...tournament,
    seedKey: `${DEMO_SEED_KEY_PREFIX}:tournament:${tournament.slug}`,
    ...toSeedProvenance(tournament.source),
  })),
  gearProducts: gearProducts.map((product) => ({
    ...product,
    seedKey: `${DEMO_SEED_KEY_PREFIX}:gear:${product.slug}`,
    ...toSeedProvenance(product.source),
  })),
  counters: heroes.flatMap((hero) =>
    hero.counters.map((counterSlug) => ({
      heroId: heroIds[hero.slug as keyof typeof heroIds],
      counterHeroId: heroIds[counterSlug as keyof typeof heroIds],
      ...toSeedProvenance(hero.source),
    })),
  ),
};

export const demoSeedExpectedCounts = {
  games: 1,
  heroes: demoSeedPlan.heroes.length,
  counters: demoSeedPlan.counters.length,
  tournaments: demoSeedPlan.tournaments.length,
  gearProducts: demoSeedPlan.gearProducts.length,
} as const;
