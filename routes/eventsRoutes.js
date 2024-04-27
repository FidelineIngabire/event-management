const express = require('express')
const router = express.Router()
const {newEvent,editEvent} = require('../controller/eventsController')
router.post('/',newEvent)
router.delete('/:id/edit', editEvent)


