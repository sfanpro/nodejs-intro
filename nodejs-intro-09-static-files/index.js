const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  const filePath = request.url.substr(1);
  if (filePath === '') {
    sendStaticFile('index.html', response);
  } else if (filePath === 'services') {
    sendStaticFile('services.html', response);
  } else if (filePath === 'team') {
    sendStaticFile('team.html', response);
  } else if (filePath === 'about') {
    sendStaticFile('about.html', response);
  } else {
    send404(response);
  }
});

/**
 * Функція sendStaticFile(fileName, response):
 * 1. Складає шлях до файлу за його ім'ям від кореня виконуваного файлу.
 * 2. Створює потік для читання файлу за допомогою fs.createReadStream, використовуючи згенерований шлях.
 * 3. Встановлює потік читання файла в потік відповіді за допомогою методу pipe.
 * 4. Встановлює обробник подій на помилки для потоку читання.
 *    Якщо виникає помилка, вона логується, а потім відправляється 404 помилка клієнту.
 * @param fileName - ім'я файлу;
 * @param response - об'єкт відповіді HTTP.
 */
const sendStaticFile = (fileName, response) => {
  const filePath = path.join(__dirname, fileName);
  const stream = fs.createReadStream(filePath);
  stream.pipe(response);
  stream.on('error', (error) => {
    console.error('Error reading file:', error);
    send404(response);
  });
}

const send404 = (response) => {
  response.writeHead(404, {'Content-Type': 'text/html'});
  response.write('<h1>404 Not Found</h1>');
  response.end();
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
