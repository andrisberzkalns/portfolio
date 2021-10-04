const withPlugins = require("next-compose-plugins");

const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
  en: "en",
};

const config = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  images: {
    loader: 'imgix',
  },
  publicRuntimeConfig: {
    localeSubpaths,
  },
};

module.exports = withPlugins([], config);
