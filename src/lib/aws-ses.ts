// AWS SES v2 email sending utility using Signature V4 signing
// Designed for Cloudflare Workers (no AWS SDK dependency)

interface SESConfig {
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
}

interface EmailParams {
  from: string;
  to: string[];
  subject: string;
  htmlBody: string;
  textBody?: string;
}

async function hmacSha256(key: ArrayBuffer | Uint8Array, data: string): Promise<ArrayBuffer> {
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  return crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(data));
}

async function sha256(data: string): Promise<string> {
  const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(data));
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function getSignatureKey(
  key: string,
  dateStamp: string,
  region: string,
  service: string
): Promise<ArrayBuffer> {
  const kDate = await hmacSha256(new TextEncoder().encode("AWS4" + key), dateStamp);
  const kRegion = await hmacSha256(kDate, region);
  const kService = await hmacSha256(kRegion, service);
  return hmacSha256(kService, "aws4_request");
}

export async function sendEmail(config: SESConfig, params: EmailParams): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const service = "ses";
  const host = `email.${config.region}.amazonaws.com`;
  const endpoint = `https://${host}/v2/email/outbound-emails`;
  const now = new Date();
  const amzDate = now.toISOString().replace(/[:\-]|\.\d{3}/g, "").slice(0, 15) + "Z";
  const dateStamp = amzDate.slice(0, 8);

  const body = JSON.stringify({
    Content: {
      Simple: {
        Subject: { Data: params.subject, Charset: "UTF-8" },
        Body: {
          Html: { Data: params.htmlBody, Charset: "UTF-8" },
          ...(params.textBody ? { Text: { Data: params.textBody, Charset: "UTF-8" } } : {}),
        },
      },
    },
    Destination: {
      ToAddresses: params.to,
    },
    FromEmailAddress: params.from,
  });

  const payloadHash = await sha256(body);

  // Canonical request
  const canonicalUri = "/v2/email/outbound-emails";
  const canonicalQuerystring = "";
  const canonicalHeaders = `content-type:application/json\nhost:${host}\nx-amz-date:${amzDate}\n`;
  const signedHeaders = "content-type;host;x-amz-date";

  const canonicalRequest = [
    "POST",
    canonicalUri,
    canonicalQuerystring,
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join("\n");

  // String to sign
  const credentialScope = `${dateStamp}/${config.region}/${service}/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    await sha256(canonicalRequest),
  ].join("\n");

  // Signature
  const signingKey = await getSignatureKey(config.secretAccessKey, dateStamp, config.region, service);
  const signature = toHex(await hmacSha256(signingKey, stringToSign));

  const authorizationHeader = `AWS4-HMAC-SHA256 Credential=${config.accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Amz-Date": amzDate,
        Authorization: authorizationHeader,
      },
      body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("SES Error:", response.status, errorText);
      return { success: false, error: `SES API error: ${response.status} - ${errorText}` };
    }

    const result = await response.json() as { MessageId?: string };
    return { success: true, messageId: result.MessageId };
  } catch (err) {
    console.error("SES fetch error:", err);
    return { success: false, error: `Network error: ${(err as Error).message}` };
  }
}
