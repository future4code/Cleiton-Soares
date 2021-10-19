import express from 'express'
import { UserController } from '../controllers/userController'

const router = express.Router()

router.post('/new', UserController.create)

export default router
