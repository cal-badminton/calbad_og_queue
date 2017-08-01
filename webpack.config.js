let webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './public/js/fb_setup.js',
    './public/js/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
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
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
