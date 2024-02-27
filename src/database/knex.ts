import { type Knex, knex } from 'knex'
import { test, development, production } from './knexfile'

export const config = (environment: string): Knex => {
  let knexConfig: Knex.Config

  switch (environment) {
    case 'test':
      knexConfig = test
      break

    case 'development':
      knexConfig = development
      break

    case 'production':
      knexConfig = production
      break

    default:
      // Defina um comportamento padrão ou lance um erro se o ambiente não for reconhecido.
      throw new Error(`Ambiente desconhecido na instância do Knex, enviroment: ${environment}`)
  }

  return knex(knexConfig)
}
