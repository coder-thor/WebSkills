const express = require("express")

const app = express();

app.listen(9000, () => {
  console.log("start server");
});

app.get("*", (req, res) => {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="#root">HelloSSR1</div>
    </body>
    </html>`;

  res.send(html);
})