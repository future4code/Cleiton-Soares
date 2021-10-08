import express, { Request, Response, Express } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { countries } from './data'
import { country } from './types'

const app: Express = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost: ${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

app.get('/countries', (req: Request, res: Response) => {
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }))
  res.status(200).send(result)
})

app.get('/countries/search', (req: Request, res: Response) => {
  const result: country[] | undefined = countries.filter(
    (country) =>
      country.name.includes(req.query.name as string) &&
      country.capital.includes(req.query.capital as string) &&
      country.continent.includes(req.query.continent as string)
  )
  if (result.length) {
    res.status(200).send(result)
  } else {
    res.status(400).send('not found')
  }
})

app.get('/countries/:id', (req: Request, res: Response) => {
  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  )
  if (result) {
    res.status(200).send(result)
  } else {
    res.status(400).send('Not found')
  }
})
