const { Customer, Good } = require("../models");
const customer = require("../models/customer");

class ManagerRepository {
  constructor() {}
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

  goodsGet = async (id) => {
    const goodsData = await Good.findOne({ where: { id: id } });
    return goodsData;
  };
}

module.exports = ManagerRepository;
