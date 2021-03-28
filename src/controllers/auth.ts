import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import User from '../models/user.model'

export async function Login (request: Request, response: Response) {
  // Check if username and password are set
  const { email, password } = request.body

  if (!(email && password)) {
    response.status(400).json({ message: 'Email ou senha não informados!' })
  }

  const user = await User.findOne({
    where: { email: email }
  })

  // Sing JWT, valid for 1 hour
  const token = jwt.sign(
    { id: user?.id, email: user?.email },
    String(process.env.JWT_SECRET),
    { expiresIn: '1h' }
  )

  console.log(token)
}

export function Register (request: Request, response: Response) {
  return response.json({ message: 'Register' })
}
