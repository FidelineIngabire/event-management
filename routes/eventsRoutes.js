const express = require('express')
const router = express.Router()
const {newEvent} = require('../controller/eventController')
router.post('/',newEvent)

