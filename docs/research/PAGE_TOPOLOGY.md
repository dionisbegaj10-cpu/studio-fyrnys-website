# Bernd Gruber Leistungen Page Topology

## Page Structure Overview

The Leistungen (Services) page of bernd-gruber.at is a full-scroll vertical composition with the following sections:

1. **Sticky Navigation Header** (position: sticky, z-index: 100)
   - White background, 54px height
   - Logo + studio name left
   - Nav links (Leistungen | Projekte | Über Uns | Kontakt) right with pipe separators
   - Desktop / Mobile variants

2. **Hero Section** (full width, white background)
   - Large heading: "Von der Vorstellung zur Wirklichkeit"
   - 3-paragraph intro text
   - Max-width container: 1320px
   - Padding: 80px top, 60px sides

3. **4-Column Image Strip** (full width, no gap)
   - 260px height
   - Images: slide-3, slide-7, slide-5, slide-2 from Asprea Studio
   - Caption below: "Wir kreieren Einzigartiges und setzen dabei neue Standards."
   - Italic styling, grey color #888

4. **Five Content Sections** (alternating 2-column layout)
   Each section:
   - Border-top: 1px solid #e8e8e8
   - Padding: 64px vertical, 60px horizontal
   - 2-column grid (image + text, alternating left/right)
   - 64px gap between columns

   Sections:
   - Empathie-Workshop (image left)
   - Innenarchitektur (image right)
   - Handwerk & Schreinerei (image left)
   - Möblierung (image right, includes CTA link)
   - Projektbetreuung (image left)

5. **Projekte Section** (light grey background #f5f4f2)
   - Heading row: "Projekte" + "Alle anzeigen ›" link
   - 4-column grid of project cards
   - Each card: image (240px height) + title
   - Padding: 60px
   - Hover: image scales +4%

6. **Mehr Section** (white background, border-top)
   - Heading: "Mehr"
   - 4-column grid of link cards
   - Each card: image + title + description

7. **Footer** (light beige background #f0ede8)
   - Border-top: 1px solid #e0dbd4
   - Left: Studio name + tagline + copyright
   - Right: Footer nav links
   - Padding: 48px 60px

## Interaction Model

- **Static content:** Hero, image strip, text sections
- **Hover states:** Project cards scale on hover
- **Responsive:** Layout switches at 768px breakpoint
  - Mobile: sections stack to single column
  - Desktop: 2-column layouts maintained

## Fixed/Sticky Elements

- Navigation bar: position sticky, top: 0, z-index: 100
- All other content: flow layout

## Layout Grid

- Max-width container: 1320px
- Padding: 60px sides (desktop), 20px sides (mobile)
- Typography: TT Norms Pro (sans-serif)
- Hero heading: Clamp(30px, 4vw, 52px)
- Section H2: Clamp(18px, 2vw, 24px)
- Body text: 15px, line-height 1.72
