# PartnersSection Specification

## Overview
- **Target file:** `src/components/PartnersSection.tsx`
- **Interaction model:** Static

## Visual Description
Light cream-green background (#ebeee0). Left side: "PARTNERS & CAMPAIGNS" large display text. Right side: description paragraph. Below: horizontal row of partner brand logos in black.

## DOM Structure
```
section.partners-section (bg: #ebeee0)
  div.partners-header
    div.partners-title-col
      h2.partners-title "PARTNERS\n&CAMPAIGNS"
    div.partners-desc-col
      p.partners-desc "Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries."
  div.partners-logos
    img × 8 logos
```

## Computed Styles

### partners-section
- background-color: #ebeee0
- padding: 5rem 2.5rem

### partners-header
- display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: end
- margin-bottom: 4rem

### partners-title
- font-family: 'Brier', Arial, sans-serif
- font-size: clamp(3rem, 6vw, 5.5rem)
- font-weight: 700
- text-transform: uppercase
- color: #282c20
- line-height: 0.9
- "&CAMPAIGNS" on second line, slightly larger italic or display

### partners-desc
- font-family: 'Mona Sans Variable', sans-serif
- font-size: 1.125rem; line-height: 1.7; color: #282c20; max-width: 400px

### partners-logos
- display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap
- gap: 2rem; padding-top: 3rem; border-top: 1px solid #b4b8a5
- img: height: 28px; object-fit: contain; filter: none (logos are black)

## Partner Logos (text fallbacks if SVGs unavailable)
- PlayStation (PS logo)
- Quadrant (stylized Q with "quadrant" text)
- TUMI (text wordmark)
- Hilton (text in box)
- Uber (text wordmark)
- LNKART (stylized text)
- BELL HELMETS (circle logo)
- PURE ELECTRIC (text)

Use text-based logos as inline SVGs or img tags if needed.

## Text Content (verbatim)
- "PARTNERS &CAMPAIGNS"
- "Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries."

## Responsive
- Desktop: 2-column header, logo row
- Mobile: stack header, logo row wraps
