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
        search:'',
      }
    ]
  }

};

module.exports = nextConfig;
