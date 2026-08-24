# Surya Foods — Page Structure Reference

> **Purpose**: Detailed section-by-section breakdown of every page. AI agents should reference this when building, modifying, or debugging individual pages.

---

## 1. Page Index

| Page | File | URL | Hero Style |
|---|---|---|---|
| Home | `src/pages/index.astro` | `/` | Full-screen, transparent nav |
| Products Landing | `src/pages/products/index.astro` | `/products` | 70vh hero, transparent nav |
| Product Detail (dynamic) | `src/pages/products/[slug].astro` | `/products/:slug` | 60vh hero, transparent nav |
| Global Exports | `src/pages/global-exports.astro` | `/global-exports` | 70vh hero, transparent nav |
| Private Labeling | `src/pages/private-labeling.astro` | `/private-labeling` | 70vh hero, transparent nav |
| Certifications | `src/pages/certificates.astro` | `/certificates` | 70vh hero, transparent nav |
| 048 Brand | `src/pages/048-brand.astro` | `/048-brand` | 70vh hero, transparent nav |
| Our Heritage | `src/pages/heritage.astro` | `/heritage` | 70vh hero, transparent nav |
| Milling & Infrastructure | `src/pages/infrastructure.astro` | `/infrastructure` | 60vh hero, transparent nav |
| Quality Assurance | `src/pages/quality-control.astro` | `/quality-control` | 60vh hero, transparent nav |
| Contact Us | `src/pages/contact.astro` | `/contact` | 50vh hero, transparent nav |
| Contact API | `src/pages/api/contact.ts` | `/api/contact` | Server-side API (POST) |

All pages use `MasterLayout` with `transparentNav={true}`.

> **Dynamic Routes**: Product detail pages are generated at build time from `RICE_PRODUCTS` data in `consts.ts`. Adding a new product is as simple as adding an entry to that array — no new `.astro` file needed.

---

## 2. Home Page (`/`)

**File**: `src/pages/index.astro`  
**Title**: `Surya Foods — Milling Excellence Since 1999`  
**Description**: `Surya Foods is a internationally certified rice export house, milling premium Basmati rice since 1999. Partner with us for global exports and domestic distribution.`

### Section 1: Hero (Full Screen)

| Property | Value |
|---|---|
| **Height** | `min-h-screen` |
| **Background** | Rice paddy field / golden harvest image |
| **Overlay** | Gradient from forest-950/90 left to forest-950/40 right |
| **Content position** | Left-aligned, vertically centered |
| **Interactive overlay** | `HeroChimes` component (z-index 3, between overlay and text) |

**Content:**
- Overline: `MANUFACTURER, PROCESSOR & EXPORTER OF INDIAN BASMATI RICE`
- H1: `Premium Basmati Rice Excellence Since 2002.`
- Subtitle: `From the fertile fields of India to tables across the globe — Surya Foods delivers the finest Basmati rice with uncompromising quality and trust.`
- CTA 1 (Primary): `Explore Global Exports` → `/global-exports`
- CTA 2 (Secondary/Outline): `Discover 048 Brand` → `/048-brand`

**Interactive Particles Overlay:**
- Component: `src/components/HeroChimes.astro`
- Canvas-based interactive particle system: golden rice grains fall and **scatter on mouse/touch**
- Gentle wind drift for organic movement
- Click passthrough ensures CTAs remain fully functional
- `aria-hidden="true"` for accessibility

### Section 2: Trust Metrics Bar

| Property | Value |
|---|---|
| **Background** | `bg-forest-900` |
| **Layout** | 4-column stats row |

**Stats:**
| Value | Label |
|---|---|
| `25+` | Years of Legacy |
| `15+` | Countries Served |
| `50,000+` | MT Annual Capacity |
| `500+` | B2B Partners |

Uses `StatsCounter` component.

### Section 3: Our Legacy

| Property | Value |
|---|---|
| **Background** | `bg-white` |
| **Layout** | 2-column split (text left, image right) |

**Content:**
- Overline: `OUR LEGACY`
- H2: `The Backbone of India's Rice Industry`
- Body text: Paragraph about Surya Foods' 25+ year legacy, backend infrastructure capability, world-class sorting and processing technology, and history of supplying to industry giants and major brands as a white-label manufacturer.
- Bullet points:
  - State-of-the-art milling and sortex facilities
  - Capacity to process 50,000+ MT annually
  - Trusted supplier to India's largest FMCG brands
  - Internationally certified star export house
- **Image**: Modern rice mill factory interior or sortex machinery

### Section 4: Business Pathways

| Property | Value |
|---|---|
| **Background** | `bg-cream` |
| **Layout** | 2-column card grid |

**Content:**
- Section heading: `Partner With Us`
- Subtitle: `Two powerful avenues to work with Surya Foods`

**Card 1 — Global Exports:**
- Background image: Shipping containers / port / cargo
- Overlay gradient
- Title: `Global Exports`
- Description: `Premium Basmati rice for international markets. 1121, 1509, 1718, and Pusa varieties in Raw, Steam, and Sella forms.`
- CTA link: `Explore Export Program →` → `/global-exports`

**Card 2 — 048 Premium Retail:**
- Background image: Premium rice packaging / lifestyle cooking
- Overlay gradient
- Title: `048 Premium Rice`
- Description: `Our flagship D2C brand. Majesty and Platinum collections for the discerning Indian household.`
- CTA link: `Discover 048 Brand →` → `/048-brand`

Both cards use hover effects: overlay darkens, text slides up slightly, subtle scale on image.

### Section 5: CTA Banner

| Property | Value |
|---|---|
| **Background** | `bg-forest-900` with subtle texture/pattern |
| **Layout** | Centered text |

**Content:**
- H2: `Ready to Build a Lasting Partnership?`
- Subtitle: `Whether you're an international broker or a domestic distributor, we'd love to hear from you.`
- CTA Button (Primary Gold): `Get In Touch` → `/global-exports#inquiry-form`

---

## 3. Global Exports Page (`/global-exports`)

**File**: `src/pages/global-exports.astro`  
**Title**: `Global Exports — Surya Foods`  
**Description**: `Export premium Indian Basmati rice worldwide. Surya Foods offers 1121, 1509, 1718, and Pusa Basmati in Raw, Steam, and Sella forms. Internationally certified export house.`

### Section 1: Hero (70vh)

| Property | Value |
|---|---|
| **Height** | `min-h-[70vh]` |
| **Background** | Shipping port / cargo containers / globe image |
| **Overlay** | Dark forest gradient |

**Content:**
- Overline: `INTERNATIONAL TRADE`
- H1: `Exporting India's Finest Basmati to the World`
- Subtitle: `As a Internationally Certified Export House, we deliver premium Basmati rice to 15+ countries with unmatched consistency and compliance.`

### Section 2: Export Overview

| Property | Value |
|---|---|
| **Background** | `bg-white` |
| **Layout** | 3-column feature grid |

**Content:**
- Overline: `WHY SURYA FOODS`
- H2: `A Global Partner You Can Trust`

**Feature Cards (3):**
1. **Certified Quality**
   - Icon: Shield/checkmark
   - Description: ISO 22000:2018, FSSAI, APEDA registered. Every shipment meets the strictest international food safety standards.

2. **Flexible Logistics**
   - Icon: Globe/shipping
   - Description: FOB, CIF, and CFR terms available. We handle documentation, fumigation certificates, and phytosanitary compliance.

3. **Custom Packaging**
   - Icon: Package/box
   - Description: Private labeling and custom packaging available from 1kg consumer packs to 50kg bulk bags. Your brand, our rice.

### Section 3: Product Grid

| Property | Value |
|---|---|
| **Background** | `bg-cream` |
| **Layout** | 4-column responsive grid |

**Content:**
- Overline: `OUR RANGE`
- H2: `Premium Basmati Rice Grades`
- Subtitle: `Each variety carefully selected and processed to meet international quality benchmarks.`

**Products (4 cards):**
Uses `ProductCard` component for each.

1. **1121 Basmati Rice** (Premium)
   - Image: Long-grain basmati close-up
   - Description: The king of Basmati. Renowned for its extraordinary grain length (up to 8.4mm), exquisite aroma, and fluffy texture after cooking.
   - Forms: Raw, Steam, Sella

2. **1509 Basmati Rice** (Superior)
   - Image: Rice grains in bowl
   - Description: A versatile, high-quality Basmati with excellent elongation and aromatic profile. The preferred choice for cost-effective premium rice.
   - Forms: Raw, Steam, Sella

3. **1718 Basmati Rice** (Classic)
   - Image: Cooked rice dish
   - Description: Traditional long-grain Basmati with authentic aroma and taste. Ideal for biryani and pulao preparations across global markets.
   - Forms: Raw, Steam, Sella

4. **Traditional Pusa Basmati** (Heritage)
   - Image: Heritage rice variety
   - Description: The original Pusa variety — prized for its distinctive aroma, slender grain, and rich heritage dating back generations.
   - Forms: Raw, Steam, Sella

### Section 4: Why Partner With Us

| Property | Value |
|---|---|
| **Background** | `bg-white` |
| **Layout** | 2-column (image left, feature list right) |

**Content:**
- Image: Rice quality lab / testing / modern factory
- H2: `The Surya Foods Advantage`
- Feature list with icons:
  1. **Internationally Certified Export House** — Registered with DGFT, Ministry of Commerce
  2. **In-house Quality Labs** — Every batch tested for moisture, grain length, aroma, and purity
  3. **Competitive Pricing** — Direct from mill to port, eliminating middlemen
  4. **Consistent Supply** — 50,000+ MT annual processing capacity ensures year-round availability
  5. **Trade Compliance** — Full documentation support for customs clearance in any destination country

### Section 5: Lead Generation Form

| Property | Value |
|---|---|
| **Background** | `bg-forest-900` (dark section) |
| **Layout** | 2-column (info left, form right) |
| **HTML id** | `inquiry-form` (for anchor linking) |

**Left Column:**
- H2: `Start Your Export Partnership`
- Body: "Fill out the form below and our export team will get back to you within 24 business hours with a detailed quote and product catalog."
- Contact details:
  - Email: contact@suryafoodspatran.com
  - Phone: +919779204835
  - Location: Village Banwala, Patran Road, Nial Bye Pass Patran, Patiala, Punjab 147105

**Right Column:**
Uses `LeadForm` component with `formType="export"`.

---

## 4. 048 Brand Page (`/048-brand`)

**File**: `src/pages/048-brand.astro`  
**Title**: `048 Premium Basmati Rice Brand | Exporters & Distributors — Surya Foods`
**Description**: `Explore 048 premium Basmati rice from India: six retail-ready variants for global importers, rice distributors, wholesale buyers and Pan-India distribution partners.`

### Page Structure

1. **Hero (88vh)** — Export-led headline, dual product-pack composition and catalogue/range CTAs.
2. **Brand introduction** — Positions 048 for both global trade and Indian distribution.
3. **Six-product range** — Responsive cards for XXXL Supreme, Signature XXL, Rozana, Tibar Classic, Dubar Delight and Mini Dubar Express, using exact pack color tokens.
4. **Campaign banners** — Four supplied campaign assets displayed in a responsive gallery.
5. **Partner value** — Explains product segmentation, shelf identity, trade support and India/export reach.
6. **Target markets** — Names priority countries and regions as partnership interests without claiming availability or exclusivity.
7. **Brand partnership form** — Uses `LeadForm` with `formType="brand"` and anchor `#brand-inquiry` for global and domestic buyers.

### SEO

- Page-specific keyword metadata targets premium Basmati rice exporters, Indian rice suppliers, importers, distributors, wholesale buyers and UAE/India search intent.
- `ItemList` and `Product` JSON-LD describe all six 048 products.
- The Tibar Classic banner is the page-specific social preview image.

---

## 5. Heritage & Quality Page (`/heritage`)

**File**: `src/pages/heritage.astro`  
**Title**: `Heritage & Quality — Surya Foods | The Singla Family Legacy`  
**Description**: `From Luv Khush Pvt in 2002 to Surya Foods today — discover the Singla family's two-decade journey in India's rice industry. Trusted by KRBL, LT Foods, and more.`

### Section 1: Hero (70vh)

| Property | Value |
|---|---|
| **Height** | `min-h-[70vh]` |
| **Background** | `/images/gallery/rice-paddy.jpg` (local generated image) |
| **Overlay** | Dark gradient |

**Content:**
- Overline: `A FAMILY LEGACY SINCE 2002`
- H1: `The Singla Family Rice Legacy`
- Subtitle: `From a small milling unit to a global export powerhouse — two decades of passion, quality, and trust in every grain.`

### Section 2: About Us / Our Story

| Property | Value |
|---|---|
| **Background** | `bg-white` |
| **Layout** | 2-column grid (text + factory image) |

**Content:**
- Overline: `ABOUT US`
- H2: `The Story of the Singla Family`
- Narrative paragraphs covering: 2002 Luv Khush Pvt founding → KRBL partnership → 2007 Sangam Pvt → 2013 Surya Foods establishment → 25+ countries today

### Section 2b: Our Leadership

| Property | Value |
|---|---|
| **Background** | `bg-cream` |
| **Layout** | 2-column grid of leader cards (stacked on mobile) |

**Content:**
- Overline: `OUR LEADERSHIP`
- H2: `The Partners Behind Surya Foods`
- Subtitle: `Two generations of the Singla family, united by a shared vision of excellence in every grain.`

**Leaders:**

| Name | Designation | Role | Bio |
|---|---|---|---|
| `Mr. Kidarnath` | Managing Director | Founder & Visionary | The patriarch who laid the foundation of the Singla family's rice legacy. |
| `Mr. Raj Kumar Singla` | Managing Director | Partner & Operations Head | Drives Surya Foods' operations, export growth, and strategic partnerships across 25+ countries. |

**Notes:**
- Currently uses monogram placeholders (KN, RS) — replace with real photos at `/images/gallery/kidarnath.jpg` and `/images/gallery/raj-kumar-singla.jpg`
- Cards feature gold-accent borders, hover lift effects, and a forest-green to gold gradient portrait background

### Section 3: Trusted By

| Property | Value |
|---|---|
| **Background** | `bg-cream` |
| **Layout** | Centered flex-wrap client name cards |

**Clients:** KRBL (India Gate), LT Foods (Daawat), Kohinoor Foods, Lal Qilla, Best Foods

### Section 4: Company Timeline

| Property | Value |
|---|---|
| **Background** | `bg-white` |
| **Layout** | Vertical timeline with alternating cards |

**Content:**
- Overline: `OUR JOURNEY`
- H2: `Milestones That Define Us`

**Timeline entries** (uses `TimelineItem` component):

| Year | Title | Description |
|---|---|---|
| `2002` | `The Singla Family Enters the Rice Industry` | Established Luv Khush Pvt Ltd — first milling unit. |
| `2005` | `Trusted by India's Biggest Brands` | Became supplier to KRBL (India Gate) and other FMCG players. |
| `2007` | `Sangam Pvt — A New Chapter` | Separated and established Sangam Pvt Ltd independently. |
| `2010` | `First International Exports` | First export shipments to the Middle East. |
| `2013` | `Surya Foods is Born` | State-of-the-art rice milling facility established by the Singla family. |
| `2016` | `FSSAI & ISO 22000 Certified` | Both certifications earned for food safety and quality management. |
| `2018` | `Export House Recognition` | Recognized under DGFT and registered with APEDA. |
| `2021` | `Launch of 048 Brand` | Premium D2C Basmati rice brand with Majesty and Platinum collections. |
| `2024` | `25+ Countries & Growing` | Exporting to 25+ countries across the Middle East, Africa, Europe, and SE Asia. |

### Section 3: Our Process

| Property | Value |
|---|---|
| **Background** | `bg-cream` |
| **Layout** | Horizontal process steps (scrollable on mobile) |

**Content:**
- Overline: `QUALITY ASSURANCE`
- H2: `From Paddy to Plate`
- Subtitle: `Every grain goes through a rigorous multi-step quality process.`

**Process Steps (6):**
1. **Paddy Procurement** — Direct sourcing from trusted farmers in the rice belt of India
2. **Milling & Husking** — State-of-the-art rice milling with minimal grain breakage
3. **Sortex & Grading** — Multi-pass color sorting and length grading for uniformity
4. **Quality Lab Testing** — In-house lab testing for moisture, grain length, aroma, and foreign matter
5. **Packaging** — Hygienic, automated packaging lines for consumer and bulk formats
6. **Export Compliance** — Fumigation, phytosanitary certificates, and full trade documentation

### Section 4: Certifications Grid

| Property | Value |
|---|---|
| **Background** | `bg-white` |
| **Layout** | 4-column responsive grid |

**Content:**
- Overline: `TRUST & COMPLIANCE`
- H2: `Our Certifications & Licenses`
- Subtitle: `Every certificate represents our unwavering commitment to quality and food safety.`

**Certifications** (uses `CertificationBadge` component):

| Name | Description |
|---|---|
| `ISO 22000:2018` | International food safety management system certification |
| `FSSAI License` | Food Safety and Standards Authority of India compliance |
| `DGFT Registered Exporter` | internationally certified export house under DGFT |
| `APEDA Registration` | Agricultural and Processed Food Products Export Development Authority |
| `Organic Certification` | Select product lines certified organic (if applicable) |
| `HACCP Compliant` | Hazard Analysis Critical Control Points compliance |

### Section 5: Leadership Note

| Property | Value |
|---|---|
| **Background** | `bg-forest-900` (dark) |
| **Layout** | Centered, narrow max-width with quote styling |

**Content:**
- Decorative gold quotation mark
- Quote: `"Our commitment has always been simple — deliver the finest grain of rice, every single time. This is not just a business; it is a responsibility we carry with pride."`
- Attribution: `— The Surya Foods Family, Since 1999`

---

## 6. Global Page Elements

### Trust Bar (all pages)
```
"Internationally Certified Export House  |  ISO 22000:2018  |  FSSAI Certified"
```
- Always visible at the very top
- Font: 11px uppercase, letter-spacing wide
- Background: `forest-950`
- Text: `forest-200/80`

### Navigation Links (all pages)
| Label | URL |
|---|---|
| Home | `/` |
| Global Exports | `/global-exports` |
| 048 Brand | `/048-brand` |
| Heritage & Quality | `/heritage` |
| Partner With Us (CTA) | `/global-exports#inquiry-form` |

### Footer (all pages)
See `components.md` → Footer section.

---

## 7. Image Requirements Per Page

### Home Page
| Section | Image Description | Aspect | Loading |
|---|---|---|---|
| Hero | Golden rice paddy field at sunset / harvest time | 16:9 landscape | eager |
| Legacy | Modern rice mill interior / sortex machinery | 4:3 | lazy |
| Pathway 1 | Shipping containers / port / cargo | 3:2 | lazy |
| Pathway 2 | Premium rice packaging / lifestyle | 3:2 | lazy |

### Global Exports
| Section | Image Description | Aspect | Loading |
|---|---|---|---|
| Hero | International shipping / cargo port | 16:9 landscape | eager |
| Product 1 | Long-grain basmati close-up | 4:3 | lazy |
| Product 2 | Rice grains in wooden bowl | 4:3 | lazy |
| Product 3 | Cooked rice / biryani dish | 4:3 | lazy |
| Product 4 | Heritage rice variety on cloth | 4:3 | lazy |
| Why Us | Quality lab / testing equipment | 3:2 | lazy |

### 048 Brand
| Section | Image Description | Aspect | Loading |
|---|---|---|---|
| Hero | Premium dining / elegant rice serving | 16:9 landscape | eager |
| Majesty | Rice product packaging / pouring shot | 4:3 | lazy |
| Platinum | Elevated plated rice dish | 4:3 | lazy |

### Private Labeling
| Section | Image Description | Aspect | Loading |
|---|---|---|---|
| Hero | Rice packaging line (`packaging-1.jpg`) | 16:9 landscape | eager |
| Quality | Factory/quality control machinery (`factory-2.jpg`) | 4:3 | lazy |

### Certificates Gallery
| Section | Image Description | Aspect | Loading |
|---|---|---|---|
| Hero | Quality control laboratory (`factory-3.jpg`) | 16:9 landscape | eager |

### Heritage & Quality
| Section | Image Description | Aspect | Loading |
|---|---|---|---|
| Hero | Vintage rice field / sepia agriculture | 16:9 landscape | eager |

---

## 8. SEO Meta Per Page

| Page | Title | Meta Description | OG Image |
|---|---|---|---|
| Home | `Surya Foods — Milling Excellence Since 1999` | `Surya Foods is a internationally certified rice export house, milling premium Basmati rice since 1999. Partner with us for global exports and domestic distribution.` | Hero image |
| Global Exports | `Global Exports — Surya Foods` | `Export premium Indian Basmati rice worldwide. 1121, 1509, 1718, and Pusa Basmati in Raw, Steam, and Sella forms. Internationally certified export house.` | Shipping image |
| Private Labeling | `Private Labeling \| Surya Foods` | `Build your own premium rice brand with Surya Foods. We offer end-to-end private labeling solutions from sourcing and processing to custom packaging.` | Packaging line image |
| Certificates Gallery | `Certificates Gallery \| Surya Foods` | `Explore the internationally recognized certifications that guarantee Surya Foods' commitment to quality, safety, and excellence.` | Factory image |
| 048 Brand | `048 Premium Rice — Surya Foods` | `Discover 048 by Surya Foods — premium Basmati rice for the Indian household. Majesty and Platinum collections for Pan-India distribution.` | Brand image |
| Heritage | `Heritage & Quality — Surya Foods` | `Since 1999, Surya Foods has been a pillar of India's rice industry. Explore our journey, certifications, and quality standards.` | Heritage image |
