const Review = require('../models/user')

const ReviewController = {

    // GET all reviews
    getAllReviews : async (req, res) => {
        try {
            const allReviews = await Review.find()
            res.json(allReviews)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // GET review by Id
    getReviewById : async (req, res) => {
        try {
            const { id } = req.params
            const review = await Review.findById(id)
            res.json(review)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // POST create new review
    createNewReview : async (req, res) => {
        try {
            await Review.create(req.body)
            res.json({ message: `A new review was created!` })
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // PUT edit reivew by Id
    editReviewById : async (req, res) => {
        try {
            const { id } = req.params
            await Review.findByIdAndUpdate(id, req.body)
            res.json({ message: `Review was edited successfully!` })
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // DELETE review by Id
    deleteReviewById : async (req, res) => {
        try {
            const { id } = req.params
            await Review.findByIdAndDelete(id)
            res.json({ message: `Successfully deleted review!` })
        } catch (err) {
            res.status(500).json(err)
        }
    }

}

module.exports = ReviewController