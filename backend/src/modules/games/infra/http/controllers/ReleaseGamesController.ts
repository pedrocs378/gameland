import { Request, Response } from 'express'
import { getMongoRepository } from 'typeorm'

import Game from '../../typeorm/schemas/Game'
import { GameObject } from '../../typeorm/schemas/GameObject'

import igdbConfig from '@config/igdb'

export default class ReleaseGamesController {
	
	public async show(request: Request, response: Response): Promise<Response> {
		const { id: user_id } = request.user

		const { api } = igdbConfig

		const apiResponse = await api.post<GameObject[]>(
			'/games',
			'fields name, first_release_date, rating, cover.*; limit 20; sort first_release_date desc; where first_release_date != null & cover != null & first_release_date <= 1612559228 & rating >= 80;'
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