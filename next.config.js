/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // We have to tell Next.js which domains are "safe" to fetch images from
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // You can leave port and pathname empty to allow all images from Unsplash
      },
  
    ],
  },
};

export default nextConfig;