import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

const baseUrl = process.env.SCREENSHOT_BASE_URL ?? "http://127.0.0.1:5000";
const routes = [
  { path: "/", name: "home" },
  { path: "/games/mobile-legends", name: "mobile-legends-hub" },
  { path: "/games/mobile-legends/heroes/asterion", name: "hero-asterion" },
  { path: "/games/mobile-legends/heroes/nyxara", name: "hero-nyxara" },
  { path: "/games/mobile-legends/heroes/voltane", name: "hero-voltane" },
  { path: "/tools/counter-picker", name: "counter-picker" },
  { path: "/tournaments", name: "tournaments" },
  { path: "/tournaments/nexushub-campus-cup", name: "tournament-detail" },
  { path: "/gear", name: "gear" },
  { path: "/gear/aurora-cooler-clip", name: "gear-detail" },
  { path: "/about", name: "about" },
  { path: "/editorial-policy", name: "editorial-policy" },
];

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

async function capture() {
  const browser = await chromium.launch();
  try {
    for (const viewport of viewports) {
      const folder = path.join("screenshots", "foundation-slice", viewport.name);
      await mkdir(folder, { recursive: true });
      const page = await browser.newPage({
        viewport: { width: viewport.width, height: viewport.height },
      });

      for (const route of routes) {
        const response = await page.goto(`${baseUrl}${route.path}`, {
          waitUntil: "networkidle",
        });
        if (!response?.ok()) {
          throw new Error(
            `Screenshot capture failed for ${route.path}: ${response?.status() ?? "no response"}`,
          );
        }
        await page.screenshot({
          path: path.join(folder, `${route.name}.png`),
          fullPage: true,
        });
      }

      await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
      await page
        .getByRole("button", {
          name: viewport.name === "mobile" ? "Buka pencarian" : /Cari hero/i,
        })
        .click();
      await page.screenshot({
        path: path.join(folder, "home-search-open.png"),
        fullPage: true,
      });

      await page.goto(`${baseUrl}/tools/counter-picker`, { waitUntil: "networkidle" });
      await page.getByRole("button", { name: "Pilih Asterion" }).click();
      await page.getByRole("button", { name: "Lihat opsi counter" }).click();
      await page.screenshot({
        path: path.join(folder, "counter-picker-result.png"),
        fullPage: true,
      });

      await page.goto(`${baseUrl}/tournaments`, { waitUntil: "networkidle" });
      if (viewport.name === "mobile") {
        await page.getByRole("button", { name: "Buka filter" }).click();
      }
      await page.screenshot({
        path: path.join(folder, "tournaments-filters-open.png"),
        fullPage: true,
      });
      await page.close();
    }
  } finally {
    await browser.close();
  }
}

capture().catch((error: unknown) => {
  console.error("Screenshot capture failed.", error);
  process.exitCode = 1;
});
