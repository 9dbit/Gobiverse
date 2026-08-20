import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page } from "@playwright/test";

const baseUrl = process.env.SCREENSHOT_BASE_URL ?? "http://127.0.0.1:5000";
const outputRoot =
  process.env.SCREENSHOT_OUTPUT_DIR ?? path.join("screenshots", "foundation-slice");
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

async function waitForServer() {
  const deadline = Date.now() + 120_000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl, { redirect: "manual" });
      if (response.ok) return;
    } catch {
      // The Replit workflow starts the app and capture tasks in parallel.
    }

    await new Promise((resolve) => setTimeout(resolve, 1_000));
  }

  throw new Error(`Screenshot server did not become ready at ${baseUrl}.`);
}

async function captureFullPage(page: Page, screenshotPath: string) {
  await page.evaluate(() => {
    document.documentElement.dataset.screenshotFullPage = "true";
  });

  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const scrollStep = Math.max(
    320,
    Math.floor((page.viewportSize()?.height ?? 900) * 0.8),
  );

  for (let y = 0; y < pageHeight; y += scrollStep) {
    await page.evaluate((scrollTop) => window.scrollTo(0, scrollTop), y);
    await page.waitForTimeout(80);
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page
    .waitForFunction(
      () => Array.from(document.images).every((image) => image.complete),
      undefined,
      { timeout: 5_000 },
    )
    .catch(() => undefined);
  await page.waitForTimeout(100);
  await page.screenshot({ path: screenshotPath, fullPage: true });
}

async function captureViewport(page: Page, screenshotPath: string) {
  await page.evaluate(() => {
    delete document.documentElement.dataset.screenshotFullPage;
  });
  await page.screenshot({ path: screenshotPath, fullPage: false });
}

async function capture() {
  await waitForServer();
  const browser = await chromium.launch();
  try {
    for (const viewport of viewports) {
      const folder = path.join(outputRoot, viewport.name);
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
        await captureFullPage(page, path.join(folder, `${route.name}.png`));
      }

      await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
      await page
        .getByRole("button", {
          name: viewport.name === "mobile" ? "Buka pencarian" : /Cari hero/i,
        })
        .click();
      await captureViewport(page, path.join(folder, "home-search-open.png"));
      await page.getByLabel("Kata kunci pencarian").fill("turnamen");
      await captureViewport(page, path.join(folder, "home-search-filtered.png"));

      await page.goto(`${baseUrl}/tools/counter-picker`, { waitUntil: "networkidle" });
      await page.getByRole("button", { name: "Pilih Asterion" }).click();
      await page.getByRole("button", { name: "Lihat opsi counter" }).click();
      await page
        .getByRole("heading", { name: "Respons untuk Asterion" })
        .scrollIntoViewIfNeeded();
      await captureViewport(page, path.join(folder, "counter-picker-result.png"));

      await page.goto(`${baseUrl}/tournaments`, { waitUntil: "networkidle" });
      if (viewport.name === "mobile") {
        await page.getByRole("button", { name: /Buka filter/ }).click();
      } else {
        await page.getByLabel("Filter listing turnamen demo").scrollIntoViewIfNeeded();
      }
      await captureViewport(page, path.join(folder, "tournaments-filters-open.png"));

      await page.getByLabel("Lokasi").selectOption("Bandung");
      await page.getByLabel("Format").selectOption("Online");
      if (viewport.name === "mobile") {
        await page.getByRole("button", { name: "Terapkan filter" }).click();
      }
      await page
        .getByRole("heading", { name: "Tidak ada contoh yang cocok" })
        .scrollIntoViewIfNeeded();
      await captureViewport(page, path.join(folder, "tournaments-empty.png"));

      const notFoundResponse = await page.goto(`${baseUrl}/halaman-demo-tidak-ada`, {
        waitUntil: "networkidle",
      });
      if (notFoundResponse?.status() !== 404) {
        throw new Error(
          `Screenshot capture expected a 404 response, received ${notFoundResponse?.status() ?? "no response"}`,
        );
      }
      await captureFullPage(page, path.join(folder, "not-found.png"));
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
