//Interpretação
// 1.
//  a)
//    10
//    50
//  b)
//    Não apareceria nada no console, porque não usamos o comando console.log, a função por si só apenas retorna o valor de um calculo.

// 2.
//  a)
//    A função converte um texto que foi imputado para letras minusculas e, retorna true or false se tiver ou não a palavra cenoura.
//  b)
//    i. true
//    ii. true
//    iii. true


// // 1.
// // a)
// const imprimeMensagem = () => {
//   console.log('Eu sou Cleiton, tenho 23 anos, moro em Belo Horizonte e sou estudante')
// }
// imprimeMensagem()

// // b)
// const informacoes = (nome, idade, cidade, profissao) => {
//   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }
// informacoes('Cleiton', 23, 'Belo Horizonte', 'estudante')


// // 2.
// // a)
// const somaNumeros = (num1, num2) => {
//   return num1 + num2
// }
// console.log(somaNumeros(3, 5))


// // b)
// const verificaMaiorNumero = function (num1, num2) {
//   return num1 > num2
// }
// console.log(verificaMaiorNumero(6, 5))


// // c)
// function verificaPar(num) {
//   return num % 2 === 0
// }
// console.log(verificaPar(5))


// // d)
// const toUpperAndLength = (mensagem) => {
//   console.log(mensagem.toUpperCase(), mensagem.length)
// }
// toUpperAndLength('bananinha é top')



//3.
const soma = (num1, num2) => {
  return num1 + num2
}

const subtracao = (num1, num2) => {
  return num1 - num2
}

const multiplicacao = (num1, num2) => {
  return num1 * num2
}

const divisao = (num1, num2) => {
  return num1 / num2
}

const numeros = [Number(prompt('Digite um número.')), Number(prompt('Digite outro.'))]

console.log(`${numeros[0]} + ${numeros[1]} = `, soma(numeros[0], numeros[1]))
console.log(`${numeros[0]} - ${numeros[1]} = `, subtracao(numeros[0], numeros[1]))
console.log(`${numeros[0]} * ${numeros[1]} = `, multiplicacao(numeros[0], numeros[1]))
console.log(`${numeros[0]} / ${numeros[1]} = `, divisao(numeros[0], numeros[1]))


//desafio

function calculaTeoremaPitagoras(cat1, cat2) {
  
  return Math.sqrt((cat1*cat1)+(cat2*cat2))
}

const hipotenusa = calculaTeoremaPitagoras(9,12)

console.log(hipotenusa)