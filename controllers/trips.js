const express = require('express')
const router = express.Router()

// Index Route
router.get('/new', (req, res) => {
  res.send('Greetings ^_^')
})

module.exports = router
