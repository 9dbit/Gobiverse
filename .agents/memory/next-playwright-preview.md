---
name: Next and Playwright preview setup
description: Required Replit development-server origin and browser-runtime setup for reliable interactive browser testing.
---

For this Nix-based Replit environment, Next.js development servers must explicitly allow local and Replit preview origins, and Playwright Chromium needs its shared runtime libraries available through the Replit module configuration.

**Why:** Without allowed development origins, Next can return 403 responses to browser-loaded client chunks, leaving server-rendered pages visible but unhydrated. Without the runtime libraries, Playwright can download Chromium but cannot launch it.

**How to apply:** When a Next app is served in the Replit preview, permit the local preview origin and the Replit development-host pattern in the Next configuration. When Playwright reports a missing shared library, install the required Nix dependency through the managed package mechanism and re-run browser tests rather than treating the failing interaction as an application defect.