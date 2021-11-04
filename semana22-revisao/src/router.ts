import express, { Router, Request, Response } from 'express'
import { knex } from './app'
import { Utils } from './utils/Utils'

const router: Router = express.Router()

router.get('/pokemon', )
router.get('/pokemon/search', )
router.get('/pokemon/search/type', )
router.get('/pokemon/:id', )

router.get('/pokedex/', )
router.get('/pokedex/search', )
router.post('/pokedex/add/:id', )
router.delete('/pokedex/remove/:id', )


export default router
