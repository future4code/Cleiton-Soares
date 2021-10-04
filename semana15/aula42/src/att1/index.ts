//A) aparece um erro informando que o tipo 'number' não pode ser atribuído ao tipo 'string'.
// const minhaString: string = 2

//B)
const meuNumero: number | string = 5

//C)

enum cores {
  VERMELHO = 'vermelho',
  LARANJA = 'laranja',
  AMARELO = 'amarelo',
  VERDE = 'verde',
  AZUL = 'azul',
  ANIL = 'anil',
  VIOLETA = 'violeta',
}

type pessoa = {
  nome: string,
  idade: number,
  corFavorita: cores,
}

const joao: pessoa = {
  corFavorita: cores.AMARELO,
  idade: 23,
  nome: 'João',
}
const jose: pessoa = {
  corFavorita: cores.AZUL,
  idade: 16,
  nome: 'José',
}
const maria: pessoa = {
  corFavorita: cores.LARANJA,
  idade: 34,
  nome: 'Maria',
}
