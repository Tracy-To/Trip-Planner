const express = require('express')
const router = express.Router()
const Trip = require('../models/trips.js')

///--- Trips ---///

// Index Route
router.get('/', async (req, res) => {
  const foundTrips = await Trip.find({})
  res.render('index.ejs', {
    trips: foundTrips
  })
})

// New Route
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// Show Route
router.get('/:id', async (req, res) => {
  const foundTripSchedule = await Trip.findById(req.params.id)
  res.render('show.ejs', {
    trip: foundTripSchedule
  })
})

// Create Route
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const newTrip = await Trip.create(req.body)
    res.redirect('/trips')
  } catch (err) {
    console.log(err)
    res.status(500).send(error)
  }
})

// Edit Route
router.get('/:id/edit', async (req, res) => {
  const foundTrip = await Trip.findById(req.params.id)
  res.render('edit.ejs', {
    trip: foundTrip
  })
})

// Put Route
router.put('/:id', async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {new: true})
    console.log(updatedTrip)
    res.redirect('/trips/' + updatedTrip.id)
  } catch (err) {
    console.log("ERROR IN EDIT ROUTE: ", err)
    res.status(500).send(err)
  }
})

// Delete Route
router.delete('/:id', async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id)
    console.log(`Deleted trip: ${trip}`)
    res.redirect('/trips')
  } catch (err) {
    console.log("ERROR ON DELETE REQUEST: ", err)
    res.status(500).send(err)
  }
})

module.exports = router
