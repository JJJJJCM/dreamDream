const express = require('express');
const router = express.Router();

const CustomerController = require('../controllers/customer.controller.js')
const customerController = new CustomerController()

module.exports = router;