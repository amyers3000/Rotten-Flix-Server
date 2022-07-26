const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    runningTimeInMinutes: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Movie', movieSchema)