/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async() => {
    return [
      {
        source: '/r',
        destination: '/subreddits',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
