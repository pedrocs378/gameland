import { Request, Response } from 'express'
import { getMongoRepository } from 'typeorm'

import Game from '../../typeorm/schemas/Game'

import igdbConfig from '@config/igdb'

export default class UserGamesController {

	public async create(request: Request, response: Response): Promise<Response> {
		const { id: user_id } = request.user
		const { id } = request.params

		const { api } = igdbConfig

		const apiResponse = await api.post(
			'/games',
			`fields *, cover.*, platforms.*; where id = ${id};`
		)

		const gamesRepository = getMongoRepository(Game)

		const gamesUser = await gamesRepository.findOne({
			where: { user_id }
		})

		if (gamesUser) {
			
			if (gamesUser.games) {
				const isExists = gamesUser.games.find(game => game.id === Number(id))

				if (isExists) {
					return response.status(400).json('Game already inserted')
				}

				const [data] = apiResponse.data
				
				const newGame = {
					id: data.id,
					cover_url: `http://images.igdb.com/igdb/image/upload/t_cover_big_2x/${data.cover.image_id}.jpg`,
					platforms: data.platforms
				}

				gamesUser.games.push(newGame)

				await gamesRepository.save(gamesUser)

				return response.json(gamesUser)
			} else {
				const [data] = apiResponse.data
				const newGame = {
					id: data.id,
					cover_url: `http://images.igdb.com/igdb/image/upload/t_cover_big_2x/${data.cover.image_id}.jpg`,
					platforms: data.platforms
				}

				gamesUser.games = new Array()
				gamesUser.games.push(newGame)

				await gamesRepository.save(gamesUser)

				return response.json(gamesUser)
			}
			
		} else {
			const newUserGames = gamesRepository.create({
				user_id
			})

			const [data] = apiResponse.data
			const newGame = {
				id: data.id,
				cover_url: `http://images.igdb.com/igdb/image/upload/t_cover_big_2x/${data.cover.image_id}.jpg`,
				platforms: data.platforms
			}

			newUserGames.games = new Array()
			newUserGames.games.push(newGame)

			await gamesRepository.save(newUserGames)

			return response.json(newUserGames)
		}

	}

	public async delete(request: Request, response: Response): Promise<Response> {
		const { id: user_id } = request.user
		const { id } = request.params

		const gamesRepository = getMongoRepository(Game)

		const gamesUser = await gamesRepository.findOne({
			where: { user_id }
		})

		if (!gamesUser) {
			return response.status(400).send('User not found')
		}

		const isExists = gamesUser.games.find(game => game.id === Number(id))

		if (!isExists) {
			return response.status(400).send('Game not found')
		}

		const newGames = gamesUser.games.filter(game => game.id != Number(id))

		gamesUser.games = newGames

		await gamesRepository.save(gamesUser)

		return response.json(gamesUser)
	}

	public async show(request: Request, response: Response): Promise<Response> {
		const { id: user_id } = request.user

		const gamesRepository = getMongoRepository(Game)

		const gamesUser = await gamesRepository.findOne({
			where: { user_id }
		})

		if (!gamesUser) {
			return response.status(400).send('User not found')
		}

		return response.json(gamesUser.games)
	}

	public async index(request: Request, response: Response): Promise<Response> {
		const { id: user_id } = request.user
		const { id } = request.params

		const gamesRepository = getMongoRepository(Game)

		const gamesUser = await gamesRepository.findOne({
			where: { user_id }
		})

		if (!gamesUser) {
			return response.status(400).send('User not found')
		}

		const game = gamesUser.games.find(game => game.id === Number(id))

		return response.json({ found: !!game, game })
	}
}