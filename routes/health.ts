import express, { Request, Response } from 'express'
const healthCheckRouter = express.Router()

/* GET home page. */
healthCheckRouter.get('/health', (req: Request, res: Response) => {
  res.json({
    timestamp: Date.now(),
    status: res.statusCode,
  })
})

export default healthCheckRouter