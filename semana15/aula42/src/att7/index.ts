enum desconto {
  Verao = 0.05,
  Inverno = 0.1,
  Banho = 0.04,
  Intimas = 0.07,
}

enum classificacao {
  Verao = 'Verao',
  Inverno = 'Inverno',
  Banho = 'Banho',
  Intimas = 'Intimas',
}

type produto = {
  nome: string
  preco: number
  classificacao: classificacao
  precoComDesconto?: number
}

const produtos: produto[] = [
  {
    nome: 'bermuda',
    preco: 10,
    classificacao: classificacao.Verao,
  },
  {
    nome: 'sunga',
    classificacao: classificacao.Banho,
    preco: 15,
  },
  {
    nome: 'jaqueta',
    preco: 62,
    classificacao: classificacao.Inverno,
  },
  {
    nome: 'sutiã',
    preco: 22,
    classificacao: classificacao.Intimas,
  },
]

function aplicaDescontos(array: produto[]): produto[] {
  return array.map((produto) => {
    return {
      ...produto,
      precoComDesconto:
        produto.preco - produto.preco * desconto[produto.classificacao],
    }
  })
}

console.log(aplicaDescontos(produtos))

// const produtosComDesconto = (array: produto[]): produto[] => {
//   return array.map((produto) => {
//     return {
//       ...produto,
//       precoComDesconto:
//         produto.preco - produto.preco * desconto[produto.classificacao],
//     }
//   })
// }

// console.log(produtosComDesconto(produtos))
