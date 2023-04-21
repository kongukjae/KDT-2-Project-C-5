const path = require('path');

module.exports = {
  entry:'./render.js',
  output: {

  },
  mode : 'development',
  module : {
    rules : [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
  
}