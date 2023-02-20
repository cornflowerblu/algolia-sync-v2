import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { Client } from 'pg'
import fs from 'fs'

require('dotenv').config()

import healthCheckRouter from './routes/health'
import syncRouter from './routes/sync'

export const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/health', healthCheckRouter)
app.use('/sync', syncRouter)

export const pgClient = new Client({
  host: process.env.POSTGRES_HOST || 'db',
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'postgres',
  // ssl: {
  //   rejectUnauthorized: false,
  //   ca: fs.readFileSync('ca-certificate.crt').toString(),
  // },
})

pgClient.connect().then(() => console.log('Database Connected'))

module.exports = app
