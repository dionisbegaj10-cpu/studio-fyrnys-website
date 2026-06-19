# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** Static

## Visual Description
Dark green rounded-top container that emerges from a lime-green gradient transition area. Contains:
- "ALWAYS BRINGING THE FIGHT." in huge impact text (white + lime colored words)
- Lando's signature SVG on top of the text
- Large F1 helmet image centered (ln-home-helm-large.webp, the neon yellow season 2025 helmet)
- Three columns: left=PAGES links, center=helmet+CTA, right=FOLLOW ON social links
- Sponsor logo row at bottom
- Legal row: copyright + Privacy Policy + Terms

## DOM Structure
```
div.footer-lime-transition (lime→transparent gradient, 200px tall)
section.footer-dark (bg: #282c20, border-radius: 24px 24px 0 0, margin-top: -24px)
  div.footer-tagline
    img.footer-sig (signature SVG, overlaid on text)
    h2.footer-impact "ALWAYS BRINGING THE FIGHT."
  div.footer-main-grid
    div.footer-col-pages
      p.footer-col-label "PAGES"
      nav
        a "HOME"
        a "ON TRACK"
        a "OFF TRACK"
        a "CALENDAR"
        a.lime "STORE"
    div.footer-col-center
      img.footer-helmet src="/images/footer-helmet.webp"
      a.btn-store "BUSINESS ENQUIRIES →"
    div.footer-col-social
      p.footer-col-label "FOLLOW ON"
      nav
        a "TIKTOK"
        a "INSTAGRAM"
        a "YOUTUBE"
        a "TWITCH"
  div.footer-sponsors
    img × sponsors (Monster Energy, Hilton, Quadrant, Bell, TUMI, Pure Electric, etc.)
  div.footer-legal
    span "© 2026 Lando Norris. All rights reserved"
    nav
      a "PRIVACY POLICY"
      a "TERMS"
```

## Computed Styles

### footer-lime-transition
- background: linear-gradient(to bottom, #d2ff00 0%, transparent 100%)
- height: 200px
- position: relative

### footer-dark
- background-color: #282c20
- border-radius: 24px 24px 0 0
- padding: 5rem 2.5rem 2rem
- position: relative
- overflow: hidden
- Also has organic contour lines as background (subtle dark green-on-dark-green)

### footer-impact
- font-family: 'Brier', Arial, sans-serif
- font-size: clamp(4rem, 8vw, 8rem)
- font-weight: 700
- text-transform: uppercase
- color: #f4f4ed (cream)
- line-height: 0.88
- text-align: center
- "BRINGING" and "FIGHT" are in #d2ff00 (lime/gold look)
- Exact: "ALWAYS " [white] "BRINGING" [lime] " THE " [white] "FIGHT." [lime]

### footer-sig
- position: absolute; centered over tagline
- width: ~200px
- filter: none (already a dark SVG but on dark bg, needs to be lime or white)
- Actually: the signature appears in neon yellow/lime color on the footer

### footer-main-grid
- display: grid; grid-template-columns: 1fr 2fr 1fr
- gap: 2rem; align-items: end
- margin: 3rem 0

### footer-col-label
- font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase
- color: #535450 (dark-green-tint-2)
- margin-bottom: 1.5rem

### footer-col nav links
- display: block; text-decoration: none
- font-family: 'Brier', Arial, sans-serif
- font-size: clamp(1.5rem, 2.5vw, 2rem)
- font-weight: 700
- text-transform: uppercase
- color: #f4f4ed
- line-height: 1.2
- transition: color 0.2s
- hover: color: #d2ff00

### STORE link (special)
- color: #d2ff00 (always lime)

### footer-helmet
- width: ~50%; max-width: 500px
- margin: 0 auto 2rem
- display: block

### footer-sponsors
- display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap
- gap: 1.5rem; padding: 2rem 0; border-top: 1px solid #3b3c38
- img: height: 24px; opacity: 0.6; filter: brightness(0) invert(1) — all white

### footer-legal
- display: flex; justify-content: space-between; align-items: center
- padding-top: 1.5rem; border-top: 1px solid #3b3c38
- font-size: 0.75rem; color: #535450
- a: color: #535450; text-decoration: none; hover: color: #f4f4ed

## Text Content (verbatim)
- Tagline: "ALWAYS BRINGING THE FIGHT."
- Pages: Home, On Track, Off Track, Calendar, Store
- Social: TikTok, Instagram, Youtube, Twitch
- CTA: "BUSINESS ENQUIRIES →"
- Copyright: "© 2026 Lando Norris. All rights reserved"
- Links: "PRIVACY POLICY" | "TERMS"

## Assets
- Helmet: `/images/footer-helmet.webp`
- Signature: `/svgs/hw-signature.svg`

## Responsive
- Desktop: 3-column grid
- Mobile: stack to single column, center-aligned
