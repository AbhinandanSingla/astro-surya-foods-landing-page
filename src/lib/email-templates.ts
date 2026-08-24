// Professional HTML email templates for Surya Foods

const LOGO_URL = "https://suryafoodspatran.com/images/logo/Logo.png";
const SITE_URL = "https://suryafoodspatran.com";
const BRAND_COLOR = "#1a4024"; // forest-800
const GOLD_COLOR = "#d4a853"; // gold-400
const EMAIL_ADDRESS = "contact@suryafoodspatran.com";
const PHONE = "+91-9779204835";
const ADDRESS = "Village Banwala, Patran Road, Nial Bye Pass Patran, Patiala, Punjab 147105";

interface LeadData {
  fullName: string;
  companyName: string;
  country: string;
  email: string;
  phone: string;
  message?: string;
  volume?: string;
  partnerType?: string;
  source?: string;
  formType?: string;
}

export function buildAdminNotificationEmail(lead: LeadData): { subject: string; html: string; text: string } {
  const now = new Date();
  const timestamp = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "long" });

  const subject = `🔔 New Lead: ${lead.fullName} — ${lead.companyName} (${lead.country})`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;">
    <!-- Header -->
    <div style="background:${BRAND_COLOR};padding:24px 32px;text-align:center;">
      <img src="${LOGO_URL}" alt="Surya Foods" style="height:48px;margin-bottom:8px;" />
      <h1 style="color:${GOLD_COLOR};font-size:20px;margin:0;font-weight:700;">New Lead Received</h1>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <p style="color:#374151;font-size:15px;margin:0 0 24px;">A new inquiry has been submitted on <strong>${SITE_URL}</strong>.</p>

      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr style="border-bottom:1px solid #e5e7eb;">
          <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;width:40%;vertical-align:top;">Full Name</td>
          <td style="padding:12px 16px;font-size:14px;color:#111827;">${lead.fullName}</td>
        </tr>
        <tr style="background:#f9fafb;border-bottom:1px solid #e5e7eb;">
          <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;">Company</td>
          <td style="padding:12px 16px;font-size:14px;color:#111827;">${lead.companyName}</td>
        </tr>
        <tr style="border-bottom:1px solid #e5e7eb;">
          <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;">Country</td>
          <td style="padding:12px 16px;font-size:14px;color:#111827;">${lead.country}</td>
        </tr>
        <tr style="background:#f9fafb;border-bottom:1px solid #e5e7eb;">
          <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;">Email</td>
          <td style="padding:12px 16px;font-size:14px;color:#111827;"><a href="mailto:${lead.email}" style="color:${BRAND_COLOR};">${lead.email}</a></td>
        </tr>
        <tr style="border-bottom:1px solid #e5e7eb;">
          <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;">Phone</td>
          <td style="padding:12px 16px;font-size:14px;color:#111827;"><a href="tel:${lead.phone}" style="color:${BRAND_COLOR};">${lead.phone}</a></td>
        </tr>
        ${lead.volume ? `<tr style="background:#f9fafb;border-bottom:1px solid #e5e7eb;">
          <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;">Annual Volume</td>
          <td style="padding:12px 16px;font-size:14px;color:#111827;">${lead.volume}</td>
        </tr>` : ""}
        ${lead.partnerType ? `<tr style="border-bottom:1px solid #e5e7eb;">
          <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;">Partnership Type</td>
          <td style="padding:12px 16px;font-size:14px;color:#111827;">${lead.partnerType}</td>
        </tr>` : ""}
        ${lead.message ? `<tr style="border-bottom:1px solid #e5e7eb;">
          <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;">Message</td>
          <td style="padding:12px 16px;font-size:14px;color:#111827;">${lead.message}</td>
        </tr>` : ""}
        <tr style="background:#f9fafb;border-bottom:1px solid #e5e7eb;">
          <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;">Source Page</td>
          <td style="padding:12px 16px;font-size:14px;color:#111827;">${lead.source || "Direct"}</td>
        </tr>
        <tr style="border-bottom:1px solid #e5e7eb;">
          <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;">Form Type</td>
          <td style="padding:12px 16px;font-size:14px;color:#111827;">${lead.formType || "Contact"}</td>
        </tr>
      </table>

      <div style="background:#fef3c7;border-left:4px solid ${GOLD_COLOR};padding:12px 16px;border-radius:4px;margin-bottom:16px;">
        <p style="margin:0;font-size:13px;color:#92400e;"><strong>Submitted at:</strong> ${timestamp} (IST)</p>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f9fafb;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
      <p style="color:#9ca3af;font-size:11px;margin:0;">This is an automated notification from Surya Foods Lead System.</p>
    </div>
  </div>
