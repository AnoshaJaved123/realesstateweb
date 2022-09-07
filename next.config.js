/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`${process.env.NEXT_PUBLIC_HOST}`,'lh3.googleusercontent.com','icon-library.com','realestatebuketwebdev.s3.ap-northeast-3.amazonaws.com'], //Domain of image host
  },
  webpack: function (config) {
    const originalEntry = config.entry;

    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./src/polyfills.js")
      ) {
        entries["main.js"].unshift("./src/polyfills.js");
      }
      return entries;
    };

    return config;
  },
}

module.exports = nextConfig
// // next.config.js
// module.exports = {
//   images: {
//     domains: ['lh3.googleusercontent.com'], //Domain of image host
//   },
// }