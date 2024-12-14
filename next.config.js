/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/per_np",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.altisono.mx',
        port: '',
        pathname: '/Reviews/**',
      }
    ]
  },
  experimental: {
    urlImports: ['https://altisono.mx/Reviews/'],
  },

};

module.exports = nextConfig;
