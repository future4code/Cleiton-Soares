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

const geraCartasJogador = () => {
  cartas = [comprarCarta(), comprarCarta()];
  let achou = false;

  while (!achou) {
    if (cartas === "[{valor: 11}, {valor: 11}]") {
      cartas = [comprarCarta(), comprarCarta()];
    } else {
      achou = true;
      return cartas;
    }
  }
};

const cartasJogador = geraCartasJogador();
const pontosJogador = cartasJogador[0].valor + cartasJogador[1].valor;

const geraCartasPc = () => {
  cartas = [comprarCarta(), comprarCarta()];
  let achou = false;

  while (!achou) {
    if (cartas === "[{valor: 11}, {valor: 11}]") {
      cartas = [comprarCarta(), comprarCarta()];
    } else {
      achou = true;
      return cartas;
    }
  }
};

const cartasPc = [comprarCarta(), comprarCarta()];
const pontosPc = cartasPc[0].valor + cartasPc[1].valor;

if (
  confirm(`Suas cartas são ${cartasJogador[0].texto} ${cartasJogador[1].texto}. A carta revelada do computador é ${cartasPc[0].texto}
Deseja comprar mais uma carta?`)
) {
  cartasJogador.push(comprarCarta());
  pontosJogador =
    cartasJogador[0].valor + cartasJogador[1].valor + cartasJogador[2].valor;
  if (
    confirm(`Suas cartas são ${cartasJogador[0].texto} ${cartasJogador[1].texto} ${cartasJogador[2].texto}. A carta revelada do computador é ${cartasPc[0].texto}
  Deseja comprar mais uma carta?`)
  ) {
  }
}
