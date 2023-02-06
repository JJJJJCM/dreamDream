const ManagerRepository = require("../repositories/manager.Repository");

class ManagerService {
  managerRepository = new ManagerRepository();

  goodsGet = async (id) => {
    const goodsData = await this.managerRepository.goodsGet(id);
    return goodsData;
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

  goodsImgModify = async (image, goodsId) => {
    const goodsImgData = await this.managerRepository.goodsImgModify(
      image,
      goodsId
    );
  };

  // 관리자 등록
  createManager = async (nickname, name, password, email) => {
    const createManagerData = await this.managerRepository.createManager(
      nickname,
      name,
      password,
      email
    );

    return {
      id: createManagerData.null,
      nickname: createManagerData.nickname,
      name: createManagerData.name,
      password: createManagerData.password,
      email: createManagerData.email,
    };
  };
}

module.exports = ManagerService;
