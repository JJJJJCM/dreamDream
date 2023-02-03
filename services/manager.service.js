const ManagerRepository = require("../repositories/manager.Repository");

class ManagerService {
  managerRepository = new ManagerRepository();

  goodsEnroll = async (
    seller,
    goodsname,
    explain,
    image,
    quantity,
    price,
    goodsId
  ) => {
    const goodsEnrollData = await this.managerRepository.goodsEnroll(
      seller,
      goodsname,
      explain,
      image,
      quantity,
      price,
      goodsId
    );
  };
}

module.exports = ManagerService;
