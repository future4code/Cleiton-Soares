const k = require('knex')
const dotenv = require('dotenv')
const XLSX = require('xlsx');
const path = require('path')
const uuid = require('uuid')

dotenv.config()

const knex = k({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
})

const filename = __dirname + path.sep + 'pokemon_go.xlsx'
const workbook = XLSX.readFile(filename);
const sheetName = (workbook.SheetNames)[0];
let pokemons = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {defval: ""});

pokemons = [pokemons[7], pokemons[8]];

(async () => {

  for (const pokemon of pokemons) {

    await knex('pokemon_go').insert({
      id: uuid.v4(),
      name: pokemon.Name,
      type1: pokemon['Type 1'],
      type2: pokemon['Type 2'],
      weather1: pokemon['Weather 1'],
      weather2: pokemon['Weather 2'],
      status_total: pokemon['STAT TOTAL'],
      attack: pokemon.ATK,
      defense: pokemon.DEF,
      stamina: pokemon.STA,
      legendary: pokemon.Legendary,
      not_gettable: pokemon['Not-Gettable'],
      external_id: pokemon.Row,
    })
  }

  process.exit(0)

})();

