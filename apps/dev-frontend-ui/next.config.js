/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react"
    ]
  },
  async rewrites() {
    return [
      {
        source: '/dashboard/api/auth/google/callback',
        destination: 'http://127.0.0.1:3001/api/auth/google/callback',
      },
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:3001/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
