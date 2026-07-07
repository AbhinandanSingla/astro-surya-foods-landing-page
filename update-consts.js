import fs from 'fs';
import path from 'path';

const constsFile = path.resolve('./src/consts.ts');
let content = fs.readFileSync(constsFile, 'utf8');

// The original products data mapping:
const RICE_PRODUCTS = [
  // 1121 is already expanded, but let's define it properly here so we can generate everything cleanly
  { baseSlug: "1121-basmati-rice", baseName: "1121 Basmati Rice", category: "Indian Basmati Rice", categorySlug: "indian-basmati-rice", grade: "Premium", description: "The undisputed king of Basmati. Celebrated worldwide for its exceptional grain length — reaching up to 8.4mm after cooking — and its intoxicating aroma.", features: ["Extraordinary grain length up to 8.4mm after cooking", "Rich, natural aroma that intensifies during cooking", "Fluffy, non-sticky texture — ideal for biryani and pilaf"], specifications: { grainLength: "8.30mm+", moisture: "Max 12%", brokenGrain: "Max 2%", color: "Creamy White", aroma: "Strong Natural" }, forms: ["Raw", "Steam", "Sella", "Golden Sella"], image: "/images/gallery/rice-grains-1.jpg" },
  { baseSlug: "1718-basmati-rice", baseName: "1718 Basmati Rice", category: "Indian Basmati Rice", categorySlug: "indian-basmati-rice", grade: "Classic", description: "A traditional long-grain Basmati variety with an authentic aromatic profile that has made it a household favorite for generations.", features: ["Authentic traditional Basmati aroma", "Excellent elongation ratio after cooking", "Competitive pricing with premium quality standards"], specifications: { grainLength: "7.50mm+", moisture: "Max 12%", brokenGrain: "Max 3%", color: "Creamy White", aroma: "Natural" }, forms: ["Raw", "Steam", "Sella"], image: "/images/gallery/rice-grains-2.jpg" },
  { baseSlug: "1509-basmati-rice", baseName: "1509 Basmati Rice", category: "Indian Basmati Rice", categorySlug: "indian-basmati-rice", grade: "Superior", description: "The versatile workhorse of the Basmati world. Outstanding elongation ratio and a rich aromatic profile at a price point that makes premium quality accessible.", features: ["Outstanding elongation — cooks to nearly double its length", "Rich aromatic profile rivaling premium varieties", "Consistent batch-to-batch quality"], specifications: { grainLength: "7.80mm+", moisture: "Max 12%", brokenGrain: "Max 3%", color: "Creamy White", aroma: "Natural" }, forms: ["Raw", "Steam", "Sella"], image: "/images/gallery/rice-grains-3.jpg" },
  { baseSlug: "1401-basmati-rice", baseName: "1401 Basmati Rice", category: "Indian Basmati Rice", categorySlug: "indian-basmati-rice", grade: "Value", description: "A dependable Basmati variety that brings the signature long-grain elegance and aromatic character at an accessible price point.", features: ["Long-grain Basmati at an accessible price", "Reliable quality for commercial and bulk applications", "Popular in price-sensitive export markets"], specifications: { grainLength: "7.20mm+", moisture: "Max 12%", brokenGrain: "Max 5%", color: "White", aroma: "Mild Natural" }, forms: ["Raw", "Steam", "Sella"], image: "/images/gallery/rice-grains-1.jpg" },
  { baseSlug: "pusa-basmati-rice", baseName: "Pusa Basmati Rice", category: "Indian Basmati Rice", categorySlug: "indian-basmati-rice", grade: "Heritage", description: "The original heritage variety that put Indian Basmati on the global map. Prized for its distinctive, intense aroma and slender, elegant grain.", features: ["The original heritage Basmati variety", "Distinctively intense, unmistakable aroma", "Benchmark variety for Basmati quality standards"], specifications: { grainLength: "7.00mm+", moisture: "Max 12%", brokenGrain: "Max 3%", color: "White", aroma: "Strong Traditional" }, forms: ["Raw", "Steam", "Sella"], image: "/images/gallery/rice-grains-2.jpg" },
  { baseSlug: "traditional-basmati-rice", baseName: "Traditional Basmati Rice", category: "Indian Basmati Rice", categorySlug: "indian-basmati-rice", grade: "Heritage", description: "Rooted in centuries of Indian rice cultivation, Traditional Basmati carries the unmistakable essence of India's rice heritage.", features: ["Centuries-old heritage variety", "Captivating fragrance that fills the kitchen", "Connoisseur's choice for traditional Indian cuisine"], specifications: { grainLength: "7.10mm+", moisture: "Max 12%", brokenGrain: "Max 3%", color: "Creamy White", aroma: "Strong Traditional" }, forms: ["Raw", "Steam", "Sella"], image: "/images/gallery/rice-grains-3.jpg" },

  // Non-Basmati
  { baseSlug: "sugandha-rice", baseName: "Sugandha Rice", category: "Indian Non-Basmati Rice", categorySlug: "indian-non-basmati-rice", grade: "Premium Non-Basmati", description: "Bridges the gap between Basmati and Non-Basmati, offering a delightful aroma and good grain length at a fraction of the Basmati price.", features: ["Aromatic Non-Basmati — fragrant like its name suggests", "Good grain length with decent elongation", "Cost-effective alternative to Basmati varieties"], specifications: { grainLength: "6.80mm+", moisture: "Max 13%", brokenGrain: "Max 5%", color: "White", aroma: "Mildly Fragrant" }, forms: ["Raw", "Steam", "Sella"], image: "/images/gallery/rice-grains-1.jpg" },
  { baseSlug: "sharbati-rice", baseName: "Sharbati Rice", category: "Indian Non-Basmati Rice", categorySlug: "indian-non-basmati-rice", grade: "Semi-Premium", description: "Known for its slightly sweet taste, medium grain, and soft texture after cooking. A popular staple across Indian households.", features: ["Subtly sweet taste profile unique to Sharbati", "Soft, fluffy texture when cooked", "Growing international demand for everyday cooking"], specifications: { grainLength: "6.50mm+", moisture: "Max 13%", brokenGrain: "Max 5%", color: "White", aroma: "Mild" }, forms: ["Raw", "Steam"], image: "/images/gallery/rice-grains-2.jpg" },
  { baseSlug: "pr-11-rice", baseName: "PR 11 Rice", category: "Indian Non-Basmati Rice", categorySlug: "indian-non-basmati-rice", grade: "Standard", description: "A robust, high-yield variety from Punjab that has become a staple in both domestic and export markets.", features: ["High-yield variety with consistent quality", "Medium grain ideal for everyday cooking", "Excellent value for institutional and bulk buyers"], specifications: { grainLength: "6.20mm+", moisture: "Max 14%", brokenGrain: "Max 5%", color: "White", aroma: "Neutral" }, forms: ["Raw", "Steam", "Sella"], image: "/images/gallery/rice-grains-3.jpg" },
  { baseSlug: "pr-14-rice", baseName: "PR 14 Rice", category: "Indian Non-Basmati Rice", categorySlug: "indian-non-basmati-rice", grade: "Standard", description: "Known for its slightly longer grain compared to PR 11 and excellent cooking characteristics. A mainstay in Indian commercial kitchens.", features: ["Slightly longer grain than PR 11 for better presentation", "Excellent cooking characteristics — soft and absorbent", "Strong export presence in Africa and Southeast Asia"], specifications: { grainLength: "6.40mm+", moisture: "Max 14%", brokenGrain: "Max 5%", color: "White", aroma: "Neutral" }, forms: ["Raw", "Steam", "Sella"], image: "/images/gallery/rice-grains-1.jpg" },
  { baseSlug: "parmal-rice", baseName: "Parmal Rice", category: "Indian Non-Basmati Rice", categorySlug: "indian-non-basmati-rice", grade: "Economy", description: "India's most widely consumed Non-Basmati variety — a true everyday essential. Neutral taste and highly competitive pricing.", features: ["India's most widely consumed rice variety", "Short-to-medium grain with neutral taste", "Highly competitive pricing for mass-market demand"], specifications: { grainLength: "5.80mm+", moisture: "Max 14%", brokenGrain: "Max 5%", color: "White", aroma: "Neutral" }, forms: ["Raw", "Steam"], image: "/images/gallery/rice-grains-2.jpg" },
  { baseSlug: "sona-masoori-rice", baseName: "Sona Masoori Rice", category: "Indian Non-Basmati Rice", categorySlug: "indian-non-basmati-rice", grade: "Premium Non-Basmati", description: "A lightweight, aromatic medium-grain rice from Southern India. Beloved for its naturally low starch content, making it lighter on the palate.", features: ["Lightweight with naturally low starch content", "Aromatic medium-grain from Southern India", "Staple of South Indian cuisine — idli, dosa, and more"], specifications: { grainLength: "5.50mm+", moisture: "Max 13%", brokenGrain: "Max 3%", color: "Golden White", aroma: "Mildly Fragrant" }, forms: ["Raw", "Steam"], image: "/images/gallery/rice-grains-3.jpg" },
];

