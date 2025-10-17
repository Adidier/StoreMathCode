/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://files.stripe.com/**')],
  },
};

module.exports = nextConfig
