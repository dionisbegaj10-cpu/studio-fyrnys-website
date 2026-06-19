# StatementSection Specification

## Overview
- **Target file:** `src/components/StatementSection.tsx`
- **Interaction model:** Static (scroll-reveal animation optional)

## Visual Description
Dark green section with massive impact text centered. Key word "LEGACY" is in neon lime (#d2ff00), rest is cream/white. Background has subtle organic contour lines.

## DOM Structure
```
section.statement-section (bg: #282c20)
  div.statement-bg-blobs (organic lines overlay)
  div.statement-content
    p.statement-text
      span "REDEFINING LIMITS,"
      br
      span "FIGHTING FOR WINS,"
      br
      span "BRINGING IT ALL IN"
      br
      span "ALL WAYS. DEFINING A"
      br
      span.lime "LEGACY"
      span " IN FORMULA 1"
      br
      span "ON AND OFF THE"
      br
      span "TRACK."
```

## Computed Styles

### statement-section
- background-color: #282c20
- min-height: 100vh
- display: flex
- align-items: center
- justify-content: center
- padding: 5rem 2rem
- position: relative
- overflow: hidden

### statement-bg-blobs
- position: absolute; top: 0; left: 0; width: 100%; height: 100%
- Organic contour outlines (same as hero, but visible as subtle green strokes on dark bg)
- opacity: 0.15
- pointer-events: none

### statement-text
- font-family: 'Brier', Arial, sans-serif
- font-size: clamp(3.5rem, 7vw, 7.9375rem) — var(--text-impact) = 7.9375rem at desktop
- font-weight: 700
- text-transform: uppercase
- color: #f4f4ed (cream)
- line-height: 0.88
- letter-spacing: -0.01em
- text-align: center
- max-width: 1200px

### .lime word
- color: #d2ff00
- font-family: 'Brier', Arial, sans-serif (same, but visually looks like italic serif — Brier has an italic variant)
- Actually uses a different font style — looks like a display italic serif
- Try: font-style: italic; font-family: 'Brier', Georgia, serif

## Text Content (verbatim)
"REDEFINING LIMITS, FIGHTING FOR WINS, BRINGING IT ALL IN ALL WAYS. DEFINING A LEGACY IN FORMULA 1 ON AND OFF THE TRACK."

"LEGACY" is highlighted in lime color #d2ff00 and uses italic/serif style.

## Assets
- Background blobs: same organic contour pattern (CSS-generated or SVG)

## Responsive
- Font scales down with clamp() on mobile
- Text remains centered
