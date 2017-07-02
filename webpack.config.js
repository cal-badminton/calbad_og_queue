const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './public/js/index.js',
    './public/js/fb_setup.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["jsx-loader", "babel-loader"]
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
