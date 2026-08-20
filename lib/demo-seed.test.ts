import { describe, expect, it } from "vitest";
import { demoSeedExpectedCounts, demoSeedPlan } from "./demo-seed";
import { assertDemoSeedVerification } from "../scripts/seed";

describe("demo seed plan", () => {
  it("contains every fictional record, explicit DEMO status, and counter relation", () => {
    expect(demoSeedExpectedCounts).toEqual({
      games: 1,
      heroes: 3,
      counters: 6,
      tournaments: 3,
      gearProducts: 3,
    });
    expect(
      demoSeedPlan.heroes.every((hero) => hero.status === "demo" && hero.isDemo),
    ).toBe(true);
    expect(
      demoSeedPlan.tournaments.every(
        (tournament) => tournament.status === "demo" && tournament.isDemo,
      ),
    ).toBe(true);
    expect(
      demoSeedPlan.gearProducts.every(
        (product) => product.status === "demo" && product.isDemo,
      ),
    ).toBe(true);
    expect(
      demoSeedPlan.counters.every(
        (counter) => counter.heroId !== counter.counterHeroId && counter.isDemo,
      ),
    ).toBe(true);
  });

  it("rejects a database verification result with missing demo rows", () => {
    expect(() =>
      assertDemoSeedVerification({
        games: 1,
        heroes: 2,
        counters: 6,
        tournaments: 3,
        gearProducts: 3,
      }),
    ).toThrow("heroes expected 3, received 2");
  });
});
