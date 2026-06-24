# Surya Foods — Architecture Reference

> **Purpose**: This document is the single source of truth for any AI agent or developer working on this codebase. Read this FIRST before making any changes.

---

## 1. Project Overview

| Field | Value |
|---|---|
| **Project** | Surya Foods Corporate Website |
| **Purpose** | B2B lead generation — international export brokers & domestic distributors |
| **Framework** | Astro v5 (Static Site Generation) |
| **Styling** | Tailwind CSS v4 (CSS-first config) |
| **Language** | TypeScript (strict mode) |
| **Deployment** | Cloudflare Workers via `@astrojs/cloudflare` adapter |
| **Build Tool** | Astro CLI (`astro build`) → Wrangler deploy |

---

## 2. Tech Stack Details

### Core Dependencies

| Package | Version | Purpose |
|---|---|---|
| `astro` | ^5.16 | Static site framework |
| `@astrojs/cloudflare` | ^12.6 | Cloudflare Workers adapter |
| `@astrojs/tailwind` | latest | Tailwind CSS integration |
| `tailwindcss` | ^4.x | Utility-first CSS (v4 CSS-first config) |
| `@astrojs/sitemap` | ^3.6 | Auto-generated sitemap.xml |
| `typescript` | ^5.9 | Type safety |

### Dev Dependencies

| Package | Version | Purpose |
|---|---|---|
| `wrangler` | ^4.88 | Cloudflare Workers CLI |

### Removed Dependencies (from original blog template)

| Package | Reason |
|---|---|
| `@astrojs/mdx` | No blog/markdown content needed |
| `@astrojs/rss` | No RSS feed needed |

---

## 3. File Structure

```
astro-surya-foods-landing-page/
├── public/                          # Static assets (served as-is)
│   ├── favicon.svg                  # SF monogram favicon
│   └── .assetsignore                # Cloudflare asset ignore rules
│
├── src/
│   ├── components/                  # Reusable Astro components
│   │   ├── BaseHead.astro           # <head> meta, fonts, OG tags
│   │   ├── Header.astro             # Trust bar + sticky nav + mobile menu
│   │   ├── Footer.astro             # Multi-column footer
│   │   ├── NavLink.astro            # Active-state-aware nav link
│   │   ├── SectionHeading.astro     # Reusable section title block
│   │   ├── LeadForm.astro           # Generic lead generation form
│   │   ├── StatsCounter.astro       # Animated metrics counter
│   │   ├── ProductCard.astro        # Rice grade display card
│   │   ├── TimelineItem.astro       # Heritage timeline entry
│   │   └── CertificationBadge.astro # Certification display card
│   │
│   ├── layouts/
│   │   └── MasterLayout.astro       # Global page wrapper layout
│   │
│   ├── pages/                       # File-based routing (each = 1 URL)
│   │   ├── index.astro              # / (Home)
│   │   ├── global-exports.astro     # /global-exports
│   │   ├── 048-brand.astro          # /048-brand
│   │   └── heritage.astro           # /heritage
│   │
│   ├── styles/
│   │   └── global.css               # Tailwind v4 base + @theme + utilities
│   │
│   ├── consts.ts                    # Site-wide constants & data
│   └── env.d.ts                     # TypeScript env declarations
│
├── docs/                            # AI agent & developer documentation
│   ├── architecture.md              # THIS FILE — project structure
│   ├── theme.md                     # Design system reference
│   ├── components.md                # Component API reference
│   ├── pages.md                     # Page structure & sections
│   ├── content.md                   # All text content & copy
│   └── forms.md                     # Form specifications
│
├── astro.config.mjs                 # Astro configuration
├── tsconfig.json                    # TypeScript configuration
├── wrangler.json                    # Cloudflare Workers config
├── package.json                     # Dependencies & scripts
└── package-lock.json                # Lockfile
```

---

## 4. Routing Map

Astro uses **file-based routing** — each `.astro` file in `src/pages/` maps to a URL.

