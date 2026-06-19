# HallOfFame Specification

## Overview
- **Target file:** `src/components/HallOfFame.tsx`
- **Interaction model:** Hover on cards (base→hover image crossfade)

## Visual Description
Near-black background (#111112). "HALL OF FAME" in huge display font top-left. Below: staggered masonry-like grid of helmet cards. Each card:
- Dark card with rounded corners + a "tab" notch at bottom-left
- Helmet image (base state)
- On hover: switches to alternate helmet image
- Name and year at bottom-right of card

## DOM Structure
```
section.hall-of-fame (bg: #111112)
  div.hof-header
    h2.hof-title "HALL OF FAME"
  div.hof-grid
    div.hof-card × N
      div.hof-card-img-wrapper
        img.hof-img-base (default)
        img.hof-img-hover (hover state, opacity 0 → 1)
      div.hof-card-label
        span.hof-name "Season"
        span.hof-year "2025"
      div.hof-card-notch (SVG notch at bottom)
```

## Computed Styles

### hall-of-fame
- background-color: #111112
- padding: 5rem 2.5rem
- position: relative

### hof-title
- font-family: 'Brier', Arial, sans-serif
- font-size: clamp(5rem, 10vw, 12rem)
- font-weight: 700
- text-transform: uppercase
- color: #f4f4ed
- line-height: 0.88

### hof-grid
- display: grid
- grid-template-columns: repeat(4, 1fr) — 4 cols at desktop
- gap: 1.25rem
- Staggered: columns 2 and 4 are offset down by ~200px creating a masonry feel
- Actually: CSS `align-self` or `margin-top` on alternating cards

### hof-card
- background-color: #1e1e18 (slightly lighter than bg)
- border-radius: 12px
- overflow: hidden
- position: relative
- aspect-ratio: roughly 1/1.4 (portrait cards)
- cursor: pointer

### hof-card bottom tab/notch
- Small notch shape at bottom-left of card (like a film negative tab)
- SVG or border-radius trick
- Color matches card background

### hof-card-img-wrapper
- position: relative; width: 100%; height: 75%
- img: width: 100%; height: 100%; object-fit: contain; padding: 1rem

### hof-img-hover
- position: absolute; top: 0; left: 0; width: 100%; height: 100%
- opacity: 0
- transition: opacity 0.3s ease

### hof-card:hover hof-img-hover
- opacity: 1

### hof-card-label
- position: absolute; bottom: 1rem; right: 1rem
- display: flex; gap: 0.5rem; align-items: baseline
- font-family: 'Mona Sans Variable', sans-serif
- font-weight: 400

### hof-name
- font-size: 0.875rem; color: #b9bbad; letter-spacing: 0.05em

### hof-year
- font-size: 0.875rem; color: #f4f4ed; font-weight: 700

### View On Track button (bottom of section)
- btn-store style: lime pill button "VIEW ON TRACK →"
- centered, margin-top: 3rem

## Helmet Data (name, year, base image, hover image)
```
{ name: "Season",       year: "2025", base: "helm-2025-season-base.webp",       hover: "helm-2025-season-hover.webp" }
{ name: "Dark Glitter", year: "2025", base: "helm-2025-darkglitter-base.webp",   hover: "helm-2025-darkglitter-hover.webp" }
{ name: "Discoball",    year: "2025", base: "helm-2025-season-base.webp",        hover: "helm-2025-discoball-hover.webp" }
{ name: "Season",       year: "2024", base: "helm-2024-season-base.webp",        hover: "helm-2024-season-hover.webp" }
{ name: "Porcelain",    year: "2024", base: "helm-2024-porcelain-base.webp",     hover: "helm-2024-porcelain-hover.webp" }
{ name: "Japan",        year: "2024", base: "helm-2024-japan-base.webp",         hover: "helm-2024-gif-hover.webp" }
{ name: "Dark Mode",    year: "2024", base: "helm-2024-darkmode-base.webp",      hover: "helm-2024-darkmode-hover.webp" }
{ name: "Race 100",     year: "2023", base: "helm-2023-race-base.webp",          hover: "helm-2023-race-hover.webp" }
{ name: "Las Vegas",    year: "2023", base: "helm-2023-lasvegas-base.webp",      hover: "helm-2023-lasvegas-hover.webp" }
{ name: "Chrome",       year: "2023", base: "helm-2023-chrome-base.webp",        hover: "helm-2023-beachball-hover.webp" }
{ name: "Beachball",    year: "2023", base: "helm-2023-chrome-base.webp",        hover: "helm-2023-beachball-hover.webp" }
{ name: "Basketball",   year: "2022", base: "helm-2022-basketball-base.webp",    hover: "helm-2022-basketball-hover.webp" }
{ name: "Season",       year: "2021", base: "helm-2021-base.webp",               hover: "helm-2021-hover.webp" }
{ name: "Silverstone",  year: "2020", base: "helm-2020-silverstone-base.webp",   hover: "helm-2020-silverstone-hover.webp" }
{ name: "Season",       year: "2019", base: "helm-2019-base.webp",               hover: "helm-2019-base.webp" }
```

## Responsive
- Desktop (1440px): 4 columns staggered
- Tablet (768px): 2 columns
- Mobile (390px): 1 or 2 columns
