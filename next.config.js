/** @type {import('next').NextConfig} */
const path = require('path')
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
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },


}

module.exports = nextConfig
