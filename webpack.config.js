const path = require("path")
const BUILD_DIR = path.join(__dirname, "dist")
const APP_DIR = path.join(__dirname, "src")

module.exports = {
  entry: APP_DIR + "/app.js",
  devServer: {
    contentBase: "./dist",
  },
  output: {
    path: BUILD_DIR,
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    contentBase: BUILD_DIR,
    port: 9000,
  },
}
