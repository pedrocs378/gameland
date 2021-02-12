import { Router } from 'express'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

import ProfileController from '../controllers/ProfileController'

const profileController = new ProfileController()

const profileRouter = Router()

profileRouter.put('/', ensureAuthenticated ,profileController.update)

export default profileRouter