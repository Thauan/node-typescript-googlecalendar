import express from 'express'
import { Login, Register } from '../controllers/auth'

const routerAuth = express.Router()

routerAuth.get('/login', Login)
routerAuth.get('/register', Register)

export default routerAuth
