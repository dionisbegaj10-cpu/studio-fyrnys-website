# GallerySection Specification

## Overview
- **Target file:** `src/components/GallerySection.tsx`
- **Interaction model:** Scroll-reveal (photos appear as you scroll), static layout

## Visual Description
Muted grey-green background (#b9bbad). Photos are scattered at various positions — some top-left, some bottom-right, centered large photos. Each has a caption (location, year). A quote appears with Lando's signature below it. At the bottom: large "ON TRACK" / "OFF TRACK" split text.

## DOM Structure
```
section.gallery-section (bg: #b9bbad)
  div.gallery-bg-blobs (organic contour lines, light on grey bg)
  div.gallery-grid
    div.gallery-photo photo-1 (top-left)
      span.photo-caption "QATAR, 2024"
      img src="/images/gallery-1.webp"
    div.gallery-photo photo-2 (center-large)
      img src="/images/gallery-2.webp"
    div.gallery-photo photo-3 (bottom-left, FIA)
      span.photo-caption "FIA PRIZE GIVING, 2024"
      img src="/images/gallery-3.webp"
    ... (more photos scattered)
  div.gallery-quote
    p.quote-text "Since I was 7 years old and had my first experience with kart racing, I've worked tirelessly to make that dream come true."
    img.quote-sig src="/svgs/hw-signature.svg"
  div.on-off-track
    span.track-left "ON TRACK"
    span.track-right "OFF TRACK"
```

## Computed Styles

### gallery-section
- background-color: #b9bbad
- min-height: 200vh (tall, allows multiple scroll reveals)
- position: relative
- padding: 5rem 2.5rem

### gallery photos
- position: absolute or in a CSS Grid with varied positioning
- Each photo has a border: none (raw image)
- caption above photo: font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: #282c20; opacity: 0.7
- photo widths vary: small ~180px, medium ~250px, large ~500px

### quote-text
- font-family: 'Brier', Georgia, serif
- font-size: clamp(1.2rem, 2vw, 1.8rem)
- font-style: italic
- color: #282c20
- max-width: 500px
- line-height: 1.4

### quote-sig
- width: ~80px
- margin-top: 1rem
- filter: none (dark signature SVG)

### ON TRACK / OFF TRACK text
- font-family: 'Brier', Arial, sans-serif
- font-size: clamp(4rem, 9vw, 8rem)
- font-weight: 700
- text-transform: uppercase
- color: #282c20
- display: grid; grid-template-columns: 1fr 1fr
- "ON" and "OFF" are thinner/lighter
- "TRACK" is bold on both sides
- Positioned at bottom of gallery section

## Photo Positions & Captions (exact from site)
- gallery-1.webp: top-right area, caption "QATAR, 2024"
- gallery-2.webp: center, large, no caption (main photo — Lando in orange cap)
- gallery-3.webp: bottom-left, caption "FIA PRIZE GIVING, 2024"
- gallery-4.webp: "MIAMI GP, 2024"
- gallery-5.webp: "BRITAIN, 2025"
- gallery-6.webp: "MONACO, 2023" (or another)
- gallery-7.webp: "BATTERSEA, 2024"
- gallery-8.webp: "HIGH PERFORMANCE GALA, 2024"
- gallery-9.webp: "BARCELONA, 2024"
- gallery-10.webp: "SUTTON, 2024"

## Quote Text (verbatim)
"Since I was 7 years old and had my first experience with kart racing, I've worked tirelessly to make that dream come true."

## Assets
- Photos: /images/gallery-1.webp through gallery-10.webp
- Signature: /svgs/hw-signature.svg

## Responsive
- Desktop: scattered 2D layout
- Mobile: stack vertically, photos full-width
