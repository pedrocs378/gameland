import { Router } from 'express'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import GamesController from '../controllers/GamesController'
import PopularGamesController from '../controllers/PopularGamesController'
import ReleaseGamesController from '../controllers/ReleaseGamesController'
import UserGamesController from '../controllers/UserGamesController'

const gamesController = new GamesController()
const userGamesController = new UserGamesController()
const popularGamesController = new PopularGamesController()
const releaseGamesController = new ReleaseGamesController()

const gamesRouter = Router()

gamesRouter.get('/me', ensureAuthenticated, userGamesController.show)
gamesRouter.get('/:id/me', ensureAuthenticated, userGamesController.index)
gamesRouter.post('/:id/me', ensureAuthenticated, userGamesController.create)
gamesRouter.delete('/:id/me', ensureAuthenticated, userGamesController.delete)

gamesRouter.get('/popular', ensureAuthenticated, popularGamesController.show)
gamesRouter.get('/releases', ensureAuthenticated, releaseGamesController.show)
gamesRouter.get('/:id', ensureAuthenticated, gamesController.index)


export default gamesRouter