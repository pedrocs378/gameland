import { Request, Response } from 'express'

import igdbConfig from '@config/igdb'

export default class PopularGamesController {
	
	public async show(request: Request, response: Response): Promise<Response> {

		const { api } = igdbConfig

		try {
			const apiResponse = await api.post(
				'/games',
				'fields name, first_release_date, rating, cover.*; limit 20; sort rating desc; where rating != null & cover != null & rating >= 70 & rating_count >= 120 & first_release_date >= 1517858929;'
			)
	
			return response.json(apiResponse.data)
		} catch (err) {
			return response.json(err)
		}
	} 
}