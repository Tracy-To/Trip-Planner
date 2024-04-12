const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

const tripsController = require('./controllers/trips.js')
app.use('/trips', tripsController)

app.listen(PORT, () => {
  console.log(`(Listening on Port ${PORT}) Server is standing by, at your service.`)
})