/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: '/Users/amanbhogal/Desktop/starscream/starscream',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sketchfab.com',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
          },
        },
      }
    }
    return config
  },
}

module.exports = nextConfig
