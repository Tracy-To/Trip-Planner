const mongoose = require('mongoose')

const tripItemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  date: {type: String},
  time: {type: String},
  cost: {type: String},
  picture: {data: Buffer, contentType: String}
})

const Item = mongoose.model('Item', tripItemSchema)

module.exports = Item