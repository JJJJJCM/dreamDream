const express = require("express");
const router = express.Router();
const multer = require("multer");

const ManagerController = require("../controllers/manager.controller.js");
const managerController = new ManagerController();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/uploads/"); // 파일 경로 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }, //필드네임인 img와 현재 시각을 파일 이름으로 설정했다
});
const upload = multer({ storage: storage });

// APIs
router.post(
  "/goods/new",
  upload.single("image"),
  managerController.goodsEnroll
);

router.put(
  "/goods/modify/:goodsId",
  upload.single("image"),
  managerController.goodsModify
);

// router.get("/", (req, res) => {
//   res.render("management.ejs");
// });

router.get("/goods", (req, res) => {
  res.render("management-goods.ejs");
});

router.get("/customer/:id", managerController.customerGet);
router.put("/customer/modify", managerController.customerModify);

router.delete(
  "/users/manager/customer/delete",
  managerController.customerDelete
);

// 매니저 등록 
router.post("/managerRegister",managerController.createManager)




module.exports = router;
