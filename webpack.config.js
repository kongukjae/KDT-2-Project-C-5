const path = require('path');
// HTML 파일 생성과 관련된 웹팩 플러그인
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 웹팩 설정
module.exports = {
  // 진입점 설정
  entry: './src/main.js',
  // 빌드 결과물의 경로와 파일명 설정
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  // 웹팩이 모듈을 로드하는 방법을 설정
  module: {
    rules: [
      // .js확장자를 가진 파일에 적용시킬 것들
      {
        test: /\.js$/,
        // 로드하지 않을 파일 설정
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // .css 확장자를 가진 파일에 적용시킬 것들
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // 웹팩이 실행될 때 적용할 플러그인 설정
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
