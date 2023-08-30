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
    unoptimized: true
  },

  env: {
    STRAPI_API: process.env.STRAPI_API,
  },
  distDir: 'build',
  output: 'export'

}

module.exports = nextConfig
