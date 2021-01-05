import React from 'react'
import ReactDOM from 'react-dom/server'
import App from './App'

import { getAllJsFiles, getAllCssFiles} from './utils'

export default async (req, res) => {
  const scripts = await getAllJsFiles();
  const cssFiles = await getAllCssFiles();
  const homeComp = ReactDOM.renderToString(<App />);
  console.log("homeComp", homeComp);
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      ${cssFiles}
    </head>
    <body>
      <div id="#root">${homeComp}</div>
      ${ scripts }
    </body>
    </html>`;

  res.send(html);
}