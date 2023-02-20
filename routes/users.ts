import express, { Request, Response } from 'express'
const usersRouter = express.Router()

/* GET users listing. */
usersRouter.get('/', function (req: Request, res: Response, next) {
  res.send('respond with a resource')
})

export default usersRouter
