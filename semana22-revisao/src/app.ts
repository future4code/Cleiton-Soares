import express, { Express } from 'express'
import cors from 'cors'
import router from './router'
import k from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export const knex = k({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
})

const app: Express = express()

app.use(express.json({limit: '50mb'}))
app.use(cors())

app.use('/', router)

app.listen(3003, () => console.log('Hello World!\n'))
