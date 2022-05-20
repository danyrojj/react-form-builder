const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode:'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    port: 3420,
    historyApiFallback: true,
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
},
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    { test: /\.tsx?$/, loader: "ts-loader" },
    { test: /\.ts?$/, loader: "ts-loader" }
  ]
}
};