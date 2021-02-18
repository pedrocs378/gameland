import { Request, Response } from 'express'
import { getMongoRepository } from 'typeorm'

import Game from '../../typeorm/schemas/Game'
import { GameObject } from '../../typeorm/schemas/GameObject'

import igdbConfig from '@config/igdb'

export default class GamesController {
	
	public async index(request: Request, response: Response): Promise<Response> {
		const { id } = request.params

		const { api } = igdbConfig

		const apiResponse = await api.post(
			'/games',
			`fields *, cover.*, themes.*, genres.*, involved_companies.*, involved_companies.company.*; where id = ${id};`
		)

		console.log(apiResponse.data[0].involved_companies)
		console.log('STATUS:', apiResponse.status)

		return response.json(apiResponse.data[0])
	} 

	public async show(request: Request, response: Response): Promise<Response> {
		const { q } = request.query
		const { id: user_id } = request.user

		const { api } = igdbConfig

		const apiResponse = await api.post<GameObject[]>(
			'/games',
			`fields name, rating, cover.*; limit 100; where rating != null & cover != null & name != null; search "${q}";`
		)

		const gamesRepository = getMongoRepository(Game)

		const userGames = await gamesRepository.findOne({
			where: { user_id }
		})

		if (!userGames) {
			return response.json(apiResponse.data)
		}

		const games = apiResponse.data.map(game => {
			const isAdded = userGames.games.find(data => data.id === game.id)

			return {
				game,
				isAdded: !!isAdded
			}
		})

		return response.json(games)
	} 
}