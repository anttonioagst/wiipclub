import type { NextConfig } from "next";

/**
 * O produto já faz bust com `?v=` em `/wiipo/...`.
 * Sem max-age o CDN reenvia o mark de 793 KB a cada visita (`cache-control: public, max-age=0`).
 */
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/wiipo/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/favicon-32.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/apple-touch-icon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
