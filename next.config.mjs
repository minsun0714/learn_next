/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_permanently",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/deleted_temporarily",
        destination: "/products",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/products/jeans",
        destination: "/products/1234",
      },
      {
        source: "/products/shirts",
        destination: "/products/1235",
      },
      {
        source: "/products/shoes",
        destination: "/products/1236",
      },
    ];
  },
};

export default nextConfig;
