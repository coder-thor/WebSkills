import ReactDOM from 'react-dom/server'
import React from 'react'

import render from './render'

const express = require("express")

const app = express();

app.listen(9000, () => {
  console.log("start server");
});

// 下面这句话的意思是: 当一个请求打过来, 我会直接去找public下有没有对应的资源
// 如果有, 我就直接取这个资源了, 如果没有我再走之后的代码
app.use(express.static("./public")); 

app.get("*", render)