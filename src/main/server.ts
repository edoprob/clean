import knex from './config/db'

const port = process.env.PORT ?? 8080
knex.raw('SELECT 1')
  .then(async () => {
    console.log('Successful DB connection')
    const app = (await import('./config/app')).default
    app.listen(port, () => { console.log(`Server running at http://localhost:${port}`) })
  })
  .catch(console.error)
