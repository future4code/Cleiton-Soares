//Exercício 2
/* <------------RESPOSTA------------> */
const chalk = require('chalk');
const { green, red, bgRed, yellow, black } = chalk;

const operator = process.argv[2];
const value1 = Number(process.argv[3]);
const value2 = Number(process.argv[4]);

const operators = ['add', 'sub', 'mult', 'div'];

function operationResult(operator, num1, num2) {
  if (process.argv.length < 5 && !operators.includes(process.argv[2])) {
    return red(
      `Não reconheço o operador ${
        process.argv[2]
      }, além disso, eu esperava 3 parâmetros, mas só recebi ${
        process.argv.length - 2
      }.`
    );
  } else if (process.argv.length < 5) {
    return red(
      `Esperava 3 parâmetros, mas só recebi ${process.argv.length - 2}.`
    );
  } else if (!operators.includes(process.argv[2])) {
    return `${red(`Não reconheço o operador`)} ${chalk.bgRed.rgb(0, 0, 0)(process.argv[2])},
As opções são ${yellow('add')}, ${yellow('sub')}, ${yellow('mult')} e ${yellow('div')}`;
  } else if (operator === operators[0]) {
    return green(num1 + num2);
  } else if (operator === operators[1]) {
    return green(num1 - num2);
  } else if (operator === operators[2]) {
    return green(num1 * num2);
  } else if (operator === operators[3]) {
    return green(num1 / num2);
  }
}

console.log(operationResult(operator, value1, value2));
/* </------------RESPOSTA------------> */
