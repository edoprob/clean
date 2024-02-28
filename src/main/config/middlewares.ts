import type { Express } from 'express'
import { bodyParser } from '../middlawares/body-parser'
import { cors } from '../middlawares/cors'
import { contentType } from '../middlawares/content-type'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
