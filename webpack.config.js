const path = require('path');
const assetDir = 'assets';
var Handlebars = require('handlebars/runtime');
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = (_env, argv) => {
  return {
    entry: './src/_includes/components/base/script.js',
    output: {
      path: path.resolve(__dirname, 'dist/assets'),
      filename:
        argv.mode === 'production' ? '[name].[contenthash].js' : '[name].js'
    },
    plugins: [new ManifestPlugin()]
  };
};

Handlebars.registerHelper("asset", function(options) {
   
    return new Handlebars.SafeString({assetDir} + options.fn(this));
  });