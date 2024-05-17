const http = require('http');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'template.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Internal Server Error');
      return;
    }
    const template = handlebars.compile(data);
    const html = template({
      title: 'Привіт, світ!',
      content: 'Це приклад використання шаблону Handlebars.',
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
