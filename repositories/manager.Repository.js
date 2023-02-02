const { Customer, Good } = require("../models");

class ManagerRepository {
  constructor() {}
  goodsEnroll = async (seller, goodsname, explan, image, quantity, price) => {
    const goodsEnrollData = await Good.create({
      seller,
      goodsname,
      explan,
      image,
      quantity,
      price,
    });
  };

  goodsModify = async (
    seller,
    goodsname,
    explan,
    image,
    quantity,
    price,
    goodsId
  ) => {
    const goodsEnrollData = await Good.update(
      {
        seller,
        goodsname,
        explan,
        image,
        quantity,
        price,
      },
      { where: { id: goodsId } }
    );
  };
}

module.exports = ManagerRepository;
