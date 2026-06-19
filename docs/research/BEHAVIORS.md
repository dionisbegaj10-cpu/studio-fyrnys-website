# Behaviors — landonorris.com

## Scroll Behaviors

### Navbar Color Swap
- **Trigger**: Scroll into dark-bg sections (marquee/statement)
- **State A** (light bg): logo dark, text dark, STORE button lime-green, hamburger dark
- **State B** (dark bg): logo white, text white, STORE button lime-green, hamburger white/outlined
- **Implementation**: Two overlaid `.hero-nav-theme` divs (`.is-1` light, `.is-2` dark), opacity toggled via IntersectionObserver or Webflow scroll triggers

### Hero Sticky Scroll
- **Trigger**: Scroll through 1562px sticky wrapper
- **Behavior**: Hero panel stays fixed while page scrolls over it. As user scrolls, background transitions from cream to dark and Lando portrait animates (Rive).
- **Implementation**: `position: sticky` on inner `.sticky-item.home-hero` within tall wrapper

### Marquee Ticker
- **Trigger**: Always animating (CSS animation)
- **Content**: "AT HOME WE DO A BRITISH GRAND PRIX WE'LL NOT WILL REMEMBER" × repeated
- **Direction**: left (RTL scroll)
- **Speed**: ~30s loop
- **Implementation**: CSS `@keyframes marquee` with `transform: translateX(-50%)`

### Gallery Scattered Photos
- **Trigger**: Scroll-driven parallax
- **Behavior**: Photos at different depths move at different scroll speeds
- **Implementation**: JS scroll listener or CSS `animation-timeline: scroll()`

### ON TRACK / OFF TRACK Reveal
- **Trigger**: Scroll into viewport
- **Behavior**: Large text ("ON TRACK" left, "OFF TRACK" right) fades/reveals as user scrolls
- **Implementation**: IntersectionObserver fade-in

### Hall of Fame Helmet Cards
- **Trigger**: Hover
- **State A**: base helmet image visible
- **State B**: hover helmet image overlaid (usually same helmet from different angle/glossier)
- **Transition**: opacity crossfade ~0.3s ease

### Footer Entry
- **Trigger**: Scroll into footer
- **Visual**: Lime-green gradient fades to dark footer container with rounded top notch
- The notch is achieved with a dark container with `border-radius: 24px 24px 0 0` (or similar) protruding into the lime gradient above

## Click Behaviors

### Hamburger Menu
- Opens a full overlay navigation menu with 5 photos fanned around the nav links
- Photos: menu-img-1 through 5 (Lando portraits)
- Links: Home, On Track, Off Track, Calendar

### STORE Button
- External link to store
- Lime/neon green pill button with shopping bag icon

### Hall of Fame Cards
- Likely link to a dedicated helmet page

## Animation Details

### Loading Screen
- Initial state: lime-green fullscreen, "4" number as clip mask over Lando's face photo
- "LOAD NORRIS" text at bottom
- Exit: slides up or fades out after 2-3s
- **Implementation**: CSS `clip-path` or `mask-image` with the "4" number shape on photo, fade-out animation

### Social Photos Fan Spread
- 5 photos arranged in a fan pattern (rotated at different angles)
- Center photo is largest and most prominent
- Outer photos overlap and rotate outward
- **Implementation**: CSS `transform: rotate()` on each card

## Responsive Breakpoints
- **Desktop** (1440px): Full layouts as described
- **Tablet** (~768px): Some sections stack, nav may condense
- **Mobile** (~390px): Single column, hero text may use SVG text version (ln4-lando-norris-text-mobile.svg)
