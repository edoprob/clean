import express from 'express'
import setupMiddlawares from './middlewares'

const app = express()
setupMiddlawares(app)
export default app
