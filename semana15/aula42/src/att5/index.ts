type resultados = {
  soma: number
  sub: number
  mult: number
  maior: number
}

const retornaResultados = (num1: number, num2: number): resultados => {
  const soma: number = num1 + num2
  const sub: number = num1 - num2
  const mult: number = num1 * num2
  // const maior: number = num1 > num2 ? num1 : num2
  const maior = (): number => {
    if (num1 > num2) {
      return num1
    } else {
      return num2
    }
  }

  return {
    maior: maior(),
    mult: mult,
    soma: soma,
    sub: sub,
  }
}

console.log(retornaResultados(1, 2))
