type estatisticas = {
  maior: number,
  menor: number,
  media: number,
}

type amostraDeDados = {
  numeros: number[],
  obterEstatisticas: {
    maior: number,
    menor: number,
    media: number,
  }
}

function obterEstatisticas(numeros: number[]): estatisticas {
  const numerosOrdenados = numeros.sort((a, b) => a - b)

  let soma: number = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas: estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  }

  return estatisticas
}
