import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAuthController } from '../factories/authController'

export default (router: Router): void => {
  router.get('/auth', adaptRoute(makeAuthController()))
}
