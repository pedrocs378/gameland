import { Request, Response } from 'express'

import igdbConfig from '@config/igdb'

export default class ReleaseGamesController {
	
	public async show(request: Request, response: Response): Promise<Response> {

		const { api } = igdbConfig

		const apiResponse = await api.post(
			'/games',
			'fields name, first_release_date, rating, cover.*; limit 20; sort first_release_date desc; where first_release_date != null & cover != null & first_release_date <= 1612559228 & rating >= 80;'
		)

		return response.json(apiResponse.data)
	} 
}