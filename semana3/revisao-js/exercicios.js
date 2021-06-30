// EXERCÍCIO 01
function inverteArray(array) {
  const arr = []
  for (let i = array.length - 1; i >= 0 ; i--) {
    arr.push(array[i])
  }
  return arr
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const novoArray = []
  for (const i of array) {
    if (i % 2 === 0) {
      novoArray.push(i ** 2)
    }
  }
  return novoArray
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const novoArray = []
  for (const i of array) {
    if (i % 2 === 0) {
      novoArray.push(i)
    }
  }
  return novoArray

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for (const i of array) {
    if (i > maiorNumero) {
      maiorNumero = i
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  let arrayRespostas = [false, false, true, true, true]
  return arrayRespostas

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let arr = []

  for (let i = 0; i < n; i++) {

    if (arr[0] === []) {
      arr.push(0)
    }

    if (arr[arr.length - 1] % 2 === 0) {
      arr.push((arr.length - 1) + 2)
    } else {
      arr.push((arr.length - 1) + 1)

    }

  }

  return arr

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a == b && a == c) {
    return 'Equilátero'
  } else if (a != b && a != c && b != c) {
    return 'Escaleno'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // let menor

  // let x
  // let y
  // let z
  
  // if (num1 > num2) {
  //   x = num1
  //   menor = num2
  // } else {
  //   x = num2
  //   menor = num1
  // }

  // y = x % menor === 0

  // z = x - menor

  // let objeto = {
  //   maiorNumero: x,
  //   maiorDivisivelPorMenor: y,
  //   diferenca: z
  // }

  // return objeto

}

console.log(comparaDoisNumeros(10, 5));

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
