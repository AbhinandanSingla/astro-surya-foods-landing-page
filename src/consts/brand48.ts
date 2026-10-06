export interface Brand48Product {
  slug: string;
  name: string;
  subtext: string;
  tagline: string;
  description: string;
  image: string;
  banner?: string;
  grainImages: string[];
  color: string;
  colorClass: string;
  grainProfile: string;
  cookedResult: string;
  bestFor: string[];
  consumerFit: string;
  tradePosition: string;
  indiaPitch: string;
  highlights: string[];
  keywords: string;
  cookingTips: string[];
  packSizes: string[];
  faqs: { question: string; answer: string }[];
}

export const BRAND_48_PRODUCTS: Brand48Product[] = [
  {
    slug: "gold",
    name: "GOLD",
    subtext: "PREMIUM BASMATI",
    tagline: "Golden grains for golden moments — a legacy of taste.",
    description: "48 Gold is the flagship choice of the 48 range, delivering aromatic long-grain Basmati rice that has been trusted by families for generations. Its vibrant orange packaging is instantly recognisable in markets across North India.",
    image: "/images/Rice Bags/Old Rice Bags/48-Gold.jpg",
    grainImages: ["/images/rice-images/1401-steam-rice-1.png", "/images/rice-images/1401-steam-rice-2.png", "/images/rice-images/1401-steam-rice-3.png"],
    color: "Vibrant Orange",
    colorClass: "bg-48-orange",
    grainProfile: "Long, aromatic grains with natural lustre",
    cookedResult: "Fluffy, separate grains with rich Basmati aroma",
    bestFor: ["Biryani", "Pulao", "Festive cooking", "Family gatherings"],
    consumerFit: "Families who want a trusted, premium Basmati for everyday celebrations and special meals",
    tradePosition: "Flagship SKU for wholesale mandis, general trade and regional distribution",
    indiaPitch: "48 Gold has deep market recognition across Punjab, Haryana, Rajasthan and Delhi NCR. Ideal for distributors and wholesalers who want a product that sells itself on name and reputation.",
    highlights: ["Decades of market trust", "Aromatic long-grain quality", "Vibrant shelf presence", "Consistent batch-to-batch quality"],
    keywords: "48 gold basmati rice, premium basmati rice India, trusted basmati brand, wholesale rice supplier Punjab",
    cookingTips: [
      "Soak for 30 minutes before cooking for best grain elongation",
      "Use a 1:1.5 rice-to-water ratio for perfectly fluffy biryani",
      "Add a spoon of ghee while cooking for enhanced aroma",
      "Let the rice rest for 5 minutes after cooking before serving",
    ],
    packSizes: ["25 kg", "26 kg"],
    faqs: [
      { question: "What makes 48 Gold a trusted name in the market?", answer: "48 Gold has been sold across North Indian mandis and wholesale markets for years. Its consistent quality and recognisable orange packaging have made it a preferred choice for families and traders alike." },
      { question: "Is 48 Gold suitable for biryani?", answer: "Absolutely. 48 Gold's long aromatic grains deliver excellent elongation and flavour, making it a favourite for biryani, pulao and festive cooking." },
      { question: "Where is 48 Gold currently available?", answer: "48 Gold is primarily distributed across Punjab, Haryana, Rajasthan, Delhi NCR and surrounding markets. Contact us for distributor and bulk buying enquiries." },
      { question: "What pack sizes are available?", answer: "48 Gold is available in 25 kg and 26 kg trade packs, designed for wholesale and mandi distribution. Custom packs can be discussed for distribution partners." },
    ],
  },
  {
    slug: "silver",
    name: "SILVER",
    subtext: "SELECT BASMATI",
    tagline: "Refined selection for the discerning household.",
    description: "48 Silver delivers a refined Basmati experience with carefully selected grains that offer excellent aroma and cooking consistency. Its distinctive blue packaging stands out in any retail environment.",
    image: "/images/Rice Bags/Old Rice Bags/48-Silver.jpg",
    grainImages: ["/images/rice-images/1509-steam-rice-1.png", "/images/rice-images/1509-steam-rice-2.png", "/images/rice-images/1509-steam-rice-3.png"],
    color: "Royal Blue",
    colorClass: "bg-48-blue",
    grainProfile: "Select long grains with elegant appearance",
    cookedResult: "Light, separate grains with classic Basmati aroma",
    bestFor: ["Everyday biryani", "Jeera rice", "Pulao", "Family meals"],
    consumerFit: "Quality-conscious families seeking a dependable Basmati at a smart price point",
    tradePosition: "Mid-tier SKU for general trade, kirana stores and regional wholesale",
    indiaPitch: "48 Silver offers a strong mid-range proposition for distributors. Its blue pack identity and consistent quality make it easy to sell across semi-urban and urban markets.",
    highlights: ["Select grain quality", "Consistent cooking results", "Strong retail shelf identity", "Trusted Surya Foods processing"],
    keywords: "48 silver basmati rice, select basmati rice India, mid range basmati brand, rice wholesaler India",
    cookingTips: [
      "Rinse 2–3 times and soak for 20 minutes before cooking",
      "Use a 1:1.75 rice-to-water ratio for light, separate grains",
      "Perfect for both open-pot and pressure-cooker methods",
      "Fluff gently with a fork after cooking for best texture",
    ],
    packSizes: ["25 kg", "26 kg"],
    faqs: [
      { question: "How does 48 Silver compare to 48 Gold?", answer: "48 Gold is the flagship premium choice, while 48 Silver offers excellent quality at a mid-range price point — making it ideal for everyday use and repeat purchase." },
      { question: "Is 48 Silver suitable for restaurants?", answer: "Yes. Many restaurants and dhabas prefer 48 Silver for its consistent cooking, pleasant aroma and value positioning for daily menu items." },
      { question: "What makes the blue packaging distinctive?", answer: "The royal blue pack gives 48 Silver strong shelf visibility and a premium look that differentiates it from other mid-range options in the market." },
      { question: "How can I become a distributor for 48 Silver?", answer: "We welcome distributor and wholesale enquiries. Fill out the enquiry form or contact us directly to discuss territories and commercial terms." },
    ],
  },
  {
    slug: "diamond",
    name: "DIAMOND",
    subtext: "CLASSIC BASMATI",
    tagline: "Classic taste, trusted quality — a diamond in every grain.",
    description: "48 Diamond is a classic Basmati rice that delivers rich flavour and reliable cooking performance. Its red packaging is a familiar sight in wholesale markets and family kitchens across India.",
    image: "/images/Rice Bags/Old Rice Bags/48-Diamond.jpg",
    grainImages: ["/images/rice-images/TIBAR.jpeg", "/images/rice-images/pusa-steam-rice-1.png", "/images/rice-images/pusa-steam-rice-2.png"],
    color: "Deep Red",
    colorClass: "bg-48-red",
    grainProfile: "Classic Basmati grain with traditional character",
    cookedResult: "Aromatic, soft and satisfying on the plate",
    bestFor: ["Daily meals", "Traditional pulao", "Curry pairings", "Catering events"],
    consumerFit: "Traditional households and bulk buyers who value authentic taste and dependable supply",
    tradePosition: "Value-classic SKU for mandis, wholesale counters and institutional buyers",
    indiaPitch: "48 Diamond is built for volume. Its classic quality and competitive positioning make it a strong proposition for mandi traders, wholesale distributors and institutional suppliers.",
    highlights: ["Classic Basmati character", "Volume-friendly positioning", "Recognisable red packaging", "Dependable supply chain"],
    keywords: "48 diamond basmati rice, classic basmati rice India, wholesale basmati rice, mandi rice supplier",
    cookingTips: [
      "Soak for 15–20 minutes for traditional texture",
      "Use a 1:1.75 rice-to-water ratio for aromatic, separate grains",
      "Ideal for slow-cooked dum pulao — grains hold shape well",
      "Pairs beautifully with rich gravies and traditional curries",
    ],
    packSizes: ["25 kg"],
    faqs: [
      { question: "What is the grain profile of 48 Diamond?", answer: "48 Diamond features classic Basmati grains with traditional character — aromatic, well-formed and consistent in cooking. It is the value-classic choice in the 48 range." },
      { question: "Is 48 Diamond suitable for large-scale catering?", answer: "Yes. 48 Diamond's reliable cooking performance and value positioning make it a popular choice for caterers, wedding planners and institutional kitchens." },
      { question: "Where is 48 Diamond distributed?", answer: "48 Diamond is available across North Indian wholesale markets, mandis and general trade outlets. Contact us for distribution partnerships in new territories." },
      { question: "What pack sizes are available?", answer: "48 Diamond is available in 25 kg trade packs designed for wholesale and mandi distribution." },
    ],
  },
  {
    slug: "crystal",
    name: "CRYSTAL",
    subtext: "PURE BASMATI",
    tagline: "Crystal-clear quality with every grain you serve.",
    description: "48 Crystal brings pure Basmati quality with a focus on grain clarity and clean presentation. Its elegant purple-navy packaging signals premium quality at an accessible price point.",
    image: "/images/Rice Bags/Old Rice Bags/48-Crystal.jpg",
    grainImages: ["/images/rice-images/Second wand.jpeg", "/images/rice-images/1718-steam-rice-1.png", "/images/rice-images/1718-steam-rice-2.png"],
    color: "Navy Purple",
    colorClass: "bg-48-navy",
    grainProfile: "Pure, clean grains with uniform appearance",
    cookedResult: "Clean, fluffy and naturally aromatic",
    bestFor: ["Family dinners", "Light pulao", "Rice bowls", "Festive meals"],
    consumerFit: "Quality-aware families who appreciate clean grain appearance and pure Basmati taste",
    tradePosition: "Quality-focused SKU for modern retail and discerning general trade outlets",
    indiaPitch: "48 Crystal appeals to the growing segment of quality-conscious buyers. Its clean grain quality and premium-looking purple pack make it a strong addition to any retailer's Basmati shelf.",
    highlights: ["Pure grain selection", "Clean, uniform appearance", "Premium pack design", "Versatile cooking applications"],
    keywords: "48 crystal basmati rice, pure basmati rice India, clean basmati grains, quality rice brand",
    cookingTips: [
      "Rinse thoroughly until water runs clear for the purest taste",
      "Soak for 25–30 minutes for optimal grain elongation",
      "Use a 1:1.75 rice-to-water ratio for perfectly separate grains",
      "Great for rice bowls and modern serving presentations",
    ],
    packSizes: ["26 kg"],
    faqs: [
      { question: "What makes 48 Crystal different from other 48 variants?", answer: "48 Crystal focuses on grain purity and uniform appearance. It is selected for clean, well-formed grains that cook beautifully — making it the quality-conscious buyer's choice." },
      { question: "Is 48 Crystal suitable for festive cooking?", answer: "Yes. Crystal's pure, clean grains make an excellent impression for festive meals, family dinners and special occasions where presentation matters." },
      { question: "What does the purple packaging signify?", answer: "The distinctive navy-purple packaging gives 48 Crystal a premium identity that stands out on the shelf while signalling quality and purity to buyers." },
      { question: "How can I stock 48 Crystal in my store?", answer: "Contact us through the enquiry form below or reach our sales team directly. We welcome retail, wholesale and distribution partnerships across India." },
    ],
  },
  {
    slug: "mini-gold",
    name: "MINI GOLD",
    subtext: "EVERYDAY BASMATI",
    tagline: "The everyday gold standard for value-conscious families.",
    description: "48 Mini Gold is the everyday Basmati choice for families who want authentic taste at an accessible price. Its bold red packaging and compact grain profile make it a volume mover across wholesale and retail channels.",
    image: "/images/Rice Bags/Old Rice Bags/48-MiniGold.jpg",
    grainImages: ["/images/rice-images/pusa-steam-rice-3.png", "/images/rice-images/1718-steam-rice-3.png", "/images/rice-images/1509-steam-rice-3.png"],
    color: "Crimson Red",
    colorClass: "bg-48-crimson",
    grainProfile: "Compact everyday grain profile",
    cookedResult: "Soft, quick-cooking and full of flavour",
    bestFor: ["Daily dal chawal", "Tiffin meals", "Quick pulao", "Institutional kitchens"],
    consumerFit: "Budget-smart families and institutional buyers who want Basmati at an everyday price",
    tradePosition: "High-volume everyday SKU for mandis, kirana stores and institutional supply",
    indiaPitch: "48 Mini Gold is a volume driver. Its everyday positioning and aggressive price point make it the ideal SKU for distributors targeting mass market, institutional and value-segment buyers.",
    highlights: ["Everyday value positioning", "Quick-cooking convenience", "High-volume sales potential", "Bold red shelf identity"],
    keywords: "48 mini gold basmati rice, everyday basmati rice, value basmati India, bulk rice for canteens",
    cookingTips: [
      "No soaking needed — cook directly after a quick rinse",
      "Use a 1:2 rice-to-water ratio for soft, fluffy everyday rice",
      "Ready in under 12 minutes — perfect for busy weekday meals",
      "Works well in pressure cookers and rice cookers",
    ],
    packSizes: ["25 kg"],
    faqs: [
      { question: "Why is 48 Mini Gold the everyday choice?", answer: "Mini Gold is positioned for daily use — dal chawal, jeera rice, tiffin meals. It delivers authentic Basmati taste without the premium price, perfect for repeat household and institutional purchase." },
      { question: "How is Mini Gold different from regular rice?", answer: "Unlike non-Basmati rice, Mini Gold still delivers distinctive Basmati aroma and flavour, but in a compact grain profile and value-friendly positioning suited for daily consumption." },
      { question: "Can hostels and canteens order Mini Gold in bulk?", answer: "Absolutely. Mini Gold is designed for volume buyers — hostels, office cafeterias, canteens and institutional kitchens are among our key target segments." },
      { question: "What pack sizes are available for Mini Gold?", answer: "48 Mini Gold is available in 25 kg trade packs ideal for wholesale, mandi and institutional distribution." },
    ],
  },
];

export const getBrand48Product = (slug: string) =>
  BRAND_48_PRODUCTS.find((product) => product.slug === slug);
