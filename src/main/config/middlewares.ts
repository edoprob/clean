import type { Express } from 'express'
import { bodyParser, cors, contentType } from '../middlawares'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
