// Exercícios de interpretação de código
//1.
// Soma a variavel valor com o valor de i, que sempre cresce +1 a cada rodada enquanto ele for menor que 5. Em seguida, imprime o valor de valor no console.

//2.
//a)
// 19
// 21
// 23
// 25
// 27
// 30

// b)
// ele é suficiente, é só tirar a condicional de números maiores que 18 que ele acessaria todos else.

// 3.
// *
// **
// ***
//calculei errado e achei que ele só ia até o 3


// Exercícios de escrita de código
// 1.

// let bichosEstimacao = Number(prompt("Quantos bichos de estimação você tem?"))

// const arrBichinhos = []

// if (bichosEstimacao === 0) {
//   console.log("Que pena! Você pode adotar um pet!")
// } else if (bichosEstimacao > 0) {
//   let i = 0
//   while (i < bichosEstimacao) {
//     const bicho = prompt('Digite o nome de cada um deles')
//     arrBichinhos.push(bicho)
//     i++
//   }
//   console.log(arrBichinhos)
// }


// 2.

// const arrOriginal = [1500, 4, 6, 8, 9, 100, 10, 55, 57]

// // a)
// const imprimeElementosArray = (array) => {
//   for (const elemento of array) {
//     console.log(elemento)
//   }
// }
// imprimeElementosArray(arrOriginal)

// // b)
// const imprimeElementosDivididosPor10 = (array) => {
//   for (const elemento of array) {
//     console.log(elemento / 10)
//   }
// }
// imprimeElementosDivididosPor10(arrOriginal)

// // c)
// const imprimeArrayDePares = (array) => {
//   const arrayDePares = []
//   for (const elemento of array) {
//     if ((elemento % 2) === 0) {
//       arrayDePares.push(elemento)
//     }
//   }
//   console.log(arrayDePares)
// }

// imprimeArrayDePares(arrOriginal)


// // d)
// const retornaArrayString = (array) => {
//   const novoArray = []
//   for (const elemento of array) {
//     novoArray.push(`O elemento do índex ${array.indexOf(elemento)} é ${elemento}`)
//   }
//   return novoArray
// }

// console.log(retornaArrayString(arrOriginal))


// // e)
// const imprimeMaiorEMenor = (array) => {

//   let maiorElemento = 0
//   for (const elemento of array) {
//     if (elemento > maiorElemento) {
//       maiorElemento = elemento
//     }
//   }

//   let menorElemento = maiorElemento
//   for (const elemento of array) {
//     if (elemento < menorElemento) {
//       menorElemento = elemento
//     }
//   }

//   console.log(maiorElemento, menorElemento)
// }

// imprimeMaiorEMenor(arrOriginal)


//Desafio
// 1.
// const numeroPensado = Number(prompt('Pense em um número!'))

// let acertou = false
// let tentativas = 1

// while (!acertou) {
//   const numeroChute = Number(prompt('Tente advinhar o número pensado'))
//   if (numeroChute == numeroPensado) {
//     acertou = true
//     console.log(`O chute foi ${numeroChute}`);
//     console.log(`Parabéns, você acertou, o numero pensado era ${numeroPensado}`)
//     console.log(`o numero de tentativas foi ${tentativas}`)
//     console.log('-------------------------')
//   } else if (numeroChute < numeroPensado) {
//     console.log(`O chute foi ${numeroChute}`);
//     console.log('Errrrrrrrou, é maior')
//     console.log(`o numero de tentativas foi ${tentativas}`)
//     console.log('-------------------------')
//     tentativas++
//   } else if (numeroChute > numeroPensado) {
//     console.log(`O chute foi ${numeroChute}`);
//     console.log('Errrrrrrrou, é menor')
//     console.log(`o numero de tentativas foi ${tentativas}`)
//     console.log('-------------------------')
//     tentativas++
//   }
// }


// 2.
const numeroPensado = Math.round(Math.random() * 100)
// console.log(numeroPensado)

let acertou = false
let tentativas = 1

while (!acertou) {
  const numeroChute = Number(prompt('Tente advinhar o número pensado'))
  if (numeroChute == numeroPensado) {
    acertou = true
    console.log(`O chute foi ${numeroChute}`);
    console.log(`Parabéns, você acertou, o numero pensado era ${numeroPensado}`)
    console.log(`o numero de tentativas foi ${tentativas}`)
    console.log('-------------------------')
  } else if (numeroChute < numeroPensado) {
    console.log(`O chute foi ${numeroChute}`);
    console.log('Errrrrrrrou, é maior')
    console.log(`o numero de tentativas foi ${tentativas}`)
    console.log('-------------------------')
    tentativas++
  } else if (numeroChute > numeroPensado) {
    console.log(`O chute foi ${numeroChute}`);
    console.log('Errrrrrrrou, é menor')
    console.log(`o numero de tentativas foi ${tentativas}`)
    console.log('-------------------------')
    tentativas++
  }
}

//foi facil pra mim porque eu ja conhecinha o método de Math.random e o Math.round. Mas pude ver na documentação algumas formas diferentes de executar e também novas possibilidades de abrangência de números.