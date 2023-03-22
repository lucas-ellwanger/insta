/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'jennexplores.com',
      'upload.wikimedia.org',
      'avatars.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
