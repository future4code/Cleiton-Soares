```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contador = 0

  for (const i of arrayDeNumeros) {
    if (numeroEscolhido === i) {
      contador ++
    }
  }

    if (contador === 0) {
      return "Número não encontrado"
    } else {
      return `O número ${numeroEscolhido} aparece ${contador}x`
    }
}
```