import { ok } from './helpers/http-helper'
import { Controller } from './ports/Controller'
import { HttpRequest, HttpResponse } from './ports/http'

export class AuthController implements Controller {
  async handle (request: HttpRequest): Promise<HttpResponse> {
    return ok({ status: 'ok!!' })
  }
}
