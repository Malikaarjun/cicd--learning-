require('dotenv').config();
const loginData = {
    validUser : {
        username: process.env.TEST_USERNAME,
        password: process.env.TEST_PASSWORD
    },

    invalidUser: {
        username: 'wronguser',
        password: process.env.TEST_PASSWORD
    },

    invalidPasswordUser: {
        username: process.env.TEST_USERNAME,
        password: 'wrongpassword'
    }
};

module.exports = {loginData};