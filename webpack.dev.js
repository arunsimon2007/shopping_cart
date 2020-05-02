const path = require("path")
const BUILD_DIR = path.join(__dirname, "dist")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: BUILD_DIR,
    open: true,
    historyApiFallback: true,
    port: 9000,
  },
})
