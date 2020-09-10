const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./resources/js/main.js', './resources/sass/style.scss'],
  output: {
    filename: 'js/[name].bundle.min.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.min.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './node_modules/jquery/dist/jquery.min.js', to: './js' }
      ]
    })
  ],
  devtool: 'source-map'
}
