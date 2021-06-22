//Exercícios de interpretação de código
//1.
//  a)
//    O codigo coleta um numero do usuário, converte de string para número. O if verifica se o numero é par, e se sim, ele imprime "Passou no teste." no console, caso seja ímpar, ele imprime "Não passou no teste.".
//  b)
//    números pares
//  c)
//    números ímpares

//2.
//  a)
//    O código recebe uma fruta do usuário, depois pega esse valor e compara com o banco de dados, para assim retornar o preço da fruta digitada na variável preço. Em seguida ele imprime no console o preço da fruta inputada pelo usuário. 
//  b)
//    O preço da fruta Maçã é R$ 2.25
//  c)
//    O preço da fruta Pêra é R$ 5 //pois o ultimo valor atribuído à variavel preco seria 5.

//3.
//  a)
//    Pedindo um numero para o usuario e armazenando na variavel "numero". 
//  b)
//    Nos dois casos seria "mensagem is not defined", pois ela foi declarada num escopo filho, e não é acessível ao escopo global.
//  c)
//    Sim, pois a varíavel mensagem esta dentro do escopo do if, portanto não é acessível ao escopo global onde ela foi chamada.



//Exercícios de escrita de código

// //1.
//   const idadeUsuario = Number(prompt("Qual é a sua idade"))

//   function verificaSeDirige(idade) {
//     if (idade >= 18 ) {
//       console.log("Você pode dirigir.")
//     } else {
//       console.log("Você não pode dirigir.");
//     }
//   }

//   verificaSeDirige(idadeUsuario)


// //2.
// const turnoAluno = prompt('Em que turno você estuda? Responda com M (matutino), V (Vespertino) ou N (Noturno).').toLowerCase()

// function verificaTurno(turno) {
//   if (turno === "m") {
//     console.log("Bom dia!")
//   } else if (turno === "v") {
//     console.log("Boa tarde!");
//   } else if (turno === "n") {
//     console.log("Boa noite!");
//   } else {
//     console.log('Esse turno não existe aqui!');
//   }
// }

// verificaTurno(turnoAluno)


// //3.
// const turnoAluno = prompt('Em que turno você estuda? Responda com M (matutino), V (Vespertino) ou N (Noturno).').toLowerCase()

// function verificaTurno(turno) {
//   switch (turno) {
//     case "m":
//       console.log("Bom dia!")
//       break;

//     case "v":
//       console.log("Boa tarde!");
//       break;

//     case "n":
//       console.log("Boa noite!");
//       break;

//     default:
//       console.log('Esse turno não existe aqui!');
//       break;
//   }
// }

// verificaTurno(turnoAluno)


// // 4.
// const generoEscolhido = prompt('Qual é o gênero do filme?')
// const precoIngresso = Number(prompt('Qual o valor do ingresso?'))

// const verificaCondicoes = (gereno, preco) => {
//   if (gereno === "fantasia" && preco <= 15) {
//     console.log("Bom filme!");
//   } else {
//     console.log("Escolha outro filme :(");
//   }
// }

// verificaCondicoes(generoEscolhido, precoIngresso)


// desafios

// //1.
// const generoEscolhido = prompt('Qual é o gênero do filme?')
// const precoIngresso = Number(prompt('Qual o valor do ingresso?'))



// const verificaCondicoes = (gereno, preco) => {
//   if (gereno === "fantasia" && preco <= 15) {
//     const lanchinhoComprado = prompt('Qual lanchinho você vai comprar?')
//     console.log("Bom filme!")
//     console.log(`Aproveite o seu ${lanchinhoComprado}`)
//   } else {
//     console.log("Escolha outro filme :(");
//   }
// }

// verificaCondicoes(generoEscolhido, precoIngresso)


// 2.


const nomeCompleto = prompt('Nome completo')
let tipoJogo = prompt('O tipo de jogo é IN ou DO?').toLowerCase()
let etapaJogo = prompt('Qual é a etapa? SF - semi-final; DT - decisão de terceiro lugar; ou FI - final ?').toLowerCase()
const categoria = Number(prompt('Qual é a categoria? 1, 2, 3 ou 4?'))
const quantidade = Number(prompt('Qual a quantidade de ingressos?'))

function converteStrings() {
  if (tipoJogo === 'do') {
    tipoJogo = 'Nacional'
  } else {
    tipoJogo = 'Internacional'
  }

  if (etapaJogo === 'sf') {
    etapaJogo = 'Semifinais'
  } else if (etapaJogo === 'dt') {
    etapaJogo = 'Decisão do 3º lugar'
  } else if (etapaJogo === 'fi') {
    etapaJogo = 'Final'
  }
}

converteStrings()

const jogo = [{
  jogo: 'Semifinais',
  categoria1: 1320,
  categoria2: 880,
  categoria3: 550,
  categoria4: 220,
},
{
  jogo: 'Decisão do 3º lugar',
  categoria1: 660,
  categoria2: 440,
  categoria3: 330,
  categoria4: 170,
},
{
  jogo: 'Final',
  categoria1: 1980,
  categoria2: 1320,
  categoria3: 880,
  categoria4: 330,
}]

const verificaPrecoIngresso = () => {
  if (etapaJogo === 'Semifinais') {
    if (categoria === 1) {
      return jogo[0].categoria1
    } else if (categoria === 2) {
      return jogo[0].categoria2
    } else if (categoria === 3) {
      return jogo[0].categoria3
    } else if (categoria === 4) {
      return jogo[0].categoria4
    }
  }

  if (etapaJogo === 'Decisão do 3º lugar') {
    if (categoria === 1) {
      return jogo[1].categoria1
    } else if (categoria === 2) {
      return jogo[1].categoria2
    } else if (categoria === 3) {
      return jogo[1].categoria3
    } else if (categoria === 4) {
      return jogo[1].categoria4
    }
  }

  if (etapaJogo === 'Final') {
    if (categoria === 1) {
      return jogo[2].categoria1
    } else if (categoria === 2) {
      return jogo[2].categoria2
    } else if (categoria === 3) {
      return jogo[2].categoria3
    } else if (categoria === 4) {
      return jogo[2].categoria4
    }
  }
}

function saidaParaOCliente() {
  if (tipoJogo === 'Nacional') {
    console.log(`---Dados da compra---
Nome do cliente: ${nomeCompleto}
Tipo do jogo:  ${tipoJogo}
Etapa do jogo:  ${etapaJogo}
Categoria: ${categoria}
Quantidade de Ingressos: ${quantidade} ingressos
---Valores--- 
Valor do ingresso:  R$ ${verificaPrecoIngresso()}
Valor total:  R$ ${verificaPrecoIngresso() * quantidade}`)
  } else {
    console.log(`---Dados da compra---
Nome do cliente: ${nomeCompleto}
Tipo do jogo:  ${tipoJogo}
Etapa do jogo:  ${etapaJogo}
Categoria: ${categoria}
Quantidade de Ingressos: ${quantidade} ingressos
---Valores--- 
Valor do ingresso:  U$ ${(verificaPrecoIngresso() * 4.1).toFixed(2)}
Valor total:  U$ ${((verificaPrecoIngresso() * quantidade) * 4.1).toFixed(2)}`)
  }
}

saidaParaOCliente()

