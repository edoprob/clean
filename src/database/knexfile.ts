// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

import path from 'path'

export const test = {
  client: 'sqlite3',
  connection: {
    filename: ':memory:'
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.join(__dirname, 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'seeds')
  }
}

export const development = {
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3'
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.join(__dirname, 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'seeds')
  }
}

export const production = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '3306', 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: path.join(__dirname, 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'seeds')
  }
}
