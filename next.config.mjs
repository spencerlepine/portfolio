/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/blog",
      destination: "/blog/index.html",
    },
  ],
};

export default nextConfig;
