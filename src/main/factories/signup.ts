import type { Controller } from '../../presentation/protocols/controller'
import { LogControllerDecorator } from '../decorators/log'

import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountKnexRepository } from '../../infra/db/knex/account-repository/account'
import knex from '../config/db'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountKnexRepository = new AccountKnexRepository(knex)
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountKnexRepository)

  const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount)
  return new LogControllerDecorator(signUpController)
}
