import type { NextConfig } from "next";

// Set EXPORT=1 to produce a fully static `out/` folder (e.g. `EXPORT=1 npm run build`)
// that can be hosted on any static host or opened via a simple local server.
const isExport = process.env.EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export", trailingSlash: true } : {}),
  images: {
    unoptimized: isExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
