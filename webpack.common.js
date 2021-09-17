const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv')


module.exports = {
  entry: {
      app: './src/index.jsx',
      vendor: 'react'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.[chunkhash].js', 
    publicPath: '/'
  },
  target: 'web',
  resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
          "react-dom": "@hot-loader/react-dom"
      },
      fallback: { 
        "fs": false,
        "http": false,
        "https": false,
        "zlib": false,
        "dns": false
      },
  },
  optimization: {
    splitChunks: { chunks: "all" }
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: 'public/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed)
      }),
  ].filter(Boolean),
};