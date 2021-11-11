import express, { Router, Request, Response } from 'express'
import { Pokedex } from './services/Pokedex/Index'
import { Pokemon } from './services/Pokemon/index'

const router: Router = express.Router()

router.get('/pokemon', Pokemon.getAll)
router.get('/pokemon/search', Pokemon.search)
router.get('/pokemon/search/type', Pokemon.searchByType)
router.get('/pokemon/:id', Pokemon.getById)

router.get('/pokedex/', Pokedex.getAll)
router.get('/pokedex/search', Pokedex.search)
router.get('/pokedex/search/:id', Pokedex.searchById)
router.post('/pokedex/add/:id', Pokedex.addById)
router.delete('/pokedex/remove/:id', Pokedex.RemoveById)

export default router
