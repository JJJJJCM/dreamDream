const express = require('express');
const router = express.Router();

const managerRouter = require("./manager.routes");
const loginRouter = require("./login.routes");
const cartRouter = require('./cart.routes');


router.use('/users', [loginRouter])
router.use('/management', [managerRouter])
router.use('/cart', [cartRouter])

module.exports = router;

