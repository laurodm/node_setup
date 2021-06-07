import { IGetUserList } from '@/usecases/get-user-list/i-get-user-list'
import { ok } from './helpers/http-helper'
import { Controller } from './ports/controller'
import { HttpRequest, HttpResponse } from './ports/http'

export class UsersController implements Controller {
  private readonly getUserList: IGetUserList
  constructor (getUserList: IGetUserList) {
    this.getUserList = getUserList
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const users = await this.getUserList.getList()

    return ok({ users })
  }
}
