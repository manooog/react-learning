const { resolve } = require("path")

module.exports = {
  entry: resolve(__dirname, "./app"),
  mode: "development",
  devServer: {
    port: 9000,
    client: {
      overlay: false,
    },
    static: {
      directory: resolve(__dirname, "../../public"),
    },
    open: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
}
