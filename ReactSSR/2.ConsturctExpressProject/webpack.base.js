// 基础的webpack配置
const path = require("path")

module.exports = {
  watch: true, // 开启监控
  mode: "development",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // 设置别名, 使用@来替代src目录
    },
    extensions: [".js", ".jsx", ".css"] // 解析后缀名为.js, .jsx, .css的文件
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }]
      }
    ]
  }
}