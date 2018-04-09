const path = require('path')

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, '../web'),
    filename: 'app.js'
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
  mode: 'development'
}
