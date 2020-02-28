const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["main"],
      filename: "index.html",
      template: path.resolve(__dirname, "public/template.html"),
      inject: false
    })
  ]
});
