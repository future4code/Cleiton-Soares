import express, { Express } from 'express'
import cors from 'cors'
import router from './router'

const app: Express = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(3003, () => console.log('Server is running in http://localhost:3003\n'))

export default app;