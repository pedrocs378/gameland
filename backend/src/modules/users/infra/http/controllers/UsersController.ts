import { Request, Response } from 'express'
import { getMongoRepository } from 'typeorm'
import { classToClass } from 'class-transformer'
import { hash } from 'bcryptjs'

import User from '../../typeorm/schemas/User'

export default class UsersController {

	public async create(request: Request, response: Response): Promise<Response> {
		const { 
			name,
			last_name, 
			email,
			password
		} = request.body

		const userRepository = getMongoRepository(User)

		const isUserExists = await userRepository.findOne({
			where: { email }
		})

		if (isUserExists) {
			return response.status(400).send('Email address already used.')
		}

		const hashedPassword = await hash(password, 10)

		const user = userRepository.create({
			name,
			last_name, 
			email,
			password: hashedPassword
		})

		await userRepository.save(user)

		return response.json(classToClass(user))
	}
}