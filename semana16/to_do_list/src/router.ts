import express, { Router } from 'express'
import app from './app'
import { User } from './data/user'
import { Task } from './data/task'
import { hasToken } from './middleware/token'

const router = express.Router()

// User routes
router.get('/user', hasToken(), User.get)
router.get('/user/search', hasToken(), User.search)
router.get('/user/tasks', hasToken(), User.getTasksByLoggedUser)
router.get('/user/tasks/:userId', hasToken(), User.getTasksByUserId)
router.get('/user/:id', hasToken(), User.getById)
router.put('/user/:id', hasToken(), User.update)
router.post('/user', User.create)
router.post('/user/login', User.login)
router.delete('/user/:id', hasToken(), User.delete)

// Task routes
router.get('/task/filter', hasToken(), Task.filter)
router.get('/task/:taskId/users', hasToken(), Task.getUsers)
router.get('/task/:taskId', hasToken(), Task.getById)
router.post('/task/:taskId/user/add/:userId', hasToken(), Task.addUser)
router.post('/task', hasToken(), Task.create)
router.delete('/task/:id', hasToken(), Task.delete)
router.delete('/task/:taskId/user/remove/:userId', hasToken(), Task.deleteUser)

export default router
