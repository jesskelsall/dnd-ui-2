/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["localhost"],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/control",
        permanent: true,
      },
    ];
  },
};
