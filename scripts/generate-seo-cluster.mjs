import fs from "node:fs";
import path from "node:path";

const outputDir = path.resolve("src/content/blog");
const imageDir = "/images/blog/seo-cluster-2026";

const sources = {
  icar: ["ICAR: Basmati rice varieties", "https://icar.gov.in/en/crop-science/basmati-rice-varieties"],
  apeda: ["APEDA: Basmati rice overview and export data", "https://apeda.gov.in/BasmatiRice"],
  bedf: ["APEDA BEDF: Basmati quality assurance", "https://apeda.gov.in/bedf"],
  net: ["APEDA: Basmati.Net traceability system", "https://apeda.gov.in/basmati-net"],
  export: ["APEDA: Requirements for export of rice", "https://apeda.gov.in/Requirement_Export_Rice"],
  services: ["APEDA: Export, quality and MRL services", "https://apeda.gov.in/services"],
  dgft: ["DGFT: Mandatory export documents", "https://content.dgft.gov.in/Website/dgftprod/beece244-4c19-453f-8163-e6af0f5609d3/FTP%20Chapter2-Updated%20as%20on%2014.06.2021.pdf"],
  fssai: ["FSSAI: Standards for Basmati rice", "https://fssai.gov.in/upload/notifications/2023/01/63bff642a2f30Gazette_Notification.pdf"],
  who: ["WHO: Healthy diet guidance", "https://www.who.int/en/news-room/fact-sheets/detail/healthy-diet"],
  fda: ["FDA: Safe food storage guidance", "https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely"],
};

