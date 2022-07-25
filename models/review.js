const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required:true
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    
})

module.exports = mongoose.model('Review', reviewSchema)