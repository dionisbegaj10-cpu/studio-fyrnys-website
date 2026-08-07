import type { NextConfig } from "next";

/**
 * 301s from the old Wix site's URLs, captured from its sitemap before cutover.
 * These only start mattering once studiofyrnys.com points at this deployment;
 * until then they are harmless.
 *
 * Wix left several unlinked "kopie-von-*" duplicates in its sitemap. They are
 * mapped to the closest real page rather than dropped, so any accumulated link
 * equity still lands somewhere sensible.
 */
const wixRedirects = [
  // Real, linked pages
  { source: "/interiordesign", destination: "/leistungen" },
  { source: "/projekte-1", destination: "/projekte" },
  { source: "/meet-the-team", destination: "/ueber-uns" },
  { source: "/manufaktur-new", destination: "/leistungen" },

  // Wix duplicates ("kopie von" = "copy of")
  { source: "/kopie-von-showroom", destination: "/projekte" },
  { source: "/kopie-von-meet-the-team", destination: "/ueber-uns" },
  { source: "/kopie-von-manufaktur", destination: "/leistungen" },
  { source: "/kopie-von-manufaktur-new", destination: "/ueber-uns" },
  { source: "/kopie-von-studio", destination: "/leistungen" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return wixRedirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
