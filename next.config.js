/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DOMAIN: process.env.DOMAIN
  }
}

module.exports = nextConfig