const articles = [
  {
    slug: "1121-vs-1718-basmati-rice",
    title: "1121 vs 1718 Basmati Rice: A Practical Buyer Comparison",
    description: "Compare 1121 and 1718 Basmati rice by grain shape, cooked elongation, aroma, processing form and best commercial use.",
    date: "2026-09-08", category: "Rice Knowledge",
    tags: ["1121 Basmati Rice", "1718 Basmati Rice", "Basmati Rice Comparison", "Bulk Basmati Rice"], image: "01-1121-vs-1718-basmati.webp",
    alt: "Four bowls comparing uncooked and cooked 1121 and 1718 Basmati rice samples",
    intro: [
      "1121 and 1718 are both extra-long Basmati choices, so a quick look at two bags rarely tells the full story. For an importer, restaurant or private-label buyer, the useful comparison is how two matching lots behave before and after cooking.",
      "Pusa Basmati 1718 was developed from the 1121 background with improved resistance to bacterial blight. In the market, both can deliver premium length and presentation. The final decision should therefore focus on the actual lot, processing form, age and landed cost—not only the variety name."
    ],
    answer: "Choose the lot that meets your written specification and cooking test. Both can serve premium programmes; 1718 is closely related to 1121, while supplier consistency and processing often create the bigger practical difference.",
    points: ["Compare Raw with Raw or Steam with Steam.", "Measure average grain length across a representative sample.", "Cook equal weights with the same water and soaking time.", "Confirm purity, broken percentage, moisture and crop year in writing."],
    sections: [
      ["How the two varieties are related", "1718 is a marker-assisted, disease-resistant version derived from Pusa Basmati 1121. That shared background explains why buyers may see similar extra-long, slender kernels and strong elongation. A visual check alone is not a reliable purity test.\n\nUse the variety as the starting point, then compare the mill's specification sheet and approved sample. The [Pusa Basmati varieties guide](/blog/pusa-basmati-varieties-guide) explains where the major names fit."],
      ["What changes the cooked result", "Ageing can reduce moisture and help grains stay separate, while Steam or Sella processing changes firmness and handling. Polishing level, broken content and cooking method also affect the plate. Two lots of 1121 can differ more than a carefully matched 1121 and 1718 sample.\n\nRun the same [rice sample evaluation](/blog/how-to-evaluate-basmati-rice-sample) on both lots. Record aroma, cooked length, separation, texture and yield."],
      ["Best applications", "Both varieties suit premium biryani, festive rice, restaurant service and retail packs when the lot meets the required grade. For dramatic plate presentation, prioritise elongation and low broken content. For large kitchens, add firmness and holding performance to the test.\n\nA buyer serving several price points can reserve the strongest-performing lot for a flagship line and use another approved specification for everyday premium packs."],
      ["How to request a fair quotation", "Ask suppliers to quote the same processing form, crop year, ageing period, broken tolerance, purity, packing and Incoterm. Without this alignment, a lower price may simply represent a different product.\n\nRequest a sealed pre-shipment sample and a [certificate of analysis](/blog/rice-certificate-of-analysis-guide) tied to the same production lot."],
    ],
    checklist: ["Set the intended dish and target price.", "Match process, crop year and ageing.", "Approve raw and cooked samples.", "Document quality tolerances.", "Compare landed cost, not only price per tonne."],
    faqs: [["Is 1718 longer than 1121?", "Both are sold as extra-long Basmati. Lot-level measurements are more useful than a universal claim."], ["Can I identify them by colour?", "No. Processing and ageing strongly influence colour, so colour alone cannot prove variety."], ["Which is better for biryani?", "Either can work well. Select through a controlled cooking test using your kitchen method."]],
    takeaway: "1121 versus 1718 is best treated as a specification decision. Buy the verified lot that gives your customers the aroma, length, separation and value they expect.", sourceKeys: ["icar", "bedf"]
  },
  {
    slug: "1121-vs-1509-basmati-rice",
    title: "1121 vs 1509 Basmati Rice: Which One Should You Buy?",
    description: "Understand the difference between 1121 and 1509 Basmati rice for biryani, retail, catering and bulk import programmes.",
    date: "2026-09-07", category: "Rice Knowledge",
    tags: ["1121 vs 1509", "1509 Basmati Rice", "1121 Basmati Rice", "Basmati for Biryani"], image: "02-1121-vs-1509-basmati.webp",
    alt: "Side-by-side uncooked and cooked samples for comparing 1121 and 1509 Basmati rice",
    intro: ["1121 and 1509 are popular when buyers want a long, elegant Basmati grain. The usual market description places 1121 at a premium position and 1509 as a strong quality-to-price option, but that shortcut should never replace a sample test.", "The better choice depends on the result your customer notices: raw grain appearance, cooked elongation, aroma, firmness, consistency and final menu cost."],
    answer: "Start with 1121 for a top premium brief and 1509 for extra-long presentation with competitive value. Then verify the exact lots under identical cooking conditions.",
    points: ["1121 is widely recognised in premium export channels.", "1509 is early-maturing and often competitively positioned.", "Both are available in Raw, Steam and Sella forms.", "Ageing and milling can change the result substantially."],
    sections: [
      ["The main commercial difference", "1121 is strongly associated with premium extra-long Basmati and dramatic cooked length. 1509 also offers a slender grain and attractive elongation, commonly at a value-led position. Actual pricing moves with crop supply, ageing, processing and freight.\n\nDo not advertise a fixed grain length unless your shipment specification supports it."],
      ["Choose by dish, not by reputation", "For a premium biryani pack, customers may reward exceptional cooked presentation. For catering, consistent separation and portion yield can matter more. Run the [best Basmati for biryani](/blog/best-basmati-rice-for-biryani) test with the recipe your customer uses.\n\nA well-processed 1509 lot can outperform a poorly matched 1121 lot in a specific kitchen."],
      ["Compare matching processing forms", "Raw rice tends to cook softer, Steam rice offers dependable separation, and Sella rice is firmer for bulk cooking. Comparing 1121 Raw with 1509 Golden Sella confuses variety with processing.\n\nOur [Raw, Steam and Sella guide](/blog/raw-vs-steam-vs-sella-basmati-rice) separates these two decisions."],
      ["Build a useful purchase specification", "State variety, form, crop year, ageing, average grain length, purity, broken percentage, moisture, colour, packing and residue requirements. Add an approved sample and testing method.\n\nThis creates one shared definition of quality for buyer, mill, laboratory and inspection company."],
    ],
    checklist: ["Define premium or value-premium position.", "Select the processing form.", "Blind-test both samples.", "Compare cooking yield and holding quality.", "Lock the approved result into the contract."],
    faqs: [["Is 1121 always more expensive?", "Often, but not always. Crop, form, age, grade and freight can change the quotation."], ["Is 1509 genuine Basmati?", "Yes, Pusa Basmati 1509 is a notified Basmati variety."], ["Which looks longer after cooking?", "Both can elongate strongly; measure the actual approved lots rather than relying on a general promise."]],
    takeaway: "Use 1121 when the brief rewards premium recognition and use 1509 when value with extra-long appeal leads. In both cases, the sample and specification decide the purchase.", sourceKeys: ["icar", "fssai"]
  },
  {
    slug: "pusa-1718-basmati-rice-guide",
    title: "Pusa 1718 Basmati Rice: Grain, Cooking and Buying Guide",
    description: "A clear guide to Pusa 1718 Basmati rice, including its background, grain profile, cooking performance and bulk buying checks.",
    date: "2026-09-06", category: "Rice Knowledge",
    tags: ["Pusa 1718 Basmati Rice", "1718 Steam Rice", "1718 Sella Rice", "Basmati Buyer Guide"], image: "03-pusa-1718-basmati-guide.webp",
    alt: "Bowl of Pusa 1718 Basmati grains beside a cooked long-grain rice sample and paddy panicles",
    intro: ["Pusa Basmati 1718 is an extra-long variety connected closely to the famous 1121 line. It is important to farmers because it was developed with resistance to bacterial blight, and important to buyers because it can deliver the premium appearance expected from modern Basmati.", "A variety name, however, does not guarantee one fixed result. Crop year, field conditions, milling, processing, ageing and grading still shape every commercial lot."],
    answer: "1718 is a strong premium Basmati option for buyers seeking extra-long, slender grains, aroma and attractive elongation. Approve it by specification and cooking test.",
    points: ["Derived from the Pusa 1121 background.", "Known for extra-long slender grain and strong cooked length.", "Available in multiple processing forms.", "Lot approval remains essential."],
    sections: [
      ["What makes 1718 notable", "ICAR describes Pusa Basmati 1718 as a marker-assisted, bacterial-blight-resistant version derived from 1121. This agricultural improvement supports production; it does not remove the need for commercial quality control.\n\nBuyers should separate agronomic traits from the eating and cooking traits listed in their contract."],
      ["Raw, Steam or Sella 1718", "Raw 1718 can suit buyers who prefer a lighter appearance and softer bite. Steam processing supports separation. Sella and Golden Sella add firmness and tolerance for high-volume kitchens.\n\nChoose the form before asking for quotes, then compare suppliers like for like."],
      ["How to cook a test sample", "Rinse equal weights, soak for the same period and use controlled water, heat and resting time. Measure raw and cooked length across several grains. Note aroma, texture, separation and any breakage.\n\nFollow our [blind sample testing method](/blog/how-to-evaluate-basmati-rice-sample) to keep the decision objective."],
      ["What bulk buyers should document", "Include varietal purity, grain-length method, broken tolerance, moisture, damaged grains, foreign matter, crop year, ageing, packing and destination residue limits. Ask how the supplier maintains [traceability](/blog/basmati-rice-traceability-guide).\n\nThe approved sample should be sealed and identifiable throughout shipment preparation."],
    ],
    checklist: ["Confirm notified variety and processing form.", "Review representative raw sample.", "Run a controlled cook test.", "Check COA and residue plan.", "Approve packing and loading conditions."],
    faqs: [["Is 1718 the same as 1121?", "It is derived from 1121 but is a separately notified variety."], ["Can restaurants use 1718 for biryani?", "Yes, when the selected form and lot deliver the required separation and holding quality."], ["Does 1718 need ageing?", "Ageing can improve cooking behaviour, but the useful period depends on storage and the target result."]],
    takeaway: "1718 belongs in a premium buyer's shortlist, but its real value appears only when the exact lot satisfies a measurable specification and repeatable cooking test.", sourceKeys: ["icar", "bedf"]
  },
  {
    slug: "traditional-basmati-vs-1121",
    title: "Traditional Basmati vs 1121: Aroma, Length and Best Uses",
    description: "Compare Traditional Basmati and Pusa 1121 by aroma, grain length, cooking style, market positioning and ideal dishes.",
    date: "2026-09-05", category: "Rice Knowledge",
    tags: ["Traditional Basmati", "1121 Basmati", "Aromatic Rice", "Premium Basmati Rice"], image: "04-traditional-vs-1121-basmati.webp",
    alt: "Traditional woven rice basket and modern bowls comparing Traditional and 1121 Basmati rice",
    intro: ["Traditional Basmati and Pusa 1121 can both be premium, but they create different kinds of value. Traditional selections are often chosen for heritage aroma and flavour, while 1121 is famous for extra-long visual presentation.", "Neither is automatically better. The right choice depends on what the customer wants to smell, see, eat and pay for."],
    answer: "Choose Traditional Basmati when heritage aroma and flavour lead the brief. Choose 1121 when extra-long cooked presentation and modern premium recognition matter most.",
    points: ["Traditional Basmati is aroma-led.", "1121 is strongly presentation-led.", "Ageing matters for both.", "Purity and lot consistency should be verified."],
    sections: [
      ["Aroma versus visual impact", "Traditional Basmati is valued for a characteristic fragrance and eating quality connected with established regional types. 1121 built its reputation around very long, slender grains and exceptional elongation.\n\nA restaurant may prefer one for a deeply aromatic pilaf and the other for a biryani where every long grain is visible."],
      ["Why ageing changes the experience", "Controlled ageing reduces grain moisture and can support firmer, more separate cooking while aroma develops. Poor storage can cause the opposite: stale odour, insects or uneven moisture.\n\nRead the [aged versus new-crop guide](/blog/aged-vs-new-crop-basmati-rice) before using age as a simple quality claim."],
      ["How to compare fairly", "Buy matching processing forms and prepare both with the same recipe. Smell the dry sample, the cooking steam and the rested rice. Measure cooked length, but also score texture, flavour, separation and suitability for the final dish.\n\nInvite kitchen users into the decision rather than relying only on the procurement team."],
      ["Positioning the product", "1121 often supports luxury retail, banquet and gifting lines built around visual length. Traditional Basmati can support a heritage story for customers who recognise its aroma and flavour.\n\nUse truthful pack language. A strong origin story should still be backed by traceability, testing and an approved sample."],
    ],
    checklist: ["Identify the customer's main quality cue.", "Compare the same form and age.", "Score aroma separately from length.", "Test the final recipe.", "Verify purity before making pack claims."],
    faqs: [["Which has the stronger aroma?", "Traditional Basmati is commonly selected for aroma, but actual intensity varies by lot and storage."], ["Which is longer?", "1121 is generally selected for extra-long visual presentation."], ["Can both be premium?", "Yes. They express premium quality in different ways."]],
    takeaway: "Traditional Basmati sells a heritage aroma experience; 1121 sells dramatic modern presentation. Let your customer's preferred experience guide the specification.", sourceKeys: ["apeda", "fssai"]
  },
  {
    slug: "pusa-basmati-varieties-guide",
    title: "Pusa Basmati Varieties Explained: 1121, 1509, 1401 and 1718",
    description: "An easy guide to four major Pusa Basmati varieties and how buyers can compare their grains, cooking performance and uses.",
    date: "2026-09-04", category: "Rice Knowledge",
    tags: ["Pusa Basmati Varieties", "1121 Basmati", "1509 Basmati", "1401 Basmati", "1718 Basmati"], image: "05-pusa-basmati-varieties.webp",
    alt: "Five bowls of long-grain rice arranged for comparing major Pusa Basmati varieties",
    intro: ["Names such as 1121, 1509, 1401 and 1718 appear frequently in Basmati quotations. They identify varieties, but buyers also need to specify processing, age, grade and packing to know what they are actually comparing.", "This guide gives a simple commercial map. It is not a substitute for varietal testing or a shipment specification."],
    answer: "1121 and 1718 are strong premium extra-long options, 1509 offers extra-long value, and 1401 is often chosen for uniformity, aroma and dependable performance.",
    points: ["Variety affects potential grain and cooking traits.", "Processing affects colour, firmness and handling.", "Ageing affects moisture and separation.", "Supplier grading determines lot consistency."],
    sections: [
      ["Pusa 1121", "1121 is widely recognised for extra-long slender grains and dramatic cooked elongation. It is a common reference point for premium Basmati programmes. Buyers should still define broken tolerance, grain-length method and cooking result."],
      ["Pusa 1509", "1509 is an early-maturing variety known for a slender grain and good cooking quality. Commercially, it often supports value-premium retail, biryani and catering briefs. See the detailed [1509 versus 1401 comparison](/blog/1509-vs-1401-basmati-rice)."],
      ["Pusa 1401", "1401 is frequently selected for uniform cooked shape, aroma and reliable texture rather than maximum length alone. It can fit food-service and everyday premium lines where consistency matters."],
      ["Pusa 1718", "1718 was derived from 1121 with improved resistance to bacterial blight. It remains an extra-long premium option. Compare it directly in our [1121 versus 1718 guide](/blog/1121-vs-1718-basmati-rice)."],
      ["Turn variety names into a buying decision", "Shortlist by application and price position. Then request matching Raw, Steam or Sella samples, cook them blind, and document purity, average length, moisture, broken grains and destination compliance.\n\nThis process prevents a familiar name from hiding an unsuitable lot."],
    ],
    checklist: ["Define the dish and customer segment.", "Choose variety shortlist.", "Choose processing form.", "Compare equal samples.", "Write the winning result into the contract."],
    faqs: [["Are all Pusa varieties Basmati?", "Only varieties officially notified as Basmati should be sold as such."], ["Which variety is best?", "There is no universal best; the right one matches the intended dish, market and budget."], ["Can appearance prove purity?", "No. Use traceability and an appropriate varietal testing plan."]],
    takeaway: "A variety name narrows the search; it does not finish it. Strong buyers combine the right variety with the right process, age, grade and quality controls.", sourceKeys: ["icar", "fssai"]
  },
  {
    slug: "sugandha-vs-sharbati-rice",
    title: "Sugandha vs Sharbati Rice: Differences, Uses and Buyer Tips",
    description: "Compare Sugandha and Sharbati rice by grain appearance, aroma, cooking behaviour, price position and commercial applications.",
    date: "2026-09-03", category: "Rice Knowledge",
    tags: ["Sugandha Rice", "Sharbati Rice", "Non Basmati Rice", "Long Grain Rice"], image: "06-sugandha-vs-sharbati-rice.webp",
    alt: "Two raw and two cooked long-grain rice samples comparing Sugandha and Sharbati rice",
    intro: ["Sugandha and Sharbati are long-grain rice choices used in value-focused retail and food service. They are sometimes presented beside Basmati products, but buyers should not assume that every aromatic or long grain is Basmati.", "The practical choice depends on grain appearance, aroma expectation, cooking tolerance and target shelf price."],
    answer: "Sugandha is often chosen when buyers want a longer aromatic-style presentation, while Sharbati commonly serves dependable everyday value. Confirm the exact commercial grade through samples.",
    points: ["Keep Basmati and non-Basmati labelling clear.", "Compare matching processing forms.", "Check cooked yield and texture.", "Set realistic aroma and length claims."],
    sections: [
      ["How the market positions them", "Sugandha is commonly marketed as a long-grain aromatic option for buyers seeking an accessible step below premium Basmati. Sharbati is widely used in everyday value segments. Supplier descriptions vary, so the written specification matters more than a sales nickname."],
      ["Cooking behaviour", "Steam versions can support clean separation, while Sella versions offer firmer grains for large batches. Test water absorption, cooked length, stickiness and holding time. Use the [water-ratio guide](/blog/basmati-rice-water-ratio) as a controlled starting method, then adjust for the sample."],
      ["Best-fit applications", "Sugandha can suit value biryani, catering and retail lines where consumers want a longer aromatic-style grain. Sharbati can suit daily meals, institutional cooking and price-sensitive retail. The exact fit changes by grade and local preference."],
      ["Avoid confusing product claims", "Do not label rice as Basmati merely because it is long or fragrant. Use the correct variety and category on packs, quotations and customs documents. Our [Basmati versus non-Basmati guide](/blog/basmati-vs-non-basmati-fssai-standards) explains the distinction."],
    ],
    checklist: ["Define legal product name.", "Choose form and grade.", "Measure raw and cooked performance.", "Check consistency across the sample.", "Match pack claims to verified facts."],
    faqs: [["Are Sugandha and Sharbati Basmati?", "They are generally traded as separate long-grain categories; use the official product identity applicable to the lot."], ["Which is better for catering?", "The form and grade matter. Sella or Steam samples should be tested under the actual batch method."], ["Can they replace premium Basmati?", "They can serve value segments, but customer expectations for aroma and presentation may differ."]],
    takeaway: "Sugandha and Sharbati work best when positioned honestly. Let the sample, cooking economics and local customer expectation determine the choice.", sourceKeys: ["fssai"]
  },
  {
    slug: "raw-vs-steam-vs-sella-basmati-rice",
    title: "Raw vs Steam vs Sella Basmati Rice: Complete Comparison",
    description: "Learn how Raw, Steam, White Sella and Golden Sella processing changes Basmati colour, texture, cooking and best use.",
    date: "2026-09-02", category: "Rice Knowledge",
    tags: ["Raw Basmati Rice", "Steam Basmati Rice", "Sella Basmati Rice", "Golden Sella Rice"], image: "07-raw-steam-sella-rice.webp",
    alt: "Four bowls showing Raw, Steam, White Sella and Golden Sella rice processing forms",
    intro: ["A rice variety and a rice processing form are two different choices. 1121 Raw and 1121 Golden Sella come from the same variety, yet their colour, firmness, water response and cooking tolerance can feel very different.", "Understanding processing prevents unfair comparisons and helps buyers select rice that works in the customer's kitchen."],
    answer: "Choose Raw for a lighter, softer result; Steam for balanced separation; White Sella for firmness with a pale colour; and Golden Sella for firm large-batch cooking with an amber tone.",
    points: ["Processing changes handling more than many buyers expect.", "Compare the same variety and crop year.", "Sella is parboiled before milling.", "Cook every shortlisted form using its suitable method."],
    sections: [
      ["Raw Basmati", "Raw Basmati is milled without a parboiling stage. It generally has a light appearance and can produce a softer bite. It suits households and dishes where tenderness and a clean white presentation matter."],
      ["Steam Basmati", "Steam treatment helps strengthen the kernel and supports separate cooking without the deeper colour of Golden Sella. It is a flexible option for biryani, retail and food service.\n\nWater needs still vary by variety and ageing."],
      ["White and Golden Sella", "Sella rice is soaked, heat-treated in the husk and dried before milling. White Sella retains a pale look; Golden Sella receives treatment that produces an amber colour. Both are valued for firmness and high-volume tolerance. Compare them in the [White versus Golden Sella guide](/blog/white-sella-vs-golden-sella-rice)."],
      ["Choose for the kitchen", "Ask whether the customer uses absorption, open-pot or dum cooking; how long rice must hold; and whether colour matters. A hotel buffet may value firmness, while a household pack may prioritise soft aroma and ease.\n\nTest with the customer's real recipe rather than a generic laboratory cook alone."],
    ],
    checklist: ["Choose target texture.", "Confirm acceptable colour.", "Test batch-cooking tolerance.", "Match variety and age.", "Document the processing form clearly."],
    faqs: [["Is Sella the same as Golden Sella?", "Golden Sella is a parboiled form with a characteristic amber colour; White Sella is paler."], ["Which is best for biryani?", "Steam and Sella are popular, but the preferred texture and cooking method decide."], ["Does Steam mean fully cooked?", "No. Steam rice is processed to strengthen the kernel and still requires normal cooking."]],
    takeaway: "Choose processing before comparing prices. The correct form can improve separation, holding time and customer satisfaction more than switching variety names.", sourceKeys: ["fssai", "apeda"]
  },
  {
    slug: "white-sella-vs-golden-sella-rice",
    title: "White Sella vs Golden Sella Rice: What Is the Difference?",
    description: "A simple comparison of White Sella and Golden Sella rice covering colour, parboiling, texture, cooking and buyer selection.",
    date: "2026-09-01", category: "Rice Knowledge",
    tags: ["White Sella Rice", "Golden Sella Rice", "Parboiled Basmati", "Sella Rice Difference"], image: "08-white-sella-vs-golden-sella.webp",
    alt: "White Sella and Golden Sella rice displayed as pale and amber raw and cooked samples",
    intro: ["White Sella and Golden Sella are both parboiled rice forms. Their visible difference is colour, but buyers should also consider aroma, firmness, cooking time and what consumers expect on the shelf.", "The name Sella describes processing, not one variety. Both forms can be produced from 1121, 1509, 1401 and other suitable rice varieties."],
    answer: "White Sella offers firm parboiled performance with a pale appearance. Golden Sella offers similar large-batch strength with a deeper amber colour and distinct market identity.",
    points: ["Both are parboiled before milling.", "Heat treatment influences colour and firmness.", "Variety still affects grain potential.", "Customer colour preference is commercially important."],
    sections: [
      ["Why the colours differ", "Parboiling moves moisture and heat through the grain before milling. A deeper treatment produces the familiar golden or amber shade, while White Sella remains pale. Colour should be uniform across a well-graded lot."],
      ["Texture and kitchen performance", "Both forms are known for firm grains and tolerance during large-batch cooking. Golden Sella is especially familiar in markets that value colour and robust biryani performance. White Sella suits buyers who want firmness without a strong golden tone."],
      ["How to run a useful test", "Record soaking time, water, cooking time, cooked length, firmness and holding performance. Allow the rice to rest before scoring. Compare equal varieties and similar ages.\n\nUse our [sample evaluation checklist](/blog/how-to-evaluate-basmati-rice-sample) for consistent notes."],
      ["What to specify", "Write the variety, White or Golden Sella form, average length, broken percentage, moisture, colour tolerance, crop year and packing. Include a retained colour sample when shade is important.\n\nCheck the [certificate of analysis guide](/blog/rice-certificate-of-analysis-guide) before shipment approval."],
    ],
    checklist: ["Ask customers which colour they expect.", "Match the same variety.", "Test cooking and holding.", "Set a colour reference.", "Confirm all tolerances in writing."],
    faqs: [["Is Golden Sella naturally yellow?", "Its amber colour comes from controlled parboiling treatment, not from adding artificial colour."], ["Which cooks firmer?", "Both can be firm; the exact result depends on variety, process and age."], ["Is Sella suitable for restaurants?", "Yes, its handling tolerance is one reason it is popular in high-volume kitchens."]],
    takeaway: "The best Sella form is the one your market recognises and your kitchen can use consistently. Compare colour and cooking performance together.", sourceKeys: ["fssai", "apeda"]
  },
  {
    slug: "aged-vs-new-crop-basmati-rice",
    title: "Aged vs New-Crop Basmati Rice: Cooking and Buying Differences",
    description: "Learn how ageing affects Basmati rice moisture, aroma, water absorption, grain separation, storage and bulk buying decisions.",
    date: "2026-08-31", category: "Rice Knowledge",
    tags: ["Aged Basmati Rice", "New Crop Rice", "Basmati Rice Ageing", "Rice Storage"], image: "09-aged-vs-new-crop-basmati.webp",
    alt: "Sealed jar of aged Basmati rice beside a fresh new-crop rice sample and paddy panicles",
    intro: ["Age is one of the quiet factors behind a good pot of Basmati. As rice rests under controlled conditions, moisture can settle and the grain may absorb water more evenly, stay firmer and separate better after cooking.", "Ageing is not simply leaving bags in a warehouse. Time adds value only when temperature, humidity, hygiene and pest control are managed."],
    answer: "Aged Basmati often gives firmer, more separate grains and may need more water. New-crop rice can be softer and needs careful water control. Test the actual lot.",
    points: ["Crop year is not the same as guaranteed ageing quality.", "Storage conditions matter throughout the period.", "Older rice may absorb more water.", "Aroma and texture should be tested, not assumed."],
    sections: [
      ["What happens during controlled ageing", "Moisture gradually changes within the grain. This can improve cooking tolerance and reduce stickiness. The result varies by variety and starting condition, so buyers should avoid treating a specific number of months as a universal guarantee."],
      ["How new-crop rice behaves", "Fresh rice usually contains more moisture and can become soft if cooked with the same water used for an aged lot. Reduce water carefully and test. New crop can still serve everyday products when its softer result matches the customer brief."],
      ["How to verify an ageing claim", "Ask for crop year, milling date, storage method and lot records. Inspect smell, insect activity, colour and moisture. A clean aged sample should not smell stale or damp.\n\nA [traceability system](/blog/basmati-rice-traceability-guide) gives more confidence than a date printed without supporting records."],
      ["Adjust the cooking method", "Begin with a controlled ratio, then change one variable at a time. Aged rice often accepts longer soaking or more water, but processing form also matters. Review the [Basmati water-ratio guide](/blog/basmati-rice-water-ratio) for practical starting points."],
    ],
    checklist: ["Confirm crop and milling dates.", "Inspect storage records.", "Measure moisture.", "Cook alongside a control sample.", "Approve aroma, texture and yield."],
    faqs: [["Is older rice always better?", "No. Good ageing requires controlled storage; badly stored old rice can lose quality."], ["Why does aged rice need more water?", "Lower and more stable moisture can increase water uptake during cooking."], ["Can new rice be used for biryani?", "Yes, but the water and handling may need adjustment to avoid softness."]],
    takeaway: "Buy ageing performance, not an age claim. Storage evidence and a controlled cooking test show whether time has actually improved the rice.", sourceKeys: ["apeda", "fda"]
  },
  {
    slug: "parboiled-rice-process-benefits",
    title: "How Parboiled Rice Is Made: Process, Benefits and Uses",
    description: "Follow the parboiled rice process from soaking and steaming to drying, milling and cooking, with simple buyer guidance.",
    date: "2026-08-30", category: "Rice Knowledge",
    tags: ["Parboiled Rice", "Sella Rice", "Rice Processing", "Golden Sella Rice"], image: "10-parboiled-rice-process.webp",
    alt: "Parboiled rice stages showing soaked paddy, steam treatment, drying and finished grains",
    intro: ["Parboiled rice is processed while the grain is still inside its husk. The paddy is soaked, heated and dried before normal milling. In Basmati trade, this family includes White Sella and Golden Sella products.", "The process changes the kernel structure, which is why parboiled rice often feels firmer and handles large kitchens well."],
    answer: "Parboiling uses controlled water and heat before milling to strengthen kernels. It can improve milling recovery and produce firm, separate rice suited to catering and biryani.",
    points: ["Soaking lets moisture enter the paddy.", "Heat treatment changes the starch structure.", "Drying must be controlled to prevent cracks.", "Milling removes husk and bran after treatment."],
    sections: [
      ["Step 1: cleaning and soaking", "Processors first remove field impurities, then soak paddy so moisture reaches the kernel evenly. Poorly controlled soaking can create uneven colour or odour, so water quality and time matter."],
      ["Step 2: heat treatment", "Steam or another controlled heat process acts on the hydrated grain. Temperature and duration influence colour and firmness. A deeper treatment is associated with Golden Sella's amber appearance."],
      ["Step 3: careful drying", "The paddy must be dried to a safe, even level before milling. Drying too quickly or unevenly can create internal stress and breakage. The [mill-to-container guide](/blog/from-rice-mill-to-shipping-container) explains how handling affects finished quality."],
      ["Step 4: milling, grading and sorting", "After drying, the husk and bran layers are removed. Grading separates sizes, while [optical sorting](/blog/how-optical-sorting-works) helps remove discoloured or defective grains. The finished lot is then tested and packed."],
      ["Where parboiled rice works best", "Its firm texture and separation make it useful for restaurants, caterers, buffets and markets that prefer Sella rice. It may need a longer soak or cooking time than Raw rice. Always follow the supplier's sample result."],
    ],
    checklist: ["Check even colour and odour.", "Review moisture and broken percentage.", "Test soaking and cooking time.", "Assess holding performance.", "Specify White or Golden Sella clearly."],
    faqs: [["Is parboiled rice already cooked?", "No. It has been heat-treated in the husk but still needs full cooking."], ["Why is Golden Sella amber?", "Controlled parboiling treatment creates the colour."], ["Is all parboiled rice Basmati?", "No. Parboiling is a process used with many rice varieties."]],
    takeaway: "Parboiling turns paddy into a stronger, more cooking-tolerant grain. Process control determines whether that advantage reaches the buyer.", sourceKeys: ["fssai", "apeda"]
  },
  {
    slug: "best-basmati-rice-for-biryani",
    title: "Best Basmati Rice for Biryani: Variety and Cooking Guide",
    description: "Choose the best Basmati rice for biryani by variety, processing, ageing, grain length, kitchen method and budget.",
    date: "2026-08-29", category: "Rice Knowledge",
    tags: ["Best Basmati Rice for Biryani", "Biryani Rice", "1121 Basmati", "1509 Basmati"], image: "11-best-basmati-rice-for-biryani.webp",
    alt: "Finished biryani with separate extra-long Basmati grains in a dark serving pot",
    intro: ["The best biryani rice must do more than look long in the bag. It should absorb flavour, stay separate, survive layering or dum cooking and still feel pleasant after resting.", "1121 and 1718 are common premium choices, while 1509 offers strong visual value. Steam and Sella forms are popular when firmness and batch tolerance matter."],
    answer: "For dramatic premium presentation, start with an aged 1121 or 1718 sample. For strong value, test 1509. Choose Steam or Sella when your kitchen needs extra separation and holding strength.",
    points: ["Test the rice with your exact biryani method.", "Cooked length is only one quality measure.", "Ageing can support separation.", "Sella handles large batches well."],
    sections: [
      ["What good biryani rice must do", "A good sample produces long, separate grains with enough firmness to survive par-cooking, draining, layering and final steaming. It should carry spice and stock without becoming heavy. Aroma must support the dish rather than disappear under it."],
      ["Variety choices", "1121 and 1718 suit flagship biryani where extra-long presentation earns attention. 1509 can deliver an attractive plate at a more accessible position. 1401 may suit kitchens that value aroma, uniformity and dependable texture. Compare the [major Pusa varieties](/blog/pusa-basmati-varieties-guide) before sampling."],
      ["Raw, Steam or Sella", "Raw rice can give a softer, aromatic result. Steam rice balances tenderness with separation. White or Golden Sella is firmer and popular for high-volume service. The right form depends on whether you use absorption, open-pot or dum cooking."],
      ["Run a kitchen trial", "Use the same pan, water, soak, salt, heat and resting time for each candidate. Record breakage, cooked length, aroma, separation and yield. Then repeat at service volume. A small perfect pot may behave differently in a 20-kilogram batch."],
    ],
    checklist: ["Define premium or value brief.", "Shortlist two varieties.", "Choose matching processing forms.", "Test small and service-size batches.", "Approve taste, yield and holding together."],
    faqs: [["Is 1121 best for every biryani?", "No. It is a strong premium option, but recipe, customer and cost can make another variety better."], ["Why do restaurants use Sella rice?", "Its firmness and separation help during large-batch cooking and holding."], ["Should biryani rice be soaked?", "Usually yes, but the time should suit the variety, age and process."]],
    takeaway: "The best biryani rice is the one that performs in your pot, at your service volume, for your customer and price point.", sourceKeys: ["apeda", "icar"]
  },
  {
    slug: "basmati-rice-water-ratio",
    title: "Basmati Rice Water Ratio: Pot, Absorption and Rice Cooker",
    description: "Use practical starting water ratios for Basmati rice and learn how rinsing, soaking, ageing and processing change the result.",
    date: "2026-08-28", category: "Rice Knowledge",
    tags: ["Basmati Rice Water Ratio", "How to Cook Basmati Rice", "Rice Cooker Basmati", "Fluffy Rice"], image: "12-basmati-rice-water-ratio.webp",
    alt: "Measuring jug, cup of dry Basmati rice and covered pot arranged for water-ratio cooking",
    intro: ["There is no single water ratio that works for every Basmati rice. Aged rice, new crop, Raw, Steam and Sella each absorb water differently. Your pot, heat and soaking time also change how much water remains available.", "Use a ratio as a starting point, then adjust one small step at a time."],
    answer: "For rinsed and soaked white Basmati using absorption, begin around 1 cup rice to 1.25 cups water. Unsoaked or older rice may need more; parboiled Sella often needs a different method and longer cooking.",
    points: ["Measure rice and water with the same cup.", "Drain soaked rice well.", "Use a tight lid and low heat.", "Rest before fluffing."],
    sections: [
      ["Why ratios vary", "Rice already contains moisture. New crop may need less added water, while well-aged rice often accepts more. Rinsing removes surface starch; soaking begins hydration before heat starts. A loose lid also lets more steam escape."],
      ["Absorption method", "Rinse until the water is mostly clear, soak if desired and drain. Start with about 1:1.25 for soaked white Basmati. Bring to a gentle boil, cover, lower the heat and avoid opening the lid. Rest ten minutes after cooking. If the centre is hard, add a little more water next time; if soft, reduce it."],
      ["Rice cooker method", "Use the cooker's cup and level lines when available. For a new sample, begin near the absorption ratio and note the result. Keep-warm time can dry the surface or soften the base, so include holding time in your test."],
      ["Open-pot and Sella cooking", "Many biryani kitchens cook rice in excess water and drain it at the desired stage. Here, timing matters more than a fixed ratio. Sella rice may benefit from longer soaking and boiling. Read the [processing comparison](/blog/raw-vs-steam-vs-sella-basmati-rice) first."],
    ],
    checklist: ["Identify form and crop age.", "Rinse and drain consistently.", "Record starting ratio.", "Keep heat and pot constant.", "Change water in small increments."],
    faqs: [["Is 1:2 too much water?", "For many soaked white Basmati samples in absorption cooking it may be too much, but equipment and rice vary."], ["Does soaking reduce water?", "Yes, soaked grains already contain some absorbed water."], ["Why is my rice wet at the bottom?", "Too much water, high heat changes or insufficient resting can contribute."]],
    takeaway: "A reliable ratio comes from one measured test and a small adjustment. Record your method so the good result is repeatable.", sourceKeys: ["apeda"]
  },
  {
    slug: "should-you-soak-basmati-rice",
    title: "Should You Soak Basmati Rice? Timing and Benefits Explained",
    description: "Learn why Basmati rice is soaked, how long to soak different forms and how soaking affects cooking time, length and texture.",
    date: "2026-08-27", category: "Rice Knowledge",
    tags: ["Soak Basmati Rice", "Basmati Cooking Tips", "Long Grain Rice", "Biryani Preparation"], image: "13-soaking-basmati-rice.webp",
    alt: "Basmati grains soaking in a clear glass bowl beside a dry rice sample and kitchen timer",
    intro: ["Soaking gives water time to enter a Basmati grain before strong heat reaches it. That can support even cooking and help a long grain expand with less breakage.", "It is useful, but not automatic. New-crop Raw rice and aged Sella rice may need different times."],
    answer: "Soak most white Basmati for 20 to 30 minutes as a starting point. Shorten the time for soft new crop; extend carefully for firm Sella. Always drain before measuring cooking water.",
    points: ["Rinse before soaking.", "Use clean room-temperature water.", "Drain thoroughly.", "Do not copy one time for every rice."],
    sections: [
      ["What soaking changes", "Water begins moving into the dry kernel. This reduces the distance moisture must travel during cooking and can support a more even centre. Gentle handling after soaking matters because hydrated grains are easier to damage."],
      ["A practical timing guide", "For everyday Raw or Steam Basmati, 20 to 30 minutes is a useful first test. Very fresh rice may need less. Firm parboiled rice may need longer. If the grain breaks easily after soaking, shorten the time or handle it more gently."],
      ["Adjust cooking water", "Soaked rice carries water into the pot, so an unsoaked ratio may produce softness. Drain in a sieve for several minutes and use the [water-ratio method](/blog/basmati-rice-water-ratio). Keep notes on both soaking and cooking water."],
      ["When you can skip soaking", "A quick household meal can be made without soaking if water and time are adjusted. Some rice cookers also handle unsoaked rice well. The trade-off may be slightly less even elongation or a longer cook. Your test result should decide."],
    ],
    checklist: ["Rinse without rough rubbing.", "Time the soak.", "Drain fully.", "Reduce cooking water if needed.", "Rest and fluff gently."],
    faqs: [["Can Basmati soak overnight?", "Usually that is unnecessary and may make some samples fragile or too soft."], ["Do I soak rice for biryani?", "Most biryani methods benefit from soaking because rice is par-cooked and layered."], ["Should water be hot?", "Room-temperature water gives an easy, controlled starting point."]],
    takeaway: "Soaking is a tool, not a rule carved in stone. Match the time to the rice, drain well and measure the final result.", sourceKeys: ["apeda"]
  },
  {
    slug: "how-to-cook-fluffy-basmati-rice",
    title: "How to Cook Fluffy, Non-Sticky Basmati Rice Every Time",
    description: "A beginner-friendly method for fluffy Basmati rice with separate grains, plus simple fixes for sticky, hard or broken rice.",
    date: "2026-08-26", category: "Rice Knowledge",
    tags: ["Fluffy Basmati Rice", "Non Sticky Rice", "Cook Basmati Rice", "Rice Cooking Guide"], image: "14-fluffy-non-sticky-basmati.webp",
    alt: "Bowl of fluffy white Basmati rice with visibly long separate grains beside a cooking pot",
    intro: ["Fluffy Basmati is the result of several small choices: the right sample, gentle rinsing, suitable water, steady heat and enough resting time. Fixing only one step may not solve sticky rice.", "This absorption method is designed for a normal household pot and can be adjusted after one test."],
    answer: "Rinse, soak for about 20 minutes, drain well, add measured water, cook covered on low heat and rest off the heat before fluffing with a fork.",
    points: ["Remove loose surface starch.", "Use a heavy pot with a tight lid.", "Do not stir during cooking.", "Rest ten minutes before opening."],
    sections: [
      ["Prepare the grain", "Measure the rice, then rinse gently several times until the water is less cloudy. Soak and drain without squeezing. Rough washing creates broken ends that release more starch and make the pot feel sticky."],
      ["Control water and heat", "Use a measured starting ratio from our [Basmati water guide](/blog/basmati-rice-water-ratio). Bring the pot to a gentle boil, cover and immediately lower the heat. Strong boiling throws grains against each other and empties water too quickly."],
      ["Rest before fluffing", "When the cooking time ends, turn off the heat and leave the lid closed. The trapped steam evens out moisture between top and bottom. Fluff from the edge with a fork or flat rice paddle instead of stirring in circles."],
      ["Troubleshooting", "Sticky rice usually points to extra water, too much agitation or a soft new-crop sample. Hard centres need more water, soaking or time. Broken grains may come from rough washing, excessive boiling or an already high broken percentage."],
    ],
    checklist: ["Measure consistently.", "Rinse gently.", "Drain the soak.", "Cook low and covered.", "Rest before fluffing."],
    faqs: [["Should I add oil?", "A small amount is optional; correct water and heat matter more for separation."], ["Why did the rice break?", "Rough handling, strong boiling or a fragile sample are common causes."], ["Can I double the recipe?", "Yes, but heat distribution changes in a larger pot, so test before serving guests."]],
    takeaway: "Separate Basmati grains come from control, not complicated tricks. Keep the method steady and adjust only the water after each test.", sourceKeys: ["apeda"]
  },
  {
    slug: "basmati-rice-meal-prep-guide",
    title: "Basmati Rice for Meal Prep: Cooking, Cooling and Reheating",
    description: "Prepare Basmati rice for weekly meals with simple portioning, cooling, storage and reheating guidance for good texture.",
    date: "2026-08-25", category: "Rice Knowledge",
    tags: ["Basmati Meal Prep", "Rice Meal Prep", "Reheat Rice", "Healthy Rice Meals"], image: "15-basmati-rice-meal-prep.webp",
    alt: "Three glass meal-prep containers filled with Basmati rice and colourful vegetables",
    intro: ["Basmati rice works well for meal prep because its long grains can stay separate when cooked and cooled carefully. The important part is not only the recipe; cooked rice must also move through cooling and refrigeration safely.", "Build each container with vegetables and a protein source for a more balanced meal."],
    answer: "Cook rice slightly firm, portion it into shallow containers, cool promptly, refrigerate covered and reheat until steaming hot. Follow local food-safety guidance for storage time.",
    points: ["Use clean shallow containers.", "Cool cooked rice promptly.", "Keep refrigerated.", "Reheat thoroughly and avoid repeated warming."],
    sections: [
      ["Choose rice that holds well", "Steam Basmati and a well-aged Raw sample can keep separate texture after cooling. Avoid overcooking because reheating adds more moisture and heat. The [fluffy Basmati method](/blog/how-to-cook-fluffy-basmati-rice) gives a good base."],
      ["Cool and pack safely", "Divide rice into shallow portions soon after cooking so heat can escape. Keep containers protected from raw ingredients and unclean surfaces. Refrigerate promptly according to food-safety advice for your location."],
      ["Reheat without drying", "Add a small splash of water, cover loosely and heat until the rice is steaming throughout. Fluff once near the end. A sauce, dal or vegetables can add moisture, but do not use smell alone to judge food safety."],
      ["Build a balanced box", "Pair a sensible rice portion with vegetables, lentils, beans, eggs, fish or lean meat according to your diet. Brown Basmati adds whole-grain variety; read [brown versus white Basmati](/blog/brown-vs-white-basmati-rice) for the trade-offs."],
    ],
    checklist: ["Cook slightly firm.", "Use shallow clean containers.", "Cool and refrigerate promptly.", "Keep portions covered.", "Reheat once until steaming."],
    faqs: [["Can cooked rice be frozen?", "Yes. Freeze promptly in suitable containers and reheat thoroughly after thawing."], ["Why does reheated rice become dry?", "Moisture escapes during storage and heating; covering with a small splash of water helps."], ["Is smell enough to check safety?", "No. Harmful bacteria may not change smell or appearance."]],
    takeaway: "Good rice meal prep combines texture with safe handling. Cool promptly, keep cold and reheat thoroughly.", sourceKeys: ["fda", "who"]
  },
  {
    slug: "brown-vs-white-basmati-rice",
    title: "Brown vs White Basmati Rice: Nutrition, Taste and Cooking",
    description: "Compare brown and white Basmati rice by processing, fibre, texture, cooking time, storage and everyday meal use.",
    date: "2026-08-24", category: "Rice Knowledge",
    tags: ["Brown Basmati Rice", "White Basmati Rice", "Whole Grain Rice", "Basmati Nutrition"], image: "16-brown-vs-white-basmati.webp",
    alt: "Brown and white Basmati rice shown as raw and cooked samples with vegetables and lentils",
    intro: ["Brown Basmati keeps the bran layer, while white Basmati has that layer removed during milling. This changes fibre, texture, cooking time and shelf stability.", "Neither choice turns one meal into a complete diet. The best option also depends on taste, digestion, medical needs and what you eat with the rice."],
    answer: "Choose brown Basmati for a chewier whole-grain option with more fibre. Choose white Basmati for a softer texture, faster cooking and classic presentation. Balance either with vegetables and protein.",
    points: ["Brown rice retains bran and germ.", "White rice cooks faster and softer.", "Brown rice usually needs more water and time.", "Individual nutrition needs differ."],
    sections: [
      ["How processing differs", "Brown Basmati has its husk removed but retains the bran and germ. White Basmati is milled further and polished. That creates a lighter colour and softer bite but removes part of the whole-grain layer."],
      ["Nutrition in context", "Whole grains such as brown rice can contribute fibre to a varied diet. White rice can also be part of balanced meals. Portion, vegetables, pulses, protein, fats and the overall eating pattern matter more than calling one food universally healthy."],
      ["Cooking differences", "Brown Basmati normally needs more water, a longer simmer and a longer rest. Soaking can shorten cooking and support even texture. White Basmati is faster and shows more dramatic fluffy separation."],
      ["Which should you buy?", "Choose brown for whole-grain lines and customers who enjoy a nutty, chewy bite. Choose white for biryani, pulao, quick home meals and classic premium packs. Offer clear instructions so customers get the expected result."],
    ],
    checklist: ["Consider taste and texture.", "Review cooking time.", "Build a balanced meal.", "Check personal dietary advice.", "Store each form correctly."],
    faqs: [["Is brown Basmati always better?", "It retains more whole-grain components, but the best choice depends on the total diet and personal needs."], ["Does brown rice take longer?", "Usually yes, because the bran layer slows water entry."], ["Can people with diabetes eat Basmati?", "Individual advice should come from a qualified health professional; portion and the complete meal matter."]],
    takeaway: "Brown and white Basmati serve different needs. Choose the texture you enjoy and place it within a varied, balanced eating pattern.", sourceKeys: ["who"]
  },
  {
    slug: "how-to-import-basmati-rice-from-india",
    title: "How to Import Basmati Rice from India: Step-by-Step Guide",
    description: "A practical guide for importers covering supplier selection, rice specifications, samples, compliance, shipping and receiving.",
    date: "2026-08-23", category: "Export Guide",
    tags: ["Import Basmati Rice from India", "Indian Rice Exporter", "Bulk Rice Supplier", "Rice Import Guide"], image: "17-import-basmati-rice-from-india.webp",
    alt: "International buyer and Indian rice supplier reviewing samples and shipment plans at an export office",
    intro: ["Importing Basmati rice starts long before a container is booked. The buyer must understand local import rules, define the product, qualify a supplier, approve a sample and agree how quality will be checked.", "Rules vary by destination and change over time. Confirm current requirements with customs, food authorities and an experienced broker in your country."],
    answer: "Define the exact rice and destination rules, verify the exporter, approve a representative sample, sign a detailed contract, review documents and inspect the container before shipment.",
    points: ["Start with destination compliance.", "Write a complete product specification.", "Verify supplier capability.", "Use clear inspection and claim procedures."],
    sections: [
      ["1. Check your import requirements", "Confirm licences, duties, labelling, residue limits, certificates and port procedures before ordering. Requirements can differ for the same rice across the EU, Gulf, North America and Africa. Never rely on an old shipment as proof of current compliance."],
      ["2. Define the product", "State variety, Raw or processed form, crop year, ageing, purity, average length, broken tolerance, moisture, colour, packing and quantity. A useful request for quotation makes competing offers comparable."],
      ["3. Qualify and sample the supplier", "Review registrations, facility, testing ability, capacity and export history. Ask how the exporter handles [traceability](/blog/basmati-rice-traceability-guide) and complaints. Approve both raw and cooked samples."],
      ["4. Contract, produce and inspect", "Connect the approved sample to the contract. Define payment, Incoterm, shipment window, inspection, document list and response to non-conformity. Review our [reliable exporter guide](/blog/buyers-guide-reliable-rice-exporter)."],
      ["5. Ship and receive", "Inspect container cleanliness, dryness, odour and loading. Check seal details and documents. At arrival, record condition before unloading and sample according to the agreed method."],
    ],
    checklist: ["Verify destination rules.", "Issue one clear RFQ.", "Approve supplier and sample.", "Agree testing and documents.", "Inspect loading and arrival."],
    faqs: [["What is the first document I need?", "Your business may need an importer registration or licence; ask the destination authority or broker."], ["Should I buy before testing?", "A commercial order should follow sample approval and a written specification."], ["Which Incoterm is best?", "It depends on your logistics capability and risk allocation; compare total landed cost and responsibilities."]],
    takeaway: "A safe rice import is a chain of clear decisions. Compliance, specification, sample, contract and inspection must support one another.", sourceKeys: ["export", "dgft", "apeda"]
  },
  {
    slug: "rice-export-documents-india",
    title: "Rice Export Documents from India: A Buyer-Friendly Checklist",
    description: "Understand the main commercial, transport, origin, inspection and food-safety documents used in rice exports from India.",
    date: "2026-08-22", category: "Export Guide",
    tags: ["Rice Export Documents", "Basmati Export India", "Bill of Lading", "Rice Import Documentation"], image: "18-rice-export-documents.webp",
    alt: "Organised export desk with shipping papers, certificate folder and sealed rice sample",
    intro: ["A document set tells customs, banks, carriers and buyers what was shipped, where it came from and whether it meets agreed conditions. Missing or inconsistent details can delay clearance even when the rice itself is good.", "The exact list changes by destination, payment method and product. Use this as a planning checklist, not legal advice."],
    answer: "Core Indian export documents include the transport document, commercial invoice with packing details and shipping bill. Rice shipments may also need origin, phytosanitary, fumigation, inspection or test certificates.",
    points: ["Names and quantities must match across documents.", "Product description should match the contract.", "Destination rules determine extra certificates.", "Review drafts before vessel departure."],
    sections: [
      ["Core commercial documents", "The commercial invoice states seller, buyer, product, value and terms. The packing list explains bag count, net and gross weight and marks. DGFT lists the commercial invoice-cum-packing list among mandatory export documents."],
      ["Transport and customs records", "A bill of lading or other transport receipt connects the cargo with the carrier. The shipping bill records the export declaration. Container and seal numbers should be consistent wherever required."],
      ["Product and destination certificates", "Depending on the market, buyers may request certificate of origin, phytosanitary certificate, fumigation certificate, inspection certificate, health certificate, lab report or Basmati-related registration. Confirm current wording and issuer before production."],
      ["Prevent document discrepancies", "Create a master shipment sheet and copy approved details from it. Check spelling, addresses, HS code, variety, form, bag count, weights, dates, vessel, ports and Incoterm. A second-person review before originals are issued saves expensive amendments."],
    ],
    checklist: ["Obtain buyer's final document list.", "Confirm issuing authorities.", "Prepare drafts early.", "Cross-check every quantity and name.", "Send copies before arrival."],
    faqs: [["Is a packing list always separate?", "DGFT notes that a commercial invoice-cum-packing list may be used, while separate documents are also accepted."], ["Do all countries need the same certificates?", "No. Destination and product rules determine additional documents."], ["Who should approve drafts?", "The buyer, exporter, broker and bank should review the documents relevant to their roles."]],
    takeaway: "Good documentation is quality control for information. Build one accurate data set and make every shipment document agree with it.", sourceKeys: ["dgft", "export", "services"]
  },
  {
    slug: "rice-container-loading-packaging-guide",
    title: "Rice Container Loading and Packaging: Export Checklist",
    description: "Protect bulk rice shipments with practical checks for bags, pallets, container condition, moisture, loading and seal records.",
    date: "2026-08-21", category: "Export Guide",
    tags: ["Rice Container Loading", "Rice Export Packaging", "Food Grade Container", "Bulk Rice Shipment"], image: "19-container-loading-rice.webp",
    alt: "Food-grade shipping container being loaded with neatly stacked unbranded rice sacks",
    intro: ["A clean rice lot can still arrive damaged if the bag, container or loading method fails. Moisture, odour, sharp edges, weak stacking and missing records are common preventable risks.", "The loading plan should be agreed while the product and pack are being designed—not after the truck reaches the mill."],
    answer: "Use food-suitable packaging, inspect a clean dry odour-free container, protect bags from walls and sharp points, distribute weight safely, record loading and apply the verified seal.",
    points: ["Match packaging to route and handling.", "Inspect empty container condition.", "Control moisture and condensation risk.", "Keep photo and seal records."],
    sections: [
      ["Choose the right pack", "Common formats include woven polypropylene sacks, laminated bags and smaller retail packs inside cartons. Specify food-contact suitability, liner, stitching or sealing, dimensions, artwork and drop strength. A strong bag that customers cannot handle is still the wrong design."],
      ["Inspect the empty container", "Check roof, walls, floor, doors and seals for holes, dampness, stains, pests, chemical smell and protrusions. The container should be clean, dry and suitable for food cargo. Record its number and condition before loading."],
      ["Plan the stack", "Keep bags away from sharp surfaces and use approved protection where needed. Stack to limit movement and crushing while respecting weight limits. Palletised and floor-loaded plans have different volume, handling and pest-treatment considerations."],
      ["Manage moisture", "Rice and packaging should be within agreed moisture limits. Rapid temperature changes can create condensation during the voyage, so route, season, ventilation strategy and suitable moisture control require professional planning."],
      ["Close the evidence trail", "Count bags, confirm markings, photograph loading stages and record seal application. Send the packing list and loading report promptly. The [mill-to-container guide](/blog/from-rice-mill-to-shipping-container) covers earlier quality steps."],
    ],
    checklist: ["Approve bag specification.", "Inspect container inside and outside.", "Confirm lot and bag count.", "Load to the agreed pattern.", "Record seal and dispatch."],
    faqs: [["Are pallets always better?", "They speed handling but reduce usable volume and may require treatment; compare the full route."], ["Can rice bags touch container walls?", "Use a professionally designed loading plan that manages condensation and abrasion risks."], ["What photos are useful?", "Empty condition, container number, loading stages, final stack, closed doors and seal."]],
    takeaway: "Packaging and loading are part of the product. A documented, clean and dry load protects both rice quality and the buyer relationship.", sourceKeys: ["export", "fda"]
  },
  {
    slug: "private-label-rice-brand-guide",
    title: "How to Start a Private-Label Rice Brand: Complete Guide",
    description: "Plan a private-label rice brand from market research and grain selection to packaging, compliance, production and launch.",
    date: "2026-08-20", category: "Export Guide",
    tags: ["Private Label Rice", "Rice Brand", "Custom Rice Packaging", "Basmati Rice Supplier"], image: "20-private-label-rice-packaging.webp",
    alt: "Private-label rice packaging development table with blank pouches, sacks and grain samples",
    intro: ["A private-label rice brand is more than artwork on a bag. The product, customer promise, pack size, legal label, supply plan and quality standard must work together.", "Starting with a clear market brief prevents costly packaging from being built around the wrong rice."],
    answer: "Define the customer and price first, choose and test the rice, confirm destination label rules, develop practical packaging, run a pilot and scale only after quality and demand are proven.",
    points: ["Positioning comes before design.", "The grain must support the promise.", "Labels need legal review.", "Pilot packs reveal real handling problems."],
    sections: [
      ["Define the market promise", "Decide whether the brand leads with extra-long luxury, everyday aroma, restaurant performance, whole-grain nutrition or value. Write one sentence describing the customer and use occasion. This makes variety and pack decisions easier."],
      ["Choose and lock the rice", "Test varieties and processing forms against the intended dish. Build a specification for purity, grain length, broken percentage, moisture, crop year, age and compliance. Retain an approved sample."],
      ["Design useful packaging", "Choose sizes customers can afford and retailers can display. Consider barrier, sealing, carrying, stacking and shelf impact. Keep required information readable. Use our [private-labelling service](/private-labeling) overview when preparing the brief."],
      ["Check compliance", "Ingredient name, net quantity, origin, nutrition, dates, lot identification, importer details and language requirements vary by market. Have current artwork checked by a qualified local regulatory specialist before printing."],
      ["Pilot, learn and scale", "Produce a small commercial run where possible. Check filling weight, seals, print rub, carton strength, shelf appearance and consumer cooking feedback. Correct the system before committing to a much larger order."],
    ],
    checklist: ["Define target shopper.", "Approve rice and specification.", "Verify label rules.", "Test pack materials.", "Run and review a pilot."],
    faqs: [["Do I need a large first order?", "It depends on pack printing and production setup; discuss realistic MOQs early."], ["Can one rice serve every pack?", "Possibly, but different price points may require clearly separated specifications."], ["Who owns the artwork?", "Ownership and approved files should be clear in the supplier agreement."]],
    takeaway: "The strongest private labels connect a truthful customer promise to repeatable rice quality and practical compliant packaging.", sourceKeys: ["fssai", "services"]
  },
  {
    slug: "minimum-order-quantity-rice-import",
    title: "Rice Minimum Order Quantity: MOQ Guide for Importers",
    description: "Understand rice MOQ, container quantities, custom packaging limits, samples and how to plan a practical first import order.",
    date: "2026-08-19", category: "Export Guide",
    tags: ["Rice MOQ", "Minimum Order Quantity", "Bulk Rice Import", "Rice Supplier India"], image: "21-rice-moq-guide.webp",
    alt: "Sample carton, rice bags and full pallet arranged to represent different order quantities",
    intro: ["MOQ means the smallest order a supplier can produce economically under a particular specification. It is not one permanent number. Rice type, pack size, printed material, production changeover and container efficiency all influence it.", "A smart first order balances learning with shipping economics instead of chasing the smallest possible quantity."],
    answer: "Ask for MOQ at three levels: product, each pack size and custom-printed packaging. Then compare trial order, mixed-container and full-container options by landed cost and operational risk.",
    points: ["Custom bags may have their own printing MOQ.", "Many SKUs divide production efficiency.", "Small orders can carry higher unit freight.", "A pilot may still save money by preventing a bad large order."],
    sections: [
      ["Why suppliers set MOQs", "Cleaning, grading, testing, packing-line setup and artwork changeovers carry fixed costs. A short run spreads those costs across fewer bags. Suppliers also need enough volume to keep one lot consistent."],
      ["Product MOQ versus packaging MOQ", "A mill may accept a rice quantity but the packaging converter may require more printed bags than the first fill. Ask who owns unused packaging, where it is stored and how long it remains usable."],
      ["Can you mix products?", "A mixed container may combine varieties or pack sizes, but each SKU still needs a practical batch. Mixing also adds loading, document and traceability complexity. Confirm whether the destination permits all products under one shipment."],
      ["Plan a sensible first order", "Approve samples, choose the fewest essential SKUs and model the [landed cost](/blog/basmati-rice-landed-cost-guide). A focused pilot gives clearer sales data than many tiny products launched together."],
    ],
    checklist: ["List exact SKUs.", "Ask product and print MOQs.", "Check mixed-load feasibility.", "Model freight per unit.", "Agree treatment of leftover packs."],
    faqs: [["Is one container always the MOQ?", "Not always. It depends on product, supplier and packaging, although full containers often ship more efficiently."], ["Can I start with plain bags?", "Some suppliers offer standard or sticker-labelled options, subject to destination rules."], ["Are samples part of MOQ?", "Samples are normally handled separately from commercial production."]],
    takeaway: "The best MOQ is not simply the smallest. It is the lowest practical quantity that protects quality, compliance and a sensible landed cost.", sourceKeys: ["export"]
  },
  {
    slug: "basmati-rice-landed-cost-guide",
    title: "Basmati Rice Landed Cost: Simple Calculation for Buyers",
    description: "Calculate the real landed cost of imported Basmati rice using product, packing, freight, insurance, duty and local charges.",
    date: "2026-08-18", category: "Export Guide",
    tags: ["Basmati Rice Landed Cost", "Rice Import Cost", "FOB CIF Rice", "Rice Buyer Guide"], image: "22-basmati-landed-cost.webp",
    alt: "Rice sample, calculator, miniature container and shipping papers on a procurement desk",
    intro: ["A low price per tonne can become an expensive product after freight, duty, port charges, inland delivery and packaging loss are added. Landed cost puts every offer on the same destination basis.", "Build the calculation per saleable kilogram or pack, not only per container."],
    answer: "Landed cost equals product and packing plus origin charges, freight, insurance, duty, taxes and destination logistics, adjusted for saleable quantity and expected loss.",
    points: ["Compare quotations on the same Incoterm.", "Separate recoverable taxes where appropriate.", "Use current freight and exchange rates.", "Include finance, inspection and loss."],
    sections: [
      ["Start with an aligned product cost", "Ensure every quote covers the same variety, form, grade, age, bag and inspection. Otherwise the spreadsheet compares different products. Note whether the price is ex-works, FOB, CFR or CIF and exactly what is included."],
      ["Add international movement", "Include origin handling not covered by the quote, ocean or air freight, insurance and banking charges. Freight can change quickly, so record the quotation date and validity."],
      ["Add destination costs", "Include duty, non-recoverable taxes, customs and broker fees, port handling, demurrage risk, inspection, warehousing and final delivery. Ask a local broker for current treatment; tariff and food rules vary by market."],
      ["Convert to saleable unit cost", "Divide by the kilograms or packs expected to be saleable after normal loss. Add local labelling or repacking. Then compare the result with target wholesale and retail margins. Review the [import process](/blog/how-to-import-basmati-rice-from-india) before finalising assumptions."],
    ],
    checklist: ["Align specification and Incoterm.", "Date all freight and currency inputs.", "Add destination charges.", "Allow realistic loss.", "Calculate per saleable unit."],
    faqs: [["Is CIF the landed cost?", "No. CIF normally excludes many destination costs such as duty, clearance and delivery."], ["Should duty be calculated on FOB or CIF?", "Customs valuation rules vary; confirm with the destination authority or broker."], ["Why compare per pack?", "Retail pack size, loss and local handling determine the actual unit margin."]],
    takeaway: "A useful landed-cost model makes hidden assumptions visible. Update it before every order and compare only equivalent products.", sourceKeys: ["dgft", "export"]
  },
  {
    slug: "how-to-evaluate-basmati-rice-sample",
    title: "How to Evaluate a Basmati Rice Sample Before Buying",
    description: "Use a repeatable raw and cooked sample test for grain length, aroma, moisture, defects, texture, separation and yield.",
    date: "2026-08-17", category: "Export Guide",
    tags: ["Basmati Rice Sample", "Rice Quality Test", "Rice Buyer Checklist", "Pre Shipment Sample"], image: "23-rice-sample-evaluation.webp",
    alt: "Professional Basmati sample evaluation with cooked bowls, raw grain tray and caliper",
    intro: ["A polished handful can hide the variation inside a shipment. A useful sample must represent the lot, and the test must be repeatable enough that two people can discuss the same result.", "Evaluate both raw appearance and cooked performance. Customers eat cooked rice, not a specification sheet."],
    answer: "Confirm sample identity, inspect a mixed portion, measure several grains, record defects and moisture, then cook equal weights under controlled conditions and retain the approved reference.",
    points: ["Representative sampling comes first.", "Measure averages, not hero grains.", "Blind cooking reduces bias.", "Keep signed reference samples sealed."],
    sections: [
      ["Check sample identity", "Label supplier, variety, processing form, crop year, lot, date and sampling method. A beautiful courier sample has little value if it cannot be linked to production and shipment."],
      ["Inspect the raw rice", "Spread rice on a dark tray. Look for broken, chalky, damaged, immature, discoloured and foreign grains. Smell for clean characteristic aroma and any damp or chemical odour. Measure multiple kernels and moisture."],
      ["Run a controlled cook", "Use equal dry weight, rinse, soak, water, pot, heat and rest. Code the bowls so tasters do not know the supplier. Score aroma, cooked length, separation, texture, breakage and yield."],
      ["Approve with tolerances", "A reference sample cannot describe every acceptable variation. Add numeric tolerances and agreed test methods. Link the approval to a [certificate of analysis](/blog/rice-certificate-of-analysis-guide) and pre-shipment inspection plan."],
    ],
    checklist: ["Verify source and lot.", "Mix before taking test portion.", "Measure raw defects.", "Cook blind and equal.", "Seal and sign references."],
    faqs: [["How large should a sample be?", "It must be representative and sufficient for repeat tests; agree the method with the supplier or inspector."], ["Can I approve from a photo?", "Photos help screen appearance but cannot prove aroma, moisture, texture or purity."], ["Why retain two samples?", "Buyer and supplier can keep matched references if a later dispute occurs."]],
    takeaway: "A sample protects the order only when it is representative, measurable, cooked consistently and tied to the final lot.", sourceKeys: ["bedf", "fssai"]
  },
  {
    slug: "pesticide-residue-compliant-basmati-rice",
    title: "Pesticide-Residue Compliant Basmati Rice: Buyer Guide",
    description: "Understand MRLs, destination-specific testing, farm controls, laboratory scope and shipment planning for compliant Basmati rice.",
    date: "2026-08-16", category: "Export Guide",
    tags: ["Pesticide Residue Free Rice", "EU Compliant Basmati", "Rice MRL", "Basmati Testing"], image: "24-pesticide-residue-testing.webp",
    alt: "Sealed Basmati samples and laboratory vials prepared for pesticide-residue analysis",
    intro: ["Residue compliance means a tested lot meets the maximum residue limits of its destination market. It should not be confused with a vague promise that no pesticide has ever been used.", "MRLs and testing expectations can change. Confirm the current destination list before farming, procurement and production—not after the container is packed."],
    answer: "Define the destination MRL list, build farm and supplier controls around it, sample the correct lot through a competent laboratory and review the full report before shipment.",
    points: ["MRLs are destination-specific.", "A broad laboratory scope is essential.", "Traceability helps manage risk upstream.", "One test does not replace a control programme."],
    sections: [
      ["Start with the destination", "The same residue result may comply in one market and fail in another because legal limits differ. Ask the importer for the current official requirements and any retailer limits that are stricter than law."],
      ["Control before milling", "Good agricultural practices, approved input lists, farmer records, field monitoring and harvest intervals reduce risk. Mixing unverified paddy can compromise an otherwise compliant lot."],
      ["Design the test correctly", "Use a competent laboratory whose accredited scope covers the required rice matrix and analytes. Agree sampling, chain of custody, detection limits and how results will be interpreted. APEDA provides rice MRL resources and recognised-organisation information."],
      ["Use precise claims", "Say destination-compliant only when the tested lot and current limits support it. Terms such as residue-free, pesticide-free and organic can have specific legal or certification meanings. Connect test results with [Basmati traceability](/blog/basmati-rice-traceability-guide)."],
    ],
    checklist: ["Name destination and customer standard.", "Freeze current analyte list.", "Verify laboratory scope.", "Sample the shipment lot.", "Review report before release."],
    faqs: [["Does non-detect mean no pesticide was used?", "No. It means the laboratory did not detect that analyte above its stated reporting capability."], ["Is one country's MRL valid everywhere?", "No. Limits and analyte lists differ."], ["Is organic the same as residue-compliant?", "No. Organic is a production and certification system; residue compliance is measured against legal or customer limits."]],
    takeaway: "Residue compliance is planned from field to shipment. Precise requirements, traceability and competent testing create defensible results.", sourceKeys: ["services", "bedf", "export"]
  },
  {
    slug: "rice-certificate-of-analysis-guide",
    title: "Rice Certificate of Analysis: What Buyers Should Check",
    description: "Read a rice COA with confidence by checking lot identity, methods, grain quality, moisture, residues and laboratory details.",
    date: "2026-08-15", category: "Export Guide",
    tags: ["Rice Certificate of Analysis", "Rice COA", "Basmati Quality Parameters", "Rice Lab Test"], image: "25-rice-certificate-of-analysis.webp",
    alt: "Rice certificate review beside a sample tray, moisture meter, weighing scale and magnifier",
    intro: ["A certificate of analysis, or COA, summarises test results for a sample. It is useful only when the document clearly identifies the product, lot, sample date, methods and responsible laboratory.", "A long table of numbers can still be weak evidence if the sample was not representative."],
    answer: "Check that the COA matches the shipment lot, uses agreed methods and reports every contractual parameter with units, limits and clear pass or fail interpretation.",
    points: ["Lot identity is essential.", "Results need units and methods.", "Laboratory scope must match the test.", "COA and contract should use the same limits."],
    sections: [
      ["Identity and chain of custody", "Look for product name, variety or form, lot or batch, sampling date, report date and sample seal. Note whether the mill, buyer, inspector or laboratory took the sample. Independent sampling can add confidence when risk is high."],
      ["Physical quality results", "Common items include moisture, broken grains, average length, foreign matter, damaged or discoloured grains and other varieties. Results should match the definitions in the contract; words such as broken can be measured differently."],
      ["Chemical and residue results", "Destination programmes may require pesticide residues, heavy metals, mycotoxins or other tests. Confirm matrix, method, reporting limit and accreditation scope. Do not treat a short screen as a complete destination panel."],
      ["Resolve gaps before loading", "Compare the COA with the approved [rice sample](/blog/how-to-evaluate-basmati-rice-sample), contract and packing list. Ask about missing items or ambiguous results. If a retest is needed, agree how a new sample will be drawn."],
    ],
    checklist: ["Match product and lot.", "Check sampler and seal.", "Review methods and units.", "Compare every contract limit.", "Confirm laboratory competence."],
    faqs: [["Is a supplier COA enough?", "It may be suitable for routine control, while higher-risk programmes may require independent sampling or testing."], ["What does LOQ mean?", "The limit of quantification is the lowest level the method reports with defined quantitative performance."], ["Can a COA prove the whole container?", "Only to the extent that sampling represented the lot and chain of custody was controlled."]],
    takeaway: "A trustworthy COA connects one representative sample, one identified lot, clear methods and the exact limits in the purchase agreement.", sourceKeys: ["bedf", "services"]
  },
  {
    slug: "basmati-rice-traceability-guide",
    title: "Basmati Rice Traceability: From Farm and Paddy to Export Bag",
    description: "Learn how Basmati traceability connects farmers, paddy lots, milling, tests, packing and shipments for stronger quality control.",
    date: "2026-08-14", category: "Export Guide",
    tags: ["Basmati Rice Traceability", "Basmati.Net", "Rice Supply Chain", "Varietal Purity"], image: "26-basmati-traceability.webp",
    alt: "Paddy, sealed rice samples, mill sample and digital record arranged as a traceability chain",
    intro: ["Traceability answers a simple question: where did this bag come from, and what happened to the rice before it reached the buyer? A reliable system links records instead of storing unrelated certificates.", "For Basmati, traceability also supports authenticity, residue management and faster investigation when a complaint occurs."],
    answer: "Assign clear identities to farms or paddy sources, intake lots, processing batches, laboratory samples, packing runs and shipment units, then preserve the links between them.",
    points: ["One lot code should lead backward and forward.", "Mass balance helps detect impossible records.", "Samples and reports need the same identity.", "Mock recalls test whether the system works."],
    sections: [
      ["Farm and paddy records", "Record grower or source, location, notified variety, crop year, agricultural inputs and harvest. At mill intake, connect weight, date, vehicle, quality checks and storage bin to a unique paddy lot."],
      ["Processing records", "Cleaning, parboiling, drying, milling, grading and sorting can combine or divide material. Batch records should show every movement and rework. Mass balance compares input, output and normal loss."],
      ["Testing and packing", "Laboratory sample IDs should point to the production lot. Packing records connect finished product to bag material, line, date and quantity. This makes a [COA](/blog/rice-certificate-of-analysis-guide) useful beyond the page itself."],
      ["Shipment and recall readiness", "Container, seal, invoice and packing list should connect back to finished lots. APEDA's Basmati.Net provides a sector traceability platform for the Basmati value chain. Businesses should also test their internal system with mock trace exercises."],
    ],
    checklist: ["Use unique lot codes.", "Link every transformation.", "Reconcile quantities.", "Attach tests to lots.", "Run backward and forward trace tests."],
    faqs: [["Is a QR code traceability?", "It is only an access tool; the underlying records and links create traceability."], ["What is mass balance?", "It checks whether recorded outputs and losses reasonably match inputs."], ["Why trace forward?", "Forward trace shows every customer or shipment that received an affected lot."]],
    takeaway: "Good traceability is a connected evidence chain. It improves daily control and shortens the path from a problem to a precise response.", sourceKeys: ["net", "bedf"]
  },
  {
    slug: "rice-storage-shelf-life-guide",
    title: "Rice Storage and Shelf Life: Guide for Homes and Warehouses",
    description: "Keep dry rice in good condition with practical guidance on moisture, temperature, pests, packaging, rotation and warning signs.",
    date: "2026-08-13", category: "Rice Knowledge",
    tags: ["Rice Storage", "Rice Shelf Life", "Basmati Rice Storage", "Food Warehouse"], image: "27-rice-storage-shelf-life.webp",
    alt: "Clean dry rice warehouse with sealed sacks on pallets and a humidity monitor",
    intro: ["Dry rice lasts well only when it stays dry, clean and protected. Heat, humidity, insects, odours and damaged packaging can reduce quality long before a printed date.", "Homes and warehouses use the same basic principles at different scales: protect, monitor and rotate."],
    answer: "Store rice sealed in a cool, dry, clean place away from sunlight, walls, floors, chemicals and strong odours. Inspect regularly and use first-in, first-out rotation.",
    points: ["Moisture is the main storage enemy.", "Rice can absorb nearby odours.", "Packaging condition matters.", "Printed dates do not replace inspection."],
    sections: [
      ["Control the environment", "Keep storage dry and ventilated without exposing product to rain or condensation. Use pallets and sensible clearance for cleaning and inspection. Monitor temperature and humidity trends rather than one reading."],
      ["Protect the package", "Close household containers tightly. In warehouses, inspect seams, liners, stretch wrap and pallet condition. Remove damaged packs to a controlled area and investigate the cause before repacking."],
      ["Prevent pests and contamination", "Use cleaning schedules, building maintenance, traps and a professional pest-management programme. Keep rice away from chemicals, fuels and aromatic products. Never apply treatments outside legal and label requirements."],
      ["Rotate and recognise problems", "Use first-in, first-out or first-expiry-first-out rules. Check for insects, webbing, moisture, clumps, mould, unusual colour or odour. If safety is uncertain, isolate the lot and obtain qualified advice rather than tasting it."],
    ],
    checklist: ["Keep cool and dry.", "Seal and elevate packs.", "Inspect for pests and damage.", "Record lot and dates.", "Rotate stock consistently."],
    faqs: [["Does dry rice expire exactly on the date?", "Date labels often relate to expected quality, while actual suitability depends on product, packaging and storage rules."], ["Can rice absorb smells?", "Yes, so keep it away from chemicals and strongly scented goods."], ["Should warehouse bags sit on the floor?", "Pallets and clearance generally support cleaning, airflow and inspection."]],
    takeaway: "Shelf life is managed every day. A sealed pack, dry environment, clean store and disciplined rotation protect aroma and cooking quality.", sourceKeys: ["fda", "apeda"]
  },
  {
    slug: "basmati-rice-market-trends-2026",
    title: "Basmati Rice Market Trends 2026: What Buyers Should Watch",
    description: "A clear 2026 Basmati market outlook covering export demand, premium varieties, packaged rice, compliance and supply planning.",
    date: "2026-08-12", category: "Industry Insights",
    tags: ["Basmati Rice Market 2026", "Rice Export Trends", "Indian Basmati Export", "Bulk Rice Buyers"], image: "28-basmati-market-trends-2026.webp",
    alt: "Basmati samples, globe and shipping containers arranged for a 2026 rice market analysis",
    intro: ["Basmati demand remains global, with the Middle East at the centre and meaningful markets across North America, Europe and Asia. APEDA reports that India exported about 6.52 million tonnes in 2025–26, valued at roughly US$5.67 billion.", "Numbers can change as official data is revised. Buyers should use the trend to plan, then request current quotations and compliance advice."],
    answer: "In 2026, buyers should watch strong Middle East demand, growth in packaged premium rice, residue and traceability expectations, freight volatility and the need for more application-specific products.",
    points: ["Demand is broad but market preferences differ.", "Specification-led buying is becoming more important.", "Compliance must be planned by destination.", "Freight and currency can move landed cost quickly."],
    sections: [
      ["Large and resilient export demand", "APEDA's 2025–26 data shows Saudi Arabia, Iran, Iraq, the UAE, Yemen and the USA among the leading destinations. This spread gives exporters opportunity, while conflict, payment and route risk can still affect individual markets."],
      ["Premium plus value segmentation", "Extra-long varieties support flagship packs, while value-premium and non-Basmati options serve daily meals and catering. Winning suppliers help buyers choose by dish, consumer and price point rather than sending one generic offer."],
      ["Compliance and traceability", "Retailers and regulators increasingly expect clear residue plans, test evidence and traceable lots. Buyers should set destination requirements before paddy or finished-rice procurement. Read our [residue-compliance guide](/blog/pesticide-residue-compliant-basmati-rice)."],
      ["Packaging and private label", "Urban consumers continue moving toward packaged rice where consistency, convenience and trust are visible. Smaller packs, clearer cooking instructions and strong private-label execution can help importers differentiate."],
      ["How buyers can respond", "Use quarterly demand plans, approve alternative specifications, watch freight and currency, and maintain more than one qualified route or supplier where practical. Avoid reacting to headlines without checking current official and commercial data."],
    ],
    checklist: ["Review market and customer data.", "Update demand forecast.", "Lock destination compliance.", "Track freight and currency.", "Qualify realistic alternatives."],
    faqs: [["Is Basmati demand growing?", "Official 2025–26 export volume was substantial; future growth will vary by destination and conditions."], ["Which market is largest?", "APEDA lists Saudi Arabia as the leading destination by share for 2025–26."], ["Will prices rise?", "Price depends on crop supply, demand, age, processing, currency and logistics; request current quotes."]],
    takeaway: "The 2026 opportunity is not only more volume. It is better matching of rice, compliance, packaging and service to each market's real use.", sourceKeys: ["apeda", "export", "services"]
  },
  {
    slug: "top-markets-importing-indian-basmati-rice",
    title: "Top Markets Importing Indian Basmati Rice in 2025–26",
    description: "See the leading destinations for Indian Basmati rice and understand how product, packaging and compliance needs differ by market.",
    date: "2026-08-11", category: "Industry Insights",
    tags: ["Basmati Import Markets", "Indian Basmati Export", "Saudi Arabia Rice", "UAE Rice Import"], image: "29-top-basmati-import-markets.webp",
    alt: "Rice sample, globe and global serving bowls overlooking an international container port",
    intro: ["Indian Basmati reaches kitchens and retailers around the world, but demand is concentrated in several major destinations. APEDA's 2025–26 shares place Saudi Arabia first, followed by Iran, Iraq, the UAE, Yemen and the USA.", "A destination's size does not mean every buyer wants the same grain or pack. Use market data as a direction, then research the customer segment."],
    answer: "Saudi Arabia, Iran, Iraq, the UAE, Yemen and the USA were the leading destinations reported by APEDA for 2025–26, together representing a large share of Indian Basmati exports.",
    points: ["Middle Eastern markets lead demand.", "Food service and retail need different specifications.", "Labels and residue rules vary.", "Local partners provide essential market knowledge."],
    sections: [
      ["Saudi Arabia and Gulf markets", "Saudi Arabia and the UAE combine strong Basmati familiarity with retail, hospitality and catering demand. Grain length, aroma, Sella preference, pack sizes and Arabic labelling should be validated with the importer."],
      ["Iran, Iraq and Yemen", "These markets contribute major volume, while payment, routes and local conditions require careful commercial planning. Product preferences can differ by city, channel and dish. Do not reduce a whole country to one specification."],
      ["United States and other premium markets", "The USA supports ethnic retail, restaurants and broader premium-rice interest. Compliance, nutrition panels, importer records and retail pack execution are important. Europe and other regulated markets may require detailed residue planning."],
      ["Turn a market list into a plan", "Choose one country and one channel, interview importers and retailers, map competitors, and test two or three rice specifications. Use the [private-label guide](/blog/private-label-rice-brand-guide) if your strategy needs a distinctive pack."],
    ],
    checklist: ["Select country and channel.", "Confirm current import rules.", "Research preferred rice form.", "Test pack sizes and price points.", "Model landed margin."],
    faqs: [["Which country imports the most Indian Basmati?", "APEDA reports Saudi Arabia as the largest destination by share in 2025–26."], ["Is one Gulf pack suitable everywhere?", "Not automatically; language, labels, channel and consumer preferences differ."], ["Are export rankings permanent?", "No. Demand, policy, payment and logistics can change each year."]],
    takeaway: "Market data shows where demand exists. Customer research shows what to sell there. Build the product around both.", sourceKeys: ["apeda", "export"]
  },
  {
    slug: "sustainable-basmati-rice-sourcing",
    title: "Sustainable Basmati Rice Sourcing: Questions Buyers Should Ask",
    description: "Move beyond vague green claims with practical questions about water, inputs, soil, energy, workers, traceability and evidence.",
    date: "2026-08-10", category: "Industry Insights",
    tags: ["Sustainable Basmati Rice", "Responsible Rice Sourcing", "Water Efficient Rice", "Rice Supply Chain"], image: "30-sustainable-basmati-sourcing.webp",
    alt: "Farmer hands inspecting rice panicles beside a water-efficient paddy irrigation channel",
    intro: ["Sustainable sourcing is not one logo or one claim. It asks how rice is grown, processed, packed and transported, and whether progress is measured with evidence.", "Buyers can begin with a few material topics: water, crop inputs, soil, energy, emissions, worker conditions, packaging and traceability."],
    answer: "Set clear priorities, ask for measurable farm and mill evidence, verify claims through records or credible programmes, and improve over time instead of demanding unsupported perfection.",
    points: ["Focus on material impacts.", "Use baselines and measurable indicators.", "Traceability supports credible claims.", "Avoid environmental language that evidence cannot prove."],
    sections: [
      ["Water and farm practices", "Rice is water-sensitive, so irrigation method, timing and local conditions matter. Ask how farms monitor water and follow good agricultural practices. ICAR notes that early-maturing Pusa 1509 can save irrigations compared with longer-duration 1121 under its described conditions; do not generalise one figure to every farm."],
      ["Inputs, soil and residues", "Review approved crop-protection plans, farmer training, records and residue results. Responsible input use protects compliance and can reduce unnecessary application. Soil health practices should fit the local agronomy rather than a marketing checklist."],
      ["Mill energy, loss and by-products", "Measure electricity and fuel per tonne, drying efficiency, broken reduction and use of husk or bran. Preventing food loss often improves both environmental and commercial performance. Efficient [sorting and grading](/blog/how-optical-sorting-works) also protects usable output."],
      ["People and purchasing practices", "Ask about workplace safety, lawful employment, grievance systems and supplier payment practices. Unrealistic prices and last-minute changes can undermine responsible production even when a buyer requests strong standards."],
      ["Make credible claims", "Define the boundary and period behind each statement. Keep records and explain whether data is measured, estimated or certified. Link claims to [traceable lots](/blog/basmati-rice-traceability-guide) and avoid broad words such as green or eco-friendly without proof."],
    ],
    checklist: ["Choose material priorities.", "Set a baseline.", "Request traceable evidence.", "Verify high-risk claims.", "Track improvement each season."],
    faqs: [["Is one variety automatically sustainable?", "No. Variety can influence farm performance, but location and management also matter."], ["Do buyers need certification?", "Certification can help when credible and relevant, but it does not replace supply-chain understanding."], ["Where should a small buyer start?", "Start with traceability, water, inputs and mill energy using a few measurable questions."]],
    takeaway: "Responsible sourcing becomes useful when broad ambition turns into measurable farm, mill and supply-chain decisions that buyers can explain honestly.", sourceKeys: ["icar", "net", "bedf"]
  },
];

