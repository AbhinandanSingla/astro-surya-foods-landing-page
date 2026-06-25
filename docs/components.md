# Surya Foods — Component API Reference

> **Purpose**: Complete props, usage patterns, and behavior documentation for every Astro component in the project. AI agents should reference this when modifying or consuming components.

---

## 1. Component Index

| Component | File | Purpose | Used On |
|---|---|---|---|
| `BaseHead` | `src/components/BaseHead.astro` | `<head>` meta tags, fonts, SEO | All pages (via MasterLayout) |
| `Header` | `src/components/Header.astro` | Trust bar + sticky nav + mobile menu | All pages (via MasterLayout) |
| `Footer` | `src/components/Footer.astro` | Multi-column footer | All pages (via MasterLayout) |
| `NavLink` | `src/components/NavLink.astro` | Active-state nav link | Header |
| `SectionHeading` | `src/components/SectionHeading.astro` | Section title block | All pages |
| `LeadForm` | `src/components/LeadForm.astro` | Lead generation form | Global Exports, 048 Brand |
| `StatsCounter` | `src/components/StatsCounter.astro` | Animated metric display | Home |
| `ProductCard` | `src/components/ProductCard.astro` | Rice grade card | Global Exports |
| `TimelineItem` | `src/components/TimelineItem.astro` | Heritage timeline entry | Heritage |
| `CertificationBadge` | `src/components/CertificationBadge.astro` | Certification display card | Heritage |
| `MasterLayout` | `src/layouts/MasterLayout.astro` | Global page wrapper | All pages |

---

## 2. MasterLayout

**File**: `src/layouts/MasterLayout.astro`

### Purpose
Global page layout wrapper. Every page MUST use this layout.

### Props

```typescript
interface Props {
  title: string;                  // Page <title> — required
  description: string;            // Meta description — required
  image?: string;                 // OG/Twitter image URL
  transparentNav?: boolean;       // If true, nav starts transparent (for hero pages)
}
```

### Usage

```astro
---
import MasterLayout from '../layouts/MasterLayout.astro';
---

<MasterLayout 
  title="Page Title — Surya Foods" 
  description="A compelling meta description."
  transparentNav={true}
>
  <section>
    <!-- Page content goes here -->
  </section>
</MasterLayout>
```

### Behavior
- Renders `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- Includes `BaseHead` in `<head>`
- Renders `Header` with `transparentNav` prop
- Renders `<main>` with `<slot />` for page content
- Renders `Footer`
- Injects global scroll animation script (IntersectionObserver for `[data-animate]` elements)
- Injects navbar scroll-tracking script

---

## 3. BaseHead

**File**: `src/components/BaseHead.astro`

### Props

```typescript
interface Props {
  title: string;
  description: string;
  image?: string;    // defaults to default OG image
}
```

### Renders
- Character set, viewport meta
- Favicon link
- Google Fonts preconnect + stylesheet
- Canonical URL
- Primary meta tags (title, description)
- Open Graph meta tags
- Twitter Card meta tags
- JSON-LD structured data (Organization schema)

### Important Notes
- This component renders ONLY `<meta>`, `<link>`, `<title>`, and `<script type="application/ld+json">` tags
- It does NOT render `<head>` — the parent layout provides that
- It imports `global.css` to ensure Tailwind styles are included

---

## 4. Header

**File**: `src/components/Header.astro`

### Props

```typescript
interface Props {
  transparentNav?: boolean;   // default: false
}
```

### Structure

```
<header>
  ├── Trust Bar (always visible)
  │   └── "Internationally Certified Export House | ISO 22000:2018 | FSSAI Certified"
  │
  ├── Nav Bar (sticky)
  │   ├── Logo ("SURYA FOODS" text)
  │   ├── Desktop Nav Links (hidden on mobile)
  │   │   ├── NavLink (Home)
  │   │   ├── NavLink (Global Exports)
  │   │   ├── NavLink (048 Brand)
  │   │   └── NavLink (Heritage & Quality)
  │   ├── CTA Button ("Partner With Us") (hidden on mobile)
  │   └── Hamburger Button (visible on mobile only)
  │
  └── Mobile Drawer (hidden by default)
      ├── NavLink × 4
      └── CTA Button
