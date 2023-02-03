const ManagerService = require('../services/manager.service');
const { User } = require('../models');

class ManagerController {
  managerService = new ManagerService();
  // 상품 추가
  goodsEnroll = async (req, res) => {
    try{ const {seller,goodsname,explan,image,quantity,price} = req.body;
        
    }catch(err){
        res.status(400).send({errMassage:"오류"})
    }
  }
  // 상품 수정
  goodsModify() {}
  // 고객 정보 페이지 들어가기
  costommerGet() {}
  // 고객 정보 수정
  costommerModify() {}
  // 고객 정보 삭제
  costommerDelete() {}
}

module.exports = ManagerController;
