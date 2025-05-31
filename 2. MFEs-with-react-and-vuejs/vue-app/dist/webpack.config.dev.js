"use strict";

var HtmlWebpackPlugin = require('html-webpack-plugin');

var _require = require('vue-loader'),
    VueLoaderPlugin = _require.VueLoaderPlugin;

var ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

var packages = require("./package.json");

module.exports = {
  mode: 'development',
  devServer: {
    port: 3003,
    open: true,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [{
      test: /.vue$/,
      use: 'vue-loader'
    }, {
      test: /.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      }
    }]
  },
  plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin({
    template: './public/index.html'
  }), new ModuleFederationPlugin({
    name: "VueApp",
    filename: "remoteEntry.js",
    exposes: {
      "./VueApp": "./src/index",
      "./NewVueButton": "./src/NewVueButton.vue"
    }
  })]
};