import knex from './config/db'

const port = process.env.PORT ?? 8080
knex.raw('SELECT 1')
  .then(async () => {
    console.log('Successful DB connection')
    const app = (await import('./config/app')).default
    app.listen(port, () => { console.log(`Server running at http://localhost:${port}`) })
    // Função de teste de conexão a cada 10 minutos
    setInterval(() => {
      knex.raw('SELECT 1')
        .then(() => {
          console.log('Database connection test successful')
        })
        .catch(err => {
          console.error('Error in database connection:', err)
        // Lógica para enviar e-mail de notificação aqui
        })
    }, 10 * 60 * 1000) // Executa a cada 10 minutos (em milissegundos)
  })
  .catch(console.error)
