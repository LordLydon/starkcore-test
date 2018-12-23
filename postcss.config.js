class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || [];
  }
}
module.exports = ctx => ({
  plugins: {
    tailwindcss: 'tailwind.js',
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': ctx.env === 'production' ? {
      content: [
        './../public/index.html',
        './../**/*.vue',
        './../src/**/*.js',
      ],
      extractors: [
        {
          extractor: TailwindExtractor,

          // Specify the file extensions to include when scanning for
          // class names.
          extensions: ['html', 'js', 'vue'],
        },
      ],
    } : false,
  },
});
