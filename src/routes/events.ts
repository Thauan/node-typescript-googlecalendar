import express from 'express'
import { Index } from '../controllers/events'

const routerEvents = express.Router()

routerEvents.get('/', Index)

export default routerEvents
