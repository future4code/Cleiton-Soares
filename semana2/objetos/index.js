//Interpretação
//1.
// a) Matheus Nachtergaele, Virginia Cavendish, canal: "Globo", horario: "14h"

//2. a)
// console.log(cachorro)
  // nome: "Juca", idade: 3, raca: "SRD"

// console.log(gato)
  // nome: "Juba", idade: 3, raca: "SRD"

// console.log(tartaruga)
  // nome: "Jubo", idade: 3, raca: "SRD"

// b)
//clona o objeto que será mencionado em seguida.

//3
// a)
//false
//undefined

// b)
//Isso aconteceu porque o que foi passado como parametro para a função era uma propriedade inexistente, então não tinha o que ela retornar.

//ESCRITA DE CÓDIGO

// 1.
  //a)
    const pessoa = {
      nome:"Amanda",
      apelidos: ["Amandinha", "Mandinha", "Mandi"]
    }

    const imprimeApresentacao = (nome, apelido1, apelido2, apelido3) => {
      console.log(`Eu sou ${nome}, mas pode me chamar de: ${apelido1}, ${apelido2} ou ${apelido3}.`)
    }

    imprimeApresentacao(pessoa.nome, pessoa.apelidos[0], pessoa.apelidos[1], pessoa.apelidos[2])

  //b)
    const pessoa2 = {...pessoa, apelidos: ["Amandita", "Dita", "Mah"]}

    imprimeApresentacao(pessoa2.nome, pessoa2.apelidos[0], pessoa2.apelidos[1], pessoa2.apelidos[2])


// 2.
  const people1 = {
    nome: "Bruno",
    idade: "23",
    profissao: "Instrutor"
  }

  const people2 = {
    nome: "Paulo",
    idade: "25",
    profissao: "Desenvolvedor"
  }


  const retornaInfo = (people) => {
    return [people.nome, people.nome.length, people.idade, people.profissao, people.profissao.length]
    
  }

  console.log(retornaInfo(people1));
  console.log(retornaInfo(people2));



//3.
  const carrinho = []

  const fruta1 = {
    nome: "Bananinha",
    disponibilidade: true
  }
  const fruta2 = {
    nome: "Abacati",
    disponibilidade: true
  }
  const fruta3 = {
    nome: "Melancia",
    disponibilidade: true
  }

  const retornaDisponibilidade = (fruta) =>{
    fruta.disponibilidade = !fruta.disponibilidade
    return fruta
  }

  retornaDisponibilidade(fruta3)

  const colocaFrutaNoCarrinho = (fruta) =>{
    carrinho.push(fruta)
  }

  colocaFrutaNoCarrinho(fruta1)
  colocaFrutaNoCarrinho(fruta2)
  colocaFrutaNoCarrinho(fruta3)

  console.log(carrinho);


//Desafio
  //1.
    const imprimeInfoUsuario = () => {
      const nome = prompt('Qual seu nome?')
      const idade = prompt('Qual sua idade?')
      const profissao = prompt('Qual sua profissão?')

      const pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
      }

      console.log(pessoa);

    }

    imprimeInfoUsuario()

//2
  console.log('Desafio 2');

  const filme1 = {
    nome: "Guardiões da Galaxia",
    anoDeLançamento: 2014
  }

  const filme2 = {
    nome: "Godzilla vs Kong",
    anoDeLançamento: 2021
  }

  const comparaFilmes = (filme1, filme2) =>{
    console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.anoDeLançamento < filme2.anoDeLançamento}`);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoDeLançamento == filme2.anoDeLançamento}`);
  }

  comparaFilmes(filme1, filme2)

