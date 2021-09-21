// 1. a) como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//  armazenamos a resposta numa variavel que receberá o  process.argv[i].

// 1. b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."

/* <------------RESPOSTA------------> */
const chalk = require('chalk');
const {green, red} = chalk

const name = process.argv[2];
const age = Number(process.argv[3]);
const ageInSevenYears = age + 7;

const returnInfos = () => {
  if (process.argv.length < 4) {
    return red(`Esperava 2 parâmetros, mas só recebi ${process.argv.length - 2}.`);
  } else {
    return green(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${ageInSevenYears}.`);
  }
};

console.log(returnInfos());
/* </------------RESPOSTA------------> */

// 1. c) Altere o programa acima para que mostre também a sua idade daqui a sete anos. "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"
