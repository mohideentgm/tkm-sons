const path = require('path')
const webpack = require('webpack');
const common = require('./webpack.common');
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const port = process.env.PORT || 5000;


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: [
                'style-loader', 
                'css-loader', 
                'postcss-loader'
              ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack']
        },
        {
          test: /\.(jpe?g|JPG|png|gif)$/,
          loader: 'file-loader'
        }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
        title: 'hot module replacement',
    }),
    new ReactRefreshWebpackPlugin({
      overlay: false
    }),
  ].filter(Boolean),
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true 
  }
});