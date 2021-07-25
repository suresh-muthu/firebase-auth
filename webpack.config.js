const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loaders: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },
        resolve: { extensions: [".js", ".jsx"] },
        test: /\.(js|jsx)$/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: "css-hot-loader" },
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })]
};
