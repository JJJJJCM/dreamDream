const CartRepository = require('../repositories/cart.repository')

class CartService {

    cartRepository = new CartRepository()

    postCart = async (goods_id, quantity, customer_id) => {
        const createCart = await this.cartRepository.postCart(
            goods_id, quantity, customer_id
        )
        return createCart
    }

}


module.exports = CartService