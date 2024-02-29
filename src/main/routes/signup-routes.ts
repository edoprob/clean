import type { Router } from 'express'
// import { makeSignUpController } from '../factories/signup'
// import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post('/signup', router.post('/signup', (req, res) => {
    res.json({
      id: 1,
      name: 'a',
      email: 'a',
      password: 'a'
    })
  }))
}
/*

  adaptRoute(makeSignUpController())

  router.post('/signup', (req, res) => {
    res.json({
      id: 1,
      name: 'a',
      email: 'a',
      password: 'a'
    })
  })
*/
