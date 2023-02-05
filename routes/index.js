const express = require('express');
const router = express.Router();

// const managerRouter = require("./routes/manager.routes");
const loginRouter = require("./login.routes");
router.use('/users',[loginRouter])

module.exports = router;
