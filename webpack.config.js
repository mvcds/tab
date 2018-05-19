const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
      },
      {
        test: /\.styl$/,
        exclude: [
          /node_modules/,
          /joi-browser/
        ],
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
    alias: {
      Entities: path.resolve(__dirname, 'src/Domain/Entities'),
      Objects: path.resolve(__dirname, 'src/Domain/Objects'),
      Styles: path.resolve(__dirname, 'src/Web/styles'),
      Organisms: path.resolve(__dirname, 'src/Web/components/organisms'),
      Molecules: path.resolve(__dirname, 'src/Web/components/molecules'),
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
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([ { from: path.resolve(__dirname, 'src/Web/pwa') } ])
  ]
}
