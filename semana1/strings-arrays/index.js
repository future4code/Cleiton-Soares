// 1. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

// let array
// console.log('a. ', array) // a. undefined

// array = null
// console.log('b. ', array) // b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11

// let i = 0
// console.log('d. ', array[i]) //d. 3

// array[i + 1] = 19
// console.log('e. ', array) //e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

// const valor = array[i + 6]
// console.log('f. ', valor) //f. 9


//2. Leia o código abaixo com atenção

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//SUBI NUM ÔNIBUS EM MIRROCOS 27


//ECERCÍCIO 1 - ESCRITA DE CÓDIGO
// const nome = prompt('Digite seu nome')
// const email = prompt('Digite seu e-mail')

// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)


//ECERCÍCIO 2 - ESCRITA DE CÓDIGO
// let comidasPreferidas = ['feijoada', 'strogonoff', 'churrasco', 'japonêsa', 'risoto']
// console.log(comidasPreferidas)
// console.log(`Essas são minhas comidas preferidas:
// ${comidasPreferidas[0]}
// ${comidasPreferidas[1]}
// ${comidasPreferidas[2]}
// ${comidasPreferidas[3]}
// ${comidasPreferidas[4]}
// `)

// const comidaFavoritaUsuario = prompt('Qual é a sua comida favorita?')
// comidasPreferidas[1] = comidaFavoritaUsuario
// console.log(comidasPreferidas)


//ECERCÍCIO 3 - ESCRITA DE CÓDIGO
// let listaDeTarefas = []

// const tarefa1 = prompt('Diga 3 tarefas que você precisa realizar hoje. A primeira aqui.')
// const tarefa2 = prompt('A segunda aqui.')
// const tarefa3 = prompt('E a terceira aqui.')

// listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
// console.log(listaDeTarefas)

// const tarefaRealizada = prompt('Já realizou alguma delas? 1, 2 ou 3?')-1
// listaDeTarefas.splice(tarefaRealizada, 1)

// console.log(listaDeTarefas)


//------------desafio 1------------
// let fraseUser = prompt('Digite uma frase.')
// console.log(fraseUser)
// console.log(fraseUser.split([' ',]))


//------------desafio 2------------
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(frutas)
console.log('Tamanho do array:',frutas.length, '- Índice "Abacaxi":',frutas.indexOf('Abacaxi'))