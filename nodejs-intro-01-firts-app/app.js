const http = require('http');

http.createServer((request, response) => {
  response.end('Good morning NodeJS!');
}).listen(3000, () => {
  console.log('Started working on port 3000');
});