const PRF_PRODUCTS = [
  // PRF
  { baseSlug: "pesticide-residue-free-raw-rice", baseName: "PRF Raw Rice", category: "Pesticide Residue Free", categorySlug: "pesticide-residue-free", grade: "Clean Label", description: "Meets the most stringent international clean-label standards. Sourced from carefully monitored farms and rigorously tested at every stage.", features: ["Zero detectable pesticide residues — lab-verified", "Meets EU, Japan, and USA pesticide residue limits", "Full traceability from field to finished product"], specifications: { grainLength: "8.30mm+", moisture: "Max 12%", brokenGrain: "Max 2%", color: "Creamy White", aroma: "Natural", pesticideResidue: "Below MRL" }, forms: ["Raw"], image: "/images/gallery/rice-grains-1.jpg" },
  { baseSlug: "pesticide-residue-free-steam-rice", baseName: "PRF Steam Rice", category: "Pesticide Residue Free", categorySlug: "pesticide-residue-free", grade: "Clean Label", description: "Combines the nutritional benefits of steaming with the assurance of zero pesticide residues. Multi-panel residue testing.", features: ["Steam processed with zero pesticide residues", "Multi-panel residue testing on every batch", "Premium positioning for health-conscious markets"], specifications: { grainLength: "8.20mm+", moisture: "Max 12%", brokenGrain: "Max 2%", color: "Off-White", aroma: "Mild Natural", pesticideResidue: "Below MRL" }, forms: ["Steam"], image: "/images/gallery/rice-grains-2.jpg" },
  { baseSlug: "pesticide-residue-free-sella-rice", baseName: "PRF Sella Rice", category: "Pesticide Residue Free", categorySlug: "pesticide-residue-free", grade: "Clean Label", description: "Delivers robust, forgiving cooking characteristics with a clean-label guarantee. Nutrient-fortified through parboiling.", features: ["Parboiled with zero pesticide residues", "Nutrient-fortified through parboiling process", "Forgiving cooking — virtually impossible to overcook"], specifications: { grainLength: "8.20mm+", moisture: "Max 13%", brokenGrain: "Max 2%", color: "Light Golden", aroma: "Mild", pesticideResidue: "Below MRL" }, forms: ["Sella"], image: "/images/gallery/rice-grains-3.jpg" },
  { baseSlug: "pesticide-residue-free-golden-sella-rice", baseName: "PRF Golden Sella", category: "Pesticide Residue Free", categorySlug: "pesticide-residue-free", grade: "Clean Label", description: "Combines the striking golden appearance and superior cooking characteristics of Golden Sella with the absolute assurance of zero pesticide residues.", features: ["Premium golden color with clean-label certification", "Extended parboiling for maximum nutrient retention", "Targeted at EU, Japan, and premium Gulf markets"], specifications: { grainLength: "8.30mm+", moisture: "Max 13%", brokenGrain: "Max 2%", color: "Golden Amber", aroma: "Mild", pesticideResidue: "Below MRL" }, forms: ["Golden Sella"], image: "/images/gallery/rice-grains-1.jpg" },
  { baseSlug: "white-sella-rice", baseName: "White Sella Rice", category: "Pesticide Residue Free", categorySlug: "pesticide-residue-free", grade: "Clean Label", description: "Offers the structural benefits of parboiling with a lighter, whiter appearance. Polished to a pristine white finish.", features: ["Lighter, whiter appearance than traditional Sella", "Parboiled grain structure with polished finish", "Pesticide residue free — lab certified"], specifications: { grainLength: "8.20mm+", moisture: "Max 13%", brokenGrain: "Max 2%", color: "White", aroma: "Mild", pesticideResidue: "Below MRL" }, forms: ["White Sella"], image: "/images/gallery/rice-grains-2.jpg" },
];

