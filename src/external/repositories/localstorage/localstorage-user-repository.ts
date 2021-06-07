import { UserRepository } from '@/usecases/ports/user-repository'
import users from './db/users.json'

export class LocalstorageUserRepository implements UserRepository {
  getAll () {
    return new Promise((resolve, reject) => {
      resolve(users)
    })
  }
}
