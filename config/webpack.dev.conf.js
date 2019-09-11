const webpack = require('webpack');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {

  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    hot: true,
    // hotOnly: true, //нужна ли эта настройка?
    port: 8081,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new webpack.HotModuleReplacementPlugin(), // надо ли он? HMR глючит и с ним и без него
    new BundleAnalyzerPlugin(),
  ],
});

module.exports = new Promise(resolve => {
  resolve(devWebpackConfig);
});
