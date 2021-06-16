import express, { Express, json } from 'express'
import setupRoutes from './routes'

const app: Express = express()

app.use(json())

setupRoutes(app)

export default app
