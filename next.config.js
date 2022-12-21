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
      },
      {
        source: '/u/:username',
        destination: '/user/:username',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
