import controlerFactory, { ControllerOperations } from '@/main/factories/controller'

const findUsers: ControllerOperations = ({ response }) => {
  response.json({ message: 'hello word!!!!!???' })
}

export default controlerFactory(findUsers)
