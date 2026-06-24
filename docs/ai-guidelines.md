# Surya Foods — AI Agent Guidelines

> **Purpose**: Rules, conventions, and operational guidelines for any AI agent working on this codebase. Read this BEFORE making changes. Violating these rules may break the build, the design, or the user experience.

---

## 1. Document Reading Order

When starting work on this project, read documentation in this order:

1. **`docs/architecture.md`** — Project structure, tech stack, file map, deployment
2. **`docs/theme.md`** — Design system, colors, typography, animations, component styles
3. **`docs/components.md`** — Component API, props, usage patterns
4. **`docs/pages.md`** — Page sections, layout, content placement
5. **`docs/content.md`** — All text copy, product data, company info
6. **`docs/forms.md`** — Form fields, validation, payload contracts
7. **`docs/ai-guidelines.md`** — THIS FILE — conventions and rules

---

## 2. Golden Rules

### DO ✅
- Use Tailwind utility classes as the primary styling method
- Keep all components in `src/components/` with PascalCase names
- Use typed props (`interface Props`) in every component
- Use `MasterLayout` for every page — never create standalone HTML documents
- Run `npm run build` after making changes to verify zero build errors
- Use `data-animate` attribute for scroll-triggered animations
- Keep images lazy-loaded (`loading="lazy"`) except hero images
- Use semantic HTML (`<section>`, `<nav>`, `<main>`, `<footer>`, etc.)
- Preserve all existing comments and docstrings unless directly modifying them
- Use the color tokens defined in `global.css` `@theme` — never hardcode hex values
- Use `font-heading` for headings and `font-body` for body text

### DON'T ❌
- Don't install new CSS frameworks (no Bootstrap, Chakra, etc.)
- Don't use inline styles — use Tailwind classes or CSS layers
- Don't create `tailwind.config.js` — this is Tailwind v4 with CSS-first config
- Don't modify `wrangler.json`, `env.d.ts`, or `.assetsignore`
- Don't add client-side frameworks (React, Vue, Svelte) without explicit user approval
- Don't use `Astro.glob()` — use static imports or direct data
- Don't create dynamic/SSR routes — this is a static site
- Don't hardcode company phone numbers, emails, or addresses — use the placeholders from `consts.ts`
- Don't remove the Trust Bar from the header
- Don't change the font families without user approval
- Don't add heavy JS libraries for animations — use CSS transitions and IntersectionObserver

---

## 3. File Modification Rules

### Files You Can Freely Modify
| File | What You Can Change |
|---|---|
| `src/pages/*.astro` | Page content, sections, layout |
| `src/components/*.astro` | Component templates, props, styles |
| `src/layouts/*.astro` | Layout structure |
| `src/styles/global.css` | Add new utilities, component styles, animations |
| `src/consts.ts` | Update constants, add new data |
| `docs/*.md` | Update documentation |

### Files You Should NOT Modify (Without User Approval)
| File | Reason |
|---|---|
| `wrangler.json` | Cloudflare deployment config |
| `env.d.ts` | TypeScript environment declarations |
| `astro.config.mjs` | Core framework config (unless adding integrations) |
| `tsconfig.json` | TypeScript config (unless adding path aliases) |
| `package.json` | Dependencies (unless adding necessary packages) |
| `.assetsignore` | Cloudflare asset rules |

### Files That Should NEVER Exist
| File | Reason |
|---|---|
| `tailwind.config.js` | Tailwind v4 uses CSS-first config in `global.css` |
| `tailwind.config.ts` | Same as above |
| `postcss.config.js` | Handled by Astro's Tailwind integration |
| `src/content/` directory | No content collections used |
| `src/pages/blog/` | Blog removed from this project |

---

## 4. Adding a New Page

Follow this checklist when adding a new page:

1. Create `src/pages/page-name.astro`
2. Import and use `MasterLayout`:
   ```astro
   ---
   import MasterLayout from '../layouts/MasterLayout.astro';
   ---
   <MasterLayout title="Page Title — Surya Foods" description="..." transparentNav={true}>
     <!-- sections -->
   </MasterLayout>
   ```
3. Add a nav link in `Header.astro`
4. Add the page to the footer Quick Links in `Footer.astro`
5. Update `docs/pages.md` with section structure
6. Update `docs/architecture.md` routing table
7. Run `npm run build` to verify

---

## 5. Adding a New Component

Follow this checklist:

1. Create `src/components/ComponentName.astro`
2. Define `interface Props` with TypeScript types
3. Use Tailwind classes for styling (reference `docs/theme.md`)
4. Add `data-animate` to animated elements
5. Document the component in `docs/components.md`
6. Import in the consuming page/component

---

## 6. Styling Guidelines

### Color Usage Map
| Context | Color Token |
|---|---|
| Body text | `text-slate-800` |
| Headings (light bg) | `text-slate-900` |
| Headings (dark bg) | `text-white` |
| Muted text | `text-slate-600` |
| Placeholder text | `text-slate-400` |
| Primary buttons | `bg-forest-500 hover:bg-forest-600` |
| Links | `text-forest-600 hover:text-forest-700` |
| Accent / premium | `text-gold-400` or `text-gradient-gold` |
| Light section bg | `bg-white` or `bg-cream` |
| Dark section bg | `bg-forest-900` or `bg-forest-950` |
| Borders (light) | `border-slate-200` |
| Borders (dark) | `border-forest-700/30` |
| Overline text | `text-gold-400 uppercase tracking-widest text-xs font-semibold` |

### Section Alternation Pattern
Pages should alternate section backgrounds for visual rhythm:
```
Hero (dark overlay)
→ Stats (forest-900)
→ Content (white)
→ Content (cream)
→ Content (white)
→ CTA (forest-900)
```

### Responsive Patterns
- Always design mobile-first
- Use `px-4 md:px-6 lg:px-8` for container padding
- Use `py-12 md:py-16 lg:py-24` for section padding
- Use `max-w-7xl mx-auto` for content containers
- Grid columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Text size: use fluid `clamp()` or responsive prefixes

---

## 7. Content Editing Guidelines

### Text Changes
- Short text changes: Edit directly in the `.astro` page file
- Repeated data (stats, certifications, nav links): Edit in `src/consts.ts`
- Always update `docs/content.md` when changing visible text

### Image Changes
- Current: External Unsplash URLs
- Replace by: Changing the `src` attribute on `<img>` tags
- If using local images: Place in `public/images/` and reference as `/images/filename.jpg`
- Future: Migrate to Astro's `<Image>` component with `src/assets/` directory for optimization

### Adding Certifications
1. Add to the certifications array in `src/consts.ts` (or inline in `heritage.astro`)
2. Add to `docs/content.md` certifications table
3. The `CertificationBadge` component renders it automatically

### Adding Timeline Entries
1. Add to the timeline data in `heritage.astro`
2. Update `docs/content.md` timeline table
3. The `TimelineItem` component renders it with alternating position

---

## 8. Performance Budget

| Metric | Target |
|---|---|
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Total Blocking Time** | < 200ms |
| **Cumulative Layout Shift** | < 0.1 |
| **Total JS shipped** | < 10KB (only scroll observer + nav toggle) |
| **Total CSS** | < 30KB (Tailwind tree-shaken) |

### Performance Rules
- No client-side JS frameworks
- No large animation libraries (GSAP, Framer Motion, etc.)
- All below-fold images must be `loading="lazy"`
- Font loading: `display=swap` to prevent FOIT
- Preconnect to Google Fonts CDN
- No render-blocking resources

---

## 9. Testing Checklist

Before marking any task as complete, verify:

### Build
- [ ] `npm run build` completes with zero errors
- [ ] `npm run dev` starts without errors

### Visual
- [ ] All sections render correctly at 375px (mobile)
- [ ] All sections render correctly at 768px (tablet)
- [ ] All sections render correctly at 1280px+ (desktop)
- [ ] Trust bar is visible on all pages
- [ ] Navigation is sticky and transitions on scroll
- [ ] Mobile menu opens and closes
- [ ] Scroll animations trigger correctly
- [ ] Typography uses Playfair Display (headings) and Inter (body)
- [ ] Colors match the design system

### Functional
- [ ] All navigation links work and go to correct pages
- [ ] Active nav link is highlighted
- [ ] Form validation shows errors for empty required fields
- [ ] Form success state displays after simulated submission
- [ ] CTA buttons link to correct pages/sections
- [ ] Anchor links (e.g., `#inquiry-form`) scroll to correct position

### SEO
- [ ] Each page has unique `<title>` tag
- [ ] Each page has unique meta description
- [ ] Single `<h1>` per page
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] All images have alt text
- [ ] Canonical URL is set

---

## 10. Troubleshooting Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Tailwind classes not working | `@import "tailwindcss"` missing in global.css | Ensure it's the first line |
| Custom colors not working | Token not defined in `@theme` block | Add to `@theme` in global.css |
| Fonts not loading | Google Fonts link missing | Check `BaseHead.astro` for font links |
| Build fails with type error | Missing prop type | Add to `interface Props` in component |
| Scroll animations not triggering | `data-animate` not added to element | Add attribute to animated elements |
| Nav not sticky | Missing `position: sticky` or `z-index` | Check Header.astro classes |
| Mobile menu not toggling | Script not finding element | Check element IDs match in script |
| Form not validating | Script error | Check browser console for JS errors |
| Images not loading | Unsplash URL invalid or blocked | Try different Unsplash photo ID |
| 404 on page navigation | File not in `src/pages/` | Verify file exists and is `.astro` extension |

---

## 11. Dependency Management

### Adding a New NPM Package
1. Verify the package is necessary — prefer native solutions
2. Check bundle size impact at bundlephobia.com
3. Run `npm install <package>` 
4. Update `docs/architecture.md` dependencies table
5. Run `npm run build` to verify compatibility

### Updating Existing Packages
1. Run `npm outdated` to check
2. Update one package at a time
3. Run `npm run build` after each update
4. Test the dev server with `npm run dev`

### Packages That Should NEVER Be Added
- Client-side frameworks (React, Vue, Svelte, Angular) — unless user explicitly requests
- CSS-in-JS libraries (styled-components, emotion) — use Tailwind
- Heavy animation libraries (GSAP, Framer Motion) — use CSS
- jQuery — not needed
- Webpack, Vite plugins — Astro handles bundling

---

## 12. Version Control Guidelines

### Commit Message Format
```
type(scope): description

Examples:
feat(home): add hero section with stats counter
fix(header): fix mobile menu toggle on iOS
style(global): update gold accent color tokens
docs(architecture): add new page to routing table
refactor(forms): extract validation into shared utils
```

### Branch Strategy
- `main` — production, deployed to Cloudflare
- Feature branches: `feature/page-name` or `fix/issue-description`
