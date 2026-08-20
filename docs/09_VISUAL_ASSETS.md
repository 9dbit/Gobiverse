# 09 — Visual Assets

Gobiverse uses an original **cosmic gaming intelligence** visual system: deep navy, electric cyan, blue, and violet. Production-ready files live in `public/assets/gobiverse/`; their dimensions, roles, and accessibility text are defined in `public/assets/gobiverse/manifest.json`.

## Asset inventory

| Public path | Dimensions | Intended use |
|---|---:|---|
| `/assets/gobiverse/web/gobiverse-home-hero-desktop.webp` | 1600×900 | Homepage hero for desktop and tablet |
| `/assets/gobiverse/web/gobiverse-home-hero-mobile.webp` | 900×1599 | Homepage hero for mobile |
| `/assets/gobiverse/web/gobiverse-strategy-banner-desktop.webp` | 1600×900 | Build, counter, and meta feature |
| `/assets/gobiverse/web/gobiverse-tournament-banner-desktop.webp` | 1600×900 | Tournament discovery feature |
| `/assets/gobiverse/web/gobiverse-gear-banner-desktop.webp` | 1600×900 | Gaming gear feature |
| `/assets/gobiverse/web/gobiverse-editorial-fallback-square.webp` | 1200×1200 | Default editorial and social card |
| `/assets/gobiverse/icons/gobiverse-emblem-512.png` | 512×512 | Draft app icon and high-resolution avatar |
| `/assets/gobiverse/icons/gobiverse-emblem-192.png` | 192×192 | PWA icon |
| `/assets/gobiverse/icons/gobiverse-emblem-64.png` | 64×64 | Compact interface mark |
| `/assets/gobiverse/icons/favicon.ico` | Multi-size | Browser favicon |

## Color tokens

```css
:root {
  --gobiverse-navy-950: #050b1c;
  --gobiverse-navy-900: #09142e;
  --gobiverse-surface-850: #111827;
  --gobiverse-surface-800: #182235;
  --gobiverse-cyan-400: #20d9ff;
  --gobiverse-blue-500: #327bff;
  --gobiverse-violet-500: #8b3dff;
  --gobiverse-orange-500: #ff6b35;
  --gobiverse-white: #f2f7ff;
}
```

## Implementation rules

- Render headings, taglines, calls to action, prices, and status labels as accessible HTML—not as text baked into an image.
- Use the desktop and mobile homepage heroes in a responsive `<picture>` element, with the mobile source selected below the appropriate breakpoint.
- Add a left-side navy gradient overlay where white copy needs stronger contrast.
- Use empty alt text for purely decorative backgrounds. Use the manifest alt text for meaningful editorial images.
- Preserve aspect ratios and focal points; use `object-fit: cover` instead of stretching.
- Do not imply that the original silhouettes belong to Mobile Legends or another publisher.
- Do not add casino, betting, jackpot, gambling, or black-and-gold luxury motifs.
- Reserve orange for high-attention actions, deadlines, verified prices, and compact status badges. Cyan remains the primary Gobiverse brand/focus color.
- Treat the emblem as an early raster concept. Do not present it as a trademarked final logo.

Suggested desktop hero treatment:

```css
.hero {
  background:
    linear-gradient(
      90deg,
      rgba(5, 11, 28, 0.98) 0%,
      rgba(5, 11, 28, 0.76) 34%,
      rgba(5, 11, 28, 0.08) 72%
    ),
    url('/assets/gobiverse/web/gobiverse-home-hero-desktop.webp')
      center right / cover no-repeat;
}
```

## Performance requirements

- Keep the supplied WebP files as-is unless a measured route budget requires a smaller derivative.
- Set explicit image dimensions to prevent layout shift.
- Prioritize only the above-the-fold hero; lazy-load below-the-fold feature artwork.
- Do not commit full-resolution PNG generation masters to the application repository.
