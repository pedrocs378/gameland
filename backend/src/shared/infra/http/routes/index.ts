import { Router } from 'express'

import usersRoutes from '@modules/users/infra/http/routes/users.routes'
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes'
import profileRouter from '@modules/users/infra/http/routes/profile.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/profile', profileRouter)

export default routes