import type { Encrypter } from '../../data/protocols/encryter'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements Encrypter {
  constructor (
    private readonly salt: number
  ) {}

  async encrypt (data: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(data, this.salt)
    return hashedPassword
  }
}
