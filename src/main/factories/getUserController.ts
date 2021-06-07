import { UsersController } from '@/adapters/presentation/controllers/users-controller'
import { LocalstorageUserRepository } from '@/external/repositories/localstorage/localstorage-user-repository'
import { GetUserList } from '@/usecases/get-user-list/get-user-list'

export const makeUsersController = () => {
  const UserRepository = new LocalstorageUserRepository()
  const userList = new GetUserList(UserRepository)
  return new UsersController(userList)
}
