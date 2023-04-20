const path = require("path");

module.exports = {
  entry: "./App.js",
  //초기진입파일
  output: {
    filename: "bundle.js",
    //번들링된 파일
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
