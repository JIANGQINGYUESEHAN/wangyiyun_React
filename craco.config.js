let path = require('path');
const CracoLessPlugin = require('craco-less');
let resolve = function (src) {
  return path.resolve(__dirname, src);
};

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils')
    }
  }
};
