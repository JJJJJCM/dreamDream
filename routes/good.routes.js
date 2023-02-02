const express = require('express');
const router = express.Router();

const GoodsController = require('../controllers/good.controller.js')
const goodsController = new GoodsController()

module.exports = router;