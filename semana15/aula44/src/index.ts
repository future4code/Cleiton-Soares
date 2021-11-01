import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number
  name: string
  email: string
  type: UserType
  age: number
}

enum UserType {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL',
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: 'Alice',
    email: 'alice@email.com',
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@email.com',
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: 'Coragem',
    email: 'coragem@email.com',
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: 'Dory',
    email: 'dory@email.com',
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 5,
    name: 'Elsa',
    email: 'elsa@email.com',
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: 'Fred',
    email: 'fred@email.com',
    type: UserType.ADMIN,
    age: 60,
  },
]

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

app.get('/users', (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    if (!users) {
      throw new Error('Users not found.')
    }
    res.status(200).send(users)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

// app.get('/users/:type', (req: Request, res: Response) => {
//   let errorCode: number = 400
//   try {
//     const type: string = req.params.type.toUpperCase()
//     if (type !== UserType.ADMIN && type !== UserType.NORMAL) {
//       throw new Error('Type not found. Must be ADMIN or NORMAL.')
//     }
//     const result: User[] = users.filter((user) => user.type === type)

//     if (!result.length) {
//       errorCode = 404
//       throw new Error('No users of this type.')
//     }
//     res.status(200).send(result)

//   } catch (error: any) {
//     res.status(errorCode).send({ message: error.message })
//   }
//   //2.
//   //A) Passei o parametro de type para a requisição por um path param, pois assim eu garanto que só haverá um parametro.
//   //B) Usei um enum para garantir apenas types vávlidos.
// })


app.get('/users/search?name', (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const user: string = req.params.query
    console.log(req.query)
    res.end()

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
  //3.
  //A) Acredito que o parametro mais utilizado nesse caso seja o path params mesmo.
})
