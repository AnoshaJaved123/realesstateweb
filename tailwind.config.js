/** @type {import('@types/tailwindcss/tailwind-config').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    './src/**/*.html', './node_modules/flowbite/**/*.js'


  ],
  theme: {
    extend: {},
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'realestatebuketwebdev.s3.ap-northeast-3.amazonaws.com'], //Domain of image host
  },
  plugins: [require("flowbite/plugin")],
}



// /** @type {import('tailwindcss').Config} */ 
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   images: {
//     domains: [`${process.env.NEXT_PUBLIC_HOST}`,'lh3.googleusercontent.com'], //Domain of image host
//   },
//   plugins: [],
// }