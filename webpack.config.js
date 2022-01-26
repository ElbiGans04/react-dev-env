const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WEB = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  resolve: {
    fallback: {}, // Jika menggunakan module node js (package) nyatakan disini
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: [`${path.resolve(process.cwd(), "./src/index.js")}`],
  output: {
    path: `${path.resolve(process.cwd(), "./dist")}`,
    filename: "./app.js",
    clean: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "React App",
      template: path.resolve(process.cwd(), "./public/template.html"),
    }),
    new WEB()

  ],
  devServer: {
    static: './dist'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

