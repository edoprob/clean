import request from 'supertest'
import app from '../config/app'
import { config } from '../../database/knex'

describe('SignUp Routes', () => {
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

  test('Should return accaount on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'edo',
        email: 'edo@mail.com',
        password: '12345678',
        passwordConfirmation: '12345678'
      })
      .expect(200)
  })
})
