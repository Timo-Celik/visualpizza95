module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack?-svgo,+titleProp,+ref![path]"],
    });

    return config;
  },
};
