### Exercício 1
a) O float é usado para definir numeros com casas decimais. varchar trata-se de strings e o date serve para dados em formato de data.
b) SHOW DATABASES mostra uma tabela com os databases disponíveis na workbench.
SHOW TABLES mostra as tabelas disponíveis no database selecionado.
c) O comando describe mostra uma tabela com informações de cada coluna da tabela, mostrando informações como o valor default, se é nulo ou não e o tipo do dado que a coluna deve receber.

### Exercício 2
b) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
Este erro aconteceu porque a coluna id esta com o atributo Primary key, o que significa que o id de cada dado da tabela não pode ser duplicado.

c) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
Isto aconteceu porque tem mais valores do que os que foram passados por parametro.
`INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);`

d) Código de erro: 1364. O campo 'nome' não tem um valor padrão.
A coluna nome é obrigatória por ter a propriedade NOT NULL, portanto, deve ter um valor padrão ou ser passada quando criado o dado.
`INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Bruna Marquesine",
  400000,
  "1949-04-18", 
  "male"
);`

e) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
a data não era uma string.
`INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);`