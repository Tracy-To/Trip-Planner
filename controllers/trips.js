const express = require('express')
const router = express.Router()
const Trip = require('../models/trips.js')
const Item = require('../models/tripItems.js')

// Index Route
router.get('/new', (req, res) => {
  res.send('Greetings ^_^')
})

module.exports = router
