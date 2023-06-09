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
      'i.pravatar.cc',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
