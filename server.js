const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`(Listening on Port ${PORT}) Server is standing by, at your service.`)
})