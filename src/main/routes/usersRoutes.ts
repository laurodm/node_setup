import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeUsersController } from '../factories/getUserController'

export default (router: Router): void => {
  router.get('/users', adaptRoute(makeUsersController()))
}
