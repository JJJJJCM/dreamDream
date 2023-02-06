const { where } = require("sequelize");
const { Manager, Customer, Good } = require("../models");

class ManagerRepository {
  constructor() {}

  goodsGet = async (id) => {
    const goodsData = await Good.findOne({ where: { id: id } });
    return goodsData;
  };

  goodsImgModify = async (image, goodsId) => {
    const goodsImgData = await Good.update(
      { image },
      { where: { id: goodsId } }
    );
  };

  goodsEnroll = async (seller, goodsname, explain, image, quantity, price) => {
    const goodsEnrollData = await Good.create({
      seller,
      goodsname,
      explain,
      image,
      quantity,
      price,
    });
  };

  goodsModify = async (
    seller,
    goodsname,
    explain,
    quantity,
    price,
    goodsId
  ) => {
    const goodsModifyData = await Good.update(
      {
        seller,
        goodsname,
        explain,
        quantity,
        price,
      },
      { where: { id: goodsId } }
    );
  };

  createManager = async (nickname, name, password, email) => {
    const createManagerData = await Manager.create({
      nickname,
      name,
      password,
      email,
    });

    return createManagerData;
  };
}

module.exports = ManagerRepository;
