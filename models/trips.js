const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
  name: {type: String, required: true},
})

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip