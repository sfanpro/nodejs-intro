const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Node.js</title>
        <style>
          body {
            display: flex;
            justify-content: center;
          }
          .content {
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="content">
          <h1>Привіт з сервера Node.js!</h1>
          <p>Це HTML відповідь від нашого сервера.</p>
        </div>
      </body>
    </html>
  `);
  res.end();
}).listen(PORT, () => console.log(`Server running on port ${PORT}`));

