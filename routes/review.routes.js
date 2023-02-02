const express = require('express');
const router = express.Router();

const ReviewController = require('../controllers/review.controller')
const reviewController = new ReviewController()

module.exports = router;