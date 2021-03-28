import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'

const checkJwt = (request: Request, response: Response, next: NextFunction) => {
  const { authorization } = request.headers

  if (!authorization) {
    return response
      .status(401)
      .json({ auth: false, message: 'Token não foi fornecido.' })
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, String(process.env.JWT_SECRET))
    console.log(data)
    next()
  } catch (error) {}
  return response
    .status(401)
    .json({ auth: false, message: 'Falha em autenticar o token.' })
}

export default checkJwt
