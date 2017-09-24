const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const plugins = [
  new CleanWebpackPlugin(
    ['static/*'],
    { verbose: true }
  ),
  new HtmlWebpackPlugin({
    chunk: 'index',
    filename: 'index.html',
    template: './templates/index.html'
  })
]

module.exports = {
  entry: './index.jsx',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'app'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  devtool: process.env['NODE_ENV'] === 'production' ? '' : 'source-map',
  devServer: {
    contentBase: './static',
    compress: true,
    historyApiFallback: true,
    https: true,
    overlay: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader'],
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader?name=[name].[ext]?[hash]&outputPath=img/']
      }
    ]
  },
  plugins
}
