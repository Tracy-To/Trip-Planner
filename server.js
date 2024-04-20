const express = require('express')
const methodOverride = require('method-override')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT

// Heroku link
// https://trip-planner-app-e3a36d01ba96.herokuapp.com/trips

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

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
  res.send('Greetings, Traveler! ^_^')
})

// Run Server
app.listen(PORT, () => {
  console.log(`(Listening on Port ${PORT}) Server is standing by, at your service.`)
})