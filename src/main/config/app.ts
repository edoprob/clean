import express from 'express'
import setupMiddlawares from './middlewares'
import setupRoutes from './routes'

const app = express()
setupMiddlawares(app)
setupRoutes(app)
export default app
