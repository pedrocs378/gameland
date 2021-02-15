import { Router } from 'express'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import GamesController from '../controllers/GamesController'
import PopularGamesController from '../controllers/PopularGamesController'
import ReleaseGamesController from '../controllers/ReleaseGamesController'

const gamesController = new GamesController()
const popularGamesController = new PopularGamesController()
const releaseGamesController = new ReleaseGamesController()

const gamesRouter = Router()

gamesRouter.get('/popular', ensureAuthenticated, popularGamesController.show)
gamesRouter.get('/releases', ensureAuthenticated, releaseGamesController.show)

gamesRouter.get('/:id', ensureAuthenticated, gamesController.index)

export default gamesRouter