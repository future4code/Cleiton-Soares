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

  static async addUser(req: Request, res: Response) {
    let errorCode = 500
    try {
      const userId = Number(req.params.userId)
      const taskId = Number(req.params.taskId)

      if (!userId || !taskId) {
        errorCode = 400
        throw 'Invalid user or task identifier'
      }

      const user: TypeUser[] = await knex('user').where({ id: userId })
      const task: TypeTask[] = await knex('task').where({ id: taskId })

      if (!user.length || !task.length) {
        errorCode = 400
        throw 'Unfounded user or task'
      }

      const userTask = await knex('user_task').where({
        user_id: userId,
        task_id: taskId,
      })

      if (userTask.length) {
        errorCode = 400
        throw 'User already registered to this task'
      }

      await knex('user_task').insert({
        user_id: userId,
        task_id: taskId,
      })

      res.status(201).send()
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(500).json({ error })
    }
  }

  static async getUsers(req: Request, res: Response) {
    try {
      const taskId = req.params.taskId

      const users = await knex('user_task')
        .select('user.id', 'user.name', 'user.nickname', 'user.email')
        .leftJoin('user', 'user.id', 'user_task.user_id')
        .where({ task_id: taskId })

      res.status(200).json(users)
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(500).json({ error })
    }
  }

  static async filter(req: Request, res: Response) {
    try {
      let objWhere = {} as TypeTask
      const filters: TypeTask = req.body

      const promise = knex('task')

      if (filters.status) {
        if (!['To do', 'Doing', 'Done'].includes(filters.status))
          throw 'Invalid status. Try [To do, Doing or Done]'
        promise.where('status', '=', filters.status)
      }
      if (filters.title)
        promise.whereRaw(`lower(title) like lower('%${filters.title}%')`)
      if (filters.description)
        promise.whereRaw(
          `lower(description) like lower('%${filters.description}%')`
        )
      if (filters.creator_user_id)
        promise.where('creator_user_id', '=', filters.creator_user_id)

      const users = await promise

      res.status(200).json(users)
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(500).json({ error })
    }
  }

  static async delete(req: Request, res: Response) {
    let errorCode = 500
    try {
      const id = req.params.id

      const deleted = await knex('task').where({ id }).del()

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

  static async deleteUser(req: Request, res: Response) {
    let errorCode = 500
    try {
      const userId = Number(req.params.userId)
      const taskId = Number(req.params.taskId)

      if (!userId || !taskId) {
        errorCode = 400
        throw 'Invalid user or task identifier'
      }

      const deleted = await knex('user_task')
        .where({
          task_id: taskId,
          user_id: userId,
        })
        .del()

      res.status(204).send()
    } catch (error: any) {
      if (error.sqlMessage) error = error.sqlMessage
      res.status(errorCode).json({ error })
    }
  }
}
