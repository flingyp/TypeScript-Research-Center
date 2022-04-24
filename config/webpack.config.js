const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./packages/base/index.ts", // 配置入口
  output: {
    // 配置出口
    filename: "[contenthash].js",
    path: resolve(__dirname, "../dist"),
    clean: true,
  },
  mode: "development", // 配置Webpack模式
  devtool: "inline-source-map",
  // html-webpack-plugin
  devServer: {
    port: 9000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // 设置基于哪个模板生成Html文件
      filename: "index.html", // 设置打包后的Html文件名
      inject: "body", // 设置 script标签 放入的位置
    }),
  ],
};

module.exports = config;
