const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    port: 4300
  },
  devtool: "none",
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["main"],
      filename: "template.html",
      template: path.resolve(__dirname, "public/template.html"),
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public/index.html"),
      inject: false
    })
  ]
});
