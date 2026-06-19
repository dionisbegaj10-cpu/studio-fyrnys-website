# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** Static visual (Rive animation replaced with CSS/image composition)

## Visual Description
Full-viewport section on cream background (#f4f4ed). Features:
- Center: Large portrait photo of Lando Norris (head + upper body, looking forward)
- Organic blob/amoeba contour lines in background (SVG overlay)
- Bottom-left: "NEXT RACE" card (custom pill shape with F1 car-shaped notch)
- Top center: LN monogram logo (nav handles this)
- No explicit text in hero itself (nav provides the LANDO NORRIS text)

## DOM Structure
```
section.hero-wrapper (position: relative, height: 100vh min, background: #f4f4ed)
  div.hero-bg-blobs     ← organic contour SVG background
  div.hero-portrait     ← Lando portrait image, centered
  div.hero-next-race    ← bottom-left race card
```

## Computed Styles

### hero-wrapper
- background-color: #f4f4ed
- min-height: 100vh
- position: relative
- overflow: hidden
- display: flex; align-items: center; justify-content: center

### hero-bg-blobs (organic contour lines)
- position: absolute
- top: 0; left: 0; width: 100%; height: 100%
- background-image: url('/svgs/blobs-nav.svg') 
- background-size: cover
- background-position: center
- opacity: 0.3 (subtle, very light)
- pointer-events: none

### hero-portrait
- position: relative
- z-index: 2
- width: ~600px
- The image shows Lando from chest up, centered, slightly below center vertically
- image: `/images/hero-head.webp`
- object-fit: contain

### Next Race Card
The card is a custom SVG-outlined pill shape with an F1 car-like notch at top-right:
- position: absolute
- bottom: 80px; left: 40px
- color: var(--color-dark-green-tint-2) = #535450
- The outline SVG path creates a rectangle with rounded corners (5.5px) and a notch cutout
- SVG viewBox: "0 0 119 244"
- Inner content stacked vertically:
  - "NEXT RACE" label (tiny caps, ~10px, letter-spacing: 0.15em)
  - Track/circuit icon (SVG: crossed flags or circuit map)
  - "MONTRÉAL" in larger bold text (~14px, uppercase)
  - "GP" slightly smaller
  - Crossed flags icon (SVG)
  - "MCLAREN F1" bold (~11px)
  - "SINCE 2019" (~10px, muted)
- width: ~104px

### Next Race Card SVG outline (exact path):
```
M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z
```

## Text Content (verbatim)
- NEXT RACE
- MONTRÉAL GP
- MCLAREN F1 SINCE 2019

## Assets
- Background blobs: `/svgs/blobs-nav.svg`
- Hero portrait: `/images/hero-head.webp`
- Crossed flags: `/svgs/crossed-flags.svg`

## Responsive
- Desktop: portrait ~600px wide, centered
- Mobile: portrait full-width, next race card smaller
