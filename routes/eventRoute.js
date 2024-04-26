const express = require('express')
const router = express.Router()
const {createEvent,updateEvent,deleteEvent } = require('../controller/eventController')
router.post('/',createEvent)
router.put('/:id/update', updateEvent)
router.delete('/:id/delete', deleteEvent)
module.exports = router