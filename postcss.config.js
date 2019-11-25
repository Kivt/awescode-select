// Removes unused css from build files
module.exports = ({ env }) => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': env === 'production' ? {
      content: [
        './public/index.html',
        './src/*.vue',
        './src/**/*.html',
        './src/**/*.vue',
      ],
    } : false,
  },
});
