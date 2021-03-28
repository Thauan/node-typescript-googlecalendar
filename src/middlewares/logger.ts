import { Request, Response, NextFunction } from 'express'

const LoggerMiddleware = (request: Request, response: Response, next: NextFunction) => {
  console.log(`Logged  ${request.url}  ${request.method} -- ${new Date()}`)
  next()
}

export default LoggerMiddleware
