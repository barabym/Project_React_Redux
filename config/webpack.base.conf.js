const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
};

// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
const PAGES_DIR = PATHS.src;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'));

module.exports = {

  externals: {
    paths: PATHS,
  },

  entry: {
    app: PATHS.src,
    // module: `${PATHS.src}/your-module.js`,
  },

  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`, // хотел использовать contenthash но не заработало
    path: PATHS.dist,
    // publicPath: '/', // НУЖНО УТОЧНИТЬ! -> разкомментить для серверной выкладки
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: { '~': PATHS.src }, // Алиасы я не применяю, но оставил про запас
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: '/node_modules/',
      },

      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },

      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: { sourceMap: true },
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: { sourceMap: true, config: { path: './config//postcss.config.js' } },
      //     },
      //   ],
      // },

      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: { sourceMap: true },
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: { sourceMap: true, config: { path: './config//postcss.config.js' } },
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: { sourceMap: true },
      //     },
      //   ],
      // },


      // вместо вышезакомменченого пробую общее правило
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: process.env.NODE_ENV === 'development' }, // в примере настроек для этого плангина не указывалось, добавил эту настройку из другого примера. Позже разобраться как повлияла
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: './config//postcss.config.js' } },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },

    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`, // хотел использовать contenthash но не заработало
    }),

    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: '' },
    ]),

    // Automatic creation any html pages (Don't forget to RERUN dev server)
    // see more: https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
    // best way to create pages: https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page}`, // в старой версии (там была попроще запись) это строка была у меня закоменчена и все работало. Надо проверить!
    })),

    new webpack.ProgressPlugin({
      entries: true,
      modules: true,
      modulesCount: 100,
      profile: true,
    }),

    new webpack.ContextReplacementPlugin(
      /moment[/\\]locale$/,
      // /de|fr|hu/, // для примера регулярки
      /en/,
    ),

  ],
};
