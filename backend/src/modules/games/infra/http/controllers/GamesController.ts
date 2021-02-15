import { Request, Response } from 'express'

import igdbConfig from '@config/igdb'

export default class GamesController {
	
	public async index(request: Request, response: Response): Promise<Response> {
		const { id } = request.params

		const { api } = igdbConfig

		const apiResponse = await api.post(
			'/games',
			`fields *, cover.*, themes.*, genres.*, involved_companies.*, involved_companies.company.*; where id = ${id};`
		)

		return response.json(apiResponse.data[0])
	} 
}