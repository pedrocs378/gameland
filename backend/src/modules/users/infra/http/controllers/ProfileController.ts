import { Request, Response } from 'express'
import { getMongoRepository } from 'typeorm'
import { classToClass } from 'class-transformer'

import User from '../../typeorm/schemas/User'

export default class ProfileController {

	public async update(request: Request, response: Response): Promise<Response> {
		const { 
			name,
			last_name, 
			email,
			description
		} = request.body
		const { id } = request.user

		const usersRepository = getMongoRepository(User)

		const user = await usersRepository.findOne(id)

		if (!user) {
			return response.status(400).send('User not found')
		}

		const userWithSameEmail = await usersRepository.findOne({
			where: { email }
		})

		if (userWithSameEmail && String(userWithSameEmail.id) !== id) {
			return response.status(400).send('User already exists')
		}

		user.name = name
		user.last_name = last_name
		user.email = email
		user.description = description.trim() ? description : null

		await usersRepository.save(user)

		return response.json(classToClass(user))
	}
}