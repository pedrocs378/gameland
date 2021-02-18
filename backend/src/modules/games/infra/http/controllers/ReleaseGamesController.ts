import { Request, Response } from 'express'
import { getMongoRepository } from 'typeorm'
import { getUnixTime } from 'date-fns'

import Game from '../../typeorm/schemas/Game'
import { GameObject } from '../../typeorm/schemas/GameObject'

import igdbConfig from '@config/igdb'

export default class ReleaseGamesController {
	
	public async show(request: Request, response: Response): Promise<Response> {
		const { id: user_id } = request.user
		const { limit } = request.query

		const { api } = igdbConfig

		const unixTime = getUnixTime(new Date())

		const apiResponse = await api.post<GameObject[]>(
			'/games',
			`
				fields name, first_release_date, rating, cover.*, themes.*; 
				limit ${limit || '20'}; 
				sort first_release_date desc; 
				where first_release_date != null & themes != null & cover != null & rating_count >= 20 & first_release_date <= ${unixTime} & rating >= 70;
			`
		)

		const gamesRepository = getMongoRepository(Game)

		const userGames = await gamesRepository.findOne({
			where: { user_id }
		})

		if (!userGames) {
			const games = apiResponse.data.map(game => {	
				return {
					game,
					isAdded: false
				}
			})

			return response.json(games)
		}

		const games = apiResponse.data.map(game => {
			if (userGames.games) {
				const isAdded = userGames.games.find(data => data.id === game.id)

				return {
					game,
					isAdded: !!isAdded
				}
			} else {
				return {
					game,
					isAdded: false
				}
			}
		})
	
		return response.json(games)
	} 
}