import type { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import type { AddAccountModel } from '../../../../domain/usecases/add-account'
import type { AccountModel } from '../../../../domain/models/account'

export class AccountKnexRepository implements AddAccountRepository {
  // colocar o construtor aqui para injetar se o knex é 'test' ou 'process.env.NODE_ENV'
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    // corrigir o retorno da promisse mockada... colocar o knex real aqui com o construtor em development no env
    return await Promise.resolve({
      id: '123',
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })
  }
}
