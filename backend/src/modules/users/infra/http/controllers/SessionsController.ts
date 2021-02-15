import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { classToClass } from "class-transformer";

import authConfig from '@config/auth'

import User from "../../typeorm/schemas/User";

export default class SessionsController {
	public async create(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body

		const usersRepository = getMongoRepository(User)

		const user = await usersRepository.findOne({
			where: { email }
		})

		if (!user) {
			return response.status(401).send('Incorrect email/password combination.')
		}

		const passwordMatched = await compare(password, user.password)

		if (!passwordMatched) {
			return response.status(401).send('Incorrect email/password combination.')	
		}

		const { expiresIn, secret } = authConfig.jwt

		const token = sign({}, secret, {
			expiresIn,
			subject: String(user.id)
		})

		return response.json({ user: classToClass(user), token })
	}
}