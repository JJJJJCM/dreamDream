const ManagerRepository = require("../repositories/manager.Repository");

class ManagerService {
  managerRepository = new ManagerRepository();

  goodsGet = async (id) => {
    const goodsData = await this.managerRepository.goodsGet(id);
    return goodsData;
  };

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
  goodsModify = async (
    seller,
    goodsname,
    explain,
    quantity,
    price,
    goodsId
  ) => {
    const goodsModifyData = await this.managerRepository.goodsModify(
      seller,
      goodsname,
      explain,
      quantity,
      price,
      goodsId
    );
  };
}

module.exports = ManagerService;
