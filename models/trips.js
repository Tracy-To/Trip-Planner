const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
  name: {type: String, required: true},
  date: {type: String},
  description: {type: String},

  thing1: {type: String},
  date1: {type: String},
  duration1: {type: String},
  cost1: {type: String},
  picture1: {type: String},

  thing2: {type: String},
  date2: {type: String},
  duration2: {type: String},
  cost2: {type: String},
  picture2: {type: String},

  thing3: {type: String},
  date3: {type: String},
  duration3: {type: String},
  cost3: {type: String},
  picture3: {type: String},

  thing4: {type: String},
  date4: {type: String},
  duration4: {type: String},
  cost4: {type: String},
  picture4: {type: String},

  thing5: {type: String},
  date5: {type: String},
  duration5: {type: String},
  cost5: {type: String},
  picture5: {type: String},
})

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip