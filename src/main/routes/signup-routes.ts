import type { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeSignUpController } from '../factories/signup'

export default (router: Router): void => {
  router.post('/signup', asyncHandler(adaptRoute(makeSignUpController())))
}
