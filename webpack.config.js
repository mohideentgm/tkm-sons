const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 5000;
const dotenv = require('dotenv')


module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: {
      app: './src/index.jsx'
  },
  output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'bundle.[chunkhash].js', 
      publicPath: '/'
  },
  devtool: 'inline-source-map',
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
                  "postcss-loader"
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
  optimization: {
    splitChunks: { chunks: "all" }
  },
  plugins: [
      isDevelopment && new webpack.HotModuleReplacementPlugin({
          title: 'hot module replacement',
      }),
      new HtmlWebpackPlugin({
          template: 'public/index.html',
      }),
      isDevelopment &&  new ReactRefreshWebpackPlugin({
        overlay: false
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed)
      }),
  ].filter(Boolean),
  devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true,
      hot: true 
  }
};