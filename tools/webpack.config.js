const path = require('path');
const appRootDir = require('app-root-dir').get();
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(appRootDir, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
          fallback: 'style-loader',
        }),
      },
      { test: /\.(ttf|woff|eot)$/, loader: 'url-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [new ExtractTextPlugin('index.css')],
};

