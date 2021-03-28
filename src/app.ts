import express from 'express'
import cors from 'cors'
import * as bodyParser from 'body-parser'
import LoggerMiddleware from './middlewares/logger'
// import checkJwt from './middlewares/checkJwt'
import routerEvents from './routes/events'
import routerAuth from './routes/auth'

const app = express()

app.use(LoggerMiddleware)
// app.use(checkJwt)

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.use('/events', routerEvents)
app.use('/auth', routerAuth)

export default app
