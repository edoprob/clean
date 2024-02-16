import type { AccountModel, AddAccount, AddAccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encrypter: Encrypter
  ) {}

  async add (account: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(account.password)

    return await Promise.resolve({
      id: 'abc',
      name: 'abc',
      email: 'abc',
      password: hashedPassword
    })
  }
}
