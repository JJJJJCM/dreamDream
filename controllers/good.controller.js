const GoodsService = require('../services/good.service.js')

class GoodsController {
  goodsService = new GoodsService()

}

module.exports = GoodsController