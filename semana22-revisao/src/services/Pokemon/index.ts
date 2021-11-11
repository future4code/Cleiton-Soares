import { Request, Response } from 'express';
import { knex } from '../../app';

export class Pokemon {
  static async getAll(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const pokemons = await knex('pokemon_go');
      if (!pokemons.length) throw 'Bad request';
      res.json(pokemons);
    } catch (error) {
      res.status(errorCode).send(error);
    }
  }

  static async getById(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const id = req.params.id;
      const pokemon = await knex('pokemon_go').where({ id });
      if (!pokemon.length) throw 'Bad request';
      res.json(pokemon);
    } catch (error) {
      res.status(errorCode).send(error);
    }
  }

  static async search(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const { search } = req.query;
      const result = knex('pokemon_go').where({ name: search });
    } catch (error) {
      res.status(errorCode).send(error);
    }
  }

  static async searchByType(req: Request, res: Response) {
    let errorCode = 400;
    try {
    } catch (error) {
      res.status(errorCode).send(error);
    }
  }
}
