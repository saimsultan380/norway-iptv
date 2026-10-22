/** Canonical site origin — always HTTPS, non-www, no trailing slash on the origin. */
export const SITE_URL = "https://brit-iptv.co";
export const SITE_HOST = "brit-iptv.co";
export const SITE_NAME = "Norway IPTV";
export const SITE_EMAIL = "support@brit-iptv.co";

/** Alternate names Google may use for the SERP site name. */
export const SITE_ALTERNATE_NAMES = [
  "Norsk IPTV",
  "IPTV Norge",
  "IPTV Nordic",
  "Norwegian IPTV",
] as const;

export const DEFAULT_TITLE =
  "Norway IPTV: IPTV Nordic, IPTV Norge & Norsk IPTV Buy 77% Off";

export const DEFAULT_DESCRIPTION =
  "Buy Norway IPTV. Explore norsk IPTV, IPTV Norge, Nordic channels, football, HD & 4K streaming. Compare IPTV abonnement, prices, compatible devices & players";

/** Site logo in header/footer (transparent). Google schema uses white-bg version. */
export const SITE_LOGO_PATH = "/logo-schema.png";
export const SITE_LOGO_WIDTH = 1024;
export const SITE_LOGO_HEIGHT = 1024;
export const SITE_FAVICON_PATH = "/favicon-48.png";
export const SITE_HEADER_LOGO_PATH = "/logo.PNG";

/**
 * Build a canonical absolute URL with a trailing slash.
 * Pass "" or "/" for the homepage.
 */
export function canonicalUrl(path: string = "/"): string {
  const trimmed = path.trim();
  if (!trimmed || trimmed === "/") {
    return `${SITE_URL}/`;
  }
  const withLeading = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const withTrailing = withLeading.endsWith("/")
    ? withLeading
    : `${withLeading}/`;
  return `${SITE_URL}${withTrailing}`;
}

/** Absolute URL for a public asset (no trailing slash). */
export function assetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
