export interface Brand048Product {
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

export const BRAND_048_PRODUCTS: Brand048Product[] = [
  {
    slug: "xxxl-supreme",
    name: "XXXL SUPREME",
    subtext: "EXTRA LONG BASMATI",
    tagline: "Extra-long elegance for unforgettable rice occasions.",
    description: "048 XXXL Supreme is the flagship choice for consumers who want impressive grain length, premium presentation and a celebratory dining experience.",
    image: "/images/Rice Bags/XXXL Supreme.jpeg",
    banner: "/images/Rice Bags/XXXL Supreme banner view image.jpeg",
    grainImages: ["/images/rice-images/1401-steam-rice-1.png", "/images/rice-images/1401-steam-rice-2.png", "/images/rice-images/1401-steam-rice-3.png"],
    color: "Deep Maroon / Burgundy",
    colorClass: "bg-048-burgundy",
    grainProfile: "Extra-long, slender grains",
    cookedResult: "Strong elongation with separate, fluffy grains",
    bestFor: ["Biryani", "Pulao", "Festive meals", "Premium foodservice"],
    consumerFit: "Premium households, celebration-led shoppers and restaurant-style cooking at home",
    tradePosition: "Flagship premium SKU for modern trade, gourmet retail, wholesalers and HoReCa buyers",
    indiaPitch: "A high-impact pack for distributors targeting premium grocery stores, supermarkets, caterers and wedding-season demand across India.",
    highlights: ["Statement grain presentation", "Rich aromatic experience", "Non-sticky serving profile", "Distinctive burgundy shelf identity"],
    keywords: "extra long basmati rice India, premium biryani rice brand, basmati rice distributor India, wholesale premium rice",
    cookingTips: [
      "Soak for 30–45 minutes before cooking for maximum grain elongation",
      "Use a 1:1.5 rice-to-water ratio for perfectly fluffy biryani",
      "Add a teaspoon of ghee or oil to prevent grains from sticking",
      "Let cooked rice rest covered for 5 minutes before serving for best texture",
    ],
    packSizes: ["Consumer Packs", "Bulk Packs"],
    faqs: [
      { question: "What makes XXXL Supreme different from other Basmati rice?", answer: "XXXL Supreme features extra-long, slender grains that deliver impressive elongation after cooking. It is specifically selected for occasions where grain presentation matters — biryani, pulao and premium foodservice." },
      { question: "Is XXXL Supreme suitable for everyday cooking?", answer: "While it delivers outstanding results for special meals, many families choose XXXL Supreme for daily use when they prefer a premium dining experience. For a more everyday-focused option, consider 048 Rozana." },
      { question: "What pack sizes are available for XXXL Supreme?", answer: "048 XXXL Supreme is available in consumer packs and bulk trade packs. Custom packaging is available for distribution partners — contact us to discuss your requirements." },
      { question: "Can I get XXXL Supreme for my restaurant or catering business?", answer: "Absolutely. XXXL Supreme is a preferred choice for HoReCa buyers, caterers and wedding planners. Contact us for bulk pricing and supply agreements." },
    ],
  },
  {
    slug: "signature-xxl",
    name: "SIGNATURE XXL",
    subtext: "LONG GRAIN BASMATI",
    tagline: "Refined long grains for premium everyday cooking.",
    description: "048 Signature XXL balances elegant grain appearance with dependable cooking performance for households, retailers and foodservice buyers.",
    image: "/images/Rice Bags/Signature XXL.jpeg",
    banner: "/images/Rice Bags/Signature XXL banner view image.jpeg",
    grainImages: ["/images/rice-images/1509-steam-rice-1.png", "/images/rice-images/1509-steam-rice-2.png", "/images/rice-images/1509-steam-rice-3.png"],
    color: "Deep Royal Blue",
    colorClass: "bg-048-blue",
    grainProfile: "Long, elegant grains",
    cookedResult: "Consistent elongation with a light, separate texture",
    bestFor: ["Everyday biryani", "Pulao", "Jeera rice", "Restaurant menus"],
    consumerFit: "Families seeking a polished premium upgrade for regular rice dishes",
    tradePosition: "Mid-premium retail and foodservice SKU with broad urban and regional appeal",
    indiaPitch: "A versatile blue-pack proposition for general trade, modern retail, restaurants and regional wholesale networks.",
    highlights: ["Elegant long-grain appearance", "Reliable cooking consistency", "Pleasant aroma", "Premium royal-blue packaging"],
    keywords: "long grain basmati rice India, premium everyday basmati, rice distributor opportunity, wholesale basmati supplier",
    cookingTips: [
      "Rinse 2–3 times until water runs clear to remove excess starch",
      "Soak for 20–30 minutes for consistent elongation",
      "Use a 1:1.75 rice-to-water ratio for light, separate grains",
      "Fluff gently with a fork after cooking — never stir roughly",
    ],
    packSizes: ["Consumer Packs", "Bulk Packs"],
    faqs: [
      { question: "How does Signature XXL compare to XXXL Supreme?", answer: "While XXXL Supreme is the flagship with extra-long grains for special occasions, Signature XXL offers elegant long grains that balance premium appearance with everyday versatility. It is the ideal mid-premium choice." },
      { question: "Is Signature XXL suitable for restaurant use?", answer: "Yes. Many restaurants, dhabas, and QSR chains prefer Signature XXL for its consistent cooking results, pleasant aroma and balanced grain presentation at a mid-premium price point." },
      { question: "What makes the royal-blue packaging distinctive?", answer: "The deep royal-blue pack gives Signature XXL strong shelf visibility and a premium look that stands out in retail environments — helping retailers merchandise the 048 range effectively." },
      { question: "Can I become a distributor for Signature XXL?", answer: "We welcome distributor and super-stockist enquiries across India. Fill out the form below or contact us directly to discuss territories and commercial terms." },
    ],
  },
  {
    slug: "rozana",
    name: "ROZANA",
    subtext: "EVERYDAY BASMATI",
    tagline: "Everyday comfort with the character of Basmati.",
    description: "048 Rozana is designed for daily Indian meals, combining familiar aroma, balanced grains and accessible premium positioning for repeat household purchase.",
    image: "/images/Rice Bags/Rozana.jpeg",
    banner: "/images/Rice Bags/Rozana banner view image.jpeg",
    grainImages: ["/images/rice-images/1718-steam-rice-1.png", "/images/rice-images/1718-steam-rice-2.png", "/images/rice-images/1718-steam-rice-3.png"],
    color: "Emerald Green",
    colorClass: "bg-048-green",
    grainProfile: "Balanced everyday grain profile",
    cookedResult: "Soft, fluffy and easy to serve with daily meals",
    bestFor: ["Dal chawal", "Jeera rice", "Tiffin meals", "Everyday pulao"],
    consumerFit: "Value-conscious families who want dependable Basmati for regular use",
    tradePosition: "High-repeat everyday SKU for kirana stores, supermarkets and institutional buyers",
    indiaPitch: "Built for broad Indian distribution, from neighbourhood grocery stores to cash-and-carry, hostels, offices and everyday foodservice.",
    highlights: ["Made for everyday cooking", "Balanced taste and aroma", "Family-friendly positioning", "Recognisable emerald-green pack"],
    keywords: "everyday basmati rice India, rozana rice brand, rice distributorship India, basmati for daily use",
    cookingTips: [
      "Rinse once or twice before cooking — no prolonged soaking needed",
      "Use a 1:2 rice-to-water ratio for soft, fluffy daily dal chawal",
      "Works well in both open-pot and pressure-cooker methods",
      "Ready in 12–15 minutes — perfect for busy weeknight meals",
    ],
    packSizes: ["Consumer Packs", "Bulk Packs"],
    faqs: [
      { question: "Why is Rozana called 'Everyday Basmati'?", answer: "Rozana is specifically positioned for daily meals — dal chawal, jeera rice, tiffin meals and simple pulaos. It gives you the taste and aroma of Basmati without the premium price, making it perfect for repeat household purchase." },
      { question: "How is Rozana different from regular non-Basmati rice?", answer: "Unlike non-Basmati rice, Rozana still delivers the distinctive Basmati aroma, flavour and grain elongation — but in a more value-friendly positioning suited for daily consumption." },
      { question: "Is Rozana available in consumer retail packs?", answer: "Yes. Rozana is available in consumer packs ideal for modern trade, kirana stores and online grocery platforms, along with bulk packs for wholesale and institutional buyers." },
      { question: "Can institutions and canteens order Rozana in bulk?", answer: "Absolutely. Rozana is designed for volume — hostels, office cafeterias, mid-day meal programmes and institutional kitchens are among our key target buyers." },
    ],
  },
  {
    slug: "tibar-classic",
    name: "TIBAR CLASSIC",
    subtext: "TRADITIONAL BASMATI",
    tagline: "A traditional serving profile for familiar Indian flavours.",
    description: "048 Tibar Classic brings a traditional Basmati experience to home kitchens and foodservice, with a satisfying grain profile suited to flavour-rich Indian meals.",
    image: "/images/Rice Bags/Tibar Classic.jpeg",
    banner: "/images/Rice Bags/Tibar classic banner view image.jpeg",
    grainImages: ["/images/rice-images/TIBAR.jpeg", "/images/rice-images/pusa-steam-rice-1.png", "/images/rice-images/pusa-steam-rice-2.png"],
    color: "Medium Purple",
    colorClass: "bg-048-purple",
    grainProfile: "Traditional select grain profile",
    cookedResult: "Aromatic, separate and satisfying on the plate",
    bestFor: ["Traditional pulao", "Curry pairings", "Family meals", "Catering"],
    consumerFit: "Shoppers who prefer familiar taste, aroma and traditional rice presentation",
    tradePosition: "Classic-value SKU for general trade, wholesalers, caterers and regional retail",
    indiaPitch: "A strong fit for distributors serving traditional grocery, mandi-linked wholesale, caterers and family-led consumption markets.",
    highlights: ["Traditional Basmati character", "Versatile meal pairing", "Dependable serving quality", "Distinct medium-purple pack"],
    keywords: "traditional basmati rice India, tibar rice brand, rice wholesale distributor, basmati supplier for caterers",
    cookingTips: [
      "Soak for 15–20 minutes for the best traditional texture",
      "Use a 1:1.75 rice-to-water ratio for aromatic, separate grains",
      "Perfect for slow-cooked dum pulao — grains hold shape beautifully",
      "Pairs excellently with rich gravies, kormas and traditional curries",
    ],
    packSizes: ["Consumer Packs", "Bulk Packs"],
    faqs: [
      { question: "What is 'Tibar' grade Basmati rice?", answer: "Tibar refers to a traditional Basmati grade with slightly shorter but well-formed grains that deliver excellent aroma and taste. It is the preferred grade for many traditional Indian kitchens and caterers." },
      { question: "Is Tibar Classic suitable for biryani?", answer: "Yes. Tibar Classic works well for traditional-style biryani where flavour absorption and aroma matter more than extra-long grain length. It is especially popular for dum biryani and pulao." },
      { question: "Who are the typical buyers for Tibar Classic?", answer: "Tibar Classic appeals to traditional grocery shoppers, caterers, wedding planners, hostel kitchens and general trade retailers across India's Hindi belt and South Indian markets." },
      { question: "How does the purple packaging help on the shelf?", answer: "The distinctive medium-purple pack colour makes Tibar Classic instantly recognisable within the 048 range, helping retailers merchandise the traditional segment separately from premium and everyday variants." },
    ],
  },
  {
    slug: "dubar-delight",
    name: "DUBAR DELIGHT",
    subtext: "AUTHENTIC BASMATI",
    tagline: "Authentic Basmati satisfaction at an everyday-friendly position.",
    description: "048 Dubar Delight offers an aromatic, compact grain experience for buyers who want authentic Basmati character with practical everyday versatility.",
    image: "/images/Rice Bags/Dubar Delight.jpeg",
    banner: "/images/Rice Bags/Dubar Delight Banner view image.jpeg",
    grainImages: ["/images/rice-images/Second wand.jpeg", "/images/rice-images/1401-steam-rice-4.png", "/images/rice-images/1401-steam-rice-5.png"],
    color: "Cocoa Brown",
    colorClass: "bg-048-brown",
    grainProfile: "Authentic compact grain profile",
    cookedResult: "Full-bodied, soft and aromatic",
    bestFor: ["Daily rice meals", "Pulao", "Institutional kitchens", "Value foodservice"],
    consumerFit: "Families and bulk users seeking authentic taste with everyday value",
    tradePosition: "Value-led Basmati SKU for wholesale, general trade and institutional demand",
    indiaPitch: "Ideal for distributors building volume through kirana stores, wholesale counters, canteens, dhabas and institutional kitchens.",
    highlights: ["Authentic aromatic character", "Practical everyday versatility", "Value-focused positioning", "Warm cocoa-brown shelf identity"],
    keywords: "authentic basmati rice India, dubar rice supplier, wholesale rice for canteens, rice distributor India",
    cookingTips: [
      "Quick rinse and 10-minute soak is sufficient for great results",
      "Use a 1:2 rice-to-water ratio for soft, full-bodied grains",
      "Ideal for one-pot meals — grains absorb flavours beautifully",
      "Works perfectly in pressure cookers for fast weekday cooking",
    ],
    packSizes: ["Consumer Packs", "Bulk Packs"],
    faqs: [
      { question: "What does 'Dubar' mean in Basmati rice?", answer: "Dubar refers to a Basmati grade with compact grains that deliver authentic aroma and taste. It is the value-conscious buyer's choice for everyday Basmati quality without the premium pricing of longer-grain variants." },
      { question: "Is Dubar Delight different from Rozana?", answer: "Yes. While both target everyday use, Dubar Delight has a more compact, full-bodied grain with stronger flavour absorption — making it ideal for one-pot meals and institutional kitchens. Rozana has a more balanced, lighter profile for simple daily meals." },
      { question: "Can Dubar Delight be used for canteen and hostel kitchens?", answer: "Absolutely. Dubar Delight's value positioning and consistent cooking make it ideal for high-volume institutional kitchens, canteens, hostels and mid-day meal programmes." },
      { question: "What commercial quantities are available?", answer: "Dubar Delight is available in consumer packs and bulk trade packs. Institutional and wholesale buyers can discuss volume-based pricing directly with our team." },
    ],
  },
  {
    slug: "mini-dubar-express",
    name: "MINI DUBAR EXPRESS",
    subtext: "QUICK COOK BASMATI",
    tagline: "Quick, convenient Basmati for fast-moving kitchens.",
    description: "048 Mini Dubar Express is positioned for convenient cooking, fast service and dependable everyday meals across homes, canteens and commercial kitchens.",
    image: "/images/Rice Bags/Mini Dubar Express.jpeg",
    banner: "/images/Rice Bags/Mini Dubar Express Banner View Image.jpeg",
    grainImages: ["/images/rice-images/pusa-steam-rice-3.png", "/images/rice-images/1509-steam-rice-3.png", "/images/rice-images/1718-steam-rice-3.png"],
    color: "Ocean Teal",
    colorClass: "bg-048-teal",
    grainProfile: "Compact quick-cook grain profile",
    cookedResult: "Quick, even cooking with a soft Basmati finish",
    bestFor: ["Quick family meals", "Canteens", "QSR kitchens", "High-volume catering"],
    consumerFit: "Busy households and commercial kitchens that prioritise speed and consistency",
    tradePosition: "Convenience and institutional SKU for fast-moving retail and foodservice channels",
    indiaPitch: "A practical proposition for distributors serving urban households, hostels, office cafeterias, QSR operators and caterers.",
    highlights: ["Convenient cooking proposition", "Consistent everyday output", "Commercial-kitchen relevance", "Modern ocean-teal pack"],
    keywords: "quick cook basmati rice India, mini dubar rice, rice supplier for canteens, HoReCa rice distributor",
    cookingTips: [
      "No soaking required — cook directly after a quick rinse",
      "Use a 1:2.25 rice-to-water ratio for soft, quick-cook results",
      "Ready in under 10 minutes — ideal for rush-hour meal service",
      "Works great in rice cookers and automated kitchen equipment",
    ],
    packSizes: ["1 kg", "5 kg", "10 kg", "25 kg", "30 kg"],
    faqs: [
      { question: "Why is Mini Dubar Express the 'quick cook' variant?", answer: "Mini Dubar Express features compact grains that cook faster than longer Basmati varieties — typically ready in under 10 minutes without soaking. This makes it ideal for busy households, QSR kitchens and high-volume foodservice." },
      { question: "Does quick cooking mean lower quality?", answer: "Not at all. Mini Dubar Express still delivers authentic Basmati aroma and taste — the compact grain simply absorbs water faster, resulting in quicker, more convenient cooking without sacrificing flavour or texture." },
      { question: "Is Mini Dubar Express suitable for QSR and fast-food chains?", answer: "Yes. The quick-cook profile, consistent output and value positioning make it a strong fit for QSR operators, cloud kitchens, fast-casual restaurants and high-throughput catering operations." },
      { question: "What is the shelf life of Mini Dubar Express?", answer: "When stored in a cool, dry place, 048 Mini Dubar Express maintains its quality for the period indicated on the pack. Bulk buyers should discuss storage requirements with our team for optimal freshness." },
    ],
  },
];

export const getBrand048Product = (slug: string) =>
  BRAND_048_PRODUCTS.find((product) => product.slug === slug);
