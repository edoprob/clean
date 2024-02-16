import { BcryptAdapter } from './bcrypt-adapter'
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({
  hash (): string {
    return 'hashed_value'
  }
}))

const makeSut = (): BcryptAdapter => {
  const salt = 12
  return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter ', () => {
  test('Should call Bcrypt with correct values', async () => {
    const sut = makeSut()
    const hashspy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashspy).toHaveBeenCalledWith('any_value', 12)
  })
})
