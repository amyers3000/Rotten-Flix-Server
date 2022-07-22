const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

// -- Middleware -- //
app.use(
    bodyparser.json( { limit: "30mb", extended: true }),
    bodyparser.urlencoded( { limit: "30mb", extended: true }),
    cors()
)

// Routes
app.use('/users', require('./routes/user') )
app.use('/reviews', require('./routes/review') )

// Database Connection & Server Start -- //
mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen(process.env.PORT, () => console.log(`Database Connected : Server running on port: ${process.env.PORT}`)) )
    .catch( (err) => console.log(err.message) )