require('dotenv').config();
const loginData = {
    validUser : {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    }
};

module.exports = {loginData};