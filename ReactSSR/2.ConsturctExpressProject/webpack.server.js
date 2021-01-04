// 服务端的webpack配置
const nodeExternals = require("webpack-node-externals")

const webpackBaseConfig = require("./webpack.base")

const webpackServerConfig = {
  entry: "./src/server", 
  target: "node", // 告诉webpack当前是node环境, 避免他遇到fs模块的时候也到处去找最后找不到
  output: {
    filename: "server.js", // 服务端也只用生成一个server.js供运行就可以
  },
  externals: [nodeExternals()], // 因为服务端我们一定会下载node_modules, 所以我们并不需要将诸如node_modules的文件打入到我们的最终结果中
}

module.exports = Object.assign(webpackBaseConfig, webpackServerConfig);