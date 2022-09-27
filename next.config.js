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
  async redirects () {
    return [
      {
        source: '/',
        destination: '/comprar',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
