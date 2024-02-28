import type { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import type { AddAccountModel } from '../../../../domain/usecases/add-account'
import type { AccountModel } from '../../../../domain/models/account'
import type { Knex } from 'knex'

export class AccountKnexRepository implements AddAccountRepository {
  constructor (private readonly knex: Knex) {}

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const result = await this.knex('users').insert(accountData)
    const account = { ...accountData, id: result[0] }
    console.log(account)
    return account
  }
}
