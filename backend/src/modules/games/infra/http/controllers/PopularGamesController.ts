import { Request, Response } from 'express'
import { getMongoRepository } from 'typeorm'

import Game from '../../typeorm/schemas/Game'
import { GameObject } from '../../typeorm/schemas/GameObject'

import igdbConfig from '@config/igdb'

export default class PopularGamesController {
	
	public async show(request: Request, response: Response): Promise<Response> {
		const { id: user_id } = request.user

		const { api } = igdbConfig

		try {
			const apiResponse = await api.post<GameObject[]>(
				'/games',
				'fields name, first_release_date, rating, cover.*; limit 20; sort rating desc; where rating != null & cover != null & rating >= 70 & rating_count >= 120 & first_release_date >= 1517858929;'
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
		} catch (err) {
			return response.json(err)
		}
	} 
}