import { Response, Request } from 'express'

export type ControllerOperations = (params: { request: Request, response: Response }) => void

export default function controlerFactory (operations: ControllerOperations) {
  return (request: Request, response: Response) => {
    try {
      operations({ request, response })
    } catch (error) {
      console.error(error)
    }
  }
}
