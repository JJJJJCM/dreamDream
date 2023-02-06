const { Cart } = require('../models')


//장바구니 넣기
//장바구니 get할때 user값 필요없음
//user_id 쿠키 jwt verify해서 값을 넘겨줌


//image, quantity, price가 가져오려는 goods_id에 이미 있는데 여기도 또??
//해줘야되는건지

//cart post
createCart = async (goods_id, image, quantity, price) => {
    const newCart = await Cart.create({ goods_id, image, quantity, price })
    return newCart
}

module.exports = {
    createCart
}