
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './src/client');

const env = process.env.NODE_ENV;

const config = {
  mode: env || 'development',
  watch: true,
  entry: {
   main: APP_DIR + '/index.js'
  },
  output: {
   filename: 'bundle.js',
   path: BUILD_DIR,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: [{
           loader: "style-loader" // creates style nodes from JS strings
        }, {
           loader: "css-loader" // translates CSS into CommonJS
        }, {
           loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }]
      }
    ]
  }
};

module.exports = config;
