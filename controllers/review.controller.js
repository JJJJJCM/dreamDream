const ReviewService = require('../services/review.service.js')

class ReviewController {
  reviewService = new ReviewService()

}

module.exports = ReviewController