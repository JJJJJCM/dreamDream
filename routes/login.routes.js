const express = require("express");
const router = express.Router();

const LoginController = require("../controllers/login.controller");
const loginController = new LoginController(); 

// 임시 테스트 유저 등록 및 찾기 
router.post("/test", loginController.createUser)
router.get("/find", loginController.getUsers)

// 로그인 기능
router.post("/auth", loginController.login)
router.get("/logout",loginController.logout)

module.exports = router;