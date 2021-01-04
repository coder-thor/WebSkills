import React from 'react'
import ReactDOM from 'react-dom/server'
import App from './App'

export default (req, res) => {
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
      <div id="#root">HelloSSR1111</div>
    </body>
    </html>`;

  res.send(html);
}