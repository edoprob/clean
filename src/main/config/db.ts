import dotenv from 'dotenv'
import { config } from '../../database/knex'
dotenv.config()

const enviroment = process.env.ENVIROMENT ?? 'development'
console.log(`Enviroment: ${enviroment}`)

export default config(enviroment)
