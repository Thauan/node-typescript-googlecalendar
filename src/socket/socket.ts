import express, { Request, Response } from 'express'
import * as SocketIO from 'socket.io'
const path = require('path')

require('dotenv').config()

const app = express()

const http = require('http').Server(app)

const io = require('socket.io')(http)

app.get('/', function (req: Request, res: Response) {
  res.sendFile(path.resolve('src/socket/' + 'index.html'))
})

const port = process.env.WEBSOCKETPORT

// Whenever someone connects this gets executed
io.on('connection', (socket: SocketIO.Socket) => {
  console.log(`new connection with id: ${socket.id}`)

  socket.on('chat message', (message: any) => {
    console.log('chat message:', message)

    io.emit('chat message', message)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(port, function () {
  console.log(`Websocket is listening to port ${process.env.WEBSOCKETPORT}`)
  console.log(`Websocket: ws://localhost:${process.env.WEBSOCKETPORT}`)
})
