import { AuthController } from '@/presentation/controllers/auth-controller'

export const makeAuthController = () => {
  return new AuthController()
}
