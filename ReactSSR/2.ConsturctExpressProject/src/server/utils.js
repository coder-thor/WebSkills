// 工具模块
const fs = require("fs")
const path = require("path")

// 读取静态目录下的所有js文件, 用于注水
export const getAllJsFiles = async (publicPath = "./public/js") => {
  const files = (await fs.promises.readdir(publicPath)).filter(el => el.endsWith(".js")).map(fileName => `<script src="./js/${fileName}"></script>`);
  console.log("files", files);
  return files.join('\n'); // 将files数组用换行符进行分割成字符串
}

// 读取静态目录下的所有css文件, 用于注水
export const getAllCssFiles = async (publicPath = "./public/css") => {
  const files = (await (await fs.promises.readdir(publicPath)).filter(el => el.endsWith(".css")).map(fileName => `<link rel="stylesheet" href="./css/${fileName}">`))
  return files.join('\n');
}