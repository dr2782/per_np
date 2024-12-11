/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/per_np",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.altisono.mx',
        port: '',
        pathname: '/Reviews/**'
      }
    ]
  }
};

module.exports = nextConfig;
