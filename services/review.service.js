const ReviewRepository = require('../repositories/review.repository.js')
const {Review} = require('../models/index.js')

class ReviewService {
  reviewRepository = new ReviewRepository(Review)

}

module.exports = ReviewService