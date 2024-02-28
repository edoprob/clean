import dotenv from 'dotenv'
import { config } from '../database/knex'
dotenv.config()

const port = process.env.PORT ?? 8000
const enviroment = process.env.NODE_ENV ?? 'development'
console.log(`Enviroment: ${enviroment}`)

export const knex = config(enviroment)
knex.raw('SELECT 1')
  .then(async () => {
    console.log('Successful DB connection')
    const app = (await import('./config/app')).default
    app.listen(port, () => { console.log(`Server running at http://localhost:${port}`) })
  })
  .catch(console.error)
