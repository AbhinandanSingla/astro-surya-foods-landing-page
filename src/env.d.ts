type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

interface Env {
  ASSETS: Fetcher;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_REGION: string;
  NOTIFICATION_EMAIL: string;
}

declare namespace App {
  interface Locals extends Runtime {}
}
