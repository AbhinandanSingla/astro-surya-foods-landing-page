import { AwsClient } from "aws4fetch";

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

export async function sendEmail(config: SESConfig, params: EmailParams): Promise<{ success: boolean; messageId?: string; error?: string }> {
  // Ensure we don't have trailing spaces from .env files
  const region = config.region.trim();
  
  const aws = new AwsClient({
    accessKeyId: config.accessKeyId.trim(),
    secretAccessKey: config.secretAccessKey.trim(),
    region: region,
    service: "ses",
  });

  const endpoint = `https://email.${region}.amazonaws.com/v2/email/outbound-emails`;
  
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

  try {
    const response = await aws.fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
