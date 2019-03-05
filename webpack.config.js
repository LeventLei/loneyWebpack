const path = require('path')

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    hello: './src/hello.js'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { debug: true }]]
          }
        }
      }
    ]
  }
}
