const { Customer } = require('../models'); 


class LoginRepository {
   
    createUser = async (nickname,name,password,email,point) => {
        const createUserData = await Customer.create({
            nickname,name,password,email,point
        }); 

        return createUserData; 
    }; 


    findAllUser = async() => {
        const customers = await Customer.findAll();
        console.log(customers);
        
        return customers; 
    }; 
}

module.exports = LoginRepository; 