const { resolve } = require("path");

module.exports = {
  webpack: {
    alias: {
      $views: resolve(__dirname, "src/views"),
      $components: resolve(__dirname, "src/components"),
    },
  },
};
