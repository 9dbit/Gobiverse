import { afterEach, describe, expect, it, vi } from "vitest";

describe("Replit preview indexing protection", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("adds a site-wide X-Robots-Tag header for Replit preview hosts", async () => {
    vi.stubEnv("REPLIT_DEV_DOMAIN", "gobiverse-preview.replit.dev");
    const { default: config } = await import("../next.config");

    expect(config.headers).toBeTypeOf("function");
    const rules = await config.headers?.();
    expect(rules).toEqual([
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ]);
  });
});
