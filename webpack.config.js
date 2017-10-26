const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const plugins = [
  new CleanWebpackPlugin(
    ['public/*'],
    { verbose: true }
  ),
  new HtmlWebpackPlugin({
    chunk: 'index',
    filename: 'index.html',
    template: './src/index.html'
  })
]

module.exports = {
  entry: './src/index.jsx',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
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
