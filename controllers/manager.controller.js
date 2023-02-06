const ManagerService = require("../services/manager.service");

class ManagerController {
  managerService = new ManagerService();
  // 상품 추가
  goodsEnroll = async (req, res, next) => {
    try {
      const { seller, goodsname, explain, quantity, price } = req.body;
      const image = req.file.path;
      const goodsEnrollData = await this.managerService.goodsEnroll(
        seller,
        goodsname,
        explain,
        image,
        quantity,
        price
      );
      res.status(200).json({ message: "등록 성공" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "등록 실패" });
    }
  };

  // 상품 정보 가져오기
  goodsGet = async (req, res, next) => {
    try {
      const { id } = req.params;
      const goodsData = await this.managerService.goodsGet(id);
      res.render("management-goods-detail.ejs", { data: goodsData });
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "요청 실패" });
    }
  };

  // 상품 수정
  goodsModify = async (req, res) => {
    try {
      const { seller, goodsname, explain, quantity, price } = req.body;
      const goodsId = req.params;
      console.log(req.body, goodsId.id);
      const goodsModifyData = await this.managerService.goodsModify(
        seller,
        goodsname,
        explain,
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

  //매니저 등록 
  createManager = async (req,res,next) => {
    const {nickname, name, password,email} = req.body
    const createManagerData = await this.managerService.createManager(
        nickname, 
        name, 
        password,
        email
    );
    res.status(201).json({data:createManagerData});
  };


}

module.exports = ManagerController;
