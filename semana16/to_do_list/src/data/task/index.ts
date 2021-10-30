import { Request, Response } from 'express'
import { knex } from '../../connection'
import { User as TypeUser, Task as TypeTask } from '../../types'
import { format } from 'date-fns'

export class Task {
  static async create(req: Request, res: Response) {
    try {
      const user: TypeUser = res.locals.user
      const { title, description, status, limit_date } = req.body

      if (!['To do', 'Doing', 'Done'].includes(status))
        throw 'Invalid status. Try [To do, Doing or Done]'

      const taskId = (
        await knex('task').insert({
          title,
          description,
          status,
          limit_date,
          creator_user_id: user.id,
        })
      )[0]

      await knex('user_task').insert({
        user_id: user.id,
        task_id: taskId,
      })

      res.status(201).send()
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(500).json({ error })
    }
  }

  static async getById(req: Request, res: Response) {
    let errorCode = 500
    try {
      const id = req.params.taskId
      const founded = await knex('task').where({ id })

      if (!founded.length) {
        errorCode = 404
        throw 'Task not found'
      }

      res.json(founded[0])
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(errorCode).json({ error })
    }
  }

  static async getByUserId(req: Request, res: Response) {
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

  static async getByLoggedUser(req: Request, res: Response) {
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
