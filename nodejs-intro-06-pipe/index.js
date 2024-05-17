const fs = require('fs');
const zlib = require('zlib');

// Створюємо потік для читання вхідного файлу
const readStream = fs.createReadStream('input.txt');

// Створюємо потік для запису стиснутого файлу
const writeStream = fs.createWriteStream('input.txt.gz');

// Створюємо архіватор
const gzip = zlib.createGzip();

// Підключаємо потоки до архіватора
readStream.pipe(gzip).pipe(writeStream);

// Обробляємо подію завершення архівування
writeStream.on('close', () => {
  console.log('Архівування завершено!');
});
