/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.noitatnemucod.net",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",  // Proxy route
        destination: "https://api.animemundo.net/api/v2/hianime/:path*",  // Actual API URL
      },
    ];
  },
};

export default nextConfig;
