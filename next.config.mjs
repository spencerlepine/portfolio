/** @type {import('next').NextConfig} */
const nextConfig = {
  // The blog is a Docusaurus build copied into `public/blog`. It is generated with
  // `trailingSlash: false`, so every route is a flat `<slug>.html` file while the
  // links Docusaurus renders are extension-less. Next serves `public/` verbatim and
  // never tries an `.html` fallback, so map the pretty URLs onto the real files.
  // These run after the filesystem check, so real assets (`/blog/assets/*`,
  // `/blog/rss.xml`, ...) are still served directly and never hit a rewrite.
  rewrites: async () => [
    {
      source: "/blog",
      destination: "/blog/index.html",
    },
    {
      source: "/blog/:path*",
      destination: "/blog/:path*.html",
    },
  ],
};

export default nextConfig;
