const fs = require('fs');

// Створення потоку для читання файлу
const readableStream = fs.createReadStream('input.txt');

// Створення потоку для запису у файл
const writableStream = fs.createWriteStream('output.txt');

// Підключення обробників подій до потоків
readableStream.on('data', (chunk) => {
  console.log(chunk);
  // Обробка отриманих даних
  writableStream.write(chunk); // Запис даних у файл
});

readableStream.on('end', () => {
  console.log('Читання завершено');
  writableStream.end(); // Завершення запису у файл
});
