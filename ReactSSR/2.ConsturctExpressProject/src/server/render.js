import React from 'react'
import ReactDOM from 'react-dom/server'
import App from './App'

import { getAllJsFiles } from './utils'

export default async (req, res) => {
  const scripts = await getAllJsFiles();
  const homeComp = ReactDOM.renderToString(<App />);
  console.log("homeComp", homeComp);
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="#root">${homeComp}</div>
      ${ scripts }
    </body>
    </html>`;

  res.send(html);
}