| File | URL | Page Title |
|---|---|---|
| `src/pages/index.astro` | `/` | Surya Foods — Milling Excellence Since 1999 |
| `src/pages/global-exports.astro` | `/global-exports` | Global Exports — Surya Foods |
| `src/pages/048-brand.astro` | `/048-brand` | 048 Premium Rice — Surya Foods |
| `src/pages/heritage.astro` | `/heritage` | Heritage & Quality — Surya Foods |

> **No dynamic routes.** All pages are statically generated at build time.

---

## 5. Component Hierarchy

```
MasterLayout.astro
├── BaseHead.astro          (inside <head>)
│   ├── Google Fonts links
│   ├── Meta tags (SEO, OG, Twitter)
│   └── Structured data (JSON-LD)
│
├── Header.astro            (sticky, top of <body>)
│   ├── Trust Bar           (thin certification strip)
│   ├── Nav Bar             (logo + links + CTA)
│   │   └── NavLink.astro × N
│   └── Mobile Menu         (hamburger + slide-in drawer)
│
├── <slot />                (page-specific content)
│   ├── SectionHeading.astro      (used across all pages)
│   ├── StatsCounter.astro        (Home page)
│   ├── ProductCard.astro         (Global Exports page)
│   ├── LeadForm.astro            (Global Exports + 048 Brand pages)
│   ├── TimelineItem.astro        (Heritage page)
│   └── CertificationBadge.astro  (Heritage page)
│
└── Footer.astro            (bottom of <body>)
```

---

## 6. Data Flow

### No Server-Side Data Fetching
This is a purely static site. All content is hardcoded in:
- **`src/consts.ts`** — site-wide constants (title, description, nav links, stats, certifications list)
- **Page files** — page-specific content is written directly in each `.astro` page
- **Component props** — data is passed via Astro component props

### Form Submissions (Future Integration)
Forms are **frontend-only**. They render HTML `<form>` elements with:
- `action` attribute: empty or placeholder URL
- `method`: POST
- Client-side validation via vanilla JS in `<script>` tags

**Future wiring**: The user will connect forms to n8n webhooks or AWS SES. The form `action` URL and any fetch-based submission logic should be added at that time.

### State Management
- **No client-side state** — Astro renders everything at build time
- **Scroll position**: tracked via `<script>` for navbar transparency toggle
- **Mobile menu**: toggled via vanilla JS `classList.toggle()`
- **Form validation**: vanilla JS `<script>` blocks within form components
- **Scroll animations**: IntersectionObserver in a global `<script>` on MasterLayout

---

## 7. Styling Architecture

### Tailwind CSS v4 (CSS-first)

Tailwind v4 does NOT use `tailwind.config.js`. All configuration lives in `src/styles/global.css`:

```css
@import "tailwindcss";

@theme {
  --color-forest-*: ...;
  --color-gold-*: ...;
  --font-heading: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
}
```

See [theme.md](./theme.md) for the complete design system reference.

### Styling Patterns
1. **Tailwind utility classes** — primary styling method in `.astro` templates
2. **`@layer components`** — in `global.css` for reusable patterns (`.btn-primary`, `.section-padding`)
3. **Scoped `<style>` blocks** — only used for component-specific animations that can't be expressed as utilities
4. **NO inline styles** — all styling through Tailwind classes or CSS layers

---

## 8. Build & Deployment Pipeline

### NPM Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `astro dev` | Local dev server with HMR |
| `build` | `astro build` | Production build → `dist/` |
| `preview` | `astro build && wrangler dev` | Build + local Cloudflare preview |
| `deploy` | `wrangler deploy` | Deploy to Cloudflare Workers |
| `check` | `astro build && tsc && wrangler deploy --dry-run` | Full CI check |

### Build Output
- Astro builds to `dist/`
- Cloudflare Workers entry: `dist/_worker.js/index.js`
- Static assets: `dist/` directory (served by Cloudflare Assets)

### Environment
- Node.js >= 22 required
- No environment variables needed (static site)
- Cloudflare compatibility date: `2025-10-08`
- Cloudflare compatibility flags: `nodejs_compat`

---

## 9. SEO Strategy

| Element | Implementation |
|---|---|
| **Title tags** | Unique per page via `MasterLayout` prop |
| **Meta descriptions** | Unique per page via `MasterLayout` prop |
| **OG / Twitter cards** | `BaseHead.astro` generates all meta tags |
| **Sitemap** | Auto-generated by `@astrojs/sitemap` |
| **Canonical URLs** | Auto-generated from `Astro.url` |
| **Structured data** | JSON-LD `Organization` schema in `BaseHead.astro` |
| **Semantic HTML** | `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>` |
| **Heading hierarchy** | Single `<h1>` per page, logical `<h2>`→`<h3>` nesting |
| **Image alt text** | Required on all `<img>` elements |

---

## 10. Performance Considerations

| Strategy | Details |
|---|---|
| **Zero JS by default** | Astro ships zero client JS unless explicitly added via `<script>` |
| **Font loading** | Google Fonts with `display=swap` + preconnect hints |
| **Image optimization** | Unsplash CDN URLs with size parameters; future: use Astro `<Image>` |
| **CSS** | Tailwind v4 automatic tree-shaking; only used classes ship |
| **Static generation** | All pages pre-rendered at build time; no server-side rendering overhead |
| **Cloudflare CDN** | Global edge caching via Cloudflare Workers |

---

## 11. Critical Patterns & Conventions

### Naming Conventions
- **Files**: kebab-case (`global-exports.astro`, `lead-form.astro`)
- **Components**: PascalCase (`LeadForm.astro`, `ProductCard.astro`)
- **CSS classes**: Tailwind utilities; custom classes use kebab-case (`.btn-primary`)
- **TypeScript**: camelCase variables, PascalCase interfaces

### Component Props Pattern
All components use Astro's typed props:
```astro
---
interface Props {
  title: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary';
}
const { title, subtitle, variant = 'primary' } = Astro.props;
---
```

### Script Pattern
Client-side scripts are added as standard `<script>` tags in Astro components. They are **module-scoped** and **bundled** by default:
```astro
<script>
  // This runs on the client
  const observer = new IntersectionObserver(/* ... */);
</script>
```

### Image Pattern (Current)
Using external Unsplash URLs with query parameters for sizing:
```html
<img 
  src="https://images.unsplash.com/photo-xxx?w=1200&q=80" 
  alt="Descriptive alt text"
  loading="lazy"
  decoding="async"
/>
```

> **Future upgrade**: Replace with Astro's built-in `<Image>` component and local assets for better optimization.

---

## 12. Known Limitations & Future Improvements

| Area | Current State | Future Plan |
|---|---|---|
| **Forms** | Frontend-only, no submission | Wire to n8n/AWS SES |
| **Images** | External Unsplash URLs | Replace with real photography + Astro `<Image>` |
| **Analytics** | None | Add PostHog or Google Analytics |
| **i18n** | English only | Add multi-language support if needed |
| **CMS** | Hardcoded content | Consider Astro Content Collections or headless CMS |
| **Contact info** | Placeholder values | Replace with real phone, email, address |
| **Blog** | Removed | Re-add if content marketing is needed |

---

## 13. Dependency on External Services

| Service | Usage | Fallback |
|---|---|---|
| **Google Fonts CDN** | Playfair Display + Inter fonts | System serif/sans-serif stack |
| **Unsplash CDN** | Placeholder images | Broken image icons (replace with local assets) |
| **Cloudflare Workers** | Hosting & CDN | Any static host (Netlify, Vercel, etc.) |

---

## 14. For AI Agents: Quick Start

1. **Read these docs first**: `architecture.md` → `theme.md` → `components.md` → `pages.md`
2. **Understand the layout**: ALL pages wrap in `MasterLayout.astro`
3. **Style with Tailwind**: Use utility classes; check `theme.md` for custom tokens
4. **Content changes**: Edit page files directly or update `consts.ts`
5. **Adding a new page**: Create `src/pages/page-name.astro`, import `MasterLayout`
6. **Adding a component**: Create `src/components/ComponentName.astro` with typed props
7. **Build check**: Always run `npm run build` after changes to verify zero errors
8. **Never modify**: `wrangler.json`, `env.d.ts`, `.assetsignore` (infrastructure config)
