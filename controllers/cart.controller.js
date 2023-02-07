const CartService = require('../services/cart.service')

class CartController {

    cartService = new CartService()

    //장바구니 post
    //중복으로 들어가면 중복이라고 메세지를 띄워주던지
    //수량 +1 하던지
    basketPost = async (req, res) => {
        const { id: goods_id } = req.params  //id로 받아온 애를 goods_id로 쓴다
        let { quantity } = req.body
        quantity = Number(quantity)
        console.log(quantity)
        if (!res.locals.user) {
            return res.status(500).json({ message: "로그인 하세요" })
        }

        const { id: customer_id } = res.locals.user

        try {
            const newbasket = await this.cartService.postCart(
                goods_id,
                quantity,
                customer_id
            )
            res.status(200).json({ data: newbasket })

        } catch (err) {
            res.status(400).json({ message: err.message })
        }

    }


}

module.exports = CartController