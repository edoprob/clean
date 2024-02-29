import type { HttpResponse } from '../protocols/http'
import { ServerError } from '../errors'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: {
    success: false,
    data: {},
    error: `${error.name}, ${error.message}`
  }
})

export const serverError = (): HttpResponse => {
  const error = new ServerError()
  return {
    statusCode: 500,
    body: {
      success: false,
      data: {},
      error: `${error.name}, ${error.message}`
    }
  }
}

export const ok = (data: object): HttpResponse => ({
  statusCode: 200,
  body: {
    success: true,
    data,
    error: null
  }
})
