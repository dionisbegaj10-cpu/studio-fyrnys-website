# MarqueeSection Specification

## Overview
- **Target file:** `src/components/MarqueeSection.tsx`
- **Interaction model:** CSS animation (always running)

## Visual Description
Full-width dark green section with two rows of horizontally scrolling white/cream text. The text scrolls continuously to the left. Large impact typography.

## DOM Structure
```
section.marquee-section (bg: #282c20)
  div.marquee-wrapper
    div.marquee-track (animation: marquee 25s linear infinite)
      span × N  ← repeated text items with separator dots
    div.marquee-track.reverse (optional second row, slower)
```

## Computed Styles

### marquee-section
- background-color: #282c20
- padding: 2rem 0
- overflow: hidden
- position: relative

### marquee text
- font-family: 'Brier', Arial, sans-serif
- font-size: clamp(3rem, 8vw, 7rem)
- font-weight: 700
- text-transform: uppercase
- color: #f4f4ed (cream white)
- white-space: nowrap
- letter-spacing: -0.01em
- line-height: 1

### separator between text items
- A star/asterisk character "✦" or "•" in lime (#d2ff00)
- margin: 0 1.5rem

### marquee-track
- display: flex
- align-items: center
- width: fit-content (duplicated content for seamless loop)
- animation: marquee 25s linear infinite

## Animation
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```
Duplicate the text content twice so the loop is seamless.

## Text Content (verbatim, from live site)
Row 1: "AT HOME WE DO A BRITISH GRAND PRIX WE'LL NOT FORGET" × repeated
(The exact text seen scrolling: "AT HOME WE DO A BRITISH GRAND PRIX WE'LL NOT FORGET ✦ AT HOME WE DO...")

Use this text repeated 4 times, then duplicate for seamless loop.

## Responsive
- Same on all sizes, text scales with `clamp()`
