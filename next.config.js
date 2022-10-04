/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    HOST: 'http://seashell-app-6ylyu.ondigitalocean.app'
  },
  experimental: {
    images: {
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
