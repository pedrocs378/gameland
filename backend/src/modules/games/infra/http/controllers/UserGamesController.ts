import { Request, Response } from 'express'
import { getMongoRepository } from 'typeorm'
import { classToClass } from 'class-transformer'

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
				const [ newGame ] = apiResponse.data

				gamesUser.games.push(newGame)

				await gamesRepository.save(gamesUser)

				return response.json(classToClass(gamesUser))
			} else {
				const [ newGame ] = apiResponse.data

				gamesUser.games = new Array()
				gamesUser.games.push(newGame)

				await gamesRepository.save(gamesUser)

				return response.json(classToClass(gamesUser))
			}
			
		} else {
			const games = apiResponse.data

			const newUserGames = gamesRepository.create({
				user_id,
			})

			newUserGames.games = games

			await gamesRepository.save(newUserGames)

			return response.json(classToClass(newUserGames))
		}

	}

	public async delete(request: Request, response: Response): Promise<Response> {
		const { id: user_id } = request.user
		const { id } = request.params

		const gamesRepository = getMongoRepository(Game)

		const gamesUser = await gamesRepository.findOne({
			where: { user_id }
		})

		if (!gamesUser || !gamesUser.games) {
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

		if (!gamesUser || !gamesUser.games) {
			return response.json([])
		}

		return response.json(classToClass(gamesUser.games))
	}

	public async index(request: Request, response: Response): Promise<Response> {
		const { id: user_id } = request.user
		const { id } = request.params

		const gamesRepository = getMongoRepository(Game)

		const gamesUser = await gamesRepository.findOne({
			where: { user_id }
		})

		if (!gamesUser || !gamesUser.games) {
			return response.json({ found: false })
		}

		const game = gamesUser.games.find(game => game.id === Number(id))

		return response.json({ found: !!game, game: classToClass(game) })
	}
}