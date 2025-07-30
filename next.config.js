/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    uri: 'mongodb://localhost:27017/facebook'
  },
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  }

}

module.exports = nextConfig

