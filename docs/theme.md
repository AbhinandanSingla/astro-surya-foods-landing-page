# Surya Foods — Design System & Theme Reference

> **Purpose**: Complete design system specification for the Surya Foods website. All styling decisions, tokens, and patterns are documented here. Any AI agent modifying the UI MUST reference this file.

---

## 1. Design Philosophy

| Principle | Description |
|---|---|
| **Premium & Trustworthy** | Enterprise-grade aesthetic for B2B audiences. No playful colors, no casual tones. |
| **Mature & Established** | Reflects 25+ years of industry presence. Deep, rich colors convey stability. |
| **Minimalist** | Clean layouts, generous whitespace, purposeful content hierarchy. |
| **Agricultural Luxury** | Merges agricultural heritage (greens, earth tones) with premium positioning (gold, champagne). |
| **Performance-First** | Design choices that don't compromise page speed — no heavy JS animations, no large unoptimized assets. |

---

## 2. Color System

### Primary Palette — Forest Green

The brand's primary identity. Used for navigation, buttons, headers, and brand elements.

| Token | Hex | HSL | Usage |
|---|---|---|---|
| `--color-forest-950` | `#0a1f0f` | `140° 53% 8%` | Footer background, deepest overlays |
| `--color-forest-900` | `#0f2e17` | `140° 51% 12%` | Navigation background, hero overlays |
| `--color-forest-800` | `#1a4024` | `140° 42% 18%` | Hover states on dark backgrounds |
| `--color-forest-700` | `#265c34` | `140° 40% 25%` | Active states, borders on dark |
| `--color-forest-600` | `#2d7a3f` | `144° 45% 33%` | Primary brand green |
| `--color-forest-500` | `#3d9a52` | `140° 43% 42%` | CTA buttons, interactive elements |
| `--color-forest-400` | `#5bb870` | `140° 38% 54%` | Links, success states |
| `--color-forest-300` | `#85d196` | `140° 40% 67%` | Light accent on dark backgrounds |
| `--color-forest-200` | `#b3e4bf` | `140° 42% 80%` | Subtle tints |
| `--color-forest-100` | `#d9f2e0` | `140° 43% 90%` | Light section backgrounds |
| `--color-forest-50` | `#eef8f0` | `140° 40% 95%` | Barely-there tint |

### Accent Palette — Gold / Champagne

Premium accent used sparingly for emphasis, underlines, badges, and highlights.

| Token | Hex | HSL | Usage |
|---|---|---|---|
| `--color-gold-500` | `#b8922a` | `42° 63% 44%` | Dark gold for text accents |
| `--color-gold-400` | `#d4a853` | `40° 59% 58%` | Primary gold — underlines, badges, icons |
| `--color-gold-300` | `#e2c479` | `40° 60% 68%` | Lighter gold — hover highlights |
| `--color-gold-200` | `#f0dea6` | `42° 72% 80%` | Subtle gold backgrounds |
| `--color-gold-100` | `#f8efd3` | `42° 70% 90%` | Barely-there gold tint |
| `--color-gold-50` | `#fcf7ea` | `42° 67% 95%` | Gold-tinted white sections |

### Neutral Palette — Slate

Standard grays for body text, borders, and subtle UI elements.

| Token | Hex | Usage |
|---|---|---|
| `--color-slate-900` | `#0f172a` | Headings on light backgrounds |
| `--color-slate-800` | `#1e293b` | Primary body text |
| `--color-slate-700` | `#334155` | Secondary text |
| `--color-slate-600` | `#475569` | Muted text, labels |
| `--color-slate-500` | `#64748b` | Placeholder text |
| `--color-slate-400` | `#94a3b8` | Disabled states, subtle borders |
| `--color-slate-300` | `#cbd5e1` | Borders, dividers |
| `--color-slate-200` | `#e2e8f0` | Light borders, card edges |
| `--color-slate-100` | `#f1f5f9` | Alternate section backgrounds |
| `--color-slate-50` | `#f8fafc` | Lightest background |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-cream` | `#faf8f2` | Off-white warm section backgrounds |
| `--color-white` | `#ffffff` | Pure white backgrounds |
| `--color-success` | `#16a34a` | Form success states |
| `--color-error` | `#dc2626` | Form validation errors |

