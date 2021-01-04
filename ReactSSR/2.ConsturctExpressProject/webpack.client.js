const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const webpackBaseConfig = require("./webpack.base");

/**
 * 在client 配置中我们可能需要注意一些如下场景:
 * 1. 可能需要开启source-map
 * 2. 需要将js文件打上hash值, 避免浏览器端的缓存问题
 * 3. entry可能不太一样
 * 4. 可能需要cleanWebpackPlugin来处理public目录的冗余
 */
const webpackClientConfig = {
  devtool: "source-map",
  entry: "./src/client",
  output: {
    filename: "js/boundle.[hash:5].js",
    path: path.resolve(__dirname, "./public")
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico*'],
    })
  ]
}

module.exports = Object.assign(webpackBaseConfig, webpackClientConfig)