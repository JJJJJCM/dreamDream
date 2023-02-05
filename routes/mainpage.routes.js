const express = require("express");
const router = express.Router();

const {auth_middleware} = require("../middleware/auth.middleware");
const {manager_middleware} = require("../middleware/manager.middleware");

// 메인 페이지 
router.get("/", (req,res)=>{
 // 만약 로그인..ing 이라면 

 if(res.locals.user && res.locals.user.type === "customer" ){  
    return res.redirect("/users")
 }
 if(res.locals.user && res.locals.user.type === "manager" ){
    return res.redirect('/manager')
 }

 res.render("index.ejs", { components: "login",user: res.locals.user})
});

//로그인 
//유저 로그인 팝업창 
router.get("/login",(req,res)=>{
    if(res.locals.user && res.locals.user.type === "customer" ){  
        return res.redirect("/users")
     }
     if(res.locals.user && res.locals.user.type === "manager" ){
        return res.redirect('/manager')
     }
    
     res.render("login.ejs", { components: "login",user: res.locals.user})
});
//관리자 로그인 팝업창 
router.get("/managerlogin",(req,res)=>{
     if(res.locals.user && res.locals.user.type === "customer" ){  
        return res.redirect("/users")
     }
     if(res.locals.user && res.locals.user.type === "manager" ){
        return res.redirect('/manager')
     }
    
     res.render("managementlogin.ejs", { components: "login",user: res.locals.user})
});


router.get("/users",auth_middleware, (req,res)=>{
    if(!res.locals.user){
        return res.render('index.ejs',{components: 'managerpage', user: res.locals.user});
    }
    res.render('userpage.ejs',{components: 'managerpage', user: res.locals.user});
})

router.get("/management", manager_middleware, (req,res)=>{
    if(!res.locals.user){
        return res.render('index.ejs',{components: 'managerpage', user: res.locals.user});
    }
    res.render('managementpage.ejs')
})

module.exports = router;



