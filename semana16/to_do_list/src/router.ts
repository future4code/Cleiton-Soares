import express from 'express'

import { User } from './data/user'
import { Task } from './data/task'
import { hasToken } from './middleware/token'

const router = express.Router()

// User routes
router.get('/user', User.get)
router.get('/user/search', User.search)
router.get('/user/:id', User.getById)
router.post('/user', User.create)
router.post('/user/login', User.login)
router.put('/user/:id', User.update)
router.delete('/user/:id', User.delete)

// Task routes
// router.post('/task', hasToken(), Task.create)
router.post('/task', hasToken(), Task.create)
router.get('/task/user/:userId', hasToken(), Task.getByUserId)
router.get('/task/user', hasToken(), Task.getByLoggedUser)
router.get('/task/:taskId', hasToken(), Task.getById)

export default router
