import { AccountKnexRepository } from './account'
import { config } from '../../../../database/knex'

describe('Account Knex Repository', () => {
  const knex = config('test')

  beforeAll(async () => {
    await knex.migrate.latest()
  })

  beforeEach(async () => {
    await knex('users').del()
  })

  afterAll(async () => {
    await knex.destroy()
  })

  const makeSut = (): AccountKnexRepository => {
    const sut = new AccountKnexRepository(knex)
    return sut
  }

  test('Should return an account if success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })

    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email@mail.com')
    expect(account.password).toBe('any_password')
  })

  test('Should return throw if Knex throws', async () => {
    const sut = makeSut()
    jest.spyOn(sut, 'add').mockReturnValueOnce(Promise.reject(new Error('Database connection error')))
    const promise = sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })

    await expect(promise).rejects.toThrow('Database connection error')
  })
})
