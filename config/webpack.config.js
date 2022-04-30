const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (event) => {
  console.log("event：", event);

  /**
   * webpack 通过命令行传递参数的写法
   * http://nibes.cn/blog/23761
   */
  let entryAccess = "";
  if (event.entry === "base") {
    entryAccess = "./packages/base/index.ts";
  } else if (event.entry === "engineering") {
    entryAccess = "./packages/engineering/index.ts";
  } else if (event.entry === "config") {
    entryAccess = "./packages/config/index.ts";
  } else {
    entryAccess = "./packages/base/index.ts";
  }

  return {
    entry: entryAccess, // 配置入口
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
          test: /\.(ts|tsx)?$/,
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
};
