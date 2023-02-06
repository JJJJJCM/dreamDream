const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
// const managerRouter = require("./routes/manager.routes");
// const loginRouter = require("./routes/login.routes");
const app = express();
const router = require('./routes');
const mainRouter = require('./routes/mainpage.routes');

// socket.io
const http = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);

const goodsRouter = require('./routes/good.routes')
const reviewsRouter = require('./routes/review.routes')
const cartRouter = require('./routes/cart.routes')

// 미들웨어
// app.use("/public", express.static("public"));
app.use(cookieParser());
app.use(express.json())

// app.use(express.static("./assets"));
// app.use("/assets", express.static("assets"));
app.use(express.urlencoded({ extended: false }));
app.use(mainRouter);
app.use('/api', router)
app.use('/goods', goodsRouter)
app.use('/reviews', reviewsRouter)
app.use('/cart', cartRouter)


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

//라우터 
// app.use("/login", loginRouter);
// app.use("/management", managerRouter);


// 메인 페이지
// app.get("/", (req, res) => {
//   res.render("index.ejs");
// });


// 로그인 페이지 
// 고객 로그인 
// app.get("/login",(req,res)=>{
//   res.render("login.ejs"); 
// });


// 관리자 로그인 
// app.get("/manager",(req,res)=>{
//   res.render("managementlogin.ejs"); 
// });


//고객 페이지 
// app.get("/users",(req,res)=>{
//   res.render("mainpage.ejs")
// })




// 상품상세페이지
app.get("/goodsdetail/:id", (req, res) => {

    res.render("goodsdetail.ejs");
});

//장바구니 페이지





http.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} 포트가 열렸습니다`)
});