function renderArticle(a, index) {
  const relatedIndex = index % articles.length + 1;
  const related = articles[relatedIndex - 1];
  const secondaryImage = `${imageDir}/${related.image}`;
  const sections = a.sections.map(([heading, body]) => `## ${heading}\n\n${body}`).join("\n\n");
  const faq = a.faqs.map(([question, answer]) => `### ${question}\n\n${answer}`).join("\n\n");
  const refs = a.sourceKeys.map((key) => `- [${sources[key][0]}](${sources[key][1]})`).join("\n");
  return `---
title: "${a.title}"
description: "${a.description}"
pubDate: ${a.date}
heroImage: "${imageDir}/${a.image}"
heroImageAlt: "${a.alt}"
author: "Surya Foods Editorial"
tags: ${JSON.stringify(a.tags)}
category: "${a.category}"
---

${a.intro.join("\n\n")}

<div class="not-prose my-8 rounded-2xl border border-gold-200 bg-gold-50 p-6 shadow-sm">
  <p class="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Quick answer</p>
  <p class="m-0 text-base leading-7 text-slate-700"><strong>${a.answer}</strong></p>
</div>

## Key points at a glance

${a.points.map((point) => `- ${point}`).join("\n")}

<figure class="my-8">
  <img src="${secondaryImage}" alt="${related.alt}" width="1536" height="1024" loading="lazy" decoding="async" />
  <figcaption class="mt-3 text-center text-sm text-slate-500">Related visual: ${related.title}. Editorial imagery; approve commercial rice against an actual representative sample.</figcaption>
</figure>

${sections}

## A simple decision checklist

${a.checklist.map((item, i) => `${i + 1}. ${item}`).join("\n")}

## Frequently asked questions

${faq}

## Final takeaway

${a.takeaway}

For a quotation, sample or specification discussion, review [Surya Foods products](/products), our [quality-control process](/quality-control), and [global export support](/global-exports), then [contact our team](/contact).

## Sources and further reading

${refs}
`;
}

for (const [index, article] of articles.entries()) {
  fs.writeFileSync(path.join(outputDir, `${article.slug}.md`), renderArticle(article, index));
}

console.log(`Generated ${articles.length} SEO articles in ${outputDir}`);
