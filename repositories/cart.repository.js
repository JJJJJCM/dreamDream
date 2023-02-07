const { Cart } = require('../models')

class CartRepository {

    //장바구니 넣기
    //장바구니 get할때 user값 필요없음
    //user_id 쿠키 jwt verify해서 값을 넘겨줌

    //cart post

    postCart = async (goods_id, quantity, customer_id) => {
        const newCart = await Cart.create({ goods_id, quantity, customer_id })
        return newCart
    }
}

module.exports = CartRepository