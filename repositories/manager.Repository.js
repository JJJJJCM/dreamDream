const { Manager, Customer, Good } = require("../models");

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

  createManager = async (nickname,name,password,email) => {
    const createManagerData = await Manager.create({
        nickname,name,password,email
    }); 

    return createManagerData; 
}; 

}

module.exports = ManagerRepository;
