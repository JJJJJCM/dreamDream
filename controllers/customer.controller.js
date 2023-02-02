const CustomerService = require('../services/customer.service.js')

class CustomerController {
  customerService = new CustomerService()

}

module.exports = CustomerController