import { NextFunction, Request, Response } from 'express'
import { User } from '../types'
import { knex } from '../connection'

export function hasToken() {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization
      if (!token) throw 'Empty access token'

      const user: User = (await knex('user').where({ token }))[0]
      if (!user) throw 'Invalid access token'
      
      const now = new Date()
      const nowGMT = new Date(now.getTime() - now.getTimezoneOffset() * 60000)

      if (nowGMT.getTime() > (new Date(user.token_expire!).getTime()))
        throw 'Access token has been expired'

      res.locals.user = user
      next()
    } catch (error) {
      res.status(401).json({ error })
    }
  }
}