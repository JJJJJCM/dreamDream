//장바구니를 누르면 cartmodel 값이 추가되는?
//구매하기는?...누르면 그 상품 정보가 cart에 저장되어야하는지?
//결제하기를 눌러야 order테이블에 저장되는거

const express = require('express')
const router = express.Router()
const CartController = require('../controllers/cart.controller')
const cartcontroller = new CartController()
const { auth_middleware } = require('../middleware/auth.middleware')

router.post('/:id', auth_middleware, cartcontroller.basketPost)

module.exports = router