</body>
</html>`;

  const text = `New Lead Received\n\nName: ${lead.fullName}\nCompany: ${lead.companyName}\nCountry: ${lead.country}\nEmail: ${lead.email}\nPhone: ${lead.phone}\n${lead.volume ? `Volume: ${lead.volume}\n` : ""}${lead.partnerType ? `Partnership Type: ${lead.partnerType}\n` : ""}${lead.message ? `Message: ${lead.message}\n` : ""}\nSource: ${lead.source || "Direct"}\nType: ${lead.formType || "Contact"}\nTime: ${timestamp} (IST)`;

  return { subject, html, text };
}

export function buildUserThankYouEmail(lead: LeadData): { subject: string; html: string; text: string } {
  const subject = "Thank You for Contacting Surya Foods — We'll Be in Touch Soon";

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;">
    <!-- Header -->
    <div style="background:${BRAND_COLOR};padding:32px;text-align:center;">
      <img src="${LOGO_URL}" alt="Surya Foods" style="height:56px;margin-bottom:12px;" />
      <h1 style="color:#ffffff;font-size:24px;margin:0;font-weight:700;">Thank You for Reaching Out</h1>
      <div style="width:48px;height:2px;background:${GOLD_COLOR};margin:16px auto 0;"></div>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
        Dear <strong>${lead.fullName}</strong>,
      </p>
      <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
        Thank you for your interest in Surya Foods. We have received your inquiry and our team is reviewing it carefully.
      </p>
      <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 24px;">
        A member of our export and business development team will get back to you within <strong>24 business hours</strong> with a detailed response tailored to your requirements.
      </p>

      <!-- What We Offer -->
      <div style="background:#f0fdf4;border-radius:12px;padding:24px;margin-bottom:24px;">
        <h3 style="color:${BRAND_COLOR};font-size:16px;margin:0 0 12px;">What Sets Us Apart</h3>
        <ul style="color:#374151;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
          <li>Premium Basmati Rice — 1121, 1509, 1718, Pusa & Traditional varieties</li>
          <li>ISO 22000, FSSAI, HACCP & APEDA certified</li>
          <li>Trusted export house serving 25+ countries</li>
          <li>State-of-the-art milling with 50,000+ MT annual capacity</li>
          <li>Custom private labeling & packaging solutions</li>
        </ul>
      </div>

      <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 24px;">
        In the meantime, feel free to explore our <a href="${SITE_URL}/products" style="color:${BRAND_COLOR};font-weight:600;">product range</a> or learn more about our <a href="${SITE_URL}/heritage" style="color:${BRAND_COLOR};font-weight:600;">heritage and legacy</a>.
      </p>

      <!-- CTA -->
      <div style="text-align:center;margin:32px 0;">
        <a href="${SITE_URL}/products" style="display:inline-block;background:${BRAND_COLOR};color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:600;">Explore Our Products</a>
      </div>
    </div>

    <!-- Contact Info -->
    <div style="background:#faf8f2;padding:24px 32px;border-top:1px solid #e5e7eb;">
      <h4 style="color:${BRAND_COLOR};font-size:14px;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;">Get in Touch Directly</h4>
      <table style="width:100%;">
        <tr>
          <td style="padding:4px 0;font-size:13px;color:#6b7280;width:24px;vertical-align:top;">📧</td>
          <td style="padding:4px 0;font-size:13px;color:#374151;"><a href="mailto:${EMAIL_ADDRESS}" style="color:${BRAND_COLOR};text-decoration:none;">${EMAIL_ADDRESS}</a></td>
        </tr>
        <tr>
          <td style="padding:4px 0;font-size:13px;color:#6b7280;vertical-align:top;">📞</td>
          <td style="padding:4px 0;font-size:13px;color:#374151;"><a href="tel:${PHONE}" style="color:${BRAND_COLOR};text-decoration:none;">${PHONE}</a></td>
        </tr>
        <tr>
          <td style="padding:4px 0;font-size:13px;color:#6b7280;vertical-align:top;">📍</td>
          <td style="padding:4px 0;font-size:13px;color:#374151;">${ADDRESS}</td>
        </tr>
        <tr>
          <td style="padding:4px 0;font-size:13px;color:#6b7280;vertical-align:top;">🌐</td>
          <td style="padding:4px 0;font-size:13px;color:#374151;"><a href="${SITE_URL}" style="color:${BRAND_COLOR};text-decoration:none;">suryafoodspatran.com</a></td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="background:${BRAND_COLOR};padding:20px 32px;text-align:center;">
      <p style="color:rgba(255,255,255,0.6);font-size:11px;margin:0 0 4px;">© ${new Date().getFullYear()} Surya Foods. All rights reserved.</p>
      <p style="color:rgba(255,255,255,0.4);font-size:11px;margin:0;">Premium Basmati Rice Manufacturer & Exporter Since 2002</p>
    </div>
  </div>
</body>
</html>`;

  const text = `Dear ${lead.fullName},\n\nThank you for your interest in Surya Foods. We have received your inquiry and our team is reviewing it carefully.\n\nA member of our export and business development team will get back to you within 24 business hours.\n\nContact Us:\nEmail: ${EMAIL_ADDRESS}\nPhone: ${PHONE}\nAddress: ${ADDRESS}\nWebsite: ${SITE_URL}\n\n© ${new Date().getFullYear()} Surya Foods. Premium Basmati Rice Manufacturer & Exporter Since 2002.`;

  return { subject, html, text };
}
