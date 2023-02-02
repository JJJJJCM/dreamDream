const OrderRepository = require('../repositories/order.repository.js')
const {Order} = require('../models/index.js')

class OrderService {
  orderRepository = new OrderRepository(Order)

}

module.exports = OrderService