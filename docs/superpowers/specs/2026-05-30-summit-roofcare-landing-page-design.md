# Summit RoofCare — Landing Page Design Spec
**Date:** 2026-05-30  
**Status:** Approved

---

## Purpose

A portfolio/demo landing page for a fictional roofing company, "Summit RoofCare." Used to pitch real roofing companies in English-speaking markets (AU, UK, IE, CA, etc.). Primary conversion goal: quote requests from mobile visitors.

---

## Tech Stack

- Pure HTML5, CSS3, vanilla JavaScript — no frameworks, no dependencies
- Google Fonts via `@import` in CSS
- Deployable to GitHub Pages / Netlify / Vercel (no build step)
- Output: `index.html`, `style.css`, `script.js`

---

## Design Tokens

| Role | Value |
|---|---|
| Background (dark) | `#1C1F26` |
| Surface (warm off-white) | `#F5F3EF` |
| Surface (white) | `#FFFFFF` |
| Accent / CTA | `#E07B2A` |
| Accent hover | `#C96A1A` |
| Text dark | `#2D2D2D` |
| Text muted | `#6B7280` |
| Headline font | Oswald 700 (Google Fonts) |
| Body font | Lato 400 / 600 (Google Fonts) |

---

## Layout Approach

**Approach A: Dark hero → light body → dark footer**  
The hero is full-width charcoal. Body sections alternate between `#FFFFFF` and `#F5F3EF`. The trust bar, final CTA, and footer use charcoal. The amber accent pops strongly against dark backgrounds; on light sections it's used for headings, borders, and icon highlights.

---

## Sections (in order)

### 1. Header
- Sticky position, `#1C1F26` background
- Logo: "Summit RoofCare" in Oswald, white; shield/roof icon as inline SVG
- Nav links: Home, Services, Why Us, FAQ — Lato 600, white
- CTA pill button: "Get a Free Quote" in amber
- Mobile: hamburger toggle → fullscreen overlay nav
- Scroll behaviour: adds `box-shadow` on scroll

### 2. Hero
- Full-width `#1C1F26`, angled clip-path at bottom
- Headline: "Roof Problems Fixed Right — Transparent Quotes, No Surprises" — Oswald 700, clamp sizing
- Subheadline: "Reliable roofing services, honest inspections, clear written quotes, quality workmanship" — Lato 400, muted white
- Primary CTA: "Get a Free Quote" — amber fill button
- Secondary CTA: "View Our Services" — white outline ghost button
- Trust micro-points: "Licensed & Insured · Warranty-Backed · Fast Response" — small Lato caps, amber dots

### 3. Trust Bar
- 4 columns: Licensed & Insured / Fast Response Times / Warranty-Backed Work / Clear Written Quotes
- Off-white (`#F5F3EF`) background
- Amber inline SVG icons, Oswald label, short Lato description

### 4. Services
- White background
- 2-col mobile → 3-col desktop CSS grid
- 6 services: Roof Repairs, Roof Restoration, Leak Detection, Gutter Repair, Roof Inspections, Emergency Roof Work
- Each card: amber top-border accent, SVG icon, Oswald name, Lato description, amber arrow link

### 5. Project Cards (Before/After)
- `#F5F3EF` background
- 3 placeholder cards using CSS split (charcoal left / off-white right with labels)
- No fake photography, no real claims
- Label: "Sample project illustration"

### 6. Why Choose Us
- White background
- 4-item grid: Clear Communication / Local Roofing Team / No Hidden Costs / Quality Materials
- Filled amber icon circles, Oswald subheadings, Lato body

### 7. Our Process
- `#F5F3EF` background
- 4 steps: Request a Quote → Schedule Inspection → Receive a Clear Proposal → Complete the Work
- Large amber Oswald numerals as step indicators
- Horizontal flex stepper on desktop (with connector line), vertical cards on mobile

### 8. Testimonials
- `#1C1F26` background (dark section)
- 3 cards in warm off-white, large amber quotation marks
- CSS-generated initials avatar, name, location placeholder
- Small italic label: "(Sample testimonial — for portfolio illustration only)"

### 9. Service Areas
- White background
- Pill tags: City Centre, North Side, South Side, Coastal Area, Nearby Suburbs, + surrounding districts
- Amber hover fill on pills

### 10. FAQ Accordion
- `#F5F3EF` background
- 4 questions:
  1. How quickly can you inspect a roof?
  2. Do you provide written quotes?
  3. Can you handle emergency leaks?
  4. Do you repair gutters too?
- JS-driven expand/collapse, chevron rotation via CSS transform
- Amber left-border on open item, smooth `max-height` transition

### 11. Final CTA
- `#1C1F26` full-width section
- Oswald headline: "Need roof work? Request a free inspection today."
- Amber fill CTA button
- Short Lato sub-copy

### 12. Footer
- `#1C1F26` background
- Logo + tagline left, nav links right (desktop); stacked on mobile
- Contact placeholder (phone/email icons, placeholder text)
- Small muted text: "Demo concept for portfolio presentation only. Summit RoofCare is a fictional business."

---

## JavaScript Behaviours

| Feature | Implementation |
|---|---|
| Mobile nav toggle | Hamburger ↔ close icon, fullscreen overlay, `aria-expanded` |
| Sticky header shadow | `scroll` listener, adds `.scrolled` class |
| FAQ accordion | `click` on question, toggles `max-height` and `.open` class |
| Smooth scroll | `scroll-behavior: smooth` on `html` + JS fallback for anchor links |

---

## Accessibility & Performance

- Semantic HTML5 elements throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- All buttons have visible focus styles
- Colour contrast ≥ 4.5:1 for all text
- `preconnect` for Google Fonts to minimise render-blocking
- No JavaScript required for content — all copy visible without JS
- `aria-expanded`, `aria-controls` on accordion and nav toggle

---

## Constraints

- No country-specific references (no flags, no "Australian", no local bodies)
- No real certifications, review counts, or client results claimed
- All testimonials labelled as sample/demo content
- Footer carries explicit "Demo concept" disclaimer
