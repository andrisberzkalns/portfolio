const withPlugins = require("next-compose-plugins");

const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
  en: "en",
};

const config = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  images: {
    loader: 'imgix',
    // path: 'https://localhost:3000/',
  },
  publicRuntimeConfig: {
    localeSubpaths,
  },
};

module.exports = withPlugins([], config);
