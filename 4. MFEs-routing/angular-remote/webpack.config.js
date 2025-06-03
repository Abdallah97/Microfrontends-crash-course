const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

module.exports = {
  output: {
    uniqueName: 'angularRemote',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'angularRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/app/app.component.ts',
      },
      shared: mf.share({
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
      }),
    }),
  ],
};
