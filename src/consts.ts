// Surya Foods — Site Constants
// All site-wide data lives here for easy updates.

export const SITE_TITLE = "Surya Foods";
export const SITE_DESCRIPTION =
  "Surya Foods is a Government of India recognized rice export house, milling premium Basmati rice since 1999. Partner with us for global exports and domestic distribution.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Global Exports", href: "/global-exports" },
  { label: "048 Brand", href: "/048-brand" },
  { label: "Heritage & Quality", href: "/heritage" },
] as const;

export const TRUST_BAR_TEXT =
  "Government of India Recognized Export House  |  ISO 22000:2018  |  FSSAI Certified";

export const STATS = [
  { value: "25+", label: "Years of Legacy" },
  { value: "15+", label: "Countries Served" },
  { value: "50,000+", label: "MT Annual Capacity" },
  { value: "500+", label: "B2B Partners" },
] as const;

export const CERTIFICATIONS = [
  {
    name: "ISO 22000:2018",
    description:
      "Comprehensive food safety management system ensuring hazard control from raw material to finished product.",
  },
  {
    name: "FSSAI License",
    description:
      "Government of India food safety compliance, mandatory for all food manufacturing and processing units.",
  },
  {
    name: "Govt. Export House",
    description:
      "Recognized by the Directorate General of Foreign Trade, Ministry of Commerce, Government of India.",
  },
  {
    name: "APEDA Registration",
    description:
      "Registered exporter of agricultural products under the Ministry of Commerce.",
  },
  {
    name: "BRC Global Standard",
    description:
      "Internationally recognized food safety certification accepted by major global retailers.",
  },
  {
    name: "GMP Certified",
    description:
      "Certification confirming adherence to quality management systems and manufacturing hygiene standards.",
  },
  {
    name: "Organic Certification",
    description:
      "Select product lines certified under organic farming standards.",
  },
  {
    name: "HACCP Compliant",
    description:
      "Systematic preventive approach to food safety, identifying and controlling hazards.",
  },
] as const;

export const TIMELINE = [
  {
    year: "1999",
    title: "The Beginning",
    description:
      "Surya Foods was founded with a small milling unit in Haryana, driven by a singular vision — to deliver the highest quality rice to every corner of India.",
  },
  {
    year: "2004",
    title: "First Export Shipment",
    description:
      "We expanded our horizons with our first international export shipment to the Middle East, marking our entry into the global Basmati rice trade.",
  },
  {
    year: "2008",
    title: "FSSAI Certification",
    description:
      "Achieved FSSAI certification, reinforcing our unwavering commitment to food safety and regulatory compliance at every level of production.",
  },
  {
    year: "2012",
    title: "ISO 22000 Certified",
    description:
      "Earned ISO 22000:2018 certification for our food safety management system, aligning our processes with the highest international standards.",
  },
  {
    year: "2015",
    title: "Export House Recognition",
    description:
      "Recognized by the Government of India as an established export house under DGFT, Ministry of Commerce — a testament to our export excellence.",
  },
  {
    year: "2018",
    title: "Capacity Expansion",
    description:
      "Expanded milling capacity to 50,000+ MT annually with investment in state-of-the-art sortex, color sorting, and automated processing technology.",
  },
  {
    year: "2021",
    title: "Launch of 048 Brand",
    description:
      'Introduced "048" — our premium direct-to-consumer Basmati rice brand for the domestic Indian market.',
  },
  {
    year: "2024",
    title: "15+ Countries & Growing",
    description:
      "Now exporting to over 15 countries across the Middle East, Africa, Europe, and Southeast Asia.",
  },
] as const;

export const PRODUCTS = [
  {
    name: "1121 Basmati Rice",
    grade: "Premium",
    description:
      "The king of Basmati. Renowned for its extraordinary grain length (up to 8.4mm after cooking), exquisite aroma, and perfectly fluffy texture.",
    forms: ["Raw", "Steam", "Sella"],
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
  },
  {
    name: "1509 Basmati Rice",
    grade: "Superior",
    description:
      "A versatile, high-quality Basmati with excellent elongation ratio and rich aromatic profile. Premium quality at a competitive price point.",
    forms: ["Raw", "Steam", "Sella"],
    image:
      "https://images.unsplash.com/photo-1536304993881-460e32f50232?w=800&q=80",
  },
  {
    name: "1718 Basmati Rice",
    grade: "Classic",
    description:
      "Traditional long-grain Basmati with authentic aroma and taste. Ideal for biryani and pulao preparations across global markets.",
    forms: ["Raw", "Steam", "Sella"],
    image:
      "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=800&q=80",
  },
  {
    name: "Traditional Pusa Basmati",
    grade: "Heritage",
    description:
      "The original Pusa variety — prized for its distinctive aroma, slender grain, and rich heritage dating back generations.",
    forms: ["Raw", "Steam", "Sella"],
    image:
      "https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=800&q=80",
  },
] as const;

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman & Nicobar Islands",
  "Chandigarh",
  "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
] as const;
