const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const connection = require('./db/connection')
const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

// Initialize Middleware
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Initialize Middleware

// Init Router
app.use('/api', AppRouter)
//Init Router
app.listen(3001, async () => {
  try {
    await connection
    console.log('Database Connected')
    console.log(`App listening on port ${PORT}!`)
  } catch (error) {
    throw new Error('Error with connection')
  }
})