---

## 3. Typography

### Font Families

| Token | Font | Weights | Usage |
|---|---|---|---|
| `--font-heading` | `"Playfair Display", Georgia, "Times New Roman", serif` | 400, 500, 600, 700 | All headings (h1–h6), hero taglines, brand name |
| `--font-body` | `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | 300, 400, 500, 600, 700 | Body text, navigation, buttons, form fields |

### Google Fonts Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />
```

### Type Scale

Uses fluid typography with `clamp()` for responsive sizing.

| Element | Size (Desktop) | Size (Mobile) | Weight | Font | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|
| **Hero H1** | `4rem` (64px) | `2.5rem` (40px) | 700 | Heading | 1.1 | `-0.02em` |
| **Page H1** | `3rem` (48px) | `2rem` (32px) | 700 | Heading | 1.15 | `-0.02em` |
| **Section H2** | `2.25rem` (36px) | `1.75rem` (28px) | 600 | Heading | 1.2 | `-0.01em` |
| **Card H3** | `1.5rem` (24px) | `1.25rem` (20px) | 600 | Heading | 1.3 | `0` |
| **Subheading H4** | `1.25rem` (20px) | `1.125rem` (18px) | 600 | Heading | 1.4 | `0` |
| **Body Large** | `1.125rem` (18px) | `1rem` (16px) | 400 | Body | 1.7 | `0` |
| **Body** | `1rem` (16px) | `0.9375rem` (15px) | 400 | Body | 1.7 | `0` |
| **Body Small** | `0.875rem` (14px) | `0.8125rem` (13px) | 400 | Body | 1.6 | `0` |
| **Caption** | `0.75rem` (12px) | `0.75rem` (12px) | 500 | Body | 1.5 | `0.05em` |
| **Overline** | `0.75rem` (12px) | `0.6875rem` (11px) | 600 | Body | 1.5 | `0.15em` |
| **Nav Links** | `0.875rem` (14px) | — | 500 | Body | 1 | `0.02em` |
| **Button** | `0.9375rem` (15px) | `0.875rem` (14px) | 600 | Body | 1 | `0.03em` |
| **Trust Bar** | `0.75rem` (12px) | `0.625rem` (10px) | 500 | Body | 1 | `0.08em` |

---

## 4. Spacing System

Using Tailwind's default spacing scale. Key application patterns:

| Context | Desktop | Tablet | Mobile | Tailwind Class |
|---|---|---|---|---|
| **Section vertical padding** | `6rem` (96px) | `4rem` (64px) | `3rem` (48px) | `py-12 md:py-16 lg:py-24` |
| **Container max-width** | `1280px` | 100% | 100% | `max-w-7xl mx-auto` |
| **Container horizontal padding** | `2rem` (32px) | `1.5rem` (24px) | `1rem` (16px) | `px-4 md:px-6 lg:px-8` |
| **Between sections** | `0` | `0` | `0` | Sections handle own padding |
| **Between heading & content** | `2rem` (32px) | `1.5rem` (24px) | `1rem` (16px) | `mb-8 md:mb-10 lg:mb-12` |
| **Grid gap** | `2rem` (32px) | `1.5rem` (24px) | `1rem` (16px) | `gap-4 md:gap-6 lg:gap-8` |
| **Card internal padding** | `2rem` (32px) | `1.5rem` (24px) | `1.25rem` (20px) | `p-5 md:p-6 lg:p-8` |

---

## 5. Breakpoints

Using Tailwind's default breakpoints, mobile-first:

| Breakpoint | Min Width | Typical Device | Prefix |
|---|---|---|---|
| Default | `0px` | Mobile phones | (none) |
| `sm` | `640px` | Large phones / small tablets | `sm:` |
| `md` | `768px` | Tablets | `md:` |
| `lg` | `1024px` | Small laptops | `lg:` |
| `xl` | `1280px` | Desktops | `xl:` |
| `2xl` | `1536px` | Large desktops | `2xl:` |

### Grid Patterns per Breakpoint

| Layout | Mobile | Tablet (md) | Desktop (lg+) |
|---|---|---|---|
| **Stats bar** | 2 columns | 4 columns | 4 columns |
| **Product cards** | 1 column | 2 columns | 4 columns |
| **Pathway cards** | 1 column (stacked) | 2 columns | 2 columns |
| **Certification grid** | 2 columns | 3 columns | 4 columns |
| **Footer columns** | 1 column (stacked) | 2 columns | 4 columns |
| **Split sections** | Stacked (image on top) | Side-by-side | Side-by-side |

---

## 6. Component Styles

### Buttons

#### Primary Button
```
bg-forest-500 text-white font-semibold
px-8 py-3.5 rounded-lg
hover:bg-forest-600 
transition-all duration-300
shadow-lg hover:shadow-xl hover:-translate-y-0.5
text-[15px] tracking-wide uppercase
```

#### Secondary Button (Outline)
```
border-2 border-white text-white font-semibold
px-8 py-3.5 rounded-lg
hover:bg-white hover:text-forest-900
transition-all duration-300
text-[15px] tracking-wide uppercase
```

#### Ghost Button (on dark backgrounds)
```
border border-gold-400/40 text-gold-300
px-6 py-3 rounded-lg
hover:bg-gold-400/10 hover:border-gold-400
transition-all duration-300
```

### Cards

#### Standard Card
```
bg-white rounded-2xl overflow-hidden
shadow-md hover:shadow-xl
transition-all duration-500
hover:-translate-y-1
border border-slate-100
```

#### Feature / Pathway Card
```
relative overflow-hidden rounded-2xl
group cursor-pointer
aspect-[4/3] or aspect-[3/2]
bg-cover bg-center
```
With overlay:
```
absolute inset-0
bg-gradient-to-t from-forest-950/90 via-forest-950/50 to-transparent
group-hover:from-forest-950/95
transition-all duration-500
```

### Form Fields

#### Input / Textarea
```
w-full px-4 py-3.5
bg-white border border-slate-300 rounded-lg
text-slate-800 placeholder:text-slate-400
font-body text-base
focus:outline-none focus:ring-2 focus:ring-forest-500/30 focus:border-forest-500
transition-all duration-200
```

#### Label
```
block text-sm font-medium text-slate-700 mb-1.5
```

#### Error State
```
border-red-500 focus:ring-red-500/30 focus:border-red-500
```

#### Error Message
```
text-red-600 text-sm mt-1
```

### Navigation

#### Trust Bar
```
bg-forest-950 text-center
py-2 px-4
text-[11px] sm:text-xs font-medium tracking-widest uppercase
text-forest-200/80
border-b border-forest-800/50
```

#### Nav Container (scrolled)
```
bg-forest-900/95 backdrop-blur-md
border-b border-forest-700/30
shadow-lg
```

#### Nav Container (at top, transparent for hero pages)
```
bg-transparent
border-b border-transparent
```

---

## 7. Effects & Animations

### Scroll-Triggered Fade-In-Up

Applied to sections and cards as they enter the viewport:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}
```

**Implementation**: IntersectionObserver adds class when element enters viewport:
```js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);
document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
```

### Card Hover Lift
```css
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
/* on hover: */
transform: translateY(-4px);
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
```

### Gold Shimmer (for premium elements)
```css
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.text-gradient-gold {
  background: linear-gradient(
    90deg,
    var(--color-gold-400),
    var(--color-gold-200),
    var(--color-gold-400)
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s ease-in-out infinite;
}
```

### Navbar Scroll Transition
```css
transition: background-color 0.3s ease, 
            box-shadow 0.3s ease, 
            border-color 0.3s ease;
```

### Stagger Animation (for grid items)
Each grid child gets a staggered delay:
```css
[data-animate]:nth-child(1) { animation-delay: 0ms; }
[data-animate]:nth-child(2) { animation-delay: 100ms; }
[data-animate]:nth-child(3) { animation-delay: 200ms; }
[data-animate]:nth-child(4) { animation-delay: 300ms; }
```

---

## 8. Image Treatment

### Hero Backgrounds
- Full viewport width and height (`min-h-screen` or `min-h-[70vh]`)
- Dark gradient overlay for text readability:
  ```
  bg-gradient-to-r from-forest-950/90 via-forest-950/70 to-forest-950/50
  ```
- `object-cover` for responsive fitting
- `loading="eager"` for hero images (above the fold)

### Section Images
- `rounded-2xl` for soft corners
- `shadow-xl` for depth
- `loading="lazy"` for below-the-fold images
- `decoding="async"` for performance

### Product Cards
- Aspect ratio: `aspect-[4/3]`
- `object-cover` to fill container
- Subtle zoom on hover: `group-hover:scale-105 transition-transform duration-700`

---

## 9. Section Pattern Templates

### Full-Width Hero
```
<section class="relative min-h-screen flex items-center">
  <img ... class="absolute inset-0 w-full h-full object-cover" />
  <div class="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/70 to-forest-950/40" />
  <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    <!-- content -->
  </div>
</section>
```

### Standard Content Section (Light)
```
<section class="py-16 md:py-20 lg:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    <SectionHeading ... />
    <!-- content -->
  </div>
</section>
```

### Alternate Content Section (Cream)
```
<section class="py-16 md:py-20 lg:py-24 bg-cream">
  <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    <!-- content -->
  </div>
</section>
```

### Dark CTA Section
```
<section class="py-16 md:py-20 lg:py-24 bg-forest-900 text-white">
  <div class="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
    <!-- content -->
  </div>
</section>
```

---

## 10. Accessibility Requirements

| Requirement | Implementation |
|---|---|
| **Color contrast** | All text meets WCAG AA (4.5:1 for body, 3:1 for large text) |
| **Focus indicators** | `focus:ring-2 focus:ring-forest-500` on all interactive elements |
| **Alt text** | Required on all `<img>` elements |
| **Aria labels** | On icon-only buttons and navigation landmarks |
| **Skip navigation** | Hidden "Skip to content" link as first focusable element |
| **Form labels** | All inputs have associated `<label>` elements |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` disables animations |
| **Semantic HTML** | `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` used correctly |

---

## 11. Tailwind v4 `global.css` Structure

The complete `global.css` should follow this structure:

```css
/* 1. Tailwind base import */
@import "tailwindcss";

/* 2. Theme tokens */
@theme {
  --color-forest-*: ...;
  --color-gold-*: ...;
  --color-cream: ...;
  --font-heading: ...;
  --font-body: ...;
}

/* 3. Base layer — global resets & defaults */
@layer base {
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body); color: var(--color-slate-800); }
  h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
  ::selection { background: var(--color-forest-200); color: var(--color-forest-900); }
}

/* 4. Component layer — reusable patterns */
@layer components {
  .btn-primary { ... }
  .btn-secondary { ... }
  .section-padding { ... }
  .container-custom { ... }
}

/* 5. Utility layer — custom utilities */
@layer utilities {
  .text-gradient-gold { ... }
  .animate-fade-in-up { ... }
}

/* 6. Keyframes (outside layers) */
@keyframes fadeInUp { ... }
@keyframes shimmer { ... }
```
