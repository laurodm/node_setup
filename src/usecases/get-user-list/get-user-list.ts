import { UserRepository } from '../ports/user-repository'
import { IGetUserList } from './i-get-user-list'

export class GetUserList implements IGetUserList {
  private readonly repository: UserRepository

  constructor (repository: UserRepository) {
    this.repository = repository
  }

  async getList () {
    return await this.repository.getAll()
  }
}
