import { Router } from 'express'
import findUsers from '../controllers/users/findUsers'

export default (router: Router): void => {
  router.get('/users', findUsers)
}
