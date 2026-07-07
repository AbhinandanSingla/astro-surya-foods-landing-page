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

export const RICE_CATEGORIES = [
  { name: "Indian Basmati Rice", slug: "indian-basmati-rice", description: "The crown jewel of Indian agriculture — long-grain, aromatic, and prized across global markets." },
  { name: "Indian Non-Basmati Rice", slug: "indian-non-basmati-rice", description: "Versatile, everyday rice varieties that power kitchens across India and the world." },
  { name: "Pesticide Residue Free", slug: "pesticide-residue-free", description: "Clean-label rice cultivated and processed under strict pesticide-free protocols." },
] as const;

export const RICE_PRODUCTS = [
  {
    "slug": "1121-raw-basmati-rice",
    "name": "1121 Raw Basmati Rice",
    "shortName": "1121 Raw",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Premium",
    "description": "The undisputed king of Basmati. Celebrated worldwide for its exceptional grain length — reaching up to 8.4mm after cooking — and its intoxicating aroma.",
    "features": [
      "Extraordinary grain length up to 8.4mm after cooking",
      "Rich, natural aroma that intensifies during cooking",
      "Fluffy, non-sticky texture — ideal for biryani and pilaf"
    ],
    "specifications": {
      "grainLength": "8.30mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 2%",
      "color": "Creamy White",
      "aroma": "Strong Natural"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "1121-steam-basmati-rice",
    "name": "1121 Steam Basmati Rice",
    "shortName": "1121 Steam",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Premium",
    "description": "The undisputed king of Basmati. Celebrated worldwide for its exceptional grain length — reaching up to 8.4mm after cooking — and its intoxicating aroma.",
    "features": [
      "Extraordinary grain length up to 8.4mm after cooking",
      "Rich, natural aroma that intensifies during cooking",
      "Fluffy, non-sticky texture — ideal for biryani and pilaf"
    ],
    "specifications": {
      "grainLength": "8.30mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 2%",
      "color": "Creamy White",
      "aroma": "Strong Natural"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "1121-sella-basmati-rice",
    "name": "1121 Sella Basmati Rice",
    "shortName": "1121 Sella",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Premium",
    "description": "The undisputed king of Basmati. Celebrated worldwide for its exceptional grain length — reaching up to 8.4mm after cooking — and its intoxicating aroma.",
    "features": [
      "Extraordinary grain length up to 8.4mm after cooking",
      "Rich, natural aroma that intensifies during cooking",
      "Fluffy, non-sticky texture — ideal for biryani and pilaf"
    ],
    "specifications": {
      "grainLength": "8.30mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 2%",
      "color": "Creamy White",
      "aroma": "Strong Natural"
    },
    "forms": [
      "Sella"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "1121-golden-sella-basmati-rice",
    "name": "1121 Golden Sella Basmati Rice",
    "shortName": "1121 Golden Sella",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Premium",
    "description": "The undisputed king of Basmati. Celebrated worldwide for its exceptional grain length — reaching up to 8.4mm after cooking — and its intoxicating aroma.",
    "features": [
      "Extraordinary grain length up to 8.4mm after cooking",
      "Rich, natural aroma that intensifies during cooking",
      "Fluffy, non-sticky texture — ideal for biryani and pilaf"
    ],
    "specifications": {
      "grainLength": "8.30mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 2%",
      "color": "Creamy White",
      "aroma": "Strong Natural"
    },
    "forms": [
      "Golden Sella"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "1718-raw-basmati-rice",
    "name": "1718 Raw Basmati Rice",
    "shortName": "1718 Raw",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Classic",
    "description": "A traditional long-grain Basmati variety with an authentic aromatic profile that has made it a household favorite for generations.",
    "features": [
      "Authentic traditional Basmati aroma",
      "Excellent elongation ratio after cooking",
      "Competitive pricing with premium quality standards"
    ],
    "specifications": {
      "grainLength": "7.50mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "Creamy White",
      "aroma": "Natural"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  },
  {
    "slug": "1718-steam-basmati-rice",
    "name": "1718 Steam Basmati Rice",
    "shortName": "1718 Steam",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Classic",
    "description": "A traditional long-grain Basmati variety with an authentic aromatic profile that has made it a household favorite for generations.",
    "features": [
      "Authentic traditional Basmati aroma",
      "Excellent elongation ratio after cooking",
      "Competitive pricing with premium quality standards"
    ],
    "specifications": {
      "grainLength": "7.50mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "Creamy White",
      "aroma": "Natural"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  },
  {
    "slug": "1718-sella-basmati-rice",
    "name": "1718 Sella Basmati Rice",
    "shortName": "1718 Sella",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Classic",
    "description": "A traditional long-grain Basmati variety with an authentic aromatic profile that has made it a household favorite for generations.",
    "features": [
      "Authentic traditional Basmati aroma",
      "Excellent elongation ratio after cooking",
      "Competitive pricing with premium quality standards"
    ],
    "specifications": {
      "grainLength": "7.50mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "Creamy White",
      "aroma": "Natural"
    },
    "forms": [
      "Sella"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  },
  {
    "slug": "1509-raw-basmati-rice",
    "name": "1509 Raw Basmati Rice",
    "shortName": "1509 Raw",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Superior",
    "description": "The versatile workhorse of the Basmati world. Outstanding elongation ratio and a rich aromatic profile at a price point that makes premium quality accessible.",
    "features": [
      "Outstanding elongation — cooks to nearly double its length",
      "Rich aromatic profile rivaling premium varieties",
      "Consistent batch-to-batch quality"
    ],
    "specifications": {
      "grainLength": "7.80mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "Creamy White",
      "aroma": "Natural"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "1509-steam-basmati-rice",
    "name": "1509 Steam Basmati Rice",
    "shortName": "1509 Steam",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Superior",
    "description": "The versatile workhorse of the Basmati world. Outstanding elongation ratio and a rich aromatic profile at a price point that makes premium quality accessible.",
    "features": [
      "Outstanding elongation — cooks to nearly double its length",
      "Rich aromatic profile rivaling premium varieties",
      "Consistent batch-to-batch quality"
    ],
    "specifications": {
      "grainLength": "7.80mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "Creamy White",
      "aroma": "Natural"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "1509-sella-basmati-rice",
    "name": "1509 Sella Basmati Rice",
    "shortName": "1509 Sella",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Superior",
    "description": "The versatile workhorse of the Basmati world. Outstanding elongation ratio and a rich aromatic profile at a price point that makes premium quality accessible.",
    "features": [
      "Outstanding elongation — cooks to nearly double its length",
      "Rich aromatic profile rivaling premium varieties",
      "Consistent batch-to-batch quality"
    ],
    "specifications": {
      "grainLength": "7.80mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "Creamy White",
      "aroma": "Natural"
    },
    "forms": [
      "Sella"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "1401-raw-basmati-rice",
    "name": "1401 Raw Basmati Rice",
    "shortName": "1401 Raw",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Value",
    "description": "A dependable Basmati variety that brings the signature long-grain elegance and aromatic character at an accessible price point.",
    "features": [
      "Long-grain Basmati at an accessible price",
      "Reliable quality for commercial and bulk applications",
      "Popular in price-sensitive export markets"
    ],
    "specifications": {
      "grainLength": "7.20mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Mild Natural"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "1401-steam-basmati-rice",
    "name": "1401 Steam Basmati Rice",
    "shortName": "1401 Steam",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Value",
    "description": "A dependable Basmati variety that brings the signature long-grain elegance and aromatic character at an accessible price point.",
    "features": [
      "Long-grain Basmati at an accessible price",
      "Reliable quality for commercial and bulk applications",
      "Popular in price-sensitive export markets"
    ],
    "specifications": {
      "grainLength": "7.20mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Mild Natural"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "1401-sella-basmati-rice",
    "name": "1401 Sella Basmati Rice",
    "shortName": "1401 Sella",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Value",
    "description": "A dependable Basmati variety that brings the signature long-grain elegance and aromatic character at an accessible price point.",
    "features": [
      "Long-grain Basmati at an accessible price",
      "Reliable quality for commercial and bulk applications",
      "Popular in price-sensitive export markets"
    ],
    "specifications": {
      "grainLength": "7.20mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Mild Natural"
    },
    "forms": [
      "Sella"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "pusa-raw-basmati-rice",
    "name": "Pusa Raw Basmati Rice",
    "shortName": "Pusa Raw",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Heritage",
    "description": "The original heritage variety that put Indian Basmati on the global map. Prized for its distinctive, intense aroma and slender, elegant grain.",
    "features": [
      "The original heritage Basmati variety",
      "Distinctively intense, unmistakable aroma",
      "Benchmark variety for Basmati quality standards"
    ],
    "specifications": {
      "grainLength": "7.00mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "White",
      "aroma": "Strong Traditional"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  },
  {
    "slug": "pusa-steam-basmati-rice",
    "name": "Pusa Steam Basmati Rice",
    "shortName": "Pusa Steam",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Heritage",
    "description": "The original heritage variety that put Indian Basmati on the global map. Prized for its distinctive, intense aroma and slender, elegant grain.",
    "features": [
      "The original heritage Basmati variety",
      "Distinctively intense, unmistakable aroma",
      "Benchmark variety for Basmati quality standards"
    ],
    "specifications": {
      "grainLength": "7.00mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "White",
      "aroma": "Strong Traditional"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  },
  {
    "slug": "pusa-sella-basmati-rice",
    "name": "Pusa Sella Basmati Rice",
    "shortName": "Pusa Sella",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Heritage",
    "description": "The original heritage variety that put Indian Basmati on the global map. Prized for its distinctive, intense aroma and slender, elegant grain.",
    "features": [
      "The original heritage Basmati variety",
      "Distinctively intense, unmistakable aroma",
      "Benchmark variety for Basmati quality standards"
    ],
    "specifications": {
      "grainLength": "7.00mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "White",
      "aroma": "Strong Traditional"
    },
    "forms": [
      "Sella"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  },
  {
    "slug": "traditional-raw-basmati-rice",
    "name": "Traditional Raw Basmati Rice",
    "shortName": "Traditional Raw",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Heritage",
    "description": "Rooted in centuries of Indian rice cultivation, Traditional Basmati carries the unmistakable essence of India's rice heritage.",
    "features": [
      "Centuries-old heritage variety",
      "Captivating fragrance that fills the kitchen",
      "Connoisseur's choice for traditional Indian cuisine"
    ],
    "specifications": {
      "grainLength": "7.10mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "Creamy White",
      "aroma": "Strong Traditional"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "traditional-steam-basmati-rice",
    "name": "Traditional Steam Basmati Rice",
    "shortName": "Traditional Steam",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Heritage",
    "description": "Rooted in centuries of Indian rice cultivation, Traditional Basmati carries the unmistakable essence of India's rice heritage.",
    "features": [
      "Centuries-old heritage variety",
      "Captivating fragrance that fills the kitchen",
      "Connoisseur's choice for traditional Indian cuisine"
    ],
    "specifications": {
      "grainLength": "7.10mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "Creamy White",
      "aroma": "Strong Traditional"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "traditional-sella-basmati-rice",
    "name": "Traditional Sella Basmati Rice",
    "shortName": "Traditional Sella",
    "category": "Indian Basmati Rice",
    "categorySlug": "indian-basmati-rice",
    "grade": "Heritage",
    "description": "Rooted in centuries of Indian rice cultivation, Traditional Basmati carries the unmistakable essence of India's rice heritage.",
    "features": [
      "Centuries-old heritage variety",
      "Captivating fragrance that fills the kitchen",
      "Connoisseur's choice for traditional Indian cuisine"
    ],
    "specifications": {
      "grainLength": "7.10mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 3%",
      "color": "Creamy White",
      "aroma": "Strong Traditional"
    },
    "forms": [
      "Sella"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "sugandha-raw-rice",
    "name": "Sugandha Raw Rice",
    "shortName": "Sugandha Raw",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Premium Non-Basmati",
    "description": "Bridges the gap between Basmati and Non-Basmati, offering a delightful aroma and good grain length at a fraction of the Basmati price.",
    "features": [
      "Aromatic Non-Basmati — fragrant like its name suggests",
      "Good grain length with decent elongation",
      "Cost-effective alternative to Basmati varieties"
    ],
    "specifications": {
      "grainLength": "6.80mm+",
      "moisture": "Max 13%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Mildly Fragrant"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "sugandha-steam-rice",
    "name": "Sugandha Steam Rice",
    "shortName": "Sugandha Steam",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Premium Non-Basmati",
    "description": "Bridges the gap between Basmati and Non-Basmati, offering a delightful aroma and good grain length at a fraction of the Basmati price.",
    "features": [
      "Aromatic Non-Basmati — fragrant like its name suggests",
      "Good grain length with decent elongation",
      "Cost-effective alternative to Basmati varieties"
    ],
    "specifications": {
      "grainLength": "6.80mm+",
      "moisture": "Max 13%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Mildly Fragrant"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "sugandha-sella-rice",
    "name": "Sugandha Sella Rice",
    "shortName": "Sugandha Sella",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Premium Non-Basmati",
    "description": "Bridges the gap between Basmati and Non-Basmati, offering a delightful aroma and good grain length at a fraction of the Basmati price.",
    "features": [
      "Aromatic Non-Basmati — fragrant like its name suggests",
      "Good grain length with decent elongation",
      "Cost-effective alternative to Basmati varieties"
    ],
    "specifications": {
      "grainLength": "6.80mm+",
      "moisture": "Max 13%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Mildly Fragrant"
    },
    "forms": [
      "Sella"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "sharbati-raw-rice",
    "name": "Sharbati Raw Rice",
    "shortName": "Sharbati Raw",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Semi-Premium",
    "description": "Known for its slightly sweet taste, medium grain, and soft texture after cooking. A popular staple across Indian households.",
    "features": [
      "Subtly sweet taste profile unique to Sharbati",
      "Soft, fluffy texture when cooked",
      "Growing international demand for everyday cooking"
    ],
    "specifications": {
      "grainLength": "6.50mm+",
      "moisture": "Max 13%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Mild"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  },
  {
    "slug": "sharbati-steam-rice",
    "name": "Sharbati Steam Rice",
    "shortName": "Sharbati Steam",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Semi-Premium",
    "description": "Known for its slightly sweet taste, medium grain, and soft texture after cooking. A popular staple across Indian households.",
    "features": [
      "Subtly sweet taste profile unique to Sharbati",
      "Soft, fluffy texture when cooked",
      "Growing international demand for everyday cooking"
    ],
    "specifications": {
      "grainLength": "6.50mm+",
      "moisture": "Max 13%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Mild"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  },
  {
    "slug": "pr-11-raw-rice",
    "name": "PR Raw 11 Rice",
    "shortName": "PR Raw",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Standard",
    "description": "A robust, high-yield variety from Punjab that has become a staple in both domestic and export markets.",
    "features": [
      "High-yield variety with consistent quality",
      "Medium grain ideal for everyday cooking",
      "Excellent value for institutional and bulk buyers"
    ],
    "specifications": {
      "grainLength": "6.20mm+",
      "moisture": "Max 14%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Neutral"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "pr-11-steam-rice",
    "name": "PR Steam 11 Rice",
    "shortName": "PR Steam",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Standard",
    "description": "A robust, high-yield variety from Punjab that has become a staple in both domestic and export markets.",
    "features": [
      "High-yield variety with consistent quality",
      "Medium grain ideal for everyday cooking",
      "Excellent value for institutional and bulk buyers"
    ],
    "specifications": {
      "grainLength": "6.20mm+",
      "moisture": "Max 14%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Neutral"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "pr-11-sella-rice",
    "name": "PR Sella 11 Rice",
    "shortName": "PR Sella",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Standard",
    "description": "A robust, high-yield variety from Punjab that has become a staple in both domestic and export markets.",
    "features": [
      "High-yield variety with consistent quality",
      "Medium grain ideal for everyday cooking",
      "Excellent value for institutional and bulk buyers"
    ],
    "specifications": {
      "grainLength": "6.20mm+",
      "moisture": "Max 14%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Neutral"
    },
    "forms": [
      "Sella"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "pr-14-raw-rice",
    "name": "PR Raw 14 Rice",
    "shortName": "PR Raw",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Standard",
    "description": "Known for its slightly longer grain compared to PR 11 and excellent cooking characteristics. A mainstay in Indian commercial kitchens.",
    "features": [
      "Slightly longer grain than PR 11 for better presentation",
      "Excellent cooking characteristics — soft and absorbent",
      "Strong export presence in Africa and Southeast Asia"
    ],
    "specifications": {
      "grainLength": "6.40mm+",
      "moisture": "Max 14%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Neutral"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "pr-14-steam-rice",
    "name": "PR Steam 14 Rice",
    "shortName": "PR Steam",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Standard",
    "description": "Known for its slightly longer grain compared to PR 11 and excellent cooking characteristics. A mainstay in Indian commercial kitchens.",
    "features": [
      "Slightly longer grain than PR 11 for better presentation",
      "Excellent cooking characteristics — soft and absorbent",
      "Strong export presence in Africa and Southeast Asia"
    ],
    "specifications": {
      "grainLength": "6.40mm+",
      "moisture": "Max 14%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Neutral"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "pr-14-sella-rice",
    "name": "PR Sella 14 Rice",
    "shortName": "PR Sella",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Standard",
    "description": "Known for its slightly longer grain compared to PR 11 and excellent cooking characteristics. A mainstay in Indian commercial kitchens.",
    "features": [
      "Slightly longer grain than PR 11 for better presentation",
      "Excellent cooking characteristics — soft and absorbent",
      "Strong export presence in Africa and Southeast Asia"
    ],
    "specifications": {
      "grainLength": "6.40mm+",
      "moisture": "Max 14%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Neutral"
    },
    "forms": [
      "Sella"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "parmal-raw-rice",
    "name": "Parmal Raw Rice",
    "shortName": "Parmal Raw",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Economy",
    "description": "India's most widely consumed Non-Basmati variety — a true everyday essential. Neutral taste and highly competitive pricing.",
    "features": [
      "India's most widely consumed rice variety",
      "Short-to-medium grain with neutral taste",
      "Highly competitive pricing for mass-market demand"
    ],
    "specifications": {
      "grainLength": "5.80mm+",
      "moisture": "Max 14%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Neutral"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  },
  {
    "slug": "parmal-steam-rice",
    "name": "Parmal Steam Rice",
    "shortName": "Parmal Steam",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Economy",
    "description": "India's most widely consumed Non-Basmati variety — a true everyday essential. Neutral taste and highly competitive pricing.",
    "features": [
      "India's most widely consumed rice variety",
      "Short-to-medium grain with neutral taste",
      "Highly competitive pricing for mass-market demand"
    ],
    "specifications": {
      "grainLength": "5.80mm+",
      "moisture": "Max 14%",
      "brokenGrain": "Max 5%",
      "color": "White",
      "aroma": "Neutral"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  },
  {
    "slug": "sona-masoori-raw-rice",
    "name": "Sona Raw Masoori Rice",
    "shortName": "Sona Raw",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Premium Non-Basmati",
    "description": "A lightweight, aromatic medium-grain rice from Southern India. Beloved for its naturally low starch content, making it lighter on the palate.",
    "features": [
      "Lightweight with naturally low starch content",
      "Aromatic medium-grain from Southern India",
      "Staple of South Indian cuisine — idli, dosa, and more"
    ],
    "specifications": {
      "grainLength": "5.50mm+",
      "moisture": "Max 13%",
      "brokenGrain": "Max 3%",
      "color": "Golden White",
      "aroma": "Mildly Fragrant"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "sona-masoori-steam-rice",
    "name": "Sona Steam Masoori Rice",
    "shortName": "Sona Steam",
    "category": "Indian Non-Basmati Rice",
    "categorySlug": "indian-non-basmati-rice",
    "grade": "Premium Non-Basmati",
    "description": "A lightweight, aromatic medium-grain rice from Southern India. Beloved for its naturally low starch content, making it lighter on the palate.",
    "features": [
      "Lightweight with naturally low starch content",
      "Aromatic medium-grain from Southern India",
      "Staple of South Indian cuisine — idli, dosa, and more"
    ],
    "specifications": {
      "grainLength": "5.50mm+",
      "moisture": "Max 13%",
      "brokenGrain": "Max 3%",
      "color": "Golden White",
      "aroma": "Mildly Fragrant"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "pesticide-residue-free-raw-rice",
    "name": "PRF Raw Rice",
    "shortName": "PRF Raw Rice",
    "category": "Pesticide Residue Free",
    "categorySlug": "pesticide-residue-free",
    "grade": "Clean Label",
    "description": "Meets the most stringent international clean-label standards. Sourced from carefully monitored farms and rigorously tested at every stage.",
    "features": [
      "Zero detectable pesticide residues — lab-verified",
      "Meets EU, Japan, and USA pesticide residue limits",
      "Full traceability from field to finished product"
    ],
    "specifications": {
      "grainLength": "8.30mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 2%",
      "color": "Creamy White",
      "aroma": "Natural",
      "pesticideResidue": "Below MRL"
    },
    "forms": [
      "Raw"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "pesticide-residue-free-steam-rice",
    "name": "PRF Steam Rice",
    "shortName": "PRF Steam Rice",
    "category": "Pesticide Residue Free",
    "categorySlug": "pesticide-residue-free",
    "grade": "Clean Label",
    "description": "Combines the nutritional benefits of steaming with the assurance of zero pesticide residues. Multi-panel residue testing.",
    "features": [
      "Steam processed with zero pesticide residues",
      "Multi-panel residue testing on every batch",
      "Premium positioning for health-conscious markets"
    ],
    "specifications": {
      "grainLength": "8.20mm+",
      "moisture": "Max 12%",
      "brokenGrain": "Max 2%",
      "color": "Off-White",
      "aroma": "Mild Natural",
      "pesticideResidue": "Below MRL"
    },
    "forms": [
      "Steam"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  },
  {
    "slug": "pesticide-residue-free-sella-rice",
    "name": "PRF Sella Rice",
    "shortName": "PRF Sella Rice",
    "category": "Pesticide Residue Free",
    "categorySlug": "pesticide-residue-free",
    "grade": "Clean Label",
    "description": "Delivers robust, forgiving cooking characteristics with a clean-label guarantee. Nutrient-fortified through parboiling.",
    "features": [
      "Parboiled with zero pesticide residues",
      "Nutrient-fortified through parboiling process",
      "Forgiving cooking — virtually impossible to overcook"
    ],
    "specifications": {
      "grainLength": "8.20mm+",
      "moisture": "Max 13%",
      "brokenGrain": "Max 2%",
      "color": "Light Golden",
      "aroma": "Mild",
      "pesticideResidue": "Below MRL"
    },
    "forms": [
      "Sella"
    ],
    "image": "/images/gallery/rice-grains-3.jpg"
  },
  {
    "slug": "pesticide-residue-free-golden-sella-rice",
    "name": "PRF Golden Sella",
    "shortName": "PRF Golden Sella",
    "category": "Pesticide Residue Free",
    "categorySlug": "pesticide-residue-free",
    "grade": "Clean Label",
    "description": "Combines the striking golden appearance and superior cooking characteristics of Golden Sella with the absolute assurance of zero pesticide residues.",
    "features": [
      "Premium golden color with clean-label certification",
      "Extended parboiling for maximum nutrient retention",
      "Targeted at EU, Japan, and premium Gulf markets"
    ],
    "specifications": {
      "grainLength": "8.30mm+",
      "moisture": "Max 13%",
      "brokenGrain": "Max 2%",
      "color": "Golden Amber",
      "aroma": "Mild",
      "pesticideResidue": "Below MRL"
    },
    "forms": [
      "Golden Sella"
    ],
    "image": "/images/gallery/rice-grains-1.jpg"
  },
  {
    "slug": "white-sella-rice",
    "name": "White Sella Rice",
    "shortName": "White Sella Rice",
    "category": "Pesticide Residue Free",
    "categorySlug": "pesticide-residue-free",
    "grade": "Clean Label",
    "description": "Offers the structural benefits of parboiling with a lighter, whiter appearance. Polished to a pristine white finish.",
    "features": [
      "Lighter, whiter appearance than traditional Sella",
      "Parboiled grain structure with polished finish",
      "Pesticide residue free — lab certified"
    ],
    "specifications": {
      "grainLength": "8.20mm+",
      "moisture": "Max 13%",
      "brokenGrain": "Max 2%",
      "color": "White",
      "aroma": "Mild",
      "pesticideResidue": "Below MRL"
    },
    "forms": [
      "White Sella"
    ],
    "image": "/images/gallery/rice-grains-2.jpg"
  }
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    megaMenu: true,
    items: [
      {
        label: "Indian Basmati Rice",
        href: "/products?category=indian-basmati-rice",
        children: [
          {
                    "label": "1121 Basmati Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/1121-raw-basmati-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/1121-steam-basmati-rice"
                              },
                              {
                                        "label": "Sella",
                                        "href": "/products/1121-sella-basmati-rice"
                              },
                              {
                                        "label": "Golden Sella",
                                        "href": "/products/1121-golden-sella-basmati-rice"
                              }
                    ]
          },
          {
                    "label": "1718 Basmati Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/1718-raw-basmati-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/1718-steam-basmati-rice"
                              },
                              {
                                        "label": "Sella",
                                        "href": "/products/1718-sella-basmati-rice"
                              }
                    ]
          },
          {
                    "label": "1509 Basmati Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/1509-raw-basmati-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/1509-steam-basmati-rice"
                              },
                              {
                                        "label": "Sella",
                                        "href": "/products/1509-sella-basmati-rice"
                              }
                    ]
          },
          {
                    "label": "1401 Basmati Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/1401-raw-basmati-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/1401-steam-basmati-rice"
                              },
                              {
                                        "label": "Sella",
                                        "href": "/products/1401-sella-basmati-rice"
                              }
                    ]
          },
          {
                    "label": "Pusa Basmati Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/pusa-raw-basmati-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/pusa-steam-basmati-rice"
                              },
                              {
                                        "label": "Sella",
                                        "href": "/products/pusa-sella-basmati-rice"
                              }
                    ]
          },
          {
                    "label": "Traditional Basmati Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/traditional-raw-basmati-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/traditional-steam-basmati-rice"
                              },
                              {
                                        "label": "Sella",
                                        "href": "/products/traditional-sella-basmati-rice"
                              }
                    ]
          }
]
      },
      {
        label: "Indian Non-Basmati Rice",
        href: "/products?category=indian-non-basmati-rice",
        children: [
          {
                    "label": "Sugandha Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/sugandha-raw-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/sugandha-steam-rice"
                              },
                              {
                                        "label": "Sella",
                                        "href": "/products/sugandha-sella-rice"
                              }
                    ]
          },
          {
                    "label": "Sharbati Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/sharbati-raw-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/sharbati-steam-rice"
                              }
                    ]
          },
          {
                    "label": "PR 11 Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/pr-11-raw-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/pr-11-steam-rice"
                              },
                              {
                                        "label": "Sella",
                                        "href": "/products/pr-11-sella-rice"
                              }
                    ]
          },
          {
                    "label": "PR 14 Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/pr-14-raw-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/pr-14-steam-rice"
                              },
                              {
                                        "label": "Sella",
                                        "href": "/products/pr-14-sella-rice"
                              }
                    ]
          },
          {
                    "label": "Parmal Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/parmal-raw-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/parmal-steam-rice"
                              }
                    ]
          },
          {
                    "label": "Sona Masoori Rice",
                    "subChildren": [
                              {
                                        "label": "Raw",
                                        "href": "/products/sona-masoori-raw-rice"
                              },
                              {
                                        "label": "Steam",
                                        "href": "/products/sona-masoori-steam-rice"
                              }
                    ]
          }
]
      },
      {
        label: "Pesticide Residue Free",
        href: "/products?category=pesticide-residue-free",
        children: [
          {
                    "label": "PRF Raw Rice",
                    "href": "/products/pesticide-residue-free-raw-rice"
          },
          {
                    "label": "PRF Steam Rice",
                    "href": "/products/pesticide-residue-free-steam-rice"
          },
          {
                    "label": "PRF Sella Rice",
                    "href": "/products/pesticide-residue-free-sella-rice"
          },
          {
                    "label": "PRF Golden Sella",
                    "href": "/products/pesticide-residue-free-golden-sella-rice"
          },
          {
                    "label": "White Sella Rice",
                    "href": "/products/white-sella-rice"
          }
]
      },
      {
        label: "Our Brand",
        href: "/048-brand",
        children: [
          { label: "048 Majesty", href: "/048-brand" },
          { label: "048 Platinum", href: "/048-brand" },
        ],
      },
    ],
  },
  {
    label: "Business",
    items: [
      { label: "Global Exports", href: "/global-exports" },
      { label: "Private Labeling", href: "/private-labeling" },
      { label: "Certificates", href: "/certificates" },
    ],
  },
  { label: "Heritage & Quality", href: "/heritage" },
  { label: "Blog", href: "/blog" },
];

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Global Exports", href: "/global-exports" },
  { label: "Private Labeling", href: "/private-labeling" },
  { label: "048 Brand", href: "/048-brand" },
  { label: "Heritage & Quality", href: "/heritage" },
  { label: "Certificates", href: "/certificates" },
  { label: "Blog", href: "/blog" },
];

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
