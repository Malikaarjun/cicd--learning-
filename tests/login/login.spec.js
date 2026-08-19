const { test, expect } = require('../../fixtures/test');
//const { LoginPage } = require('../../pages/LoginPage');
const { loginData } = require('../../test-data/loginData');
 
test('Verify Login Page', async ({ loginPage }) => {
 
    //const loginPage = new LoginPage(page);
 
    await loginPage.open();
    await loginPage.enterUsername(loginData.validUser.username);
    await loginPage.enterPassword(loginData.validUser.password);
    await loginPage.clickLogin();
    await loginPage.verifyTitle();
 
    //await expect(page).toHaveTitle('Welcome Page');
});

test('Invalid Username Login', async ({ loginPage }) => {

    //const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.invalidlogin(loginData.invalidUser.username,
        loginData.invalidUser.password
    );

    await expect(page.locator('#error')).toHaveText('Invalid username or password');
});

test('Invalid Password Login', async ({ loginPage }) => {

    //const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.invalidlogin(loginData.invalidPasswordUser.username,
        loginData.invalidPasswordUser.password
    );

    await expect(page.locator('#error')).toHaveText('Invalid username or password');
});
 
