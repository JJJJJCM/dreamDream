const { findCommentofGoods } = require('../repositories/review.repository')

const commentsOfGoods = async (req, res) => {
    const { goods_id } = req.params

    try {
        const goods = await findCommentofGoods(goods_id)
        const goodsComments = await goods.getReviews()

        res.json(goodsComments)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { commentsOfGoods }