import type { Router } from 'express'
// import { makeSignUpController } from '../factories/signup'
// import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  // DESLIGUEI UMA REGRAM ESLINT AQUI, MAS NAO É RECOMENDADO
  // eslint-disable-next-line @typescript-eslint/no-misused-promises

  // adaptRoute(makeSignUpController())
  router.post('/signup', (req, res) => {
    res.json({
      id: 1,
      name: 'a',
      email: 'a',
      password: 'a'
    })
  })
}
