const path = require('path');
// HTML 파일 생성과 관련된 웹팩 플러그인
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 웹팩 설정
module.exports = {
  // 진입점 설정
  entry: './src/render.js',
  // 빌드 결과물의 경로와 파일명 설정
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'startPage.js'
  },
  // 웹팩이 모듈을 로드하는 방법을 설정
  module: {
    // 보통 파일 확장자별 로더를 지정하여 적용한다.
    rules: [
      // .js확장자를 가진 파일에 적용시킬 것들
      {
        test: /\.(js|jsx)$/,
        // 로드하지 않을 파일 설정
        // node_modules안에 있는 파일들은 이미 번들링이 되어있기 때문에 제외
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
}