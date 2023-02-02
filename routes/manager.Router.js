const express = require("express");
const router = express.Router();
const multer = require("multer");

const ManagerController = require("../controllers/manager.controller.js");
const managerController = new managerController();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/uploads/"); // 파일 경로 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }, //필드네임인 img와 현재 시각을 파일 이름으로 설정했다
});

router.post(
  "/goods/new",
  upload.single("image"),
  managerController.GoodsEnroll
);

router.put("/goods/modify/:goodsId", managerController.GoodsModify);

router.get("/customer/:customerId", managerController.costommerGet);

router.put("/customer/modify", managerController.costommerModify);

router.delete(
  "/users/manager/customer/delete",
  managerController.costommerDelete
);

module.exports = router;
