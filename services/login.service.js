const LoginRepository = require("../repositories/login.repository");


class LoginService {
     
    loginRepository = new LoginRepository(); 

    findAllUser = async (user) => {
        const allUsers = await this.loginRepository.findAllUser();
        console.log({allUsers}); 

        return allUsers.map((user) => {
            return {
                id:user.id,
                nickname: user.nickname,
                name: user.name,
                password: user.password, 
                email: user.email, 
                point: user.point
            };
        });
    };

    createUser = async(nickname,name,password,email,point) => {
        const createUserData = await this.loginRepository.createUser(
            nickname,
            name,
            password,
            email,
            point
        );

        return {
            id: createUserData.null, 
            nickname: createUserData.nickname,
            name: createUserData.name,
            password: createUserData.password, 
            email: createUserData.email, 
            point: createUserData.point 
        };
    };

};

module.exports = LoginService; 