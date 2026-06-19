# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/` (see scroll screenshots)
- **Interaction model:** Scroll-driven color swap (light→dark sections), plus click-driven hamburger menu

## DOM Structure
```
nav.nav (position: fixed, z-index: 120, full width, height: 87.5px, transparent bg)
  div.nav-inner (display: flex, align-items: center, justify-content: space-between, padding: 17.5px, height: 87.5px)
    a.nav-brand-link          ← LANDO NORRIS logo (top-left)
      div.nav-brand           ← SVG/text logo
    div.nav-center            ← LN monogram SVG (center, absolute)
    div.btn-layout.is-nav     ← right side: STORE btn + hamburger
      a.btn-w.is-nav          ← STORE button (lime green pill)
        span                  ← shopping bag icon + "STORE"
      button.nav-ham          ← hamburger button (dark square pill)
```

## Computed Styles (exact)

### nav
- position: fixed
- top: 0
- left: 0
- width: 100%
- z-index: 120
- height: 87.5px
- background: transparent
- pointer-events: none on wrapper, auto on children

### nav-inner
- display: flex
- align-items: center
- justify-content: space-between
- padding: 17.5px
- height: 87.5px
- width: 100%

### LANDO NORRIS logo text
- font-family: 'Brier', Arial, sans-serif
- font-weight: 700
- font-size: ~20px
- text-transform: uppercase
- line-height: 1
- color: var(--color-dark-green) on light sections, white on dark sections
- Two lines: "LANDO" / "NORRIS"

### STORE button (btn-w.is-nav)
- background: var(--color-lime) = #d2ff00
- color: var(--color-dark-green) = #282c20
- border-radius: 999px
- padding: 10px 20px
- font-size: 0.875rem
- font-weight: 700
- text-transform: uppercase
- letter-spacing: 0.06em
- display: flex; align-items: center; gap: 8px
- contains shopping bag SVG icon + text "STORE"
- Always lime regardless of bg section

### Hamburger button (nav-ham)
- background: var(--color-dark-green) = #282c20 on light sections
- background: white on dark sections
- OR: border: 1px solid, transparent bg
- border-radius: 999px
- width: ~44px; height: ~44px
- display: flex; align-items: center; justify-content: center
- contains "—" (minus/dash) icon, NOT a standard hamburger icon

### LN Monogram (center)
- SVG image: /svgs/ln-logo.svg
- position: absolute; left: 50%; transform: translateX(-50%)
- width: ~32px; height: ~32px

## States & Behaviors

### Light background mode (default — on hero, gallery sections)
- Logo: color: #282c20 (dark)
- Hamburger: background: #282c20, color: white
- STORE: background: #d2ff00 (always)

### Dark background mode (on marquee, statement, hall of fame sections)
- Logo: color: white (#f4f4ed)
- Hamburger: background: transparent, border: 1.5px solid white, color: white
- STORE: background: #d2ff00 (always)

### Implementation approach
Use React state + IntersectionObserver on dark-bg sections to toggle `data-theme="dark"` on nav. CSS selectors handle color swap.

### Hamburger click → menu open
- Full-screen overlay menu appears
- Shows: nav links (Home, On Track, Off Track, Calendar) + 5 rotating Lando photos
- Close button replaces hamburger

## Assets
- LN logo SVG: `/svgs/ln-logo.svg`
- Signature: `/svgs/hw-signature.svg`

## Text Content
- Logo: "LANDO" / "NORRIS" (two lines)
- Button: "STORE"
- Menu links: Home, On Track, Off Track, Calendar

## Responsive
- Desktop (1440px): full layout as described
- Mobile (390px): LANDO NORRIS logo may be replaced by SVG text image
