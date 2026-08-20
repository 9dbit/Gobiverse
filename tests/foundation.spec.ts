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
    await page.getByRole("button", { name: "Buka filter" }).click();
  }
  await page.getByLabel("Lokasi").selectOption("Bandung");
  await page.getByLabel("Format").selectOption("Online");
  await expect(page.getByText("Tidak ada contoh yang cocok")).toBeVisible();
});
