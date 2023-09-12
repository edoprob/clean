import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

describe('SignUp Controller', () => {
  test('Should return 400 if no name has provided', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }

    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email has provided', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        name: 'any_ename',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }

    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password has provided', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        name: 'any_ename',
        email: 'any_email',
        passwordConfirmation: 'any_password'
      }

    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if no passwordConfirmation has provided', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        name: 'any_ename',
        email: 'any_email',
        password: 'any_password'
      }

    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})