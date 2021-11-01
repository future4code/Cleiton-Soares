import * as crypto from 'crypto'
import { Request, Response } from 'express'
import { knex } from '../../connection'
import { 
  User as TypeUser,
  Task as TypeTask
} from '../../types'
import { add, format } from 'date-fns'

export class User {
  static async create(req: Request, res: Response) {
    try {
      const { name, nickname, email, password } = req.body
      const hash = crypto.createHash('sha256').update(password).digest('hex')
      const id = (
        await knex('user').insert(
          { name, nickname, email, password: hash },
          'id'
        )
      )[0]
      res.status(201).json({ id })
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(500).json({ error: error })
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const result = await knex('user')
      res.json(result)
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(500).json({ error })
    }
  }

  static async getById(req: Request, res: Response) {
    let errorCode: number = 400
    const id = req.params.id

    try {
      const response = await knex('user').where({ id })

      if (response.length > 0) {
        res.status(200).json(response)
      } else {
        errorCode = 404
        throw new Error('User not found')
      }
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(errorCode).json({ error: error })
    }
  }

  static async login(req: Request, res: Response) {
    let errorCode = 500
    try {
      const { email, password } = req.body
      const hash = crypto.createHash('sha256').update(password).digest('hex')
      const rows: TypeUser[] = await knex('user').where({
        email,
        password: hash,
      })

      if (!rows.length) throw 'Invalid credentials'

      const user: TypeUser = rows[0]
      const token = crypto
        .createHash('sha256')
        .update(`${user.id!}-${new Date().getTime()}`)
        .digest('hex')

      const expireDate = format(
        add(new Date(), { hours: 1 }),
        'yyyy-M-dd H:mm:ss'
      )

      await knex('user')
        .update({ token, token_expire: expireDate })
        .where({ id: user.id })

      delete user['password']
      res.json({ ...user, token, token_expire: expireDate })
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(errorCode).json({ error })
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const id: number = Number(req.params.id)

      for (const i of Object.keys(req.body))
        if (!req.body[i]) throw 'Cannot input empty values'

      const obj: TypeUser = req.body
      const update = await knex('user')
        .update(obj)
        .where({ id })
        .returning(['id'])

      res.status(200).json(update)
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(500).json({ error })
    }
  }

  static async search(req: Request, res: Response) {
    let errorCode = 500
    try {
      const founded = await knex('user')
        .whereRaw(`lower(name) like lower('%${req.query.query}%')`)
        .orWhereRaw(`lower(email) like lower('%${req.query.query}%')`)

      if (!founded) {
        errorCode = 404
        throw 'Unfounded user'
      }
      res.json(founded)
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(errorCode).json({ error })
    }
  }

  static async delete(req: Request, res: Response) {
    let errorCode = 500
    try {
      const id = req.params.id

      const deleted = await knex('user').where({ id }).del()

      if (!deleted) {
        errorCode = 404
        throw 'Unfounded user'
      }

      res.status(204).send()
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(errorCode).json({ error })
    }
  }

  static async getTasksByUserId(req: Request, res: Response) {
    try {
      const userId = req.params.userId

      const user = await knex('user').where({ id: userId })
      if (!user) throw 'Unfounded user'

      const tasks: TypeTask[] = await knex('user_task')
        .select('task.*')
        .leftJoin('task', 'task.id', 'user_task.task_id')
        .where('user_id', userId)

      res.json(tasks)
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(500).json({ error })
    }
  }

  static async getTasksByLoggedUser(req: Request, res: Response) {
    try {
      const user = res.locals.user
  
      const tasks: TypeTask[] = await knex('user_task')
        .select('task.*')
        .leftJoin('task', 'task.id', 'user_task.task_id')
        .where('user_id', user.id)
  
      res.json(tasks)
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(500).json({ error })
    }
  }

}