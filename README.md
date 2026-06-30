# SOROSHA — Time. Redefined.

The flagship marketing & storefront experience for **SOROSHA**, a luxury
Swiss-inspired skeleton watch maker based in Ontario, Canada.

A cinematic, dark-luxury redesign built to feel like stepping into an exclusive
boutique — bespoke SVG timepieces, gold-on-ink styling, and smooth, performant
animations throughout.

## Stack

- **Next.js 16** (App Router, Turbopack) · fully statically generated
- **React 19** · **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` design tokens)
- `next/font` — **Bebas Neue** (display) + **Inter** (body)
- Animations via CSS + a lightweight `IntersectionObserver` reveal system
  (no heavy runtime animation libraries — keeps the bundle lean and the
  Lighthouse score high). Respects `prefers-reduced-motion`.

### A note on imagery

Every watch, gear, dial and emblem is drawn as **bespoke, themeable SVG** —
modelled on the real SOROSHA product (octagonal bezel, exposed screws,
integrated bracelet, skeletonised exhibition dial). Nothing depends on external
image hosts, so the experience always renders flawlessly and loads instantly.

## Routes

| Route | Description |
| --- | --- |
| `/` | Cinematic home — hero, featured collection, why SOROSHA, mechanical beauty, lifestyle, collections carousel, craftsmanship timeline, testimonials, gallery, FAQ, newsletter |
| `/collections` | The four collections + categories + stats |
| `/collections/[slug]` | Product page — 360° drag viewer, zoom, sticky purchase, tabbed specs/reviews/shipping/warranty, related products |
| `/about` | The house of SOROSHA + craftsmanship timeline |
| `/journal` | Editorial journal |
| `/contact` | Contact + private-viewing enquiry (Ontario, Canada · +1 613 900 7544) |
| `/wishlist` | Wishlist |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run lint
```

## Design system

- **Ink** `#0A0A0A` · **Paper** `#FFFFFF` · **Gold** `#B68D40`
- Charcoal / silver / soft-gray neutrals
- Glassmorphism, hairline gold dividers, magnetic & reveal interactions,
  custom luxury cursor, animated loading screen.

© SOROSHA Watch Company · Ontario, Canada.
