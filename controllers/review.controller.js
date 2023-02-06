const ReviewService = require('../repositories/review.repository')

class ReviewController {

    reviewService = new ReviewService()

    //상품별 댓글 조회 
    getCommentsOfGoods = async (req, res, next) => {
        const { goods_id } = req.params

        const goodsComments = await this.reviewService.findCommentofGoods(goods_id)

        res.status(200).json({ data: goodsComments })
    }

    //상품별 댓글 작성
    postCommentsOfGoods = async (req, res, next) => {
        const { id: goods_id } = req.params
        const {
            currentUser: { id: customer_id }, //
        } = res.locals
        const { stars, content } = req.body
        const goodsComments = await this.reviewService.createCommentsOfGoods(goods_id, stars, content, customer_id)
        res.status(200).json({ data: goodsComments })
    }

}


// //상품별 댓글 작성
// const postCommentOfGoods = async (req, res) => {
//     const { id: goods_id } = req.params
//     const { stars, content, customer_id } = req.body
//     const postComments = await createCommentsOfGoods(stars, content, goods_id, customer_id)
//     res.json(postComments)

// }

module.exports = ReviewController
