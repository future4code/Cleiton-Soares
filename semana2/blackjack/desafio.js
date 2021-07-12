/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const geraDuasCartas = () => {
  cartas = [comprarCarta(), comprarCarta()];
  let achou = false;


  while (!achou) {
    if (cartas[0].valor === 11 && cartas[1].valor === 11) {
      cartas = [comprarCarta(), comprarCarta()];
    } else {
      achou = true;
      return cartas;
    }
  }
};

const retornaTextoArray = (array) => {
  let contador = 0
  let frase = ""

  while (contador != array.length) {
    if (contador === array.length - 1) {
      frase += array[contador].texto
      contador++
    } else {
      frase += array[contador].texto + " "
      contador++
    }
  }
  return frase
}

const somaValoresArray = (array) => {
  let contador = array.length
  let pontos = 0

  while (contador != 0) {
    pontos += array[contador - 1].valor
    contador--
  }
  return pontos
}


const retornaTextoConfirmacao = () => {
  return `Suas cartas são ${retornaTextoArray(cartasJogador)}. A carta revelada do computador é ${cartasPc[0].texto}
Deseja comprar mais uma carta?`
}

const retornaResultado = () => {
  if (pontosJogador > pontosPc && pontosJogador <= 21) {
    return `Suas cartas são ${retornaTextoArray(cartasJogador)}. Sua pontuação é ${pontosJogador}
As cartas do computador são ${retornaTextoArray(cartasPc)}. A pontuação do computador é ${pontosPc}
O usuário ganhou`
  } else if (pontosJogador === pontosPc) {
    return `Suas cartas são ${retornaTextoArray(cartasJogador)}. Sua pontuação é ${pontosJogador}
As cartas do computador são ${retornaTextoArray(cartasPc)}. A pontuação do computador é ${pontosPc}
Foi empate`
  } else {
    return `Suas cartas são ${retornaTextoArray(cartasJogador)}. Sua pontuação é ${pontosJogador}
As cartas do computador são ${retornaTextoArray(cartasPc)}. A pontuação do computador é ${pontosPc}
O computador ganhou`
  }
}


const cartasJogador = geraDuasCartas();
let pontosJogador = somaValoresArray(cartasJogador)

const cartasPc = geraDuasCartas();
let pontosPc = somaValoresArray(cartasPc)



if (confirm(retornaTextoConfirmacao())) {
  cartasJogador.push(comprarCarta())
  pontosJogador = somaValoresArray(cartasJogador)

  if (pontosJogador > 21) {
    alert(retornaResultado())
  }

  while (pontosJogador < 21) {
    if (confirm(retornaTextoConfirmacao())) {
      cartasJogador.push(comprarCarta())
      pontosJogador = somaValoresArray(cartasJogador)

      if (pontosJogador > 21) {
        alert(retornaResultado())
        break
      }
    } else{
      if (pontosJogador < 21) {
        while ((pontosPc < pontosJogador) && pontosPc < 21) {
          cartasPc.push(comprarCarta())
          pontosPc = somaValoresArray(cartasPc)
          if (pontosPc >= pontosJogador) {
            alert(retornaResultado())
            break
          }
        }
      }
      break
    }
  }


} else {
  if (pontosJogador < 21) {
    if ((pontosPc > pontosJogador) && pontosPc <= 21) {
      alert(retornaResultado())
    }
    while ((pontosPc < pontosJogador) && pontosPc < 21) {
      cartasPc.push(comprarCarta())
      pontosPc = somaValoresArray(cartasPc)

      if (pontosPc >= pontosJogador) {
        alert(retornaResultado())
        break
      }
    }
  }
}
