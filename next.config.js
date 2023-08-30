/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },

  env: {
    STRAPI_API: process.env.STRAPI_API,
  }
}

module.exports = nextConfig
