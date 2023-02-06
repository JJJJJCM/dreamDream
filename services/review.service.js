const ReviewRepository = require('../repositories/review.repository')

class ReviewService {

    reviewRepository = new ReviewRepository()

    //상품별 댓글 조회
    findCommentofGoods = async () => {
        const goods = await this.reviewRepository.findCommentofGoods(goods_id)

        goods.sort((a, b) => {
            return b.createdAt - a.createdAt
        })

        return goods.map(review => {
            return {
                stars: review.stars,
                goodsId: review.goods_id,
                content: review.content,
                createdAt: review.createdAt
            }
        })

    }

    //상품별 댓글 작성
    createCommentsOfGoods = async (stars, content, goods_id, customer_id) => {
        const createReviews = await this.reviewRepository.createCommentsOfGoods(
            stars, content, goods_id, customer_id
        )
        return {
            stars: createReviews.stars,
            content: createReviews.content,
            goods_id: createReviews.goods_id,
            customer_id: createReviews.null //실험 이게 아니면 createReviews.customer_id
        }
    }
}


module.exports = ReviewService