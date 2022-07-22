const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// -- Middleware -- //
app.use(
    cors()
)

// Database Connection & Server Start -- //
mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen(process.env.PORT, () => console.log(`Database Connected : Server running on port: ${process.env.PORT}`)) )
    .catch( (err) => console.log(err.message) )