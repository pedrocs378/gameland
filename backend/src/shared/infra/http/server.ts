import 'dotenv/config'

import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

import routes from './routes'

import '@shared/infra/typeorm'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {

	return response.status(500).json({
		status: 'error',
		message: 'Internal server error'
	})
})

app.listen('3333', () => {
	console.log('Server is running...')
})