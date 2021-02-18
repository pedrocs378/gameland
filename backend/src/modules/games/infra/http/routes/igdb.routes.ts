import { Router } from 'express'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

import GamesController from '../controllers/GamesController'
import PopularGamesController from '../controllers/PopularGamesController'
import ReleaseGamesController from '../controllers/ReleaseGamesController'
import NextReleaseGamesController from '../controllers/NextReleasesController'

const gamesController = new GamesController()
const popularGamesController = new PopularGamesController()
const releaseGamesController = new ReleaseGamesController()
const nextReleaseGamesController = new NextReleaseGamesController()

const igdbRouter = Router()

igdbRouter.get('/games/popular', ensureAuthenticated, popularGamesController.show)
igdbRouter.get('/games/releases', ensureAuthenticated, releaseGamesController.show)
igdbRouter.get('/games/next-releases', ensureAuthenticated, nextReleaseGamesController.show)
igdbRouter.get('/games/search', ensureAuthenticated, gamesController.show)
igdbRouter.get('/games/:id', ensureAuthenticated, gamesController.index)


export default igdbRouter