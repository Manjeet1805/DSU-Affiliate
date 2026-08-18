---
name: DSU Platinum — Affiliate-Partnerprogramm
description: Dunkles, geldschein-inspiriertes Premium-Design mit intensivem Gold- und Weiß-Glow — soll wirken wie ein exklusiver, nur für dich gemachter Zugang.
colors:
  navy-950: "#05060a"
  navy-900: "#0a0c14"
  navy-800: "#10131f"
  navy-700: "#171b2a"
  ink: "#f5f1e8"
  white-hi: "#ffffff"
  gold: "#d9bd85"
  gold-hi: "#f3e7cd"
  emerald: "#2fa373"
  emerald-hi: "#79ddae"
typography:
  display:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7.4vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4.4vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.19rem, 2.4vw, 1.44rem)"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.03rem, 2vw, 1.19rem)"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.18em"
  stat:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 3.375rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
rounded:
  control: "10px"
  card: "16px"
  panel: "20px"
  pill: "9999px"
spacing:
  section-x: "clamp(20px, 5vw, 64px)"
  section-y-sm: "clamp(56px, 10vh, 104px)"
  section-y-lg: "clamp(72px, 14vh, 160px)"
  card-gap: "20px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy-950}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "16px 28px"
  card-benefit:
    backgroundColor: "{colors.navy-700}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "30px 26px"
  hero-portrait:
    backgroundColor: "{colors.navy-950}"
    rounded: "{rounded.panel}"
---

# Design System: DSU Platinum — Affiliate-Partnerprogramm

## Overview

**Creative North Star: "The Illuminated Vault"**

Back to the vault, deliberately — and turned up. This is the third iteration of the system: it started dark and private, moved into daylight as an open ledger, and now returns to the dark private-banking world with more light inside it, not less. Every gold surface earns a glow now, not just on hover; a white-hot core sits inside several of those glows, so gold reads as catching real light rather than sitting flat. The effect the brief asked for — "wirkt wie es nicht jeder Zugang hat" — comes from restraint plus radiance together: a nearly black room where only a few things are lit, and those few things are lit generously.

The hero now opens with Manjeet's own portrait in a glowing gold frame beside the headline — the exclusivity is personal, not abstract. This is still the banknote/ledger material world underneath (watermark texture, hairline borders, tabular numerals) — only the lighting changed.

**Key Characteristics:**
- Near-black navy base (`#05060a`–`#171b2a`) with a warm off-white `ink` for body text — unchanged since the system's first version.
- Gold now carries a genuine second accent partner: crisp White (`#ffffff`), used sparingly inside glow cores and text-shadows for a "catching light" effect, never as a flat fill.
- Glow is no longer purely hover-triggered — cards, the CTA panel, the video frame, and the steps line all carry a persistent ambient glow at rest, intensifying further on interaction.
- A large, gold-framed portrait of Manjeet anchors the hero next to the headline — the page's most personal, most exclusive-feeling moment happens in the first viewport, not buried in the footer.
- Same fluid clamp()-based type and spacing scale throughout all three iterations; only color and light intensity changed.

## Colors

### Primary
- **Champagne Gold** (`#d9bd85`): The dominant accent — borders, fills, all text emphasis, numerals, icons. Carries real light now: every gold text or border element pairs with a matching glow shadow or text-shadow, not a flat color alone.
- **Champagne Gold — Hi** (`#f3e7cd`): Lightened highlight — button gradient top-stop, hover states, the video play button.

### Secondary
- **White — Hi** (`#ffffff`): The system's new second accent, used exclusively inside glow cores (a thin white component layered under a wider gold glow) and glow-adjacent text-shadows — never as a standalone fill or border. This is what makes gold read as "catching light" rather than flat paint.
- **Emerald** (`#2fa373`) / **Emerald — Hi** (`#79ddae`): Reserved for trust/security meaning only (shield-check, lock icons, the steps-line's cool end-stop) — unchanged rule from every prior version.

### Neutral
- **Navy-950 / Navy-900 / Navy-800 / Navy-700**: The dark surface stack, darkest to lightest — page background, card gradients, the CTA panel.
- **Ink** (`#f5f1e8`): Primary text — warm off-white, deliberately not pure white (white is reserved for the accent role above).

### Named Rules
**The Single Accent Rule.** Gold is the only decorative hue; emerald stays reserved for trust/security. Unchanged across all three iterations.

**The Catching-Light Rule.** Any gold text or glow gets a thin white-hot core layered underneath the wider gold glow (`text-shadow` or `box-shadow`, two-layer: white at small radius/low spread, gold at larger radius). Gold alone reads flat; gold-plus-white-core reads like foil catching a real light source.

## Typography

Unchanged structurally from prior versions — Inter Variable only, hierarchy through size/weight/tracking. What's new: the Display role's emphasis word and the Stat role's numerals both carry the Catching-Light text-shadow treatment, so the biggest, most important text on the page visibly glows.

### Hierarchy
- **Display** (500, `clamp(2.5rem, 7.4vw, 5rem)`, 1.06): Hero headline; emphasis word in Gold with a white-cored glow.
- **Headline** (500, `clamp(1.75rem, 4.4vw, 2.75rem)`, 1.14): Section titles, plain Ink.
- **Title** (500, `clamp(1.19rem, 2.4vw, 1.44rem)`, 1.3): Card/step sub-headings.
- **Body** (400, 15.5–19px, 1.6–1.62): Paragraph copy at `ink/74`.
- **Label** (500, 12–14.5px, tracking wide, uppercase, Gold): Eyebrows, nav, captions.
- **Stat** (500, `clamp(2.5rem, 6vw, 3.375rem)`, 1, tabular-nums, Gold with Catching-Light glow): Benefit numerals — the newsletter card's "Täglich" gets the same treatment as the numeric cards.

## Layout

Unchanged: fluid clamp()-based rhythm, `max-width: 1120px`, hairline dividers. The hero gained a two-column grid at `sm:` and up (`1.15fr/0.85fr`, tightening to `1.3fr/0.7fr` at `lg:`) to hold the new portrait frame beside the headline; it stacks to a single column with the photo first on mobile. The benefit grid stays the two-column `sm:grid-cols-2` layout from the previous iteration (four cards, roomy).

## Elevation & Depth

The core change of this iteration: glow is no longer purely a hover-only reward. Cards, the CTA panel, the video frame, the hero portrait frame, and the steps line all carry a **persistent ambient glow at rest** — smaller/dimmer than their hover or in-view state, but always present. Hover and scroll-driven states intensify rather than originate the glow.

### Shadow Vocabulary
- **Button** (`0 10px 38px rgba(217,189,133,.32), 0 0 60px rgba(217,189,133,.16)` rest → wider/brighter on hover): Directional lift-shadow plus a soft ambient halo layered behind it.
- **Benefit card** (`0 0 44px rgba(217,189,133,.10)` rest → `0 20px 54px rgba(217,189,133,.30), 0 0 80px rgba(217,189,133,.20)` hover): Cards glow faintly even before interaction.
- **Video frame** (`0 24px 70px rgba(217,189,133,.22), 0 0 100px rgba(217,189,133,.12)`): Always-on, the widest ambient halo on the page — it frames Manjeet's video as the page's "watch this" moment.
- **CTA panel** (`0 0 90px rgba(217,189,133,.18)` on the whole panel, plus the original interior radial blooms at higher alpha than the prior versions): The vault door, lit from within.
- **Steps line** (three-layer glow, `0 0 14px rgba(217,189,133,.85), 0 0 34px rgba(217,189,133,.5), 0 0 60px rgba(47,163,115,.25)`, gradient White→Gold→Emerald-Hi): The most dramatic glow on the page — earned, since it's the page's one signature scroll-driven moment.

### Named Rules
**The Illuminated-Vault Rule.** Glow is now ambient-plus-interactive, not interactive-only: every gold surface has *some* glow at rest, and gets brighter on hover/scroll/focus. A flat, glow-less gold border or fill is a regression to the prior iteration's restraint, not this one's brief.

## Shapes

Unchanged radii (`10/16/20px`, full circles). New: the hero portrait frame (`20px` radius, matching the CTA panel) — a large gold-bordered, glow-framed square housing Manjeet's photo, sized to avoid any crop of the source image (the source is itself square, so `aspect-square` + `object-cover` needs no lossy cropping).

## Components

### Buttons
Unchanged shape and gradient fill; shadow amplified per Elevation above. Text color reverted to `navy-950` (from the second iteration's `ink-deep`, same value, restored name).

### Cards / Containers
Unchanged shape/background construction (`navy-700` → `navy-950` gradient, gold border, watermark). Border opacity raised (`gold/40`, was `gold/34` in the first iteration) and hover shadow widened per Elevation.

### Hero Portrait (new)
- **Shape:** `20px` radius, square aspect, gold border at 60% opacity, ambient glow at rest, intensified by ambient light-source gradient (a gold-tinted highlight in the corner, layered as an overlay div on top of the photo).
- **Content:** `manjeet-cta-portrait.avif`, `loading="eager"`/`fetchpriority="high"` since it sits in the initial viewport (LCP-relevant).
- **Known constraint:** the source asset is 600×600px (a tight face/shoulders crop originally made for a 66px CTA avatar). Displayed here at up to ~380–420px it holds up, but it is being asked to do more work than its native resolution ideally supports — if a higher-resolution version of this photo becomes available, swapping it in is a worthwhile follow-up.

### Steps / Progress (signature component)
Marker circles keep the dark-chip treatment (`navy-950` fill, gold/emerald border+text) — now each carries its own glow shadow too. The line's gradient gained a third stop: White at the top (matching the Catching-Light rule), through Gold, to Emerald-Hi at the bottom.

### CTA Panel
Unchanged internal construction; glow widened, border raised to `gold/50`, interior radial blooms raised in alpha (0.14→0.22 gold, 0.12→0.16 emerald) for a richer "lit from within" read.

## Do's and Don'ts

### Do:
- **Do** pair every gold text/border/fill with a glow (ambient at rest, intensified on interaction) — flat gold is the previous iteration's rule, not this one's.
- **Do** use White strictly inside glow cores and text-shadows, never as a standalone fill, border, or body-text color.
- **Do** keep emerald reserved for trust/security meaning only.
- **Do** size any future hero/portrait imagery to at least the display resolution needed — don't repeat this iteration's small-source constraint if a reshoot or higher-res export becomes available.

### Don't:
- **Don't** revert to hover-only glow; ambient-at-rest glow is now the baseline for cards, the CTA panel, the video frame, and the steps line.
- **Don't** introduce a second typeface or a third accent hue.
- **Don't** stretch or off-center-crop the hero portrait — its `aspect-square` frame exists specifically so the 1:1 source needs no cropping.
