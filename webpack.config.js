const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Module } = require('module');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');

module.exports = {
  name: 'client',
  entry: './src/client/index.tsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/client'),
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        'testremote': 'client_test_remote@http://localhost:8000/mf-manifest.json'
      },
      shared: {
        'react': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        }
      }
    }
    )
  ]
};