const LoginService = require("../services/login.service");

class LoginController {
    LoginService = new LoginService();

    getUsers = async (req,res,next)=> {
        const users = await this.LoginService.findAllUser();

        res.status(200).json({data: users});
    }
    
    createUser = async (req,res,next) => {
        const {nickname, name, password,email,point} = req.body
        const createUserData = await this.LoginService.createUser(
            nickname, 
            name, 
            password,
            email,
            point
        );
        res.status(201).json({data:createUserData});
    };


}

module.exports = LoginController; 