// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
//   plugins: [
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ]
// }

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-preset-env': { stage: 2 },
  },
};