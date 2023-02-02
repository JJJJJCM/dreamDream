const express = require("express");
const cookieParser = require('cookie-parser')
require('dotenv').config()

const orderRouter = require('./routes/order.routes')
const goodsRouter = require('./routes/good.routes')
const reviewRouter = require('./routes/review.routes')
const customerRouter = require('./routes/customer.routes')

const app = express();

// socket.io
const http = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);

// 미들웨어
app.set("view engine", "ejs");
app.use('/public', express.static('public'))
app.use(cookieParser());
app.use(express.json())
app.use('/users', [orderRouter, goodsRouter, reviewRouter, customerRouter])

// 메인 페이지
app.get('/', (req, res) => {
    res.render('index.ejs')
})

http.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} 포트가 열렸습니다`)
});