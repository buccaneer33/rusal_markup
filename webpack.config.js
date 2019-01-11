/*VARIABLES*/
const path = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sass = require('sass');
const postcss = require('postcss');
const CONSTANTS = require("./constants");
const AUTOPREFIXER = require('autoprefixer');
const EVENT = process.env.npm_lifecycle_event || '';
const PROD = EVENT.includes('prod');
const DEV = EVENT.includes('dev');
const pathToDist = PROD ? ('dist/prod') : ('dist/dev');
const postCssLoader = PROD ? ({plugins: [AUTOPREFIXER({browsers:['ie >= 8', 'last 12 version']})],sourceMap: false}) : ({sourceMap: true});

/**CONFIG*/

var clientConfig = (function webpackConfig() {
 'use strict';
  var config = Object.assign({});

  config.entry = ['./src/js/index.js','./src/scss/index.scss'];
  config.output = {path: path.resolve(__dirname,  pathToDist), filename: 'js/main.js'};
  PROD ? config.devtool = '' : config.devtool = 'source-map';

  config.module = {
    rules: [
  /*{test: /\.js$/,
      exclude: /node_modules/,
      use: {loader: 'babel-loader',
      options: {presets: ['babel-preset-env']}} 
    },*/
    {test: /\.(sa|sc|c)ss$/,
       include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
            use: [
              {loader: 'css-loader', options: {url: false,minimize: PROD,sourceMap: DEV}},
              {loader: 'postcss-loader', options:postCssLoader},
              {loader: 'sass-loader', options: {sourceMap: DEV}}
              ], publicPath:'./css/'
          })
      },

    {test: /\.(png|jpg|gif|svg)$/,
      use: 
        {loader: 'file-loader', options: {name: './img/[name].[ext]',
          context: path.resolve(__dirname, "./img")}
          }
      },
    {test: /\.(ttf|eot|woff|woff2)$/,
      use:
        {loader: "file-loader", options: {name: "[name].[ext]",
           context: path.resolve(__dirname, "./fonts")}}
      }]
  }
config.resolve = {};

config.plugins = [
    new ExtractTextPlugin({
      filename:'./css/index.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
        title: 'Rusal Markup',
        'meta': {
            'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
          },
        files: {
            "css": [ "index.css" ],
            "js": [ "js/main.js"],
            "chunks": {
                "head": {"entry": "",  "css": [ "css/index.css" ]},
                "main": {"entry": "js/main.js", "css": []}
            },
        },

      minify: {collapseWhitespace: true},
      filename: 'index.html',
      template: './src/html/template/index.html'
        }),

  ]
return config;
});
module.exports = clientConfig;