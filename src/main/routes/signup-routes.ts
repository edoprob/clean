import type { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { makeSignUpController } from '../factories/signup'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/signup', asyncHandler(adaptRoute(makeSignUpController())))
}
