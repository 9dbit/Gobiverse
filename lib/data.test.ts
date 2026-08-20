import { describe, expect, it } from "vitest";
import {
  getCounterRecommendations,
  getGearProduct,
  getHero,
  getTournament,
} from "./data";

describe("demo data access", () => {
  it("returns deterministic counter recommendations", () => {
    expect(getCounterRecommendations("asterion").map((hero) => hero.slug)).toEqual([
      "nyxara",
      "voltane",
    ]);
  });

  it("only resolves defined demo records", () => {
    expect(getHero("missing")).toBeUndefined();
    expect(getTournament("missing")).toBeUndefined();
    expect(getGearProduct("missing")).toBeUndefined();
  });
});
