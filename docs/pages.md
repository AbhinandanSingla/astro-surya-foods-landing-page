# Surya Foods — Page Structure Reference

> **Purpose**: Detailed section-by-section breakdown of every page. AI agents should reference this when building, modifying, or debugging individual pages.

---

## 1. Page Index

| Page | File | URL | Hero Style |
|---|---|---|---|
| Home | `src/pages/index.astro` | `/` | Full-screen, transparent nav |
| Global Exports | `src/pages/global-exports.astro` | `/global-exports` | 70vh hero, transparent nav |
| 048 Brand | `src/pages/048-brand.astro` | `/048-brand` | 70vh hero, transparent nav |
| Heritage & Quality | `src/pages/heritage.astro` | `/heritage` | 70vh hero, transparent nav |

All pages use `MasterLayout` with `transparentNav={true}`.

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

**Content:**
- Overline: `INTERNATIONALLY CERTIFIED EXPORT HOUSE`
- H1: `Milling Excellence Since 1999.`
- Subtitle: `From the fertile fields of India to tables across the globe — Surya Foods delivers premium Basmati rice with uncompromising quality and trust.`
- CTA 1 (Primary): `Explore Global Exports` → `/global-exports`
- CTA 2 (Secondary/Outline): `Discover 048 Brand` → `/048-brand`

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
  - Email: exports@suryafoods.com (placeholder)
  - Phone: +91-XXXXXXXXXX (placeholder)
  - Location: Haryana, India

**Right Column:**
Uses `LeadForm` component with `formType="export"`.

---

## 4. 048 Brand Page (`/048-brand`)

**File**: `src/pages/048-brand.astro`  
**Title**: `048 Premium Rice — Surya Foods`  
**Description**: `Discover 048 by Surya Foods — premium Basmati rice for the discerning Indian household. Majesty and Platinum collections now available for Pan-India distribution.`

### Section 1: Hero (70vh)

| Property | Value |
|---|---|
| **Height** | `min-h-[70vh]` |
| **Background** | Premium lifestyle / elegant dining / rice being served |
| **Overlay** | Dark gradient, slightly warmer tone |

**Content:**
- Overline: `INTRODUCING`
- H1 (with gold gradient): `048`
- Sub H1: `The Pinnacle of Everyday Luxury`
- Subtitle: `Crafted from the finest Basmati grains, 048 brings restaurant-quality rice to your home. Two exceptional collections for every occasion.`

### Section 2: Brand Story

| Property | Value |
|---|---|
| **Background** | `bg-white` |
| **Layout** | Centered text, narrow max-width (`max-w-3xl`) |

**Content:**
- Overline: `OUR PHILOSOPHY`
- H2: `Why 048?`
- Body (2-3 paragraphs): The story behind the 048 brand name. Quality philosophy — how every grain is selected, sorted, and packaged to deliver a consistently premium experience. Positioning as the bridge between everyday cooking and luxury dining.

### Section 3: Majesty Collection

| Property | Value |
|---|---|
| **Background** | `bg-cream` |
| **Layout** | 2-column split (image left, text right) |

**Content:**
- Overline: `COLLECTION`
- H2: `048 Majesty`
- Description: Premium tier Basmati rice. Perfect for daily cooking that demands extraordinary quality. Extra-long grain length, aged to perfection, aromatic and fluffy.
- Features list:
  - Extra-long grain Basmati
  - Naturally aged for enhanced aroma
  - Double sortex cleaned
  - Available in 1kg, 5kg, 10kg, 25kg packs
- **Image**: Product packaging mockup or rice pouring shot

### Section 4: Platinum Collection

| Property | Value |
|---|---|
| **Background** | `bg-white` |
| **Layout** | 2-column split (text left, image right) — reversed from Majesty |

**Content:**
- Overline: `COLLECTION`
- H2: `048 Platinum`
- Description: The ultra-premium tier. Reserved for special occasions and discerning palates. Handpicked grains, extended aging, and meticulous quality control at every stage.
- Features list:
  - Handpicked select grains
  - Extended 2-year aging process
  - Triple sortex + color sorting
  - Premium packaging with tamper-proof seal
  - Available in 1kg, 5kg, 10kg packs
- **Image**: Elevated product shot or plated dish

### Section 5: Distribution CTA

| Property | Value |
|---|---|
| **Background** | Subtle map pattern or `bg-slate-50` |
| **Layout** | Centered text + stats |

**Content:**
- H2: `Pan-India Presence, Growing Every Day`
- Subtitle: `048 is rapidly expanding across India. Join our network of premium rice distributors.`
- Stats row: Available States, Retail Partners, Monthly Volume
- Map visual (optional, can be a decorative element)

### Section 6: Lead Generation Form

| Property | Value |
|---|---|
| **Background** | `bg-forest-900` |
| **Layout** | 2-column (info left, form right) |
| **HTML id** | `distributor-form` |

**Left Column:**
- H2: `Become a 048 Distributor`
- Body: "Join India's fastest-growing premium rice brand. We offer attractive margins, marketing support, and a product that sells itself."
- Benefits list:
  - Attractive distributor margins
  - Marketing and POS material support
  - Dedicated account manager
  - Flexible MOQ for new partners

**Right Column:**
Uses `LeadForm` component with `formType="distributor"`.

---

## 5. Heritage & Quality Page (`/heritage`)

**File**: `src/pages/heritage.astro`  
**Title**: `Heritage & Quality — Surya Foods`  
**Description**: `Since 1999, Surya Foods has been a pillar of India's rice industry. Explore our journey, quality standards, and certifications that make us a trusted export partner.`

### Section 1: Hero (70vh)

| Property | Value |
|---|---|
| **Height** | `min-h-[70vh]` |
| **Background** | Vintage rice mill / heritage agriculture / sepia-toned fields |
| **Overlay** | Dark gradient |

**Content:**
- Overline: `ESTABLISHED 1999`
- H1: `A Legacy Built on Quality`
- Subtitle: `For over two decades, Surya Foods has been synonymous with trust, quality, and excellence in India's rice industry.`

### Section 2: Company Timeline

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
| `1999` | `The Beginning` | Surya Foods founded with a small milling unit in Haryana, driven by a vision to deliver quality rice to every corner of India. |
| `2004` | `First Export Shipment` | Expanded horizons with our first international export shipment to the Middle East, marking our entry into global markets. |
| `2008` | `FSSAI Certification` | Achieved FSSAI certification, reinforcing our commitment to food safety and regulatory compliance. |
| `2012` | `ISO 22000:2018 Certified` | Earned ISO 22000 certification for our food safety management system, meeting international standards. |
| `2015` | `Export House Recognition` | Recognized as an established export house under DGFT. |
| `2018` | `Capacity Expansion` | Expanded milling capacity to 50,000+ MT annually with state-of-the-art sortex and processing technology. |
| `2021` | `Launch of 048 Brand` | Introduced "048" — our premium D2C Basmati rice brand for the domestic Indian market. |
| `2024` | `15+ Countries & Growing` | Now exporting to over 15 countries across the Middle East, Africa, Europe, and Southeast Asia. |

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
| `BRC Global Standard` | British Retail Consortium global food safety standard |
| `GMP Certified` | Good Manufacturing Practices certification |
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
| 048 Brand | `048 Premium Rice — Surya Foods` | `Discover 048 by Surya Foods — premium Basmati rice for the Indian household. Majesty and Platinum collections for Pan-India distribution.` | Brand image |
| Heritage | `Heritage & Quality — Surya Foods` | `Since 1999, Surya Foods has been a pillar of India's rice industry. Explore our journey, certifications, and quality standards.` | Heritage image |
