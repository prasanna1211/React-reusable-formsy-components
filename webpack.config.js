const path = require('path');
/*
 * Defines path here.
 */
const BUILD_DIR = path.resolve(__dirname, 'examples/');
const APP_DIR = path.resolve(__dirname, 'examples/');
const rootJs = 'index.js';

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
    path: BUILD_DIR,           // contains index.html, index.js (root html, root js)
    publicPath: '/',           // location of bundle.js relative to the html file
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
        loaders: ['babel-loader'],
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
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
  devtool: 'eval-source-map',
  eslint: {
    configFile: './.eslintrc',
  },
  devServer: {
    historyApiFallback: true,
  }
};

module.exports = config;
