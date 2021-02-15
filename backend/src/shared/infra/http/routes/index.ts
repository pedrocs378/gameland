import { Router } from 'express'

import usersRouter from '@modules/users/infra/http/routes/users.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import profileRouter from '@modules/users/infra/http/routes/profile.routes'
import gamesRouter from '@modules/games/infra/http/routes/games.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/profile', profileRouter)

routes.use('/games', gamesRouter)

export default routes