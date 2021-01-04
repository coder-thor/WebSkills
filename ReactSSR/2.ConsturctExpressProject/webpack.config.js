const path = require("path")
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "server.js"
  },
  watch: true, // 开启监控文件的变化, 因为只有文件变化了webpack才会重新进行打包, 只有重新进行打包了nodemon运行的代码才是最新的
  target: "node", // 告诉webpack这是node环境, 像一些fs, http模块webpack就不要去找了, 
  resolve: { // 告诉webpack他解析目录的时候找寻依赖的配置, 比如默认他会找index.js, index.json等, 我们可以通过这个配置修改它
    alias: { 
      "@": path.resolve(__dirname, "./src") // 这个配置是告诉webpack, 如果我们在工程中导入依赖的时候以@开头, 他就去找src目录
    },
    extensions: [".js", ".jsx", ".css"], // 告诉webpack扩展名你优先找js, 然后找jsx, 然后css, 然后你再去找你那些json什么的
  },
  externals: [nodeExternals()], // 告诉webpack那些依赖本来就是外部一直存在的东西, 我们不需要将他打包到最终文件里
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // babel解析时忽略掉node_modules里的代码
        use: [{
          loader: "babel-loader",
          options: {
            // 配置babel预设, 用来解析react代码
            presets: ["@babel/preset-react"]
          }
        }]
      }
    ]
  }
}