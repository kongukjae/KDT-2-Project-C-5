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
<<<<<<< HEAD
<<<<<<< HEAD
    extensions: ['.js', '.jsx'],
  },
  
=======
    extensions:['.js','.jsx']
  },
>>>>>>> 9bdef277 (fixed and build successed)
=======
    extensions: ['.js', '.jsx'],
  },
>>>>>>> c59f030d (change)
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
<<<<<<< HEAD
=======
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
>>>>>>> c59f030d (change)
      {
<<<<<<< HEAD
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
=======
>>>>>>> 69f8ca6e (added webpack config)
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