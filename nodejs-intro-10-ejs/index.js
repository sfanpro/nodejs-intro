// npm i ejs
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

// Створюємо сервер
const server = http.createServer((req, res) => {
  // Читаємо шаблон з файлу
  fs.readFile('index.ejs', 'utf8', (err, template) => {
    if (err) {
      console.error('Помилка зчитування файлу шаблону:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Помилка сервера');
      return;
    }

    // Рендеримо шаблон з даними
    const renderedTemplate = ejs.render(template, {
      title: 'Ласкаво просимо до нашого сайту!',
      message: 'Вітаємо! Це приклад використання шаблону EJS.'
    });

    // Надсилаємо відповідь клієнту
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(renderedTemplate);
  });
});

// Запускаємо сервер на порті 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`);
});
