const path = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {
  HotModuleReplacementPlugin
} = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      contexts: path.resolve(__dirname, 'src/context/'),
      routes: path.resolve(__dirname, 'src/routes/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      icons: path.resolve(__dirname, 'src/assets/icons/'),
      logos: path.resolve(__dirname, 'src/assets/logos/'),
      errors: path.resolve(__dirname, 'src/assets/error404/'),
    }
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|svg|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/pictures/[hash]-[name].[ext]',
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugins({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new Dotenv({
      path: './.env',
      prefix: 'import.meta.env'
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3005,
    hot: true,
    historyApiFallback: true,
  }
}