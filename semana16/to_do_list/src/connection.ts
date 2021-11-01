import knexInstance from 'knex'
import dotenv from "dotenv";

dotenv.config();

export const knex = knexInstance({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306,
    multiStatements: true
  }
})