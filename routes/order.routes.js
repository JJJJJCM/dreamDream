const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order.controller.js')
const orderController = new OrderController()

module.exports = router;