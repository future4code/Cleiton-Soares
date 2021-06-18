// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Diga a altura do retangulo'))
  const largura = Number(prompt('Diga a largura do retangulo'))
  const area = altura * largura
  console.log(area)

}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Qual é o ano atual?'))
  const anoNascimento = Number(prompt('Em que ano você nasceu?'))
  const idadeUsuario = anoAtual - anoNascimento

  console.log(idadeUsuario)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura ** 2)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Escreva seu nome')
  const idade = prompt('Escreva sua idade')
  const email = prompt('Escreva seu e-mail')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Digite uma cor favorita')
  const cor2 = prompt('Digite outra')
  const cor3 = prompt('Agora mais uma')

  let coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = string.toUpperCase()
  return string

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const vendasNecessarias = custo / valorIngresso
  return vendasNecessarias

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const temp = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = temp

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()
  return string1 == string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Qual é o atual?'))
  const anoDeNascimento = Number(prompt('Em que ano você nasceu?'))
  const anoEmissaoCarteira = Number(prompt('Em que ano sua carteira foi emitida?'))
  const idadeUsuario = anoAtual - anoDeNascimento
  const tempoCarteiraEmitida = anoAtual - anoEmissaoCarteira

  const menorIgual20 = idadeUsuario <= 20 && tempoCarteiraEmitida >= 5
  const menorIgual50 = idadeUsuario <= 50 && tempoCarteiraEmitida >= 10
  const maior50 = idadeUsuario > 50 && tempoCarteiraEmitida >= 15


  console.log(menorIgual20 || menorIgual50 || maior50)


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiplos = ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0
  return multiplos

}

checaAnoBissexto(2020)

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maior18 = prompt('Você tem mais de 18 anos?').includes('sim')
  const escolaridade = prompt('Você possui ensino médio completo?').includes('sim')
  const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?').includes('sim')

  console.log(maior18 && escolaridade && disponibilidade)  


}