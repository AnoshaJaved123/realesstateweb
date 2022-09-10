/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`${process.env.NEXT_PUBLIC_HOST}`,'lh3.googleusercontent.com','icon-library.com','anoshanewbuket2022.s3.eu-west-2.amazonaws.com'], //Domain of image host
  },
}

module.exports = nextConfig
// // next.config.js
// module.exports = {
//   images: {
//     domains: ['lh3.googleusercontent.com'], //Domain of image host
//   },
// }