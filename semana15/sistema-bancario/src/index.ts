import express, { Request, Response, Express } from 'express'
import cors from 'cors'

import accountRouter from './routes/account'
import userRouter from './routes/user'

const app: Express = express()
app.use(express.json())
app.use(cors())

// Routes:
app.use('/account', accountRouter)
app.use('/user', userRouter)

app.listen(3003)
