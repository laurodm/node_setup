import { AuthController } from '@/adapters/presentation/controllers/auth-controller'

export const makeAuthController = () => {
  return new AuthController()
}
