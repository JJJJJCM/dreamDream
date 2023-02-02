const express = require("express");
const router = express.Router();

const LoginController = require("../controllers/login.controller");
const loginController = new LoginController(); 

router.post("/test", loginController.createUser)
router.get("/find", loginController.getUsers)

module.exports = router;