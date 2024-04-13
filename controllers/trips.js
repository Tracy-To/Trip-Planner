const express = require('express')
const router = express.Router()
const Trip = require('../models/trips.js')
const Item = require('../models/tripItems.js')

// Index Route
router.get('/', async (req, res) => {
  const foundTrips = await Trip.find({})
  res.render('index.ejs', {
    trips: foundTrips
  })
})

// New Route
router.get('/new', (req, res) => {
  res.render('newTrip.ejs')
})

// Create Route
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const newTrip = await Trip.create(req.body)
    res.send(newTrip)
  } catch (err) {
    console.log(err)
    res.status(500).send(error)
  }
})

module.exports = router
