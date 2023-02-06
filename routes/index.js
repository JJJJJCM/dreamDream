const express = require('express');
const router = express.Router();

const managerRouter = require("./manager.routes");
const loginRouter = require("./login.routes");

router.use('/users',[loginRouter])
router.use('/management',[managerRouter])



module.exports = router;

