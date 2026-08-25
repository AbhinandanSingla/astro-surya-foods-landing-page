import type { APIRoute } from "astro";
import { sendEmail } from "../../lib/aws-ses";
import { buildAdminNotificationEmail, buildUserThankYouEmail } from "../../lib/email-templates";

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const headers = { "Content-Type": "application/json" };

  try {
    const body = await request.json() as Record<string, string | undefined>;

    // Validate required fields
    const { fullName, companyName, country, email, phone, message, volume, partnerType, productInterest, source, formType } = body;

    if (!fullName || !companyName || !country || !email || !phone) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields: fullName, companyName, country, email, phone" }),
        { status: 400, headers }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address" }),
        { status: 400, headers }
      );
    }

    // Validate phone format
    if (!/^[\+]?[\d\s\-\(\)]{7,20}$/.test(phone)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid phone number" }),
        { status: 400, headers }
      );
    }

    // Get env vars from Cloudflare Worker runtime (or fallback to import.meta.env for local dev)
    const env = locals.runtime?.env ?? import.meta.env;
    const sesConfig = {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      region: env.AWS_REGION,
    };

    const senderEmail = env.NOTIFICATION_EMAIL || "test@example.com";
    const leadData = { fullName, companyName, country, email, phone, message, volume, partnerType, productInterest, source, formType };

    // If running locally without secrets, simulate a successful response
    if (!sesConfig.accessKeyId || !sesConfig.region) {
      console.warn("⚠️ AWS SES credentials not found. Simulating successful email send for local development.");
      console.log("Mock Lead Data:", leadData);
      return new Response(
        JSON.stringify({ success: true, message: "Thank you! Your inquiry has been received (Simulated)." }),
        { status: 200, headers }
      );
    }

    // 1. Send admin notification email
    const adminEmail = buildAdminNotificationEmail(leadData);
    const adminResult = await sendEmail(sesConfig, {
      from: senderEmail,
      to: [senderEmail],
      subject: adminEmail.subject,
      htmlBody: adminEmail.html,
      textBody: adminEmail.text,
    });

    if (!adminResult.success) {
      console.error("Admin email failed:", adminResult.error);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to process inquiry. Please try again." }),
        { status: 500, headers }
      );
    }

    // 2. Send thank-you email to user
    const userEmail = buildUserThankYouEmail(leadData);
    const userResult = await sendEmail(sesConfig, {
      from: senderEmail,
      to: [email],
      subject: userEmail.subject,
      htmlBody: userEmail.html,
      textBody: userEmail.text,
    });

    if (!userResult.success) {
      console.error("User thank-you email failed:", userResult.error);
      // Don't fail the request — admin got notified, that's what matters
    }

    return new Response(
      JSON.stringify({ success: true, message: "Thank you! Your inquiry has been received." }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "An unexpected error occurred. Please try again." }),
      { status: 500, headers }
    );
  }
};
