//장바구니를 누르면 cartmodel 값이 추가되는?
//구매하기는?...누르면 그 상품 정보가 cart에 저장되어야하는지?
//결제하기를 눌러야 order테이블에 저장되는거

const express = require('express')
const { basketPost } = require('../controllers/cart.controller')


const router = express.Router()

router.post('/:id', basketPost)

module.exports = router
