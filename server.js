const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT

// Middleware
app.use(express.urlencoded({extended:true}))

// Controllers
const tripsController = require('./controllers/trips.js')
app.use('/trips', tripsController)

// Connect to Mongo
mongoose.connect(mongoURI)
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + 'error with mongo connection'))
db.on('connected', () => console.log('mongo is connected'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Index Route 
app.get('/', (req, res) => {
  res.send('Greetings, Human! ^_^')
})

// Run Server
app.listen(PORT, () => {
  console.log(`(Listening on Port ${PORT}) Server is standing by, at your service.`)
})