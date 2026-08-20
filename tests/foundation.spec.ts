import { expect, test } from "@playwright/test";

const foundationRoutes = [
  "/",
  "/games/mobile-legends",
  "/games/mobile-legends/heroes/asterion",
  "/games/mobile-legends/heroes/nyxara",
  "/games/mobile-legends/heroes/voltane",
  "/tools/counter-picker",
  "/tournaments",
  "/tournaments/nexushub-campus-cup",
  "/gear",
  "/gear/aurora-cooler-clip",
  "/about",
  "/editorial-policy",
];

test.describe("foundation routes", () => {
  for (const route of foundationRoutes) {
    test(`${route} renders a primary heading`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("h1")).toBeVisible();
    });
  }
});

test("each public route exposes its own canonical Open Graph URL", async ({ page }) => {
  for (const route of foundationRoutes) {
    await page.goto(route);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toBeTruthy();
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      canonical as string,
    );
  }
});

test("counter picker returns deterministic demo results", async ({ page }) => {
  await page.goto("/tools/counter-picker");
  await page.getByRole("button", { name: "Pilih Asterion" }).click();
  await page.getByRole("button", { name: "Lihat opsi counter" }).click();
  await expect(
    page.getByRole("heading", { name: "Respons untuk Asterion" }),
  ).toBeVisible();
  await expect(page.getByText("Nyxara", { exact: true }).last()).toBeVisible();
});

test("tournament filters expose an empty state", async ({ page }, testInfo) => {
  await page.goto("/tournaments");
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: /Buka filter/ }).click();
  }
  await page.getByLabel("Lokasi").selectOption("Bandung");
  await page.getByLabel("Format").selectOption("Online");
  await expect(page.getByText("Tidak ada contoh yang cocok")).toBeVisible();
  await expect(page.getByRole("button", { name: /Lokasi: Bandung/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Format: Online/ })).toBeVisible();
});

test("global search filters destinations and restores focus", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  const trigger = page.getByRole("button", {
    name: testInfo.project.name === "mobile" ? "Buka pencarian" : /Cari hero/i,
  });
  await trigger.click();

  const dialog = page.getByRole("dialog", { name: "Cari di Gobiverse" });
  await expect(dialog).toBeVisible();
  await page.getByLabel("Kata kunci pencarian").fill("turnamen");
  await expect(dialog.getByRole("link", { name: /Tournament Finder/ })).toBeVisible();
  await expect(dialog.getByRole("link", { name: /Counter Picker/ })).toHaveCount(0);

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("tournament filter is visible on desktop and an accessible drawer on mobile", async ({
  page,
}, testInfo) => {
  await page.goto("/tournaments");

  if (testInfo.project.name !== "mobile") {
    const filters = page.locator("#tournament-filters");
    await expect(filters).toBeVisible();
    await expect(filters.getByLabel("Game")).toBeVisible();
    await expect(filters.getByLabel("Status")).toBeVisible();
    return;
  }

  const trigger = page.getByRole("button", { name: /Buka filter/ });
  await trigger.click();

  const drawer = page.getByRole("dialog", { name: "Persempit contoh" });
  await expect(drawer).toBeVisible();
  await expect(drawer.getByLabel("Game")).toBeVisible();
  await expect(drawer.getByLabel("Status")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(drawer).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("game and gear hubs expose working category filters", async ({ page }) => {
  await page.goto("/games/mobile-legends");
  await page.getByRole("button", { name: "Fighter" }).click();
  await expect(page.getByRole("link", { name: /Asterion/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Nyxara/ })).toHaveCount(0);

  await page.goto("/gear");
  await page.getByRole("button", { name: "Keyboard" }).click();
  await expect(page.getByRole("link", { name: /Vector 65 Keyboard/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Aurora Cooler Clip/ })).toHaveCount(0);
});

test("site-level and breadcrumb structured data are present", async ({ page }) => {
  await page.goto("/");
  const homeSchemas = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const parsedHomeSchemas = homeSchemas.map(
    (schema) => JSON.parse(schema) as Record<string, unknown>,
  );
  const graph = parsedHomeSchemas.flatMap((schema) =>
    Array.isArray(schema["@graph"])
      ? (schema["@graph"] as Record<string, unknown>[])
      : [],
  );
  expect(graph.some((schema) => schema["@type"] === "Organization")).toBe(true);
  expect(graph.some((schema) => schema["@type"] === "WebSite")).toBe(true);

  await page.goto("/games/mobile-legends/heroes/asterion");
  const detailSchemas = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  expect(
    detailSchemas
      .map((schema) => JSON.parse(schema) as Record<string, unknown>)
      .some((schema) => schema["@type"] === "BreadcrumbList"),
  ).toBe(true);
});

test("unknown routes return the branded 404 state", async ({ page }) => {
  const response = await page.goto("/halaman-demo-tidak-ada");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "Halaman tidak ditemukan." }),
  ).toBeVisible();
});

test("navigation exposes the active destination", async ({ page }, testInfo) => {
  await page.goto("/tournaments");
  const navigation = page.getByRole("navigation", {
    name: testInfo.project.name === "mobile" ? "Navigasi utama mobile" : "Kategori",
  });
  await expect(navigation.getByRole("link", { name: "Turnamen" })).toHaveAttribute(
    "aria-current",
    "page",
  );
});

test("primary pages do not create document-level horizontal overflow", async ({
  page,
}) => {
  for (const route of ["/", "/tournaments", "/gear"]) {
    await page.goto(route);
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }));
    expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
  }
});
