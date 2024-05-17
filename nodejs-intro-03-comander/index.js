const { Command } = require('commander');

const program = new Command();
program
  .version('1.0.0')
  .description('Командна програма на Node.js');

program
  .command('reverse <string>')
  .description('Реверс рядка')
  .action((str) => {
    const reversedStr = str.split('').reverse().join('');
    console.log(`Реверсований рядок: ${reversedStr}`);
  });

program
  .command('toUpperCase <string>')
    .description('Перетворити рядок в верхній регістр')
    .action((str) => {
      const upperCaseStr = str.toUpperCase();
      console.log(`Рядок у верхньому регістрі: ${upperCaseStr}`);
    });

program.parse(process.argv);

// npm start reverse "Nice"
// npm start toUpperCase "Nice"