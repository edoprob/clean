import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
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
