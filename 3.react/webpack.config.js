const path = require("path");

module.exports = {
  entry: "./src/index.js", // 애플리케이션 진입점
  output: {
    filename: "bundle.js", // 번들 파일 이름
    path: path.resolve(__dirname, "dist"), // 번들 파일 경로
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js 확장자를 가진 파일에 대해서
        exclude: /node_modules/, // node_modules 폴더는 제외하고
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
