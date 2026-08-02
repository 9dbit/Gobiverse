# Canonical Generation Record

**Batch:** GOBI & B-88 Canonical Package v1  
**Date:** 2026-08-02  
**Status:** v1 historical; GOBI v2 active  
**Parent manifest:** [manifest.md](manifest.md)


## Revision v2 — Silver Space Explorer

**Date:** 2026-08-02  
**Source:** two owner-supplied visual references  
**Asset:** `gobi-canonical-identity-lock-v2.png`  
**Dimensions:** 1672×941  
**SHA-256:** `c7f46eabf4936209ec18090c36723c0fdafb338079bb8aa8af3b8c9a908acce9`

### Identity decision

The v2 identity fully replaces the sand-furred fennec and dark techwear costume. Canonical GOBI is now a mature realistic silver-white cyber fox with red-amber eyes, red temple modules, one large tail, and a white/silver engineered astronaut suit.

Exact identity markings:

- Red LED `GOBI` centered above the chest core.
- Red LED `88` on the upper arm.
- Red emissive geometric chest core.
- Fine red suit piping and restrained graphite joints.
- Compact life-support backpack and open helmet collar.

### Reference roles

1. Owner reference 1 established face, realistic fur, suit materials, holographic interaction, lunar environment, chest core, and action attitude.
2. Owner reference 2 established full-body front/side proportions, backpack, tail, suit construction, and identifier placement.

### Generation route

- Built-in image generation.
- Referenced-image paths used for both owner-supplied references.
- Model/version not exposed.
- Human image edits: none.
- QA: face, fur, one-tail silhouette, full-body continuity, exact `GOBI`, and exact `88` verified.

### Rollout consequence

Every prior asset containing GOBI v1 must be regenerated. B-88 geometry remains provisionally valid pending a palette-integration decision.

## Historical v1 Reference Chain

1. `gobi-variant-a-cinematic-explorer-v1.png` established canonical facial structure, ears, fur, body, and Explorer outfit.
2. `gobi-variant-b-techwear-presenter-v1.png` supplied the Academy outfit direction only.
3. `b88-concept-board-v1.png` established B-88 geometry and states.
4. `gobi-canonical-identity-lock-v1.png` combined the canonical identity with Explorer and Academy outfits.
5. `gobi-b88-human-operator-scale-chart-v2.png` locked GOBI at 175 cm, Human Operator at 175 cm, and B-88 at 35 cm.
6. Later pose and environment outputs were corrected when B-88 exceeded the approved scale.

## Canonical Identity Prompt

```text
Preserve Variant A's facial structure, head shape, tall-ear proportions, warm sand fur pattern, darker ear tips, amber eyes, lean adult body, and overall identity across every view. Show canonical close-up, Explorer outfit, Academy Presenter outfit adapted from Variant B, and side profile. The Academy outfit changes clothing only; it does not create a different face or character. Adult heroic proportions, premium stylized-realistic 3D, warm key and restrained cyan rim. No child/chibi coding, franchise imitation, casino symbols, weapons, anatomy errors, identity drift, or inconsistent markings.
```

## Expression Sheet Prompt

```text
Create a 3-by-2 sheet using the locked canonical identity: confident explorer neutral; curious analysis; dry amusement; skeptical myth-detected; composed discovery; serious empathetic responsible-warning. Keep face, muzzle, ears, fur, eyes, age, lighting, camera, and outfit collar identical. Change expression only. No text or watermark.
```

## Pose Sheet Prompt

```text
Create a 3-by-2 full-body pose sheet using the locked canonical identity and Explorer outfit: Presenter; Explorer scan; Decision between portals; Myth vs Math with B-88; Community CTA; Responsible Warning. Preserve identity and outfit in all cells. B-88 appears only in Myth vs Math and must remain 35 cm wide relative to GOBI 175 cm. No weapons, casino symbols, anatomy drift, or text.
```

## Scale Chart Prompt

```text
Create a production scale chart with canonical GOBI front and side at 175 cm, a neutral faceless Human Operator mannequin at 175 cm, and canonical B-88 at 35 cm total width. Use exact labels: "GOBI — 175 CM", "HUMAN OPERATOR — 175 CM", and "B-88 — 35 CM". Preserve identity and B-88 geometry. No extra text or characters.
```

## GOBIVERSE Keyframe Prompt

```text
Create a wide premium stylized-realistic 3D establishing keyframe of a futuristic desert at blue hour with warm sculpted dunes, night-navy sky, restrained cyan beacons, original monolithic explorer architecture, and a distant vertical portal. Canonical GOBI stands on a foreground ridge in Explorer outfit; canonical B-88 hovers beside him at true 35 cm scale projecting a restrained route map. No casino/Las Vegas elements, franchise imitation, weapons, giant drone, text, or watermark.
```

## GOBI Academy Prompt

```text
Create a cinematic wide GOBI Academy studio keyframe using futuristic desert architecture, warm-sand composite panels, night-navy walls, matte charcoal floor, and restrained cyan seams. Canonical GOBI wears the Academy Presenter outfit and presents an abstract probability curve. Canonical B-88 hovers at true 35 cm scale and projects a compact fact-check panel. No readable claims, casino tables, reels, cards, chips, roulette, Las Vegas styling, child classroom cues, franchise imitation, extra characters, text, or watermark.
```

## QA Corrections

- Rejected scale-chart v1 as final because the unlabelled large B-88 could be mistaken for true scale.
- Corrected scale chart to distinguish enlarged detail from true scale.
- Added neutral Human Operator comparison in scale chart v2.
- Reduced B-88 in pose sheet to 35 cm scale.
- Reduced B-88 and route projection in GOBIVERSE keyframe.
- Reduced B-88 and fact-check projection in Academy keyframe.

## Tool Record

- Generation route: built-in image generation.
- Model/version: not exposed by the route.
- Reference mechanism: local referenced-image paths.
- Human image edits: none.
- Text/manifest edits: recorded in GitHub.
