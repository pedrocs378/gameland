import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import authConfig from '@config/auth'

interface ITokenPayload {
	iat: number
	exp: number
	sub: string
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
	const authHeader = request.headers.authorization

	if (!authHeader) {
		throw new Error('JWT Token is missing')
	}

	const [_, token] = authHeader.split(' ')

	try {
		const decoded = verify(token, authConfig.jwt.secret)

		const { sub } = decoded as ITokenPayload

		request.user = {
			id: sub
		}

		return next()
	} catch (err) {
		response.json(err)
		throw new Error('Invalid JWT Token')
	}
}