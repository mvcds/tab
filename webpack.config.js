const path = require('path')
const webpack = require('webpack')

const bundlePath = path.resolve(__dirname, '/dist/')

module.exports = {
  entry: './src/Web/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Entities: path.resolve(__dirname, 'src/Domain/Entities'),
      Objects: path.resolve(__dirname, 'src/Domain/Objects'),
      Organisms: path.resolve(__dirname, 'src/Web/components/organisms'),
      joi: 'joi-browser'
    }
  },
  output: {
    publicPath: bundlePath,
    filename: 'tab-bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src/Web/public'),
    port: 9000
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
}
