import { Request, Response } from 'express'

export const UserController = {
  create(req: Request, res: Response) {
    const body = req.body

    res.send(body)
  },
}