let generatedProducts = [];
let navStructure = {
  basmati: [],
  nonBasmati: [],
  prf: []
};

for (const base of RICE_PRODUCTS) {
  let navItem = {
    label: base.baseName,
    subChildren: []
  };

  for (const form of base.forms) {
    const is1121 = base.baseName.includes('1121');
    const slugForm = form.toLowerCase().replace(/ /g, '-');
    
    // Construct slug e.g. "1718-raw-basmati-rice"
    const slug = base.baseSlug.includes('basmati') 
      ? base.baseSlug.replace('basmati', `${slugForm}-basmati`) 
      : base.baseSlug.replace('rice', `${slugForm}-rice`);
    
    // Construct name e.g. "1718 Raw Basmati Rice"
    const nameWords = base.baseName.split(' ');
    nameWords.splice(1, 0, form);
    const name = is1121 ? base.baseName.replace('1121', `1121 ${form}`) : nameWords.join(' ');
    
    const shortName = `${base.baseName.split(' ')[0]} ${form}`;

    generatedProducts.push({
      slug,
      name,
      shortName,
      category: base.category,
      categorySlug: base.categorySlug,
      grade: base.grade,
      description: base.description,
      features: base.features,
      specifications: base.specifications,
      forms: [form],
      image: base.image
    });

    navItem.subChildren.push({
      label: form,
      href: `/products/${slug}`
    });
  }
  
  if (base.categorySlug === 'indian-basmati-rice') {
    navStructure.basmati.push(navItem);
  } else {
    navStructure.nonBasmati.push(navItem);
  }
}

for (const prf of PRF_PRODUCTS) {
  generatedProducts.push({
    slug: prf.baseSlug,
    name: prf.baseName,
    shortName: prf.baseName,
    category: prf.category,
    categorySlug: prf.categorySlug,
    grade: prf.grade,
    description: prf.description,
    features: prf.features,
    specifications: prf.specifications,
    forms: prf.forms,
    image: prf.image
  });
  
  navStructure.prf.push({
    label: prf.baseName,
    href: `/products/${prf.baseSlug}`
  });
}

// Generate the TS strings
const productsStr = `export const RICE_PRODUCTS = ${JSON.stringify(generatedProducts, null, 2)};`;

const navStr = `export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    megaMenu: true,
    items: [
      {
        label: "Indian Basmati Rice",
        href: "/products?category=indian-basmati-rice",
        children: ${JSON.stringify(navStructure.basmati, null, 10).replace(/"/g, '"').replace(/\n\s{10}/g, '\n          ')}
      },
      {
        label: "Indian Non-Basmati Rice",
        href: "/products?category=indian-non-basmati-rice",
        children: ${JSON.stringify(navStructure.nonBasmati, null, 10).replace(/"/g, '"').replace(/\n\s{10}/g, '\n          ')}
      },
      {
        label: "Pesticide Residue Free",
        href: "/products?category=pesticide-residue-free",
        children: ${JSON.stringify(navStructure.prf, null, 10).replace(/"/g, '"').replace(/\n\s{10}/g, '\n          ')}
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
];`;

const footerStr = `export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Global Exports", href: "/global-exports" },
  { label: "Private Labeling", href: "/private-labeling" },
  { label: "048 Brand", href: "/048-brand" },
  { label: "Heritage & Quality", href: "/heritage" },
  { label: "Certificates", href: "/certificates" },
  { label: "Blog", href: "/blog" },
];`;

const categoriesStr = `export const RICE_CATEGORIES = [
  { name: "Indian Basmati Rice", slug: "indian-basmati-rice", description: "The crown jewel of Indian agriculture — long-grain, aromatic, and prized across global markets." },
  { name: "Indian Non-Basmati Rice", slug: "indian-non-basmati-rice", description: "Versatile, everyday rice varieties that power kitchens across India and the world." },
  { name: "Pesticide Residue Free", slug: "pesticide-residue-free", description: "Clean-label rice cultivated and processed under strict pesticide-free protocols." },
] as const;`;

// Write them into consts.ts replacing the old ones
// We replace everything from RICE_CATEGORIES (or RICE_PRODUCTS) to the end of the file, except for languages if they are there.
// Actually, let's just find "export const RICE_CATEGORIES" or "export const NAV_LINKS"
const startIdx = content.indexOf('export const RICE_CATEGORIES =') !== -1 ? content.indexOf('export const RICE_CATEGORIES =') : content.indexOf('export const NAV_LINKS =');

// Find LANGUAGES which should be at the end
const endIdx = content.indexOf('export const LANGUAGES =');
let endContent = '';
if (endIdx !== -1) {
  endContent = content.substring(endIdx);
}

const newContent = content.substring(0, startIdx) + categoriesStr + '\n\n' + productsStr + '\n\n' + navStr + '\n\n' + footerStr + '\n\n' + endContent;

fs.writeFileSync(constsFile, newContent);
console.log('Successfully updated consts.ts with expanded products, nav links, and footer links.');
