import type { Body } from './response-body'

export interface HttpResponse {
  statusCode: number
  body: Body
}

export interface HttpRequest {
  body?: any
}
