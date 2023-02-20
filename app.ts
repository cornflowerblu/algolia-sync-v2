import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

import healthCheckRouter from './routes/health'
import syncRouter from './routes/sync'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/health', healthCheckRouter)
app.use('/sync', syncRouter)

module.exports = app
