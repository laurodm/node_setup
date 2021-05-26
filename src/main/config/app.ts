import express, { Express } from 'express'
import setupRoutes from './routes'
import setupMidleware from './middleware'

const app: Express = express()
setupMidleware(app)
setupRoutes(app)
export default app
