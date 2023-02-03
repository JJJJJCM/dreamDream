const ManagerService = require("../services/manager.service");
const { Customer } = require("../models/customer.js");

class ManagerController {
  managerService = new ManagerService();
  // 상품 추가
  goodsEnroll = async (req, res) => {
    try {
      const { seller, goodsname, explan, quantity, price, image } = req.body;
      // const image = req.file.path;
      const goodsEnrollData = await this.managerService.goodsEnroll(
        seller,
        goodsname,
        explan,
        image,
        quantity,
        price
      );
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "요청 실패" });
    }
  };
  // 상품 수정
  goodsModify = async (req, res) => {
    try {
      const { seller, goodsname, explan, quantity, price } = req.body;
      const goodsId = req.params;
      const image = req.file.path;
      const goodsModifyData = await this.managerService.goodsModify(
        seller,
        goodsname,
        explan,
        image,
        quantity,
        price,
        goodsId
      );
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "요청 실패" });
    }
  };

  // 고객 정보 페이지 들어가기
  customerGet = (req, res) => {
    try {
      const { id: customerId } = req.params;
      console.log(customerId);
      // const customerData = Customer.findOne({
      //   where: { id: customerId },
      // });
      // const customerData = {
      //   customerId,
      //   nickname: "bob",
      //   name: "유상우",
      //   email: "rookas99@naver.com",
      //   point: 50000,
      // };
      // console.log(customerData);
      res.render("management-customer", { customerId });
    } catch (err) {
      console.log(err.massage);
      res.status(400).json({ errorMessage: "조회 실패" });
    }
  };
  // 고객 정보 수정
  customerModify = () => {};
  // 고객 정보 삭제
  customerDelete = () => {};
}

module.exports = ManagerController;
