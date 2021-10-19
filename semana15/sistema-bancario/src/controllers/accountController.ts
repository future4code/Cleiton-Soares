import { Request, Response } from 'express'

export const AccountController = {
  getAccountById(req: Request, res: Response) {
    try {
      throw 'Has an error'
      res.json({
        id: 2,
        name: 'Banana',
      })
    } catch (err: any) {
      res.status(404).json({
        error: 404,
        message: err,
      })
    }
  },

  newAccount(req: Request, res: Response) {
    try {
      const body = req.body
      res.status(200).json(body)
      throw 'Has an error'
    } catch (err) {
      res.status(404).json({
        error: 404,
        message: err,
      })
    }
  },
}
