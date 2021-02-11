import { Request, Response } from 'express'

export default class UsersController {

	public async create(request: Request, response: Response): Promise<Response> {
		const { name, email } = request.body

		return response.json({ name, email })
	}
}