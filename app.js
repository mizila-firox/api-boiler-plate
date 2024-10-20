const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const routes = require('./src/routes/routes') // Routes file
const errorMiddleware = require('./src/middlewares/errorMiddleware') // Error middleware

const app = express() // Initialize Express app

// Apply global middlewares
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({
    message: 'Ready to go 🍀📦 ',
  })
})

// Define routes
app.use('/api', routes) // Routes working correctly

// Custom error handling middleware
app.use(errorMiddleware) // Handle errors centrally

module.exports = app
