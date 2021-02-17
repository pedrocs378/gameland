import { Router } from 'express'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import UserGamesController from '../controllers/UserGamesController'

const userGamesController = new UserGamesController()

const gamesRouter = Router()

gamesRouter.get('/me', ensureAuthenticated, userGamesController.show)
gamesRouter.get('/:id/me', ensureAuthenticated, userGamesController.index)
gamesRouter.post('/:id/me', ensureAuthenticated, userGamesController.create)
gamesRouter.delete('/:id/me', ensureAuthenticated, userGamesController.delete)


export default gamesRouter