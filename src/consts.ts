// Surya Foods — Site Constants
// All site-wide data lives here for easy updates.

export const SITE_TITLE = "Surya Foods";
export const SITE_DESCRIPTION =
  "Surya Foods is a trusted rice manufacturer and exporter, milling premium Basmati rice since 2002. Partner with us for global exports and domestic distribution.";

export const PHONE_NUMBER = "+919779204835";
export const WHATSAPP_NUMBER = "919779204835";
export const EMAIL = "contact@suryafoodspatran.com";
export const MILL_ADDRESS = "Bishanpur Alias Banwala, Punjab, India";
export const MILL_MAP_QUERY = "Bishanpur+Alias+Banwala+Punjab+India";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Global Exports", href: "/global-exports" },
  { label: "048 Brand", href: "/048-brand" },
  { label: "Heritage & Quality", href: "/heritage" },
  { label: "Blog", href: "/blog" },
] as const;

export const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
] as const;

export const TRUST_BAR_TEXT =
  "Trusted Since 2002  |  ISO 22000 Certified  |  Exporting to 25+ Countries";

export const STATS = [
  { 
    value: "25+", 
    label: "Years of Experience",
    icon: `<svg class="w-8 h-8 mx-auto mb-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`
  },
  { 
    value: "50+", 
    label: "Rice Products",
    icon: `<svg class="w-8 h-8 mx-auto mb-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>`
  },
  { 
    value: "250", 
    label: "Production Capacity Tons / Per Day",
    icon: `<svg class="w-8 h-8 mx-auto mb-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`
  },
  { 
    value: "25+", 
    label: "Exporting Countries",
    icon: `<svg class="w-8 h-8 mx-auto mb-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  },
  { 
    value: "2000+", 
    label: "100% Satisfied Clients",
    icon: `<svg class="w-8 h-8 mx-auto mb-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>`
  },
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
      "India's highest food safety compliance, mandatory for all food manufacturing and processing units.",
  },
  {
    name: "DGFT Registered Exporter",
    description:
      "Registered with the Directorate General of Foreign Trade (DGFT) as an established export house.",
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
    year: "2002",
    title: "The Singla Family Enters the Rice Industry",
    description:
      "The Singla family began their journey in the rice industry by establishing Luv Khush Pvt Ltd — their first rice milling and processing unit. With a vision of delivering premium quality Basmati rice, the family laid the foundation of what would become a multi-decade legacy.",
  },
  {
    year: "2005",
    title: "Trusted by India's Biggest Brands",
    description:
      "Within just a few years, the quality of our rice caught the attention of India's largest rice companies. We became a trusted supplier to KRBL (India Gate), one of India's most recognized rice brands, along with other major FMCG players.",
  },
  {
    year: "2007",
    title: "Sangam Pvt — A New Chapter",
    description:
      "The Singla family separated from the original unit and established Sangam Pvt Ltd as an independent rice milling operation. This new venture allowed them to scale operations, invest in modern machinery, and serve a growing domestic and international clientele.",
  },
  {
    year: "2010",
    title: "First International Exports",
    description:
      "Sangam Pvt ventured into global markets with its first export shipments to the Middle East, marking the family's entry into the international Basmati rice trade and building relationships that continue to this day.",
  },
  {
    year: "2013",
    title: "Surya Foods is Born",
    description:
      "The Singla family established Surya Foods — a state-of-the-art rice milling and processing facility built from the ground up. Equipped with the latest sortex, color sorting, and automated processing technology, Surya Foods represented the family's vision of world-class rice manufacturing.",
  },
  {
    year: "2016",
    title: "FSSAI & ISO 22000 Certified",
    description:
      "Surya Foods earned both FSSAI and ISO 22000:2018 certifications, reinforcing the company's unwavering commitment to food safety, quality management, and international compliance standards.",
  },
  {
    year: "2018",
    title: "Export House Recognition",
    description:
      "Recognized as an established export house under DGFT and registered with APEDA — a testament to Surya Foods' consistent export excellence and international trade credibility.",
  },
  {
    year: "2021",
    title: "Launch of 048 Brand",
    description:
      'Introduced "048" — our premium direct-to-consumer Basmati rice brand for the domestic Indian market, offering Majesty and Platinum collections.',
  },
  {
    year: "2024",
    title: "25+ Countries & Growing",
    description:
      "Now exporting to over 25 countries across the Middle East, Africa, Europe, and Southeast Asia. Surya Foods continues the Singla family's legacy of delivering excellence, one grain at a time.",
  },
] as const;

export const TRUSTED_CLIENTS = [
  "KRBL (India Gate)",
  "LT Foods (Daawat)",
  "Kohinoor Foods",
  "Lal Qilla",
  "Best Foods",
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

export const CERTIFICATIONS_DISPLAY = [
  { name: "ISO 22000", image: "/images/certifications/iso.svg" },
  { name: "FSSAI", image: "/images/certifications/fssai.svg" },
  { name: "HACCP", image: "/images/certifications/haccp.svg" },
  { name: "HALAL", image: "/images/certifications/halal.svg" },
  { name: "KOSHER", image: "/images/certifications/kosher.svg" },
  { name: "GMP", image: "/images/certifications/gmp.svg" },
  { name: "USFDA", image: "/images/certifications/usfda.svg" },
  { name: "BRC", image: "/images/certifications/brc.svg" },
  { name: "APEDA", image: "/images/certifications/apeda.svg" },
] as const;

export const GALLERY_IMAGES = [
  { src: "/images/gallery/rice-grains-1.jpg", alt: "Premium 1121 Basmati Rice grains", category: "Rice" },
  { src: "/images/gallery/rice-grains-2.jpg", alt: "Golden Sella Basmati Rice", category: "Rice" },
  { src: "/images/gallery/rice-grains-3.jpg", alt: "Traditional Pusa Basmati Rice", category: "Rice" },
  { src: "/images/gallery/factory-1.jpg", alt: "Surya Foods milling facility", category: "Factory" },
  { src: "/images/gallery/factory-2.jpg", alt: "Rice sortex machines in operation", category: "Factory" },
  { src: "/images/gallery/factory-3.jpg", alt: "Quality control laboratory", category: "Factory" },
  { src: "/images/gallery/packaging-1.jpg", alt: "Rice packaging line", category: "Factory" },
  { src: "/images/gallery/rice-paddy.jpg", alt: "Basmati paddy fields in Punjab", category: "Farm" },
] as const;

export const KEY_TO_SUCCESS = [
  {
    title: "Quality Control",
    description: "Rigorous multi-stage quality checks with modern testing laboratories ensure every grain meets international standards.",
    icon: "quality",
  },
  {
    title: "Automation",
    description: "State-of-the-art automated milling, sorting, and packaging systems for consistent quality and high throughput.",
    icon: "automation",
  },
  {
    title: "Private Labelling",
    description: "Complete private label solutions — from custom packaging design to branding — helping partners build their own rice brands.",
    icon: "labelling",
  },
] as const;

export const QUOTES = [
  "We Make Every Grain Special",
  "From Farm to Your Table, We Ensure Perfection",
  "Where Tradition Meets Technology",
  "Nourishing the World, One Grain at a Time",
] as const;
