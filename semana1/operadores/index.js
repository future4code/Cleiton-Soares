// exercicio 1
// a. false
// b. false
// c. true
// d. boolean

// exercicio 2
// aparecerá os numeros digitados pelo usuário concatenados e não somados porque ele não ulitizou a função Number(), e o prompt converte toda informação imputada para string.

// exercicio 3

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)


// exercício 1

// const idade = Number(prompt("Qual é a sua idade?"))
// const idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo ou amiga?"))
// console.log('Sua idade é maior do que a do seu melhor amigo?', idade > idadeAmigo)
// console.log('A diferença das idades é:', idade - idadeAmigo)


// exercicio 2

// const numeroPar = Number(prompt('Insira um número par'))
// console.log(numeroPar%2)

// o padrão é que o módulo de todos é 0, pois todo número par dividido por 2 não tem resto não tem resto.
// sempre que o usuário escrever um número ímpar, o módulo será 1 pois este é o resto de qualquer número ímpar dividido por 2.


// exercicio 3

// const idadeAnos = Number(prompt('Quantos anos você tem?'))
// console.log('Idade:', idadeAnos)

// const idadeMeses = idadeAnos * 12
// console.log('Você tem:', idadeMeses, 'meses de vida')

// const idadeDias = idadeMeses * 30
// console.log('Você tem:', idadeDias, 'dias de vida')

// const idadeHoras = idadeDias * 24
// console.log('Você tem:', idadeHoras, 'horas de vida')


//exercicio 4

// var primeiroNumero = Number(prompt('Digite um número'))
// var segundoNumero = Number(prompt('Digite outro número'))

// console.log('O primeiro numero é maior que segundo?', primeiroNumero > segundoNumero)
// console.log('O primeiro numero é igual ao segundo?', primeiroNumero == segundoNumero)
// console.log('O primeiro numero é divisível pelo segundo?', primeiroNumero % segundoNumero == 0)
// console.log('O segundo numero é divisível pelo primeiro?', segundoNumero % primeiroNumero == 0)


//desafio 1

// console.log("" + ((77 - 32) * (5 / 9) + 273.15) + "K")
// console.log("" + ((80) * (9 / 5) + 32) + "ºF")
// console.log("" + ((30) * (9 / 5) + 32) + "ºF e " + ((86 - 32) * (5 / 9) + 273.15) + "K")

// const grausCelsius = +(prompt("Digite o valor em graus Celsius"))

// const grausFahrenheit = (grausCelsius) * (9 / 5) + 32

// const grausKelvin = (grausFahrenheit - 32) * (5 / 9) + 273.15

// console.log("" + grausCelsius + "ºC = " + grausFahrenheit + "ºF = " + grausKelvin + "K")


//desafio 2

// const quilowattsConsumido = Number(prompt('Qual a quantidade de quilowatts consumida?'))
// const precoQuilowatt = 0.05

// const resultadoQuilowatt = quilowattsConsumido * precoQuilowatt

// const porcentagemDesconto = Number(prompt("Digite o valor do desconto em porcentagem (somente números)") / 100)

// const desconto = porcentagemDesconto * resultadoQuilowatt

// console.log('O valor a ser pago é: ', resultadoQuilowatt) // 280 kW custa 14 reais

// console.log('Com o desconto o valor cai para', resultadoQuilowatt - desconto)


//desafio 3

//a)
const valorLibra = Number(prompt('Insira um valor em libras'))
const libraParaKilo = valorLibra / 2.205

console.log(valorLibra + "lb equivalem a " + libraParaKilo.toFixed(2) + " kg")


//b)
const valorOnca = Number(prompt('Insira um valor em onça'))
const oncaParaKilo = valorOnca / 3.527

console.log(valorOnca + "oz equivalem a " + oncaParaKilo.toFixed(2) + " kg")


//c)
const valorMilha = Number(prompt('Insira um valor em milha'))
const milhaParaMetro = valorMilha * 1609

console.log(valorMilha + "mi equivalem a " + milhaParaMetro + " m")


//d)
const valorPes = Number(prompt('Insira um valor em pés'))
const pesParaMetro = valorPes / 3.281

console.log(valorPes + "ft equivalem a " + pesParaMetro.toFixed(2) + " m")


//e)
const valorGalao = Number(prompt('Insira um valor em galão'))
const galaoParaLitro = valorGalao * 3.785

console.log(valorGalao + "gal equivalem a " + galaoParaLitro + "l")


//f)
const valorXicara = Number(prompt('Insira um valor em xícaras'))
const xicaraParaLitro = valorXicara * (6/25)

console.log(valorXicara + "xic equivalem a " + xicaraParaLitro + "l")