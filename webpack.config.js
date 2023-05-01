import { fileURLToPath } from 'url';
import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const __dirname = path.resolve();

export default {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
  },
  resolve:{
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
          
        },
      },
      {
        test: /\.m?js$/,
        type: "javascript/auto"
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};