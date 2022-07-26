const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    rating: {
        type: Number,
        maximum: 5,
        minimum: 1,
        required:true
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    }
})

module.exports = mongoose.model('Rating', ratingSchema)