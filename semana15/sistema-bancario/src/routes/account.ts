import express, { Request, Response } from 'express'

import { AccountController } from '../controllers/accountController'

const router = express.Router()

router.get('/byId', AccountController.getAccountById)

router.post('/new', AccountController.newAccount)

export default router