</header>
```

### Behavior
- **Trust Bar**: Always visible, fixed height, no interaction
- **Sticky Nav**: `position: sticky; top: 0; z-index: 50;`
- **Transparent mode** (`transparentNav={true}`): Nav starts transparent, transitions to `bg-forest-900/95 backdrop-blur-md` on scroll (>50px)
- **Opaque mode** (`transparentNav={false}`): Nav always has `bg-forest-900` background
- **Mobile menu**: Hamburger toggles a slide-in overlay drawer. Uses `classList.toggle('hidden')` on click.
- **Active link**: Current page link gets gold underline indicator

### Client Script
```javascript
// Scroll-aware navbar
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 50) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});
```

---

## 5. Footer

**File**: `src/components/Footer.astro`

### Props
None — uses constants from `consts.ts`.

### Structure (4-column layout)

```
<footer class="bg-forest-950 text-white">
  ├── Column 1: Company Info
  │   ├── Logo / Name
  │   ├── Brief description
  │   └── Social links (placeholder)
  │
  ├── Column 2: Quick Links
  │   ├── Home
  │   ├── Global Exports
  │   ├── 048 Brand
  │   └── Heritage & Quality
  │
  ├── Column 3: Export Inquiries
  │   ├── Email (placeholder)
  │   ├── Phone (placeholder)
  │   └── Address (placeholder)
  │
  ├── Column 4: Certifications
  │   ├── ISO 22000:2018
  │   ├── FSSAI Certified
  │   ├── DGFT Registered Exporter
  │   └── APEDA Registered
  │
  ├── Divider (gold accent line)
  │
  └── Bottom Bar
      ├── © {year} Surya Foods. All rights reserved.
      └── Privacy Policy | Terms (placeholder links)
</footer>
```

---

## 6. NavLink

**File**: `src/components/NavLink.astro`

### Props

```typescript
interface Props {
  href: string;      // Link URL
  class?: string;    // Additional CSS classes
}
```

### Behavior
- Renders an `<a>` tag with slot content
- Detects active state by comparing `href` with `Astro.url.pathname`
- Active state: adds gold bottom border and `text-gold-400` color
- Hover state: `text-gold-300` transition

### Usage

```astro
<NavLink href="/global-exports">Global Exports</NavLink>
```

---

## 7. SectionHeading

**File**: `src/components/SectionHeading.astro`

### Props

```typescript
interface Props {
  overline?: string;    // Small uppercase text above title (e.g., "OUR LEGACY")
  title: string;        // Main heading text
  subtitle?: string;    // Description paragraph below title
  align?: 'left' | 'center';   // default: 'center'
  light?: boolean;      // true = white text (for dark backgrounds)
}
```

### Renders
```
<div>
  <p class="overline">OVERLINE TEXT</p>
  <h2>Title Text</h2>
  <div class="gold-underline" />       <!-- 60px wide gold bar -->
  <p class="subtitle">Subtitle text</p>
</div>
```

### Usage

```astro
<SectionHeading
  overline="Our Products"
  title="Premium Basmati Rice Grades"
  subtitle="We offer a comprehensive range of premium Basmati rice varieties..."
  align="center"
/>
```

---

## 8. LeadForm

**File**: `src/components/LeadForm.astro`

### Props

```typescript
interface Props {
  formId: string;              // Unique form identifier
  formType: 'export' | 'distributor';  // Determines field configuration
  heading: string;             // Form section heading
  subtitle?: string;           // Description text
}
```

### Field Configurations

**Export form** (`formType: 'export'`):
| Field | Type | Required | Placeholder |
|---|---|---|---|
| fullName | text | ✅ | Full Name |
| companyName | text | ✅ | Company Name |
| country | text | ✅ | Country |
| email | email | ✅ | Business Email |
| phone | tel | ✅ | Phone Number |
| products | select (multi) | ✅ | Interested Products |
| volume | text | ❌ | Annual Volume Requirements |
| message | textarea | ❌ | Additional Message |

**Distributor form** (`formType: 'distributor'`):
| Field | Type | Required | Placeholder |
|---|---|---|---|
| fullName | text | ✅ | Full Name |
| businessName | text | ✅ | Business / Company Name |
| city | text | ✅ | City / Region |
| state | select | ✅ | Select State |
| email | email | ✅ | Business Email |
| phone | tel | ✅ | Phone Number |
| network | textarea | ❌ | Describe Your Current Distribution Network |
| message | textarea | ❌ | Additional Message |

### Behavior
- Frontend-only validation on submit
- Required fields show red border + error message if empty
- Email field validates format
- Form does NOT submit to any backend (placeholder `action=""`)
- On successful validation: shows a success message UI state (green banner)
- Submit button shows "Submitting..." text state on click (reverts after 2 seconds since no backend)

### Important Notes for Future Integration
The form renders a standard HTML `<form>` with `id={formId}`. To wire to a backend:
1. Set `action` attribute to webhook URL
2. Or replace the submit handler with `fetch()` to POST form data as JSON
3. The form data can be collected via `new FormData(form)` in the submit handler

---

## 9. StatsCounter

**File**: `src/components/StatsCounter.astro`

### Props

```typescript
interface Props {
  stats: Array<{
    value: string;      // Display value (e.g., "25+", "15+", "50000+")
    label: string;      // Description (e.g., "Years of Legacy")
    suffix?: string;    // Optional suffix (e.g., "MT", "Countries")
  }>;
}
```

### Renders
A horizontal row of stat items with large numbers and descriptive labels.

### Usage

```astro
<StatsCounter stats={[
  { value: "25+", label: "Years of Legacy" },
  { value: "15+", label: "Countries Served" },
  { value: "50000+", label: "MT Annual Capacity", suffix: "MT" },
  { value: "500+", label: "Happy Clients" },
]} />
```

### Layout
- Mobile: 2×2 grid
- Tablet+: single row of 4
- Gold accent line between items on desktop
- Numbers use `font-heading` in large size, labels use `font-body` in small caps

---

## 10. ProductCard

**File**: `src/components/ProductCard.astro`

### Props

```typescript
interface Props {
  name: string;           // e.g., "1121 Basmati Rice"
  image: string;          // Image URL
  description: string;    // Brief product description
  forms: string[];        // Available forms: ["Raw", "Steam", "Sella"]
  grade?: string;         // Optional grade label
}
```

### Renders
```
<div class="card">
  <img ... />                    <!-- Product image, aspect-[4/3] -->
  <div class="content">
    <span class="grade-badge" />  <!-- If grade provided -->
    <h3>{name}</h3>
    <p>{description}</p>
    <div class="forms">
      {forms.map(f => <span class="form-tag">{f}</span>)}
    </div>
  </div>
</div>
```

### Usage

```astro
<ProductCard
  name="1121 Basmati Rice"
  image="https://images.unsplash.com/..."
  description="The king of Basmati. Known for its exceptional grain length..."
  forms={["Raw", "Steam", "Sella"]}
  grade="Premium"
/>
```

---

## 11. TimelineItem

**File**: `src/components/TimelineItem.astro`

### Props

```typescript
interface Props {
  year: string;           // e.g., "1999"
  title: string;          // Milestone title
  description: string;    // Milestone description
  position: 'left' | 'right';   // Alternating side
}
```

### Renders
A single entry in a vertical timeline with:
- Year badge (gold circle on the timeline line)
- Title and description card on alternating sides
- Connecting vertical line between items

### Layout
- Desktop: alternating left/right cards with center vertical line
- Mobile: all cards on the right, vertical line on the left

---

## 12. CertificationBadge

**File**: `src/components/CertificationBadge.astro`

### Props

```typescript
interface Props {
  name: string;           // e.g., "ISO 22000:2018"
  description: string;    // Brief description of what the certification means
  icon?: string;          // SVG icon or emoji (optional)
}
```

### Renders
A card in the certifications grid:
```
<div class="cert-card">
  <div class="icon">{icon or default shield icon}</div>
  <h4>{name}</h4>
  <p>{description}</p>
</div>
```

### Layout
Cards are displayed in a responsive grid:
- Mobile: 2 columns
- Tablet: 3 columns
- Desktop: 4 columns

---

## 13. Cross-Cutting Patterns

### Adding `data-animate` for Scroll Animations

Any element with `data-animate` attribute will fade-in-up when it enters the viewport:

```astro
<div data-animate>
  <!-- This will animate in on scroll -->
</div>
```

For staggered grid animations, each child gets the attribute:

```astro
{items.map((item) => (
  <div data-animate>
    <ProductCard {...item} />
  </div>
))}
```

### Container Pattern

All page sections should use this container pattern for consistent widths:

```astro
<section class="py-16 md:py-20 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    <!-- section content -->
  </div>
</section>
```

### Importing Components

All imports use relative paths from the consuming file:

```astro
---
import SectionHeading from '../components/SectionHeading.astro';
import ProductCard from '../components/ProductCard.astro';
---
```

Or with path aliases (if configured in tsconfig.json):

```astro
---
import SectionHeading from '@components/SectionHeading.astro';
---
```
