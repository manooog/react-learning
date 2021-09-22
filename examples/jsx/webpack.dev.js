const { resolve } = require("path")

module.exports = {
  entry: resolve(__dirname, "./lib/bootstrap"),
  mode: "development",
  devServer: {
    port: 9000,
    client: {
      overlay: false,
    },
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
