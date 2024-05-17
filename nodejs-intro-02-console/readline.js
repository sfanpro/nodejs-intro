const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Як вас звати? ', (name) => {
  console.log(`Привіт, ${name}!`);
  rl.pause();
});
// інші дії, поки чекаємо на відповідь користувача
rl.resume();

// node readline.js
