const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: { import: "./src/index.js" /*, dependOn: "shared" */ },
    //print: { import: "./src/print.js", dependOn: "shared" },
    //shared: "lodash",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My Test App - Development",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        dependency: { not: ['url'] },
        use: [{
          loader: 'url-loader'
        }]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "exclude": [
              // \\ for Windows, \/ for Mac OS and Linux
              /node_modules[\\\/]core-js/,
              /node_modules[\\\/]webpack[\\\/]buildin/,
            ],
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};
