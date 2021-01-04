# Construct Express Project

1. 搭建express服务器, 并且控制所有的get请求都响应同一个页面
2. 配置```package.json```, 更加方便的启动服务器
    ```json
    {
      "dependencies": {
        "express": "^4.17.1"
      },
      "scripts": {
        "dev:start": "nodemon --watch src --exec node src/server"
      },
      "devDependencies": {
        "nodemon": "^2.0.6"
      }
    }

    ```
3. 安装```nodemon```监控文件的变化 

### 在服务器端渲染React组件

1. 服务器端编写React组件
    ```
    yarn add react react-dom -D
    ```
2. 由于直接运行文件会导致一些问题（比如ES6模块化在CommonJS下的兼容性问题）利用webpack打包服务器代码到dist目录
    ```
    yarn add webpack webpack-cli -D
    ```
3. 由于webpack不认识JSX的代码风格, 所以我们需要利用@babel/preset-react解析react代码
    ```
    yarn add @babel/core babel-loader @babel/preset-react -D
    ```

4. 利用externals和webpack-node-externals排除掉node_modules目录
    ```
    yarn add webpack-node-externals -D
    ```

**tips**

> 浏览器有一种机制, 当第一次请求服务器的时候, 他会默认向服务器请求一个favicon, 所以可能会有一次多的请求的问题

5. 重新配置```package.json```
  > 安装npm-run-all工具库来帮助我们一次性运行多个npm脚本

  ```json
  {
    "dependencies": {
      "express": "^4.17.1",
      "react": "^17.0.1",
      "react-dom": "^17.0.1"
    },
    "scripts": {
      // 加上npm-run-all的命令, 来让dev:start和dev:build同时运行
      // 也可以写成dev:*代表直接运行dev:后面的所有命令
      "dev": "npm-run-all --parallel dev:start dev:build",
      // 这里是监控dist目录下的server.js, 别写成src下的main.js了
      "dev:start": "nodemon --watch dist --exec node dist/server",
      "dev:build": "webpack"
    },
    "devDependencies": {
      "@babel/core": "^7.12.10",
      "@babel/preset-react": "^7.12.10",
      "babel-loader": "^8.2.2",
      "nodemon": "^2.0.6",
      "webpack": "^5.11.1",
      "webpack-cli": "^4.3.1",
      "webpack-node-externals": "^2.5.2"
    }
  }

  ```

6. 渲染页面组件的内容到id为```root```的div中