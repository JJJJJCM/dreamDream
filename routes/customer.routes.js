const express = require("express");
const router = express.Router();

const {auth_middleware} = require("../middleware/auth.middleware");


// 유저 페이지 
router.get("/users", auth_middleware, (req,res)=>{
    try{
        return res.render("mainpage");
    } catch(error){
        console.log(error.message);
    }
});


module.exports = router;