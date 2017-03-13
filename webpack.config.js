const path = require('path');
/*
 * Defines path here.
 */
const BUILD_DIR = path.resolve(__dirname);
const APP_DIR = path.resolve(__dirname, 'examples/app');
const rootJs = 'index.js';

console.log(" build dire ", BUILD_DIR, APP_DIR);
/*
 * Config file for webpack.
 * Change here in order to change the webpack settings
 */
const config = {
  /*
   * Entry point describes the single page app JS.
   */
  entry: ['babel-polyfill', `${APP_DIR}/${rootJs}`],
  /*
   * Output describes the properties of bundle js
   */
  output: {
    path: BUILD_DIR,
    publicPath: '/examples/',
    filename: 'bundle.js',
  },
  /*
   * Loaders for ES6 (babel), styles (SASS Loader), (font) file loader and image.
   */
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: APP_DIR,
        loader: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
  /*
   * Describes the root component. All imports can be done with absolute address
   */
  resolve: {
    root: path.resolve('src/examples'),
  },
  devtool: 'eval-source-map',
  eslint: {
    configFile: './.eslintrc',
  },
  devServer: {
    historyApiFallback: true,
  },
  watch: true,
};

module.exports = config;
