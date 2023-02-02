const CustomerRepository = require('../repositories/customer.repository.js')
const {Customer} = require('../models/index.js')

class CustomerService {
  customerRepository = new CustomerRepository(Customer)

}

module.exports = CustomerService