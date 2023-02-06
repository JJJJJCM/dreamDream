const { createCart } = require('../repositories/cart.repository')

//장바구니 post
const basketPost = async (req, res) => {
    const { id: goods_id } = req.params  //id로 받아온 애를 goods_id로 쓴다
    let { quantity } = req.body
    quantity = Number(quantity)

    try {
        const newbasket = await createCart({ goods_id, quantity })
        res.json(newbasket)
    } catch (err) {
        res.status(500).json({ message: err.message })

    }




}

module.exports = {
    basketPost
}