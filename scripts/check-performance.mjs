const baseUrl = process.env.PERFORMANCE_BASE_URL ?? "http://127.0.0.1:5000";
const routes = ["/", "/tournaments", "/gear"];
const maxResponseMilliseconds = 1_500;
const maxHtmlBytes = 160_000;

async function waitForServer() {
  const deadline = Date.now() + 120_000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl, { redirect: "manual" });
      if (response.ok) return;
    } catch {
      // The CI workflow starts the production server in the background.
    }

    await new Promise((resolve) => setTimeout(resolve, 1_000));
  }

  throw new Error(`Performance server did not become ready at ${baseUrl}.`);
}

await waitForServer();

let failed = false;
for (const route of routes) {
  const startedAt = performance.now();
  const response = await fetch(`${baseUrl}${route}`);
  const body = await response.arrayBuffer();
  const duration = performance.now() - startedAt;

  console.log(
    `${route}: ${response.status}, ${body.byteLength} bytes, ${duration.toFixed(1)} ms`,
  );

  if (
    !response.ok ||
    body.byteLength > maxHtmlBytes ||
    duration > maxResponseMilliseconds
  ) {
    failed = true;
  }
}

if (failed) {
  throw new Error(
    `Representative pages must return 2xx HTML within ${maxResponseMilliseconds} ms and ${maxHtmlBytes} bytes.`,
  );
}
