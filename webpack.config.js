const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/components/index",
  output: {
    filename: "cyf-ui.js",
    library: "cyf-ui",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [new CleanWebpackPlugin(["dist"])]
};
