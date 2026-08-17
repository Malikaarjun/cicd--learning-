require('dotenv').config();
const loginData = {
    validUser : {
        username: process.env.TEST_USERNAME,
        password: process.env.TEST_PASSWORD
    }
};

module.exports = {loginData};