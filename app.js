const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const managerRouter = require("./routes/manager.routes");
const loginRouter = require("./routes/login.routes");
const app = express();

// socket.io
const http = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);

// 미들웨어
app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use(cookieParser());
app.use(express.json());

app.use(express.static("./assets"));
app.use("/assets", express.static("assets"));

//라우터
app.use("/login", loginRouter);
app.use("/management", managerRouter);

// 메인 페이지
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// 로그인 페이지
// 고객 로그인
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
// 관리자 로그인
app.get("/manager", (req, res) => {
  res.render("managementlogin.ejs");
});

// 고객 페이지
app.get("/users", (req, res) => {
  res.render("mainpage.ejs");
});

http.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} 포트가 열렸습니다`);
});
