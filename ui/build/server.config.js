const path = require('path')
const externals = require('webpack-node-externals')
const webpack = require('webpack')

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, '..'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    express: 'express',
    path: 'path',
    react: 'node_modules/react'
  },
  mode: 'development',
  target: 'node',
  externals: [ externals() ],
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'node-fetch'
    })
  ]
}
