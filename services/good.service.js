const GoodsRepository = require('../repositories/good.repository.js')
const {Good} = require('../models/index.js')

class GoodsService {
  goodsRepository = new GoodsRepository(Good)

}

module.exports = GoodsService