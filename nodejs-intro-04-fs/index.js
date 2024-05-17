const fs = require('fs');

fs.writeFile('hello.txt', 'Hello! Be wise!', (err) => {
  if (err) console.error('Помилка запису:', err);
  fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Помилка читання файлу:', err);
      return;
    }
    console.log('Вміст файлу: ', data);
  });
});
