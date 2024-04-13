const express = require('express')
const router = express.Router()
const Trip = require('../models/trips.js')
const Item = require('../models/tripItems.js')

// New Route
router.get('/new', (req, res) => {
  res.render('newTrip.ejs')
})

// Create Route
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('received')
})

module.exports = router
