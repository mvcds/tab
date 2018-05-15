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
      Styles: path.resolve(__dirname, 'src/Web/styles'),
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
  devtool: 'source-map',
  target: 'web',
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
}
