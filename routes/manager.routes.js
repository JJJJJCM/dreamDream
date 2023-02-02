const express = require('express');
const router = express.Router();

const ManagerController = require('../controllers/manager.controller.js');
const managerController = new managerController();

router.post('/goods/new',managerController.GoodsEnroll);
router.put('/goods/modify/:goodsId',managerController.GoodsModify);
router.get('/customer/:customerId',managerController.costommerGet);
router.put('/customer/modify',managerController.costommerModify);
router.delete("/users/manager/customer/delete", managerController.costommerDelete);

module.exports = router;